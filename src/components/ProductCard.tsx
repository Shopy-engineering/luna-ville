
import { Star } from "lucide-react";
import { Product } from "@/types/cart";
import AddToCartButton from "./AddToCartButton";
import { formatCurrency } from "@/lib/formatters";

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
  return (
    <div className="group">
      <div className="relative rounded-lg overflow-hidden mb-4 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <AddToCartButton product={product} variant="icon" className="transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300" />
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
    </div>
  );
};

export default ProductCard;
