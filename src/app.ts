// Importing required modules
import express, { Application, Request, Response } from 'express'; // Express framework and TypeScript types
import cors from 'cors'; // Cross-Origin Resource Sharing middleware
import productRouter from './app/modules/products/product.route'; // Router for product-related endpoints
import orderRouter from './app/modules/orders/order.route';

// Initialize the Express application
const app: Application = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); // Parses incoming JSON payloads and makes them available on req.body

// Middleware to enable Cross-Origin Resource Sharing
app.use(cors()); // Allows the server to handle requests from different origins (useful for APIs accessed from different domains)

/**
 * Middleware for product routes
 * - Mounts the productRouter at the `/api/products` endpoint
 * - Handles all product-related routes, e.g., POST, GET, PUT, DELETE for products
 */
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

/**
 * Define a basic route for the root URL ('/')
 * Method: GET
 * Description: Responds with a numeric value
 */
app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Welcome to stationery shop management API service' });
});

// Export the application object for use in other files
export default app;
