import React from 'react';
import { UtensilsCrossed, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <UtensilsCrossed className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-primary-400">Spicy Havens</span>
            </div>
            <p className="text-gray-400">
              Experience the finest dining in Vijayawada with our authentic cuisine and premium ambiance.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="text-gray-400 not-italic">
              Beside Trends, Kanchikacherla<br />
              Vijayawada, 521180<br />
              Andhra Pradesh
            </address>
            <p className="text-gray-400 mt-2">
              Phone: <a href="tel:1234567890" className="hover:text-primary-400">1234567890</a>
            </p>
            <p className="text-gray-400">
              Email: <a href="mailto:spicyhavens@gmail.com" className="hover:text-primary-400">spicyhavens@gmail.com</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="text-gray-400">
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Spicy Havens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
