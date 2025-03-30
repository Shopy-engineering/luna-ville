import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/formatters";
import { Order, ShippingAddress } from "@/types/cart";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

// Zod schema for form validation
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  address1: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  address2: z.string().optional(),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  zipCode: z.string().regex(/^\d{5}(?:-\d{4})?$/, {
    message: "Invalid ZIP code.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be 10 digits.",
  }),
  paymentMethod: z.string().min(2, {
    message: "Payment method must be at least 2 characters.",
  }),
});

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, clearCart, getSubtotal, getTax, getTotal } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phone: "",
      paymentMethod: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (values) => {
    setIsSubmitting(true);

    // Create order object
    const order: Order = {
      items: items,
      subtotal: getSubtotal(),
      tax: getTax(),
      total: getTotal(),
      shippingAddress: values,
      paymentMethod: values.paymentMethod,
      status: "pending",
    };

    // Simulate order submission
    setTimeout(() => {
      console.log("Order submitted:", order);
      clearCart();
      toast({
        title: "Order submitted",
        description: "Thank you for your order!",
      });
      setIsSubmitting(false);
      navigate("/order-confirmation");
    }, 1500);
  };

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Checkout</CardTitle>
          <CardDescription>Enter your shipping information below.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" {...form.register("firstName")} />
                {form.formState.errors.firstName && (
                  <p className="text-red-500 text-sm">{form.formState.errors.firstName.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" {...form.register("lastName")} />
                {form.formState.errors.lastName && (
                  <p className="text-red-500 text-sm">{form.formState.errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="address1">Address</Label>
              <Input id="address1" placeholder="123 Main St" {...form.register("address1")} />
              {form.formState.errors.address1 && (
                <p className="text-red-500 text-sm">{form.formState.errors.address1.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="address2">Address 2 (Optional)</Label>
              <Input id="address2" placeholder="Apt 4B" {...form.register("address2")} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" {...form.register("city")} />
                {form.formState.errors.city && (
                  <p className="text-red-500 text-sm">{form.formState.errors.city.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="NY" {...form.register("state")} />
                {form.formState.errors.state && (
                  <p className="text-red-500 text-sm">{form.formState.errors.state.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input id="zipCode" placeholder="10001" {...form.register("zipCode")} />
                {form.formState.errors.zipCode && (
                  <p className="text-red-500 text-sm">{form.formState.errors.zipCode.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="country">Country</Label>
              <Input id="country" placeholder="USA" {...form.register("country")} />
              {form.formState.errors.country && (
                <p className="text-red-500 text-sm">{form.formState.errors.country.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="2125551234" {...form.register("phone")} />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Input id="paymentMethod" placeholder="Credit Card" {...form.register("paymentMethod")} />
              {form.formState.errors.paymentMethod && (
                <p className="text-red-500 text-sm">{form.formState.errors.paymentMethod.message}</p>
              )}
            </div>

            <CardFooter className="flex flex-col space-y-4">
              <div>
                <div className="text-lg font-medium">Subtotal: {formatCurrency(getSubtotal())}</div>
                <div className="text-lg font-medium">Tax: {formatCurrency(getTax())}</div>
                <div className="text-2xl font-bold">Total: {formatCurrency(getTotal())}</div>
              </div>
              <Button disabled={isSubmitting} type="submit" className="w-full">
                {isSubmitting ? "Submitting..." : "Submit Order"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage;
