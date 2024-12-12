import React from 'react';
import { Link } from 'react-scroll';
import { UtensilsCrossed } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <UtensilsCrossed className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-primary-600">Spicy Havens</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {['home', 'menu', 'dine-in', 'reservation', 'contact', 'feedback'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-primary-600 capitalize cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;