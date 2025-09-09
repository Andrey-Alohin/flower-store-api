import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import flowerRouter from './flowers.js';
import {
  getAllShopesController,
  getShopByIdController,
} from '../../controllers/shops.js';

const router = Router();

router.get('/', ctrlWrapper(getAllShopesController));

router.get('/:shopId', ctrlWrapper(getShopByIdController));

router.get('/:shopId/flowers', flowerRouter);
