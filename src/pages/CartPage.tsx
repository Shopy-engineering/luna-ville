
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2, ShoppingCart, ArrowRight, Minus, Plus } from "lucide-react";
import { formatCurrency } from "@/lib/formatters";
import { Separator } from "@/components/ui/separator";

/**
 * Helper function to format currency
 * (This should be moved to a utils/formatters.ts file)
 */
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

/**
 * Shopping cart page component
 */
const CartPage = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getSubtotal,
    getTax,
    getTotal,
  } = useCart();

  const isEmpty = items.length === 0;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-display font-medium mb-8">Shopping Cart</h1>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <ShoppingCart className="h-16 w-16 text-luna-ville-300 mb-4" />
          <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button asChild className="bg-luna-ville-600 hover:bg-luna-ville-700">
            <Link to="/collections">Browse Collections</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          {/* Cart Items (2/3 width on desktop) */}
          <div className="md:col-span-2 space-y-6">
            {/* Header */}
            <div className="hidden md:grid md:grid-cols-5 text-sm font-medium text-muted-foreground">
              <div className="col-span-2">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>

            {/* Items */}
            <Separator />
            {items.map((item) => (
              <div key={item.product.id}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
                  {/* Product */}
                  <div className="col-span-2 flex gap-4">
                    <div className="h-24 w-24 rounded-md overflow-hidden">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.product.size} - {item.product.material}
                      </p>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="flex items-center text-sm text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:text-center">
                    <span className="md:hidden text-sm text-muted-foreground">Price: </span>
                    {formatCurrency(item.product.price)}
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center md:justify-center">
                    <div className="flex items-center rounded-md border">
                      <button
                        type="button"
                        className="p-1 hover:bg-muted"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-1 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="p-1 hover:bg-muted"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="md:text-right font-medium">
                    <span className="md:hidden text-sm text-muted-foreground">Total: </span>
                    {formatCurrency(item.product.price * item.quantity)}
                  </div>
                </div>
                <Separator />
              </div>
            ))}

            {/* Actions */}
            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" onClick={clearCart} className="text-sm">
                <Trash2 className="h-4 w-4 mr-2" /> Clear Cart
              </Button>
              <Button asChild variant="outline" className="text-sm">
                <Link to="/collections">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>

          {/* Summary (1/3 width on desktop) */}
          <div className="bg-gray-50 rounded-lg p-6 h-fit">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(getSubtotal())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>{formatCurrency(getTax())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>{formatCurrency(getTotal())}</span>
              </div>
            </div>

            <Button 
              asChild 
              className="w-full bg-luna-ville-600 hover:bg-luna-ville-700"
            >
              <Link to="/checkout">
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
