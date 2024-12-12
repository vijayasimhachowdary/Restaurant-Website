import React from 'react';
import { menuData } from '../data/menu';

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Menu</h2>
        
        {menuData.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-semibold text-primary-600 mb-8">{category.title}</h3>
            
            {category.sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-12">
                <h4 className="text-xl font-medium text-gray-700 mb-6">{section.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h5 className="text-lg font-semibold mb-2">{item.name}</h5>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-primary-600 font-bold">₹{item.price}</span>
                          <button className="bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition">
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;