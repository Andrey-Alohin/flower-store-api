import { model, Schema, Types } from 'mongoose';

const FlowerSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    type: {
      type: String,
      enum: ['flower', 'bouquet'],
      required: true,
      default: 'flower',
    },
    description: { type: String, required: true },
    shopId: { type: Types.ObjectId, ref: 'Shop', required: true },
    price: { type: Number, required: true },
    photo: {
      type: [String],
      required: true,
    },
    countAvailable: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    ingredients: {
      type: [
        {
          flowerId: { type: Types.ObjectId, ref: 'Flower', required: true },
          quantity: { type: Number, required: true, min: 1 },
        },
      ],
      required: function () {
        return this.type === 'bouquet';
      },
    },
  },
  { timestamps: true },
);

export const Flower = model('Flower', FlowerSchema);
