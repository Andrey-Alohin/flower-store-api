import { createNewOrder } from '../services/order.js';

export const createOrderController = async (req, res, next) => {
  const { body } = req;
  const result = await createNewOrder(body);

  res.status(200).json({
    status: 200,
    message: 'New order created',
    data: result,
  });
};
