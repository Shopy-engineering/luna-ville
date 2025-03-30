
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-display font-medium text-gray-900 mb-3">Luna Ville</h3>
            <p className="text-gray-600 text-sm">
              Handcrafted custom rugs that transform your space and reflect your unique style.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/collections" className="text-gray-600 text-sm hover:text-lunaville-600">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/custom-order" className="text-gray-600 text-sm hover:text-lunaville-600">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-600 text-sm hover:text-lunaville-600">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-600 text-sm hover:text-lunaville-600">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 text-sm hover:text-lunaville-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 text-sm hover:text-lunaville-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 text-sm hover:text-lunaville-600">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 text-sm hover:text-lunaville-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 text-sm hover:text-lunaville-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-500 hover:text-lunaville-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-lunaville-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-lunaville-600">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@lunaville.com" className="text-gray-500 hover:text-lunaville-600">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Sign up for our newsletter to receive updates on new collections and exclusive offers.
            </p>
            <div className="flex mt-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-lunaville-500"
              />
              <button className="bg-lunaville-600 hover:bg-lunaville-700 text-white px-4 py-2 text-sm rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Luna Ville. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
