import { getAllFlowers } from '../services/flower.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getAllFlowersController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const data = await getAllFlowers({
    page,
    perPage,
    sortBy,
    sortOrder,
  });

  if (!data)
    return res.status(404).json({
      status: 404,
      message: 'Flowers not found!',
    });
};

export const getStoreFlowersController = async (req, res, next) => {
  const { shopId } = req.params;
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const data = await getAllFlowers({
    shopId,
    page,
    perPage,
    sortBy,
    sortOrder,
  });

  if (!data)
    return res.status(404).json({
      status: 404,
      message: 'Flowers not found!',
    });
};
