import { model, Schema } from 'mongoose';

const ShopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: { type: String, required: true },
  phone: { type: String },
  logo: { type: String, required: true },
});

export const Shop = model('Shop', ShopSchema);
