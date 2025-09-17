import { Shop } from '../db/models/shop.js';
import { getAllFlowers, getAllShopFlowers } from '../services/flower.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { throwIfNull } from '../utils/throwIfNull.js';

const shopNotFound = throwIfNull(404, 'Shop not found!');

export const getAllFlowersController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const data = await getAllFlowers({
    page,
    perPage,
    sortBy,
    sortOrder,
  });
  return res.status(200).json({
    status: 200,
    message: 'Successfully find flowers!',
    data,
  });
};

export const getShopFlowersController = async (req, res, next) => {
  const { shopId } = req.params;
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  shopNotFound(await Shop.findById(shopId));

  const data = await getAllShopFlowers({
    shopId,
    page,
    perPage,
    sortBy,
    sortOrder,
  });
  return res.status(200).json({
    status: 200,
    message: `Successfully find flowers from shopID ${shopId}`,
    data,
  });
};
