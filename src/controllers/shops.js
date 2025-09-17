import { getAllShops, getShopById } from '../services/shop.js';
import { throwIfNull } from '../utils/throwIfNull.js';

const shopNotFound = throwIfNull(404, 'Shop not found');

export const getAllShopesController = async (req, res, next) => {
  const data = await getAllShops();
  res.status(200).json({
    status: 200,
    message: 'Get all stores',
    data,
  });
};

export const getShopByIdController = async (req, res, next) => {
  const { shopId } = req.params;

  const data = shopNotFound(await getShopById(shopId));

  return res.status(200).json({
    status: 200,
    message: `Get store by id ${shopId}!`,
    data,
  });
};
