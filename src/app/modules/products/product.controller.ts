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
    const data = await productService.createProduct(body);

    // Send a success response back to the client
    res.send({
      success: true,
      message: 'Product created successfully', // Message indicating successful creation
      data, // The newly created product
    });
  } catch (error) {
    // Handle errors and send a failure response
    res.send({
      success: false,
      message: 'Something went wrong', // Message indicating failure
      error: {
        message: (error as Error).message,
        stack:
          process.env.NODE_ENV === 'development'
            ? (error as Error).stack
            : undefined, // Include stack trace only in development
      }, // Include the error details for debugging
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await productService.getProducts();

    res.send({
      success: true,
      message: 'Products get successfully',
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const data = await productService.getSingleProduct(productId);

    res.send({
      success: true,
      message: 'Product get successfully',
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const body = req.body;
    const data = await productService.updateProduct(productId, body);

    res.send({
      success: true,
      message: 'Product updated successfully',
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deleteProduct(productId);

    res.send({
      success: true,
      message: 'Product deleted successfully',
      data: {},
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

/**
 * Exporting the controller object
 * - Contains all the functions for handling product-related HTTP requests
 */
export const productController = {
  createProduct, // Function to handle product creation
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
