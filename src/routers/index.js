import { Router } from 'express';
import flowersRouter from './flowers.js';
import ordersRouter from './orders.js';

const router = Router();

router.use('/flowers', flowersRouter);

router.use('/orders', ordersRouter);

export default router;
