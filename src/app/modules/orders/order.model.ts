import { model, Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
            value,
          );
        },
        message: '{VALUE} is not a valid email',
      },
    },
    product: {
      type: Schema.Types.ObjectId, // Reference to a product in the database
      ref: 'Product',
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price must be at least 0'],
    },
  },
  { timestamps: true },
);

// Create the model
const Order = model('Order', orderSchema);

export default Order;
