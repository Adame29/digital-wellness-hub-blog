import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, Brain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Brain className="h-8 w-8 text-primary" />
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <span className="text-xl font-bold text-foreground">Digital Wellness Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              to="/resources" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Resources
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              <Link
                to="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/resources"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

