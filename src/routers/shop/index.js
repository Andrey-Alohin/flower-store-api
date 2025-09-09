import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import flowerRouter from './flowers.js';

const router = Router();

router.get('/', ctrlWrapper(getAllStores));

router.get('/:shopId', ctrlWrapper(getShopById));

router.get('/:shopId/flowers', flowerRouter);
