
import { Product } from "@/types/cart";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Star } from "lucide-react";
import AddToCartButton from "./AddToCartButton";
import { formatCurrency } from "@/lib/formatters";

interface ProductQuickViewProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductQuickView = ({ product, open, onOpenChange }: ProductQuickViewProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">{product.name}</DialogTitle>
          <DialogDescription className="text-lg font-medium text-luna-ville-700">
            {formatCurrency(product.price)}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
              </div>
              <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
            </div>
            
            <div className="space-y-4 mb-6">
              {product.category && (
                <p className="text-sm">
                  <span className="font-medium">Category:</span> {product.category.join(", ")}
                </p>
              )}
              {product.material && (
                <p className="text-sm">
                  <span className="font-medium">Material:</span> {product.material}
                </p>
              )}
              {product.size && (
                <p className="text-sm">
                  <span className="font-medium">Size:</span> {product.size}
                </p>
              )}
            </div>
            
            <AddToCartButton 
              product={product} 
              showQuantity={true} 
              className="mt-auto"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
