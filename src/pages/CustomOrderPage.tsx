
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormData = {
  name: string;
  email: string;
  phone: string;
  size: string;
  shape: string;
  colors: string;
  materials: string;
  budget: string;
  description: string;
  files: FileList;
};

const CustomOrderPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast({
        title: "Custom Order Request Submitted",
        description: "We'll get back to you within 24 hours to discuss your custom rug.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prevFiles => [...prevFiles, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">Custom Order</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Let us create a one-of-a-kind rug that's perfectly tailored to your space and style.
        </p>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-medium mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {customProcess.map((step) => (
              <div key={step.id} className="relative">
                <div className="w-14 h-14 bg-lunaville-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  {step.id}
                </div>
                {step.id < customProcess.length && (
                  <div className="absolute top-7 left-[calc(50%+1rem)] right-0 hidden md:block">
                    <div className="h-0.5 bg-lunaville-200 w-full"></div>
                  </div>
                )}
                <h3 className="text-xl font-medium mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-medium mb-12 text-center">Request Your Custom Rug</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Your Name*</label>
                <Input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address*</label>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <Input
                  {...register("phone")}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Desired Size*</label>
                <div className="relative">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (3'x5')</SelectItem>
                      <SelectItem value="medium">Medium (5'x8')</SelectItem>
                      <SelectItem value="large">Large (8'x10')</SelectItem>
                      <SelectItem value="xlarge">X-Large (9'x12')</SelectItem>
                      <SelectItem value="custom">Custom Size</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Shape</label>
                <div className="relative">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a shape" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rectangular">Rectangular</SelectItem>
                      <SelectItem value="square">Square</SelectItem>
                      <SelectItem value="round">Round</SelectItem>
                      <SelectItem value="runner">Runner</SelectItem>
                      <SelectItem value="custom">Custom Shape</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Preferred Materials</label>
                <div className="relative">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select materials" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wool">Wool</SelectItem>
                      <SelectItem value="silk">Silk</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="synthetic">Synthetic</SelectItem>
                      <SelectItem value="jute">Jute</SelectItem>
                      <SelectItem value="mixed">Mixed Materials</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Budget Range</label>
                <div className="relative">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below500">Below $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                      <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
                      <SelectItem value="above3000">Above $3,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Design Description*</label>
              <Textarea
                {...register("description", { required: "Description is required" })}
                placeholder="Describe your design ideas, color preferences, and any specific patterns or motifs you'd like to incorporate."
                rows={5}
                className={errors.description ? "border-red-500" : ""}
              />
              {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Upload Inspiration Images</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  accept="image/*"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50"
                >
                  Choose Files
                </label>
                <p className="mt-2 text-sm text-gray-500">Upload images that inspire your design (optional)</p>
              </div>

              {/* Display uploaded files */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium">Uploaded Files:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {files.map((file, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                          {file.type.includes("image") ? (
                            <img
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="text-gray-400 text-xs text-center p-2">{file.name}</div>
                          )}
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs truncate mt-1">{file.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                size="lg"
                className="bg-lunaville-600 hover:bg-lunaville-700 text-white px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-medium mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600">
              Have more questions about custom orders?
            </p>
            <Button variant="outline" className="flex items-center mx-auto" asChild>
              <a href="/contact">
                Contact Us <ChevronRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock Data
const customProcess = [
  {
    id: 1,
    title: "Request",
    description: "Fill out our custom order form with your design ideas and preferences."
  },
  {
    id: 2,
    title: "Consultation",
    description: "Our design team will contact you to discuss details and options."
  },
  {
    id: 3,
    title: "Design",
    description: "We'll create design concepts for your approval before production."
  },
  {
    id: 4,
    title: "Creation",
    description: "Our skilled artisans will handcraft your custom rug to your specifications."
  }
];

const faqs = [
  {
    id: 1,
    question: "How long does it take to create a custom rug?",
    answer: "The timeframe varies depending on the complexity of the design and size of the rug. Generally, custom rugs take between 8-12 weeks from design approval to completion."
  },
  {
    id: 2,
    question: "Can I see samples of materials before making a decision?",
    answer: "Yes, we're happy to send you material samples so you can feel the texture and see the colors in person before finalizing your custom order."
  },
  {
    id: 3,
    question: "What if I'm not satisfied with the final product?",
    answer: "We work closely with you throughout the process to ensure you'll love your custom rug. If there are any concerns with the final product, we'll work with you to make it right."
  },
  {
    id: 4,
    question: "Do you offer installation services for custom rugs?",
    answer: "Yes, we offer professional installation services for an additional fee in select locations. Our team will ensure your rug is properly placed and secured."
  },
  {
    id: 5,
    question: "Can I request modifications to an existing rug design?",
    answer: "Absolutely! We can modify any of our existing designs to suit your preferences, whether it's changing the colors, size, or certain design elements."
  }
];

export default CustomOrderPage;
