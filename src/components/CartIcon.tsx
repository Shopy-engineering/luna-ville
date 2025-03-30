
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Cart icon component with item count badge
 */
const CartIcon = () => {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-luna-ville-600 text-xs text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
