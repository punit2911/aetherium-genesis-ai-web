
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "py-3 cosmic-card"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cosmic-cyan to-cosmic-purple flex items-center justify-center animate-pulse-slow">
                <div className="w-6 h-6 rounded-full bg-cosmic-dark"></div>
              </div>
              <span className="text-2xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
                Aetherium<span className="text-cosmic-cyan">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-cosmic-cyan transition-colors">
              Features
            </a>
            <a href="#demo" className="text-white hover:text-cosmic-cyan transition-colors">
              Demo
            </a>
            <a href="#testimonials" className="text-white hover:text-cosmic-cyan transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-white hover:text-cosmic-cyan transition-colors">
              Pricing
            </a>
            <Button className="glass-button">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden menu-button p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mobile-menu cosmic-card mt-3 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-white hover:text-cosmic-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#demo"
              className="text-white hover:text-cosmic-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-cosmic-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-cosmic-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <Button className="glass-button w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
