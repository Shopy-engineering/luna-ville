
import { Product } from "@/types/cart";
import FilterableProductGrid from "@/components/FilterableProdcutGrid";


const CollectionsPage = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <h1 className="text-3xl md:text-4xl font-display font-medium mb-8">Our Collections</h1>
      
      <FilterableProductGrid products={products} />
    </div>
  );
};

// Mock Data
const products: Product[] = [
  {
    id: 1,
    name: "Lunar Eclipse",
    price: 299,
    rating: 5,
    reviews: 42,
    image: "GOfR6x4WEAAN5NX_b72k0v", // Cloudinary public ID
    category: ["Contemporary", "Minimalist"],
    material: "Wool",
    size: "Large (8'x10')",
    inStock: true,
  },
  {
    id: 2,
    name: "Sunset Gradient",
    price: 349,
    rating: 4,
    reviews: 28,
    image: "GOfR6x4WEAAN5NX_b72k0v", // Cloudinary public ID
    category: ["Contemporary", "Bohemian"],
    material: "Cotton",
    size: "Medium (5'x7')",
    inStock: true,
  },
  {
    id: 3,
    name: "Midnight Blue",
    price: 399,
    rating: 5,
    reviews: 36,
    image: "GOfR6x4WEAAN5NX_b72k0v", // Cloudinary public ID
    category: ["Traditional", "Geometric"],
    material: "Wool",
    size: "Large (8'x10')",
    inStock: true,
  },
  {
    id: 4,
    name: "Desert Sand",
    price: 279,
    rating: 4,
    reviews: 19,
    image: "GOfR6x4WEAAN5NX_b72k0v", // Cloudinary public ID
    category: ["Minimalist", "Bohemian"],
    material: "Jute",
    size: "Medium (5'x7')",
    inStock: true,
  },
  {
    id: 5,
    name: "Forest Path",
    price: 329,
    rating: 5,
    reviews: 31,
    image: "GOfR6x4WEAAN5NX_b72k0v", // Cloudinary public ID
    category: ["Traditional", "Contemporary"],
    material: "Wool",
    size: "Medium (5'x7')",
    inStock: true,
  },
  {
    id: 6,
    name: "Ocean Waves",
    price: 449,
    rating: 5,
    reviews: 24,
    image: "GOfR6x4WEAAN5NX_b72k0v", // Cloudinary public ID
    category: ["Contemporary", "Minimalist"],
    material: "Silk",
    size: "Large (8'x10')",
    inStock: true,
  },
  {
    id: 7,
    name: "Urban Geometry",
    price: 369,
    rating: 4,
    reviews: 18,
    image: "GOfR6x4WEAAN5NX_b72k0v", // Cloudinary public ID
    category: ["Geometric", "Contemporary"],
    material: "Synthetic",
    size: "Small (3'x5')",
    inStock: true,
  },
  {
    id: 8,
    name: "Morning Mist",
    price: 319,
    rating: 4,
    reviews: 22,
    image: "GOfR6x4WEAAN5NX_b72k0v", // Cloudinary public ID
    category: ["Minimalist", "Contemporary"],
    material: "Cotton",
    size: "Runner",
    inStock: true,
  },
  {
    id: 9,
    name: "Autumn Leaves",
    price: 289,
    rating: 5,
    reviews: 27,
    image: "GOfR6x4WEAAN5NX_b72k0v", // Cloudinary public ID
    category: ["Traditional"],
    material: "Wool",
    size: "Round",
    inStock: true,
  },
];

export default CollectionsPage;
