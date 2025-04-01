import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                <p className="text-gray-600">
                  Beside Trends, Kanchikacherla<br />
                  Vijayawada, 521180<br />
                  Andhra Pradesh
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                <a href="tel:1234567890" className="text-gray-600 hover:text-primary-600">
                  1234567890
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                <a href="mailto:spicyheavens@gmail.com" className="text-gray-600 hover:text-primary-600">
                  spicyheavens@gmail.com
                </a>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-full hover:bg-primary-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
