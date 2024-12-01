import { IOrder } from './order.interface';
import Order from './order.model';

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload);
  return result;
};

/**
 * Service to calculate total revenue from all orders
 */
const calculateRevenue = async () => {
  // Perform aggregation to calculate total revenue
  const revenueData = await Order.aggregate([
    {
      $lookup: {
        from: 'products', // Name of the Product collection
        localField: 'product', // Field in the Order collection
        foreignField: '_id', // Field in the Product collection
        as: 'productDetails', // Resulting field for matched Product data
      },
    },
    {
      $unwind: '$productDetails', // Flatten the productDetails array
    },
    {
      $group: {
        _id: null, // Group all documents together
        totalRevenue: {
          $sum: {
            $multiply: ['$productDetails.price', '$quantity'], // Calculate revenue per order
          },
        },
      },
    },
  ]);

  // Return total revenue or default to 0 if no orders exist
  return revenueData[0]?.totalRevenue || 0;
};

export const orderService = {
  createOrder,
  calculateRevenue,
};
