import Joi from 'joi';
import mongoose from 'mongoose';

const objectId = () =>
  Joi.string().custom((value, helpers) => {
    if (!mongoose.isValidObjectId(value)) {
      return helpers.error('any.invalid');
    }
    return value;
  }, 'ObjectId validation');

export const createOrderSchema = Joi.object({
  shopId: objectId().required().messages({
    'any.invalid': 'shopId must be a valid MongoDB ObjectId',
    'any.required': 'shopId is required',
  }),
  userInfo: Joi.object({
    name: Joi.string().min(2).max(20).required(),
    phoneNumber: Joi.string().min(10).max(14).required(),
    email: Joi.string().email().required(),
  }).required(),
  deliveryAddress: Joi.string().min(10).max(50).required(),
  order: Joi.array()
    .items(
      Joi.object({
        id: objectId().required().messages({
          'any.invalid': 'FlowerId must be a valid MongoDB ObjectId',
          'any.required': 'FlowerId is required',
        }),
        count: Joi.number().min(1).max(101).required(),
      }),
    )
    .min(1),
  orderComment: Joi.string().min(10).max(100),
});
