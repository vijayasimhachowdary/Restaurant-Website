import React, { useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Priya Reddy",
    rating: 5,
    comment: "Amazing biryani! The flavors are authentic and the service is excellent.",
    date: "2024-03-15"
  },
  {
    id: 2,
    name: "Ravi Kumar",
    rating: 4,
    comment: "Great ambiance and tasty food. The premium dining experience is worth it.",
    date: "2024-03-14"
  },
  {
    id: 3,
    name: "Sneha Patel",
    rating: 5,
    comment: "Best restaurant in Vijayawada! Love their vegetarian options.",
    date: "2024-03-13"
  }
];

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Customer Feedback</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Leave a Review</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-8 h-8 cursor-pointer ${
                        (hover || rating) >= star
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Your Review</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-full hover:bg-primary-700 transition"
              >
                Submit Review
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Reviews</h3>
            
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;