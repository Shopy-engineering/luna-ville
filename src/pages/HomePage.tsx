
import { AdvancedImage } from "@cloudinary/react";
import cloudinary from "@/utils/cloudinary";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { useState } from "react";
import ProductQuickView from "@/components/ProductQuickView";

const HomePage = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<number | null>(null);
  
  const handleQuickView = (productId: number) => {
    setQuickViewProduct(productId);
  };
  
  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-cover bg-center">
        <AdvancedImage
          cldImg={cloudinary.image("GTQfK5NXQAAQcnb_schlsz")}
          className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="hero-gradient absolute inset-y-0 left-0 w-full md:w-1/2 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Handcrafted Rugs for Your Space
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Custom designed, ethically sourced, and locally made rugs that bring warmth and character to any room.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
          <Link to="/collections">Explore Collection</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
          <Link to="/custom-order">Custom Order</Link>
            </Button>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/collections?category=${category.id}`}
                className="group relative rounded-xl overflow-hidden aspect-square"
              >
                <AdvancedImage
                  cldImg={cloudinary.image(category.image)} // Use Cloudinary public ID
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-medium text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-display font-medium">Best Sellers</h2>
            <Link to="/collections" className="text-lunaville-600 flex items-center hover:text-lunaville-700 text-sm font-medium">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <div key={product.id} className="group">
                <div className="relative rounded-lg overflow-hidden mb-4 aspect-square">
                  <AdvancedImage
                    cldImg={cloudinary.image(product.image)} // Use Cloudinary public ID
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium text-sm transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      onClick={() => handleQuickView(product.id)}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <h3 className="text-base font-medium">{product.name}</h3>
                <div className="flex items-center mb-1">
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
                </div>
                <p className="text-lunaville-700 font-medium">${product.price}</p>
                
                {quickViewProduct === product.id && (
                  <ProductQuickView 
                    product={product} 
                    open={quickViewProduct === product.id} 
                    onOpenChange={() => handleCloseQuickView()} 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock Data
const categories = [
  {
    id: "contemporary",
    name: "Contemporary",
    image: "GOfR6x4WEAAN5NX_b72k0v", // Cloudinary public ID
  },
  {
    id: "traditional",
    name: "Traditional",
    image: "GbXM4y8WgAAwrNs_e1fugh", // Cloudinary public ID
  },
  {
    id: "minimalist",
    name: "Minimalist",
    image: "GTQfK5MWEAADpbn_kckudz", // Cloudinary public ID
  },
];

const bestSellers = [
  {
    id: 1,
    name: "Lunar Eclipse",
    price: 299,
    rating: 5,
    reviews: 42,
    image: "GbH3JMiWYAArhMV_lxcd6r", // Cloudinary public ID
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
    image: "GTQfK5OXwAAdbfP_u4hlto", // Cloudinary public ID
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
    image: "GbXM4ytWcAAGwXl_l99dvu", // Cloudinary public ID
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
    image: "GRqFxw9WIAAzYW__xpyql1", // Cloudinary public ID
    category: ["Minimalist", "Bohemian"],
    material: "Jute",
    size: "Medium (5'x7')",
    inStock: true,
  },
];

export default HomePage;
