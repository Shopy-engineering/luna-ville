
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, FileText } from "lucide-react";
import { Order } from "@/types/cart";
import { formatCurrency } from "@/lib/formatters";

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
 * Order confirmation page component
 */
const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order as Order | undefined;

  // If no order data in state, redirect to home
  useEffect(() => {
    if (!order) {
      navigate("/");
    }
  }, [order, navigate]);

  // Handle case where user refreshes page (no order in state)
  if (!order) {
    return null;
  }

  // Format the date for display
  const orderDate = order.createdAt 
    ? new Date(order.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Confirmation Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-luna-ville-100 p-4">
            <CheckCircle className="h-12 w-12 text-luna-ville-600" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-medium">Thank You!</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Your order has been received and is now being processed.
        </p>
      </div>

      {/* Order Details Card */}
      <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
        {/* Order Header */}
        <div className="bg-luna-ville-50 border-b p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="font-medium">{order.id || "N/A"}</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <p className="text-sm text-muted-foreground">Order Date</p>
              <p className="font-medium">{orderDate}</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="p-6 border-b">
          <h2 className="font-medium mb-4">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.product.id} className="flex items-start">
                <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.product.size} - {item.product.material}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-sm">{item.quantity} × {formatCurrency(item.product.price)}</p>
                    <p className="font-medium">{formatCurrency(item.product.price * item.quantity)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Details */}
        <div className="p-6 border-b">
          <h2 className="font-medium mb-4">Shipping Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="mt-1">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                {order.shippingAddress.address1}<br />
                {order.shippingAddress.address2 && <>{order.shippingAddress.address2}<br /></>}
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
                {order.shippingAddress.country}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Contact</p>
              <p className="mt-1">
                Email: {/* This should come from the checkout form */}<br />
                Phone: {order.shippingAddress.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="p-6">
          <h2 className="font-medium mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatCurrency(order.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>{formatCurrency(order.tax)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between pt-2 border-t mt-2 font-medium">
              <span>Total</span>
              <span>{formatCurrency(order.total)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button asChild variant="outline">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" /> Continue Shopping
          </Link>
        </Button>
        <Button asChild className="bg-luna-ville-600 hover:bg-luna-ville-700">
          <Link to="/contact">
            <FileText className="mr-2 h-4 w-4" /> Contact Support
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
