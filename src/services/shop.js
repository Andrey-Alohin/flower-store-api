import { Shop } from '../db/models/shop.js';

export const getAllShops = () => Shop.find();

export const getShopById = (id) => Shop.findById(id);
