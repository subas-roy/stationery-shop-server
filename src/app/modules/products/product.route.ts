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
productRouter.get('/:productId', productController.getSingleProduct);
productRouter.get('/', productController.getProducts);
productRouter.post('/', productController.createProduct);
productRouter.put('/:productId', productController.updateProduct);
productRouter.delete('/:productId', productController.deleteProduct);

// Export the router for use in the main application
export default productRouter;
