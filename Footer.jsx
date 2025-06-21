import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Brain className="h-8 w-8 text-primary" />
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <span className="text-xl font-bold text-foreground">Digital Wellness Hub</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering you to build a healthier relationship with technology and social media. 
              Discover practical strategies for digital wellness and mental health.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Disclaimer:</strong> This website provides general information and is not intended 
                as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Crisis Support</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">National Suicide Prevention Lifeline</p>
                <p className="text-foreground font-medium">988</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Crisis Text Line</p>
                <p className="text-foreground font-medium">Text HOME to 741741</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">SAMHSA National Helpline</p>
                <p className="text-foreground font-medium">1-800-662-4357</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Digital Wellness Hub. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

