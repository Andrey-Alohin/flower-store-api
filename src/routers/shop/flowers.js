import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { getStoreFlowersController } from '../../controllers/flowers.js';

const router = Router({ mergeParams: true });

router.get('/', ctrlWrapper(getStoreFlowersController));

export default router;
