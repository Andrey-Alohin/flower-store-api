import { model, Schema, Types } from 'mongoose';

const FlowerSchema = new Schema(
  {
    name: { type: String, required: true },
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
    inStock: { type: Boolean, default: true, required: true },
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

FlowerSchema.pre('save', function (next) {
  this.inStock = this.countAvailable > 0;
  next();
});

FlowerSchema.pre('findOneAndUpdate', function (next) {
  this.inStock = this.countAvailable > 0;
  next();
});

export const FlowersColection = model('Flower', FlowerSchema);
