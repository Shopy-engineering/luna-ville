
/**
 * Types for the shopping cart functionality
 */

/**
 * Product interface representing rug products
 */
export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  image: string;
  category: string[];
  material: string;
  size: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

/**
 * CartItem interface representing a product in the cart
 */
export interface CartItem {
  product: Product;
  quantity: number;
}

/**
 * Order interface for processing orders
 */
export interface Order {
  id?: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  status: OrderStatus;
  createdAt?: string;
  userId?: string;
}

/**
 * Shipping address for orders
 */
export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

/**
 * Possible order statuses
 */
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
