
import { useState } from "react";
import { Star, ChevronDown, SlidersHorizontal, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CollectionsPage = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("featured");

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(item => item !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setPriceRange([0, 1000]);
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <h1 className="text-3xl md:text-4xl font-display font-medium mb-8">Our Collections</h1>

      {/* Mobile Filter Button */}
      <div className="flex items-center justify-between mb-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <SlidersHorizontal size={16} />
              Filter
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <SheetHeader className="mb-4">
              <SheetTitle>Filters</SheetTitle>
              {activeFilters.length > 0 && (
                <Button variant="link" onClick={clearAllFilters} className="text-sm py-0 h-auto">
                  Clear all
                </Button>
              )}
            </SheetHeader>

            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="category">
                  <AccordionTrigger className="text-sm font-medium py-3">Category</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center">
                          <button
                            className="flex items-center gap-2 text-sm"
                            onClick={() => toggleFilter(category)}
                          >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                              activeFilters.includes(category) 
                                ? "bg-lunaville-600 border-lunaville-600" 
                                : "border-gray-300"
                            }`}>
                              {activeFilters.includes(category) && <Check size={14} className="text-white" />}
                            </div>
                            {category}
                          </button>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="material">
                  <AccordionTrigger className="text-sm font-medium py-3">Material</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {materials.map(material => (
                        <div key={material} className="flex items-center">
                          <button
                            className="flex items-center gap-2 text-sm"
                            onClick={() => toggleFilter(material)}
                          >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                              activeFilters.includes(material) 
                                ? "bg-lunaville-600 border-lunaville-600" 
                                : "border-gray-300"
                            }`}>
                              {activeFilters.includes(material) && <Check size={14} className="text-white" />}
                            </div>
                            {material}
                          </button>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="size">
                  <AccordionTrigger className="text-sm font-medium py-3">Size</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {sizes.map(size => (
                        <div key={size} className="flex items-center">
                          <button
                            className="flex items-center gap-2 text-sm"
                            onClick={() => toggleFilter(size)}
                          >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                              activeFilters.includes(size) 
                                ? "bg-lunaville-600 border-lunaville-600" 
                                : "border-gray-300"
                            }`}>
                              {activeFilters.includes(size) && <Check size={14} className="text-white" />}
                            </div>
                            {size}
                          </button>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="price">
                  <AccordionTrigger className="text-sm font-medium py-3">Price</AccordionTrigger>
                  <AccordionContent>
                    <div className="px-2">
                      <Slider 
                        value={priceRange} 
                        min={0} 
                        max={1000} 
                        step={50} 
                        onValueChange={setPriceRange} 
                      />
                      <div className="flex items-center justify-between mt-4 text-sm">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>

        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Desktop Filters */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Filters</h2>
              {activeFilters.length > 0 && (
                <Button variant="link" onClick={clearAllFilters} className="text-sm py-0 h-auto">
                  Clear all
                </Button>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <button
                        className="flex items-center gap-2 text-sm"
                        onClick={() => toggleFilter(category)}
                      >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                          activeFilters.includes(category) 
                            ? "bg-lunaville-600 border-lunaville-600" 
                            : "border-gray-300"
                        }`}>
                          {activeFilters.includes(category) && <Check size={14} className="text-white" />}
                        </div>
                        {category}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Material</h3>
                <div className="space-y-2">
                  {materials.map(material => (
                    <div key={material} className="flex items-center">
                      <button
                        className="flex items-center gap-2 text-sm"
                        onClick={() => toggleFilter(material)}
                      >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                          activeFilters.includes(material) 
                            ? "bg-lunaville-600 border-lunaville-600" 
                            : "border-gray-300"
                        }`}>
                          {activeFilters.includes(material) && <Check size={14} className="text-white" />}
                        </div>
                        {material}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="space-y-2">
                  {sizes.map(size => (
                    <div key={size} className="flex items-center">
                      <button
                        className="flex items-center gap-2 text-sm"
                        onClick={() => toggleFilter(size)}
                      >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                          activeFilters.includes(size) 
                            ? "bg-lunaville-600 border-lunaville-600" 
                            : "border-gray-300"
                        }`}>
                          {activeFilters.includes(size) && <Check size={14} className="text-white" />}
                        </div>
                        {size}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Price</h3>
                <div className="px-2">
                  <Slider 
                    value={priceRange} 
                    min={0} 
                    max={1000} 
                    step={50} 
                    onValueChange={setPriceRange} 
                  />
                  <div className="flex items-center justify-between mt-4 text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Desktop Sort */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-500">Showing {products.length} products</p>
            </div>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {activeFilters.map(filter => (
                <div
                  key={filter}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {filter}
                  <button onClick={() => toggleFilter(filter)}>
                    <X size={14} className="text-gray-500" />
                  </button>
                </div>
              ))}
              <button
                className="inline-flex items-center gap-1 px-3 py-1 text-lunaville-600 text-sm"
                onClick={clearAllFilters}
              >
                Clear all
              </button>
            </div>
          )}

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="group">
                <div className="relative rounded-lg overflow-hidden mb-4 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium text-sm transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock Data
const categories = ["Contemporary", "Traditional", "Minimalist", "Bohemian", "Geometric"];
const materials = ["Wool", "Cotton", "Silk", "Synthetic", "Jute"];
const sizes = ["Small (3'x5')", "Medium (5'x7')", "Large (8'x10')", "Runner", "Round"];

const products = [
  {
    id: 1,
    name: "Lunar Eclipse",
    price: 299,
    rating: 5,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1576885828031-499da22c4208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Sunset Gradient",
    price: 349,
    rating: 4,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Midnight Blue",
    price: 399,
    rating: 5,
    reviews: 36,
    image: "https://images.unsplash.com/photo-1603204077167-2fa0397f591b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Desert Sand",
    price: 279,
    rating: 4,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1612207498515-cf37ee3fb91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Forest Path",
    price: 329,
    rating: 5,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1584724133187-682a39359622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Ocean Waves",
    price: 449,
    rating: 5,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1577726066765-d0d1a1c0b35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Urban Geometry",
    price: 369,
    rating: 4,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1600607688066-890987f18a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Morning Mist",
    price: 319,
    rating: 4,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1589964402753-52ef1e86f33f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Autumn Leaves",
    price: 289,
    rating: 5,
    reviews: 27,
    image: "https://images.unsplash.com/photo-1584378687113-8739c327634d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

export default CollectionsPage;
