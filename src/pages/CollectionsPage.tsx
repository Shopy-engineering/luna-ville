
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
    image: "https://images.unsplash.com/photo-1576885828031-499da22c4208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Contemporary", "Minimalist"],
    material: "Wool",
    size: "Large (8'x10')",
    inStock: true
  },
  {
    id: 2,
    name: "Sunset Gradient",
    price: 349,
    rating: 4,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Contemporary", "Bohemian"],
    material: "Cotton",
    size: "Medium (5'x7')",
    inStock: true
  },
  {
    id: 3,
    name: "Midnight Blue",
    price: 399,
    rating: 5,
    reviews: 36,
    image: "https://images.unsplash.com/photo-1603204077167-2fa0397f591b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Traditional", "Geometric"],
    material: "Wool",
    size: "Large (8'x10')",
    inStock: true
  },
  {
    id: 4,
    name: "Desert Sand",
    price: 279,
    rating: 4,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1612207498515-cf37ee3fb91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Minimalist", "Bohemian"],
    material: "Jute",
    size: "Medium (5'x7')",
    inStock: true
  },
  {
    id: 5,
    name: "Forest Path",
    price: 329,
    rating: 5,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1584724133187-682a39359622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Traditional", "Contemporary"],
    material: "Wool",
    size: "Medium (5'x7')",
    inStock: true
  },
  {
    id: 6,
    name: "Ocean Waves",
    price: 449,
    rating: 5,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1577726066765-d0d1a1c0b35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Contemporary", "Minimalist"],
    material: "Silk",
    size: "Large (8'x10')",
    inStock: true
  },
  {
    id: 7,
    name: "Urban Geometry",
    price: 369,
    rating: 4,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1600607688066-890987f18a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Geometric", "Contemporary"],
    material: "Synthetic",
    size: "Small (3'x5')",
    inStock: true
  },
  {
    id: 8,
    name: "Morning Mist",
    price: 319,
    rating: 4,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1589964402753-52ef1e86f33f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Minimalist", "Contemporary"],
    material: "Cotton",
    size: "Runner",
    inStock: true
  },
  {
    id: 9,
    name: "Autumn Leaves",
    price: 289,
    rating: 5,
    reviews: 27,
    image: "https://images.unsplash.com/photo-1584378687113-8739c327634d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Traditional", "Bohemian"],
    material: "Wool",
    size: "Round",
    inStock: true
  }
];

export default CollectionsPage;
