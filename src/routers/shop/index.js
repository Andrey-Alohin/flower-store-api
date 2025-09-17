import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import flowerRouter from './flowers.js';
import {
  getAllShopesController,
  getShopByIdController,
} from '../../controllers/shops.js';
import { isValidID } from '../../utils/isValidID.js';

const router = Router();

const checkShopID = isValidID('shopId');

router.get('/', ctrlWrapper(getAllShopesController));

router.get('/:shopId', checkShopID, ctrlWrapper(getShopByIdController));

router.use('/:shopId/flowers', checkShopID, flowerRouter);

export default router;
