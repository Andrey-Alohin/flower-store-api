import { model, Schema } from 'mongoose';

const FlowerSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    photo: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export const Flower = model('Flower', FlowerSchema);
