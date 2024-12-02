import { Request, Response } from 'express';
import Product from '../products/product.model';
import Order from './order.model';
import { orderService } from './order.service';

/**
 * Controller to handle the creation of an order.
 */
const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, product: productId, quantity, totalPrice } = req.body;

    // Fetch the product from the database
    const product = await Product.findById(productId);

    if (!product) {
      res.status(404).send({
        success: false,
        message: 'Product not found',
      });
      return; // Ensure early exit
    }

    // Check if there is enough stock
    if (product.quantity! < quantity) {
      res.status(400).send({
        success: false,
        message: `Insufficient stock. Only ${product.quantity} items available`,
      });
      return; // Ensure early exit
    }

    // Calculate the total price
    const calculatedTotalPrice = product.price * quantity;
    if (calculatedTotalPrice !== totalPrice) {
      res.status(400).send({
        success: false,
        message: `Invalid total price. Expected ${calculatedTotalPrice}`,
      });
      return; // Ensure early exit
    }

    // Create the order
    const order = await Order.create({
      email,
      product: productId,
      quantity,
      totalPrice,
    });

    // Reduce the product quantity and update inStock status
    product.quantity! -= quantity;
    product.inStock = product.quantity! > 0;
    await product.save();

    // Send success response
    res.status(201).send({
      success: true,
      message: 'Order placed successfully',
      order,
    });
  } catch (error) {
    // Ensure error is handled properly
    if (error instanceof Error) {
      res.status(500).send({
        success: false,
        message: 'An error occurred while creating the order',
        error: error.message,
      });
    } else {
      res.status(500).send({
        success: false,
        message: 'An unknown error occurred',
      });
    }
  }
};

/**
 * Controller to calculate total revenue from all orders.
 */
const calculateRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch total revenue from the service
    const totalRevenue = await orderService.calculateRevenue();

    // Send success response
    res.status(200).send({
      success: true,
      message: 'Revenue calculated successfully',
      data: { totalRevenue },
    });
  } catch (error) {
    // Ensure error is handled properly
    if (error instanceof Error) {
      res.status(500).send({
        success: false,
        message: 'An error occurred while calculating revenue',
        error: error.message,
      });
    } else {
      res.status(500).send({
        success: false,
        message: 'An unknown error occurred',
      });
    }
  }
};

// Export controllers
export const orderController = {
  createOrder,
  calculateRevenue,
};
