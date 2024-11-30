/**
 * Interface to define the structure of a Product object
 * - Ensures type safety and consistency for product-related data
 */
export interface IProduct {
  name: string;
  brand: string;
  price: number;
  category: string[];
  description: string;
  quantity: number;
  inStock: boolean;
}
