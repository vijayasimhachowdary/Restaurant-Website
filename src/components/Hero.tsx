import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&q=80&w=2070',
    alt: 'Delicious Biryani'
  },
  {
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=2070',
    alt: 'Traditional Thali'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070',
    alt: 'Restaurant Ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=2074',
    alt: 'Premium Dining Area'
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full bg-gradient-to-r from-black/50 to-black/50">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white space-y-8 px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to Spicy Havens
            <span className="block text-2xl md:text-3xl mt-2 text-primary-200">
              A Taste You'll Remember!
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="reservation"
              smooth={true}
              duration={500}
              className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition cursor-pointer"
            >
              Reserve a Premium Table
            </Link>
            <Link
              to="dine-in"
              smooth={true}
              duration={500}
              className="bg-white text-primary-600 px-8 py-3 rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              Normal Dine-In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;