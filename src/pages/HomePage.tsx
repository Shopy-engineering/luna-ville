
import { Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-[url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
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
                <CustomButton size="lg" as={Link} to="/collections">
                  Explore Collection
                </CustomButton>
                <CustomButton size="lg" variant="outline" as={Link} to="/custom-order">
                  Custom Order
                </CustomButton>
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
                <img
                  src={category.image}
                  alt={category.name}
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
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-16">Why Choose Luna Ville</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="text-center px-4">
                <div className="bg-lunaville-100 w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <feature.icon size={24} className="text-lunaville-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-lunaville-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Ready to Transform Your Space?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lunaville-100">
            Start your journey with Luna Ville today and discover how our custom rugs can elevate your interior design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-lunaville-600" asChild>
              <Link to="/collections">Browse Collection</Link>
            </Button>
            <Button size="lg" className="bg-white text-lunaville-600 hover:bg-lunaville-50" asChild>
              <Link to="/custom-order">Custom Order</Link>
            </Button>
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
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "traditional",
    name: "Traditional",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80"
  },
  {
    id: "minimalist",
    name: "Minimalist",
    image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  }
];

const bestSellers = [
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
  }
];

import { CheckCircle, Palette, RotateCcw } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Premium Materials",
    description: "We use only the highest quality materials sourced ethically from around the world.",
    icon: CheckCircle
  },
  {
    id: 2,
    title: "Custom Design",
    description: "Work with our designers to create a rug that perfectly matches your space and style.",
    icon: Palette
  },
  {
    id: 3,
    title: "30-Day Returns",
    description: "Not satisfied? Return your rug within 30 days for a full refund, no questions asked.",
    icon: RotateCcw
  }
];

const testimonials = [
  {
    id: 1,
    text: "The custom rug that Luna Ville created for our living room is absolutely stunning. The quality is exceptional and it ties the whole room together.",
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    text: "I was amazed by the level of personalization. They worked with me through every step to ensure the rug was exactly what I wanted. Couldn't be happier!",
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    location: "New York, NY"
  },
  {
    id: 3,
    text: "Luna Ville's attention to detail is impressive. The craftsmanship of our rug exceeds my expectations, and it arrived earlier than expected.",
    name: "Emma Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    location: "Austin, TX"
  }
];

export default HomePage;
