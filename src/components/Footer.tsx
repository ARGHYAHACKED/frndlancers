import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Mail, 
  Phone, 
  Instagram, 
  Twitter, 
  Linkedin,
  Facebook 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-8 w-8 text-teal-500" />
              <span className="font-bold text-xl">Frndlancers</span>
            </div>
            <p className="text-gray-400">
              Connecting talent with opportunity. Your one-stop platform for finding and hiring skilled freelancers.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/hire" className="text-gray-400 hover:text-white">Hire a Freelancer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Website Development</li>
              <li>App Development</li>
              <li>Influencer Marketing</li>
              <li>Graphics Design</li>
              <li>Photography & Videography</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>contact@frndlancers.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Frndlancers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;