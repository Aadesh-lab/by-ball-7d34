import React from 'react';
import { Coffee, Star } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-100 via-green-50 to-emerald-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <Coffee className="w-12 h-12 text-green-600 mr-3" />
          <h1 className="text-5xl font-bold text-green-800">Brew & Bliss Café</h1>
        </div>
        
        <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
          Welcome to your neighborhood sanctuary where exceptional coffee meets warm hospitality. 
          Experience handcrafted beverages made with love and the finest ingredients.
        </p>
        
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-green-700 font-semibold">4.9/5 Rating</span>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Today's Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800">Signature Blend</h3>
              <p className="text-green-600 text-sm">Rich, smooth, perfectly balanced</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800">Fresh Pastries</h3>
              <p className="text-green-600 text-sm">Baked daily with premium ingredients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800">Cozy Atmosphere</h3>
              <p className="text-green-600 text-sm">Perfect for work, study, or relaxation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;