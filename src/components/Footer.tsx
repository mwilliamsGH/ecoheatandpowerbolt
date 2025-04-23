import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Eco</span>
                <span className="text-sm font-medium -mt-1">Heat and Power</span>
              </div>
            </div>
            <p className="text-green-100 mb-4">
              Providing sustainable heating solutions since 2010. We're committed to helping you reduce your carbon footprint while keeping your home warm and comfortable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/firewood" className="text-green-200 hover:text-white transition-colors">Firewood</Link></li>
              <li><Link to="/biomass" className="text-green-200 hover:text-white transition-colors">Biomass Boilers</Link></li>
              <li><Link to="/solar" className="text-green-200 hover:text-white transition-colors">Solar Panels</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/firewood" className="text-green-200 hover:text-white transition-colors">Sustainable Firewood</Link></li>
              <li><Link to="/biomass" className="text-green-200 hover:text-white transition-colors">Biomass Installation</Link></li>
              <li><Link to="/biomass" className="text-green-200 hover:text-white transition-colors">Biomass Maintenance</Link></li>
              <li><Link to="/solar" className="text-green-200 hover:text-white transition-colors">Solar Panel Installation</Link></li>
              <li><Link to="/solar" className="text-green-200 hover:text-white transition-colors">Energy Consultation</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white transition-colors">Free Quotation</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>6108 South Street, Halifax, NS, B3H 1T3, Canada</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <span>(902) 555-0123</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <a href="mailto:info@ecohap.com" className="hover:underline">info@ecohap.com</a>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md inline-block transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm">© 2025 Eco Heat and Power. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-green-200">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;