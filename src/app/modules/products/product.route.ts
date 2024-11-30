// Import required modules
import { Router } from 'express'; // Router module for defining routes
import { productController } from './product.controller'; // Controller for handling product-related requests

// Initialize a router instance
const productRouter = Router();

/**
 * Route to create a new product
 * - Method: POST
 * - Endpoint: '/'
 * - Controller: productController.createProduct
 * - Description: Handles requests to create a new product in the database
 */
productRouter.post('/', productController.createProduct);

// Export the router for use in the main application
export default productRouter;
