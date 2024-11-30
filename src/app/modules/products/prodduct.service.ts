// Importing the `IProduct` interface and `Product` model
import { IProduct } from './product.interface'; // Interface for type-safe product data
import Product from './product.model'; // Mongoose model for interacting with the Product collection

/**
 * Service function to create a new product in the database
 * @param payload - An object of type `IProduct` containing product details
 * @returns The created product document
 */
const createProduct = async (payload: IProduct) => {
  const result = await Product.create(payload); // Use Mongoose to create a new product in the database
  return result; // Return the created product document
};

/**
 * Exporting product service object
 * - Provides functions related to product management
 */
export const productService = {
  createProduct, // Expose the createProduct function for use in other parts of the application
};
