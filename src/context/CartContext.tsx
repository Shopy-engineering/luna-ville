
import React, { createContext, useState, useContext, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { CartItem, Product } from "@/types/cart";

/**
 * Cart context interface
 */
interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
  isInCart: (productId: number) => boolean;
}

/**
 * Create cart context with default values
 */
const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getTotalItems: () => 0,
  getSubtotal: () => 0,
  getTax: () => 0,
  getTotal: () => 0,
  isInCart: () => false,
});

/**
 * Tax rate as a constant (can be moved to environment variables)
 */
const TAX_RATE = 0.07; // 7% tax rate

/**
 * Cart provider component to manage cart state
 */
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  // Initialize cart from localStorage or empty array
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  /**
   * Add item to cart
   * @param product - Product to add
   * @param quantity - Quantity to add (default: 1)
   */
  const addItem = (product: Product, quantity = 1) => {
    setItems((prevItems) => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        toast({
          title: "Cart updated",
          description: `${product.name} quantity updated to ${updatedItems[existingItemIndex].quantity}`,
        });
        return updatedItems;
      } else {
        // Add new item
        toast({
          title: "Item added to cart",
          description: `${product.name} added to your cart`,
        });
        return [...prevItems, { product, quantity }];
      }
    });
  };

  /**
   * Remove item from cart
   * @param productId - ID of product to remove
   */
  const removeItem = (productId: number) => {
    setItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.product.id === productId);
      if (itemToRemove) {
        toast({
          title: "Item removed",
          description: `${itemToRemove.product.name} removed from your cart`,
        });
      }
      return prevItems.filter((item) => item.product.id !== productId);
    });
  };

  /**
   * Update quantity of item in cart
   * @param productId - ID of product to update
   * @param quantity - New quantity
   */
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  /**
   * Clear all items from cart
   */
  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  /**
   * Get total number of items in cart
   */
  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  /**
   * Get subtotal price of items in cart
   */
  const getSubtotal = () => {
    return items.reduce(
      (subtotal, item) => subtotal + item.product.price * item.quantity,
      0
    );
  };

  /**
   * Calculate tax based on subtotal
   */
  const getTax = () => {
    return getSubtotal() * TAX_RATE;
  };

  /**
   * Get total price including tax
   */
  const getTotal = () => {
    return getSubtotal() + getTax();
  };

  /**
   * Check if a product is in the cart
   * @param productId - ID of product to check
   */
  const isInCart = (productId: number) => {
    return items.some((item) => item.product.id === productId);
  };

  // Context value
  const contextValue = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getSubtotal,
    getTax,
    getTotal,
    isInCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

/**
 * Custom hook to use cart context
 */
export const useCart = () => useContext(CartContext);
