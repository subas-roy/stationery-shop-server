import { Document, Types } from 'mongoose';

/**
 * Interface representing an Order
 */
export interface IOrder extends Document {
  email: string; // The email address of the customer
  product: Types.ObjectId; // The ID of the product being ordered (reference to the Product model)
  quantity: number;
  totalPrice: number; // The total price for the order (product price * quantity)
}
