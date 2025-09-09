import { Schema } from 'mongoose';

const ShopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: { type: String, required: true },
  phone: { type: String },
});
