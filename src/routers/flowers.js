import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllFlowersController } from '../controllers/flowers.js';

const router = Router();

router.get('/', ctrlWrapper(getAllFlowersController));

export default router;
