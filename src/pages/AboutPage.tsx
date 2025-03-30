
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">Our Story</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Luna Ville was founded with a passion for designing and crafting beautiful, custom rugs that transform spaces and reflect individual style.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-medium mb-8 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            At Luna Ville, we believe that a rug is more than just a floor covering—it's a statement piece that defines your space and reflects your personality. Our mission is to create handcrafted rugs that combine artistic design, premium materials, and exceptional craftsmanship.
          </p>
          <p className="text-lg text-gray-600">
            We strive to maintain a perfect balance between traditional techniques and contemporary design, creating pieces that are timeless, unique, and made to last for generations.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-medium mb-6">The Founder's Journey</h2>
              <p className="text-gray-600 mb-4">
                Luna Ville was founded by Isabella Morgan in 2015, after years of working as an interior designer and recognizing a gap in the market for truly customizable, high-quality rugs.
              </p>
              <p className="text-gray-600 mb-4">
                Isabella's journey began during her travels across Morocco, India, and Turkey, where she studied traditional weaving techniques and worked with local artisans. Inspired by their craftsmanship and dedication, she returned home with a vision to create a company that would honor these traditions while bringing fresh, contemporary designs to modern homes.
              </p>
              <p className="text-gray-600">
                Today, Luna Ville works with skilled artisans around the world, combining traditional techniques with innovative designs to create rugs that are both beautiful and functional.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-medium mb-12 text-center">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.id} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-lunaville-100 rounded-full flex items-center justify-center text-lunaville-600 font-bold text-xl mb-6">
                  {step.id}
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Materials */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-medium mb-8 text-center">Our Materials</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We source only the finest materials from around the world, ensuring our rugs are not only beautiful but durable and sustainable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material) => (
              <div key={material.id} className="group">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1">{material.name}</h3>
                <p className="text-sm text-gray-600">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-medium mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[180px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-medium mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-lunaville-600 text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lunaville-100 mb-8 max-w-2xl mx-auto">
            Let us help you create a custom rug that perfectly complements your home and reflects your unique style.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-lunaville-600"
              asChild
            >
              <Link to="/collections">Browse Collection</Link>
            </Button>
            <Button
              size="lg"
              className="bg-white text-lunaville-600 hover:bg-lunaville-50"
              asChild
            >
              <Link to="/custom-order">Request Custom Order</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock Data
const process = [
  {
    id: 1,
    title: "Consultation",
    description: "We start with an in-depth consultation to understand your style, space, and vision for your custom rug."
  },
  {
    id: 2,
    title: "Design",
    description: "Our designers create custom concepts based on your input, and work with you to refine the perfect design."
  },
  {
    id: 3,
    title: "Crafting",
    description: "Skilled artisans bring your design to life using traditional techniques and premium materials."
  }
];

const materials = [
  {
    id: 1,
    name: "New Zealand Wool",
    description: "Soft, durable, and naturally stain-resistant.",
    image: "https://images.unsplash.com/photo-1574943320219-89fde959fc44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Natural Silk",
    description: "Adds a luxurious sheen and softness to designs.",
    image: "https://images.unsplash.com/photo-1593357873518-e8c39d2bce0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Organic Cotton",
    description: "Eco-friendly and perfect for sensitive environments.",
    image: "https://images.unsplash.com/photo-1605162535881-beb50c1c2335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Natural Jute",
    description: "Sustainable and adds wonderful texture.",
    image: "https://images.unsplash.com/photo-1575193732883-6f03479cf0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const team = [
  {
    id: 1,
    name: "Isabella Morgan",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Production Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Client Relations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const values = [
  {
    id: 1,
    title: "Craftsmanship",
    description: "We take pride in every rug we create, focusing on quality, attention to detail, and expert craftsmanship to ensure each piece meets the highest standards."
  },
  {
    id: 2,
    title: "Sustainability",
    description: "We're committed to sustainable practices, from sourcing eco-friendly materials to ensuring fair working conditions for all artisans involved in our production."
  },
  {
    id: 3,
    title: "Innovation",
    description: "While we honor traditional techniques, we constantly explore new designs, materials, and methods to create rugs that are both timeless and contemporary."
  }
];

export default AboutPage;
