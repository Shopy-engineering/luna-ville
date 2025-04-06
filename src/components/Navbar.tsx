
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "About", path: "/about" },
    { name: "Custom Order", path: "/custom-order" },
    { name: "Contact", path: "/contact" },
    { name: "Rug Customizer", path: "/rug-customizer" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <h1 className="text-2xl font-display font-semibold text-lunaville-700">Luna Ville</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-lunaville-700 ${
                    isActive ? "text-lunaville-700" : "text-gray-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Shopping Bag Icon */}
          <div className="hidden md:flex items-center">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-lunaville-700">
              <ShoppingBag size={20} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-lunaville-700 ${
                      isActive ? "text-lunaville-700" : "text-gray-600"
                    }`
                  }
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="ghost" size="sm" className="flex items-center justify-start text-gray-600 hover:text-lunaville-700 pl-0">
                <ShoppingBag size={18} className="mr-2" />
                Shopping Bag
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
