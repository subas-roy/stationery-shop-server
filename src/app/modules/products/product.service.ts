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

const getProducts = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProduct = async (id: string, data: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, {
    new: true, // get updated data
  });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

/**
 * Exporting product service object
 * - Provides functions related to product management
 */
export const productService = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  // Expose the createProduct function for use in other parts of the application
};
