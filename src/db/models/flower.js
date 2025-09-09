import { model, Schema, Types } from 'mongoose';

const FlowerSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    shopId: { type: Types.ObjectId, ref: 'Shop', required: true },
    price: { type: Number, required: true },
    photo: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export const Flower = model('Flower', FlowerSchema);
