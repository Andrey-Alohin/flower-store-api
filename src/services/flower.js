import { Flower } from '../db/models/flower.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllFlowers = async ({ page, perPage, sortBy, sortOrder }) => {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const flowerQuery = Flower.find();

  const totalQuery = flowerQuery.clone();

  const [total, data] = await Promise.all([
    totalQuery.countDocuments(),
    flowerQuery
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(perPage),
  ]);

  const paginationData = calculatePaginationData(total, page, perPage);

  return { data, ...paginationData };
};

export const getAllShopFlowers = async ({
  shopId,
  page,
  perPage,
  sortBy,
  sortOrder,
}) => {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const flowerQuery = Flower.find({ shopId });

  const totalQuery = flowerQuery.clone();

  const [total, data] = await Promise.all([
    totalQuery.countDocuments,
    flowerQuery
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(perPage),
  ]);

  const paginationData = calculatePaginationData(total, page, perPage);

  return { data, ...paginationData };
};
