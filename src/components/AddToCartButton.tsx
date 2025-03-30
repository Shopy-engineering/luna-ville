
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/cart";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Plus, Minus } from "lucide-react";

/**
 * Props for the AddToCartButton component
 */
interface AddToCartButtonProps {
  product: Product;
  variant?: "icon" | "full";
  showQuantity?: boolean;
  className?: string;
}

/**
 * Button component for adding products to cart
 */
const AddToCartButton = ({
  product,
  variant = "full",
  showQuantity = false,
  className,
}: AddToCartButtonProps) => {
  const { addItem, isInCart, updateQuantity, removeItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  /**
   * Handles adding the product to cart
   */
  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  /**
   * Increments the quantity
   */
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  /**
   * Decrements the quantity
   */
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  /**
   * Renders the icon-only version
   */
  if (variant === "icon") {
    return (
      <Button
        size="icon"
        onClick={handleAddToCart}
        className={`rounded-full bg-luna-ville-600 hover:bg-luna-ville-700 ${className}`}
        title="Add to cart"
      >
        <ShoppingCart className="h-5 w-5" />
      </Button>
    );
  }

  /**
   * Renders the full button with quantity controls
   */
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {showQuantity && (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Quantity:</span>
          <div className="flex items-center rounded-md border">
            <button
              type="button"
              className="p-2 hover:bg-muted"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-2 text-center">{quantity}</span>
            <button
              type="button"
              className="p-2 hover:bg-muted"
              onClick={incrementQuantity}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      
      <Button
        onClick={handleAddToCart}
        className="w-full bg-luna-ville-600 hover:bg-luna-ville-700 text-white"
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
