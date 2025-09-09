import { Flower } from '../db/models/flower';

export const getAllFlowers = async ({ page, perPage, sortBy, sortOrder }) => {
  const skip = page > 0 ? page - 1 * perPage : 0;
  return await Flower.find().skip(skip).limit(perPage);
};
