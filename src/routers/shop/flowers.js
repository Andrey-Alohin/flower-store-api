import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { getShopFlowersController } from '../../controllers/flowers.js';

const router = Router({ mergeParams: true });

router.get('/', ctrlWrapper(getShopFlowersController));

export default router;
