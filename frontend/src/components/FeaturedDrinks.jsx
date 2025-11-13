import React, { useState, useEffect } from 'react';
import { Coffee, Heart, Star } from 'lucide-react';

const FeaturedDrinks = () => {
  const [featuredDrinks, setFeaturedDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchFeaturedDrinks = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/home/featured-drinks');
    //     const data = await response.json();
    //     setFeaturedDrinks(data);
    //   } catch (error) {
    //     console.error('Error fetching featured drinks:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchFeaturedDrinks();

    // Using mock data for now
    setTimeout(() => {
      const mockDrinks = [
        {
          id: 1,
          name: 'Caramel Macchiato',
          description: 'Espresso with vanilla syrup, steamed milk, and caramel drizzle',
          price: '$4.95',
          image: '/api/placeholder/300/200',
          rating: 4.8,
          isPopular: true
        },
        {
          id: 2,
          name: 'Vanilla Latte',
          description: 'Rich espresso with vanilla syrup and perfectly steamed milk',
          price: '$4.25',
          image: '/api/placeholder/300/200',
          rating: 4.7,
          isPopular: false
        },
        {
          id: 3,
          name: 'Iced Mocha',
          description: 'Cold brew coffee with chocolate syrup and whipped cream',
          price: '$4.75',
          image: '/api/placeholder/300/200',
          rating: 4.9,
          isPopular: true
        },
        {
          id: 4,
          name: 'Green Tea Frappé',
          description: 'Refreshing blend of matcha, milk, and ice with whipped cream',
          price: '$5.25',
          image: '/api/placeholder/300/200',
          rating: 4.6,
          isPopular: false
        }
      ];
      setFeaturedDrinks(mockDrinks);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Featured Drinks</h2>
          <p className="text-green-600 text-lg max-w-2xl mx-auto">
            Discover our most loved beverages, crafted with premium ingredients and served with passion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDrinks.map((drink) => (
            <div key={drink.id} className="bg-gradient-to-b from-green-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {drink.isPopular && (
                <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 inline-block m-4 rounded-full">
                  Popular Choice
                </div>
              )}
              
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <Coffee className="w-16 h-16 text-green-400" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">{drink.name}</h3>
                <p className="text-green-600 text-sm mb-4 line-clamp-2">{drink.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-700">{drink.price}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-green-600">{drink.rating}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                    Order Now
                  </button>
                  <button className="p-2 border border-green-300 rounded-lg hover:bg-green-50 transition-colors duration-200">
                    <Heart className="w-5 h-5 text-green-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
            View All Drinks
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrinks;