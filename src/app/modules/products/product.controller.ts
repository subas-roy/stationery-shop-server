// Importing required types and services
import { Request, Response } from 'express'; // Express request and response types
import { productService } from './product.service'; // Product service to handle business logic

/**
 * Controller function to handle the creation of a new product
 * @param req - Express Request object containing the product data in the request body
 * @param res - Express Response object used to send the response back to the client
 */
const createProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body; // Extract product data from the request body

    // Call the service to create a new product and store the result
    const result = await productService.createProduct(body);

    // Send a success response back to the client
    res.send({
      success: true,
      message: 'Product created successfully', // Message indicating successful creation
      result, // The newly created product
    });
  } catch (error) {
    // Handle errors and send a failure response
    res.send({
      success: false,
      message: 'Something went wrong', // Message indicating failure
      error, // Include the error details for debugging
    });
  }
};

/**
 * Exporting the controller object
 * - Contains all the functions for handling product-related HTTP requests
 */
export const productController = {
  createProduct, // Function to handle product creation
};
