import { ShopColection } from '../db/models/shop.js';

export const getAllShops = () => ShopColection.find();

export const getShopById = (id) => ShopColection.findById(id);
