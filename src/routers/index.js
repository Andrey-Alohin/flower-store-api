import { Router } from 'express';
import flowersRouter from './flowers.js';
import ordersRouter from './orders.js';
import shopsRouter from './shop/index.js';

const router = Router();

router.use('/flowers', flowersRouter);

router.use('/shops', shopsRouter);
router.use('/orders', ordersRouter);

export default router;
