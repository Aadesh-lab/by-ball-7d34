import React from 'react';
import MenuList from '../components/MenuList';

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-cream-50">
      <div className="bg-gradient-to-r from-green-100 via-green-50 to-emerald-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-4">Our Menu</h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee, artisan teas, and freshly baked goods. 
            Every item is crafted with love and the finest ingredients.
          </p>
        </div>
      </div>
      <main>
        <MenuList />
      </main>
    </div>
  );
};

export default MenuPage;