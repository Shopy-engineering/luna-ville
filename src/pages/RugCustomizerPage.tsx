
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { calculateRugPrice, formatCurrency } from "@/lib/formatters";
import { useToast } from "@/hooks/use-toast";

/**
 * Rug shape options
 */
const rugShapes = [
  { id: "rectangular", name: "Rectangular", icon: "🔲" },
  { id: "square", name: "Square", icon: "⬛" },
  { id: "round", name: "Round", icon: "⭕" },
  { id: "runner", name: "Runner", icon: "▭" },
];

/**
 * Material options with different pricing factors
 */
const rugMaterials = [
  { id: "wool", name: "Wool", priceFactor: 1.2, description: "Soft, durable, and naturally stain-resistant" },
  { id: "cotton", name: "Cotton", priceFactor: 0.9, description: "Lightweight, affordable, and easy to clean" },
  { id: "silk", name: "Silk", priceFactor: 2.5, description: "Luxurious, shimmering appearance with exceptional softness" },
  { id: "jute", name: "Jute", priceFactor: 0.8, description: "Natural fiber with rustic texture and earth tones" },
  { id: "synthetic", name: "Synthetic", priceFactor: 0.7, description: "Durable, stain-resistant, and budget-friendly" },
];

const RugCustomizerPage = () => {
  const { toast } = useToast();
  const [shape, setShape] = useState("rectangular");
  const [material, setMaterial] = useState("wool");
  const [length, setLength] = useState(6); // Default length in feet
  const [width, setWidth] = useState(4); // Default width in feet
  const [notes, setNotes] = useState("");
  const [price, setPrice] = useState(0);
  
  // Find the selected material object
  const selectedMaterial = rugMaterials.find(m => m.id === material) || rugMaterials[0];

  // Calculate price whenever dimensions or material changes
  useEffect(() => {
    let basePrice = 12; // Base price per square foot
    let calculatedPrice = calculateRugPrice(length, width, basePrice * selectedMaterial.priceFactor);
    
    // Adjust price for round shape (area calculation is different)
    if (shape === "round") {
      // For round rugs, we use the radius (half of width) to calculate area: π × r²
      const radius = width / 2;
      const area = Math.PI * radius * radius;
      calculatedPrice = Math.round(area * basePrice * selectedMaterial.priceFactor);
    }
    
    // Runner rugs have a minimum price
    if (shape === "runner") {
      const minRunnerPrice = 180;
      calculatedPrice = Math.max(calculatedPrice, minRunnerPrice);
    }
    
    setPrice(calculatedPrice);
  }, [length, width, shape, material, selectedMaterial.priceFactor]);

  // Handle dimension changes from sliders
  const handleLengthChange = (value: number[]) => {
    setLength(value[0]);
  };

  const handleWidthChange = (value: number[]) => {
    setWidth(value[0]);
  };

  // Handle direct input for dimensions
  const handleLengthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 2 && value <= 20) {
      setLength(value);
    }
  };

  const handleWidthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 2 && value <= 20) {
      setWidth(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create order details object
    const orderDetails = {
      shape,
      material,
      length: shape === "square" ? length : length,
      width: shape === "square" ? length : width,
      notes,
      price
    };
    
    console.log("Submitting custom rug order:", orderDetails);
    
    // Show success message
    toast({
      title: "Custom Rug Request Submitted",
      description: "We've received your custom rug details and will contact you soon.",
    });
    
    // Reset form (optional)
    setNotes("");
  };

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-medium mb-6">Design Your Custom Rug</h1>
        <p className="text-gray-600 mb-12">
          Use our interactive tool to customize your perfect rug. Adjust the dimensions, 
          select materials, and see your price update in real-time.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* Shape Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Select Shape</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {rugShapes.map((rugShape) => (
                  <button
                    key={rugShape.id}
                    type="button"
                    onClick={() => setShape(rugShape.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
                      shape === rugShape.id
                        ? "border-luna-ville-600 bg-luna-ville-50"
                        : "border-gray-200 hover:border-luna-ville-300"
                    }`}
                  >
                    <span className="text-3xl mb-2">{rugShape.icon}</span>
                    <span>{rugShape.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Material Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Select Material</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rugMaterials.map((rugMaterial) => (
                  <button
                    key={rugMaterial.id}
                    type="button"
                    onClick={() => setMaterial(rugMaterial.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      material === rugMaterial.id
                        ? "border-luna-ville-600 bg-luna-ville-50"
                        : "border-gray-200 hover:border-luna-ville-300"
                    }`}
                  >
                    <h3 className="font-medium">{rugMaterial.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{rugMaterial.description}</p>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size Controls */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Set Dimensions</h2>
              
              <div className="space-y-6">
                {/* Length Control */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Length</label>
                    <div className="flex items-center w-24">
                      <Input
                        type="number"
                        min="2"
                        max="20"
                        step="0.5"
                        value={length}
                        onChange={handleLengthInput}
                        className="text-center"
                      />
                      <span className="ml-2 text-sm text-gray-500">ft</span>
                    </div>
                  </div>
                  <Slider
                    value={[length]}
                    min={2}
                    max={20}
                    step={0.5}
                    onValueChange={handleLengthChange}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>2 ft</span>
                    <span>20 ft</span>
                  </div>
                </div>
                
                {/* Width Control - Only show if not square */}
                {shape !== 'square' && (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">
                        {shape === 'round' ? 'Diameter' : 'Width'}
                      </label>
                      <div className="flex items-center w-24">
                        <Input
                          type="number"
                          min="2"
                          max="20"
                          step="0.5"
                          value={width}
                          onChange={handleWidthInput}
                          className="text-center"
                        />
                        <span className="ml-2 text-sm text-gray-500">ft</span>
                      </div>
                    </div>
                    <Slider
                      value={[width]}
                      min={2}
                      max={20}
                      step={0.5}
                      onValueChange={handleWidthChange}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>2 ft</span>
                      <span>20 ft</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Dimensions Summary */}
              <div className="mt-4 p-4 bg-luna-ville-50 rounded-lg">
                <p className="text-center">
                  {shape === 'round' ? (
                    <span>{width} ft diameter round rug</span>
                  ) : shape === 'square' ? (
                    <span>{length} ft × {length} ft square rug</span>
                  ) : shape === 'runner' ? (
                    <span>{length} ft × {width} ft runner rug</span>
                  ) : (
                    <span>{length} ft × {width} ft rectangular rug</span>
                  )}
                  {shape !== 'round' && (
                    <span className="block text-sm text-gray-600 mt-1">
                      {Math.round(length * width)} sq ft area
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            {/* Notes Field */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Additional Notes (optional)
              </label>
              <Textarea
                placeholder="Add any special requests or details about your custom rug..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
              />
            </div>
            
            {/* Price and Submit */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-600">Estimated Price</p>
                <p className="text-3xl font-medium text-luna-ville-800">{formatCurrency(price)}</p>
              </div>
              <Button type="submit" size="lg" className="bg-luna-ville-600 hover:bg-luna-ville-700">
                Request This Rug <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
        
        {/* Information Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Custom Made</h3>
            <p className="text-gray-600">
              Each rug is handcrafted to your exact specifications by our skilled artisans.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Premium Materials</h3>
            <p className="text-gray-600">
              We use only the highest quality materials for durability and beauty.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Free Shipping</h3>
            <p className="text-gray-600">
              Enjoy free shipping on all custom rugs within the continental US.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RugCustomizerPage;
