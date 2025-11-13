import React, { useState } from 'react';
import PriceTag from './PriceTag';
import { Coffee, Heart, Plus, Star, Leaf } from 'lucide-react';

const MenuItem = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  const getDietaryIcon = (dietary) => {
    switch (dietary) {
      case 'vegan':
        return <Leaf className="w-4 h-4 text-green-600" />;
      case 'vegetarian':
        return <Leaf className="w-4 h-4 text-green-500" />;
      case 'caffeine-free':
        return <span className="text-xs font-semibold text-blue-600">CF</span>;
      case 'caffeine':
        return <Coffee className="w-4 h-4 text-amber-600" />;
      case 'antioxidants':
        return <Star className="w-4 h-4 text-purple-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-100">
      {item.isPopular && (
        <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 inline-block m-4 rounded-full">
          Popular Choice
        </div>
      )}
      
      <div className="h-48 bg-green-100 flex items-center justify-center relative">
        <Coffee className="w-16 h-16 text-green-400" />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-200"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-green-800">{item.name}</h3>
          <div className="flex space-x-1">
            {item.dietary.map((diet, index) => (
              <div key={index} className="flex items-center justify-center w-6 h-6">
                {getDietaryIcon(diet)}
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-green-600 text-sm mb-4 line-clamp-3 leading-relaxed">{item.description}</p>
        
        {item.sizes.length > 1 && (
          <div className="mb-4">
            <label className="block text-sm font-semibold text-green-800 mb-2">Size:</label>
            <div className="flex flex-wrap gap-2">
              {item.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                    selectedSize.size === size.size
                      ? 'bg-green-600 text-white'
                      : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                  }`}
                >
                  {size.size}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <PriceTag price={selectedSize.price} size="large" />
          {item.sizes.length > 1 && (
            <span className="text-sm text-green-600">for {selectedSize.size}</span>
          )}
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add to Order</span>
          </button>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-green-600">
          <div className="flex space-x-3">
            {item.dietary.includes('vegan') && (
              <span className="bg-green-100 px-2 py-1 rounded-full text-xs">Vegan</span>
            )}
            {item.dietary.includes('vegetarian') && !item.dietary.includes('vegan') && (
              <span className="bg-green-100 px-2 py-1 rounded-full text-xs">Vegetarian</span>
            )}
            {item.dietary.includes('caffeine-free') && (
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Caffeine Free</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;