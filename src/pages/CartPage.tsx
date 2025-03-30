import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/formatters";
import { Product } from "@/types/cart";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Cart page component displaying cart items and total
 */
const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCart();

  // Check if the cart is empty
  const isEmpty = items.length === 0;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl md:text-4xl font-display font-medium mb-8">Your Cart</h1>

      {isEmpty ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is currently empty.</p>
          <Link to="/collections" className="text-luna-ville-600 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} removeItem={removeItem} updateQuantity={updateQuantity} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium mb-4">Cart Summary</h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span>{formatCurrency(getTotal())}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Tax</span>
              <span>{formatCurrency(0)}</span>
            </div>
            <div className="flex justify-between py-2 font-medium text-lg">
              <span>Total</span>
              <span>{formatCurrency(getTotal())}</span>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link to="/checkout" className="block bg-luna-ville-600 text-white text-center py-3 rounded-md hover:bg-luna-ville-700 transition-colors">
                Proceed to Checkout
              </Link>
              <button onClick={clearCart} className="text-red-600 hover:underline text-sm">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface CartItemProps {
  item: { product: Product; quantity: number };
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeItem, updateQuantity }) => {
  const { product, quantity } = item;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      updateQuantity(product.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b">
      {/* Product Image */}
      <div className="w-24 h-24 mr-4">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md" />
      </div>

      {/* Product Details */}
      <div className="flex-grow">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-gray-600 text-sm">{formatCurrency(product.price)}</p>
        <div className="flex items-center mt-2">
          <label htmlFor={`quantity-${product.id}`} className="mr-2 text-sm">
            Quantity:
          </label>
          <input
            type="number"
            id={`quantity-${product.id}`}
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-20 px-2 py-1 border rounded-md text-center text-sm"
          />
        </div>
      </div>

      {/* Remove Button */}
      <button onClick={() => removeItem(product.id)} className="text-gray-500 hover:text-red-600">
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartPage;
