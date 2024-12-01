import { Router } from 'express';
import { orderController } from './order.controller';

const orderRouter = Router();

/**
 * POST /api/orders
 * Description: Creates a new order
 */
orderRouter.post('/', orderController.createOrder);

/**
 * GET /api/orders/revenue
 * Description: Calculates total revenue from all orders
 */
orderRouter.get('/revenue', orderController.calculateRevenue);

export default orderRouter;
