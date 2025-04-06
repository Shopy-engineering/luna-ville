
import { useState, useMemo } from "react";
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
import { Product } from "@/types/cart";
import ProductCard from "./ProductCard";

// Mock Data for filters
const categories = ["Contemporary", "Traditional", "Minimalist", "Bohemian", "Geometric"];
const materials = ["Wool", "Cotton", "Silk", "Synthetic", "Jute"];
const sizes = ["Small (3'x5')", "Medium (5'x7')", "Large (8'x10')", "Runner", "Round"];

interface FilterableProductGridProps {
  products: Product[];
}

/**
 * FilterableProductGrid component that displays products with filtering options
 */
const FilterableProductGrid = ({ products }: FilterableProductGridProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("featured");

  /**
   * Toggle a filter on/off
   */
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(item => item !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  /**
   * Clear all active filters
   */
  const clearAllFilters = () => {
    setActiveFilters([]);
    setPriceRange([0, 1000]);
  };

  /**
   * Filter and sort products based on active filters
   */
  const filteredProducts = useMemo(() => {
    // First filter by active filters (category, material, size)
    let result = products.filter(product => {
      // Check if price is within range
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // If no active filters, include all products
      if (activeFilters.length === 0) {
        return true;
      }

      // Check if product matches any of the active filters
      for (const filter of activeFilters) {
        // Check if filter is a category
        if (product.category && product.category.includes(filter)) {
          return true;
        }
        
        // Check if filter is a material
        if (product.material === filter) {
          return true;
        }
        
        // Check if filter is a size
        if (product.size === filter) {
          return true;
        }
      }
      
      return false;
    });

    // Then sort the filtered products
    return result.sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "newest":
          // Assuming higher ID means newer product for this demo
          return b.id - a.id;
        default: // "featured"
          // For featured, we could sort by rating, then by number of reviews
          return (b.rating * 100 + b.reviews) - (a.rating * 100 + a.reviews);
      }
    });
  }, [products, activeFilters, priceRange, sortOption]);

  return (
    <div className="flex flex-col md:flex-row gap-6">
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
                                ? "bg-luna-ville-600 border-luna-ville-600" 
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
                                ? "bg-luna-ville-600 border-luna-ville-600" 
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
                                ? "bg-luna-ville-600 border-luna-ville-600" 
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
                          ? "bg-luna-ville-600 border-luna-ville-600" 
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
                          ? "bg-luna-ville-600 border-luna-ville-600" 
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
                          ? "bg-luna-ville-600 border-luna-ville-600" 
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
            <p className="text-sm text-gray-500">Showing {filteredProducts.length} products</p>
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
              className="inline-flex items-center gap-1 px-3 py-1 text-luna-ville-600 text-sm"
              onClick={clearAllFilters}
            >
              Clear all
            </button>
          </div>
        )}

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No products match the selected filters</p>
              <Button 
                variant="link" 
                onClick={clearAllFilters} 
                className="text-luna-ville-600 mt-2"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterableProductGrid;
