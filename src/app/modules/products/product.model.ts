// Import required modules from Mongoose
import { model, Schema } from 'mongoose';

/**
 * Define the schema for the `Product` model
 * - Represents the structure of product data stored in the database
 */
const productSchema = new Schema(
  {
    name: {
      type: String, // Product name as a string
      required: true, // Field is mandatory
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: [String], // Array of strings representing product categories
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number, // Field is mandatory
    },
    inStock: {
      type: Boolean, // Indicates if the product is in stock
      default: true, // Defaults to `true` if not provided
    },
  },
  { timestamps: true },
); // Adds `createdAt` and `updatedAt` fields automatically

/**
 * Create the `Product` model
 * - The model will be used to interact with the `products` collection in the database
 */
const Product = model('Product', productSchema);

// Export the model for use in other parts of the application
export default Product;
