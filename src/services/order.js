import mongoose from 'mongoose';
import { FlowersColection } from '../db/models/flower.js';
import createHttpError from 'http-errors';
import { OrdersColection } from '../db/models/order.js';

export const createNewOrder = async (newOrder) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const { order } = newOrder;
    for (const item of order) {
      const updatedFlower = await FlowersColection.findOneAndUpdate(
        { _id: item.id, countAvailable: { $gte: item.count } },
        { $inc: { countAvailable: -item.count } },
        { session, new: true },
      );
      if (!updatedFlower || updatedFlower.shopId !== newOrder.shopId) {
        throw createHttpError(
          400,
          `Flower with id ${item.id}, not enough stock or wrong shop`,
          {
            id: item.id,
          },
        );
      }
      item.price = updatedFlower.price;
    }

    const confirmOrder = await OrdersColection.create([newOrder], { session });

    const populatedOrder = OrdersColection.findById(
      confirmOrder[0]._id,
    ).populate({
      path: 'order.id',
      select: 'name photo',
    });

    await session.commitTransaction();

    return populatedOrder;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};
