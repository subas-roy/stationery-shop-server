import { Request, Response } from 'express';
import Product from '../products/product.model';
import Order from './order.model';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, product: productId, quantity, totalPrice } = req.body;

    // fetch the product from the database
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send({
        success: false,
        message: 'Product not found',
      });
    }

    // Check if there is enough stock
    if (product.quantity < quantity) {
      return res.status(400).send({
        success: false,
        message: `Insufficient stock. Only ${product.quantity} items available`,
      });
    }

    // Calculate the total price
    const calculatedTotalprice = product.price * quantity;
    if (calculatedTotalprice !== totalPrice) {
      return res.status(400).send({
        success: false,
        message: `Invalid total price. Expected ${calculatedTotalprice}`,
      });
    }

    // create order
    const order = await Order.create({
      email,
      product: productId,
      quantity,
      totalPrice,
    });

    // Reduce the product quantity and update inStock status
    product.quantity -= quantity;
    product.inStock = product.quantity > 0;
    await product.save();

    res.status(201).send({
      success: true,
      message: 'Order placed successfully',
      order,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: 'An error occurred while creating the order',
      error: error.message,
    });
  }
};

/**
 * Controller to calculate total revenue from all orders
 */
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    // Fetch total revenue from the service
    const totalRevenue = await orderService.calculateRevenue();

    // Send success response
    res.status(200).send({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error) {
    // Send error response
    res.status(500).send({
      message: 'An error occurred while calculating revenue',
      status: false,
      error: error.message,
    });
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
