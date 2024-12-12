import React from 'react';
import { Link } from 'react-scroll';

const DineIn = () => {
  return (
    <section id="dine-in" className="py-20 bg-cloud-pattern bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Dine-In Options</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-primary-600 mb-4">Normal Dine-In</h3>
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" 
              alt="Normal Dining Area" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-600 mb-6">
              Experience our welcoming atmosphere with comfortable seating and prompt service.
              Perfect for casual dining and family meals.
            </p>
            <button className="w-full bg-primary-600 text-white py-3 rounded-full hover:bg-primary-700 transition">
              Walk In Available
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-primary-600 mb-4">Premium Dine-In</h3>
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=2074" 
              alt="Premium Dining Area" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-600 mb-6">
              Elevate your dining experience with our premium section featuring exclusive ambiance
              and personalized service. Perfect for special occasions.
            </p>
            <Link
              to="reservation"
              smooth={true}
              duration={500}
              className="block w-full bg-primary-600 text-white py-3 rounded-full hover:bg-primary-700 transition text-center cursor-pointer"
            >
              Reserve Premium Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DineIn;