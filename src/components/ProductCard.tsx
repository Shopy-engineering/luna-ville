
import { Star } from "lucide-react";
import { Product } from "@/types/cart";
import AddToCartButton from "./AddToCartButton";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import ProductQuickView from "./ProductQuickView";

/**
 * Props for ProductCard component
 */
interface ProductCardProps {
  product: Product;
}

/**
 * Product card component that displays a product with add to cart functionality
 */
const ProductCard = ({ product }: ProductCardProps) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <div className="group relative">
      <div className="relative rounded-lg overflow-hidden mb-4 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <AddToCartButton product={product} variant="icon" className="bg-luna-ville-600 hover:bg-luna-ville-700" />
          </div>
        </div>
      </div>
      <h3 className="text-base font-medium">{product.name}</h3>
      <div className="flex items-center mb-1">
        <div className="flex">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < product.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
        </div>
        <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
      </div>
      <p className="text-luna-ville-700 font-medium">{formatCurrency(product.price)}</p>
      
      {/* Quick view button that appears on hover */}
      <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => setIsQuickViewOpen(true)}
          className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm text-center transition-colors"
        >
          Quick View
        </button>
      </div>
      
      <ProductQuickView 
        product={product} 
        open={isQuickViewOpen} 
        onOpenChange={setIsQuickViewOpen} 
      />
    </div>
  );
};

export default ProductCard;
