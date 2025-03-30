import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { formatCurrency } from "@/lib/formatters";

interface LocationState {
  orderId: string;
  total: number;
}

const OrderConfirmationPage = () => {
  const location = useLocation();
  const { orderId, total } = location.state as LocationState;

  useEffect(() => {
    // Simulate order confirmation process
    console.log("Order confirmed:", orderId);
  }, [orderId]);

  return (
    <div className="container mx-auto py-20">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-12">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
          <h1 className="text-4xl font-display font-medium text-gray-800 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order! Your order has been successfully
            processed.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">
            Order Details
          </h2>
          <div className="border-t border-b border-gray-200 py-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium text-gray-700">{orderId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total:</span>
              <span className="font-medium text-gray-700">{formatCurrency(total)}</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            You will receive an email with the order details and tracking
            information shortly.
          </p>
          <Button asChild size="lg">
            <Link to="/" className="px-8">
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
