import { model, Schema, Types } from 'mongoose';

const OrderSchema = new Schema(
  {
    shopId: { type: Types.ObjectId, ref: 'Shop', required: true },
    userInfo: {
      name: { type: String, required: true, trim: true },
      phoneNumber: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
    },
    orderStatus: {
      type: String,
      enum: ['new', 'paid', 'delivered', 'canceled', 'completed'],
      default: 'new',
    },
    deliveryAddress: {
      type: String,
      required: true,
      trim: true,
    },
    order: {
      type: [
        {
          id: { type: Types.ObjectId, ref: 'Flower', required: true },
          count: { type: Number, required: true, min: 1, max: 101 },
          price: { type: Number, required: true },
        },
      ],
      validate: {
        validator: (val) => val.length > 0,
        message: '{PATH} must have at least one item',
      },
    },
    orderComment: { type: String, default: null, trim: true },
    orderTotal: { type: Number, required: true },
  },
  { timestamps: true },
);

OrderSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    ret.createdAt = ret.createdAt.toISOString();
    ret.updatedAt = ret.updatedAt.toISOString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export const OrdersColection = model('Order', OrderSchema);
