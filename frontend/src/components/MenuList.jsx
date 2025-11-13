import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { Coffee, Leaf, Cookie, Search } from 'lucide-react';

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Items', icon: Coffee },
    { id: 'coffee', name: 'Coffee', icon: Coffee },
    { id: 'tea', name: 'Tea', icon: Leaf },
    { id: 'bakery', name: 'Bakery', icon: Cookie }
  ];

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchMenuItems = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/menu');
    //     const data = await response.json();
    //     setMenuItems(data);
    //   } catch (error) {
    //     console.error('Error fetching menu items:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchMenuItems();

    // Using mock data for now
    setTimeout(() => {
      const mockMenuItems = [
        {
          id: 1,
          name: 'Espresso',
          category: 'coffee',
          description: 'Rich, bold shot of our signature blend with a perfect crema',
          price: 2.95,
          sizes: [
            { size: 'Single', price: 2.95 },
            { size: 'Double', price: 3.95 }
          ],
          isPopular: true,
          dietary: ['vegan'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 2,
          name: 'Cappuccino',
          category: 'coffee',
          description: 'Classic Italian coffee with steamed milk foam and a dusting of cocoa',
          price: 4.25,
          sizes: [
            { size: 'Small', price: 4.25 },
            { size: 'Medium', price: 4.95 },
            { size: 'Large', price: 5.65 }
          ],
          isPopular: true,
          dietary: ['vegetarian'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 3,
          name: 'Caramel Macchiato',
          category: 'coffee',
          description: 'Espresso with vanilla syrup, steamed milk, and rich caramel drizzle',
          price: 5.25,
          sizes: [
            { size: 'Small', price: 5.25 },
            { size: 'Medium', price: 5.95 },
            { size: 'Large', price: 6.65 }
          ],
          isPopular: false,
          dietary: ['vegetarian'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 4,
          name: 'Cold Brew',
          category: 'coffee',
          description: 'Smooth, refreshing coffee steeped for 12 hours for maximum flavor',
          price: 3.95,
          sizes: [
            { size: 'Medium', price: 3.95 },
            { size: 'Large', price: 4.65 }
          ],
          isPopular: true,
          dietary: ['vegan'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 5,
          name: 'Earl Grey',
          category: 'tea',
          description: 'Classic black tea blend with bergamot oil and cornflower petals',
          price: 3.25,
          sizes: [
            { size: 'Cup', price: 3.25 },
            { size: 'Pot', price: 5.95 }
          ],
          isPopular: false,
          dietary: ['vegan', 'caffeine'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 6,
          name: 'Chamomile Tea',
          category: 'tea',
          description: 'Soothing herbal tea with honey and lemon, perfect for relaxation',
          price: 3.75,
          sizes: [
            { size: 'Cup', price: 3.75 },
            { size: 'Pot', price: 6.25 }
          ],
          isPopular: true,
          dietary: ['vegan', 'caffeine-free'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 7,
          name: 'Green Tea Matcha Latte',
          category: 'tea',
          description: 'Premium ceremonial grade matcha with steamed milk and light sweetness',
          price: 4.95,
          sizes: [
            { size: 'Small', price: 4.95 },
            { size: 'Medium', price: 5.65 },
            { size: 'Large', price: 6.35 }
          ],
          isPopular: true,
          dietary: ['vegetarian', 'antioxidants'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 8,
          name: 'Croissant',
          category: 'bakery',
          description: 'Buttery, flaky French pastry baked fresh daily',
          price: 3.50,
          sizes: [
            { size: 'Regular', price: 3.50 }
          ],
          isPopular: true,
          dietary: ['vegetarian'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 9,
          name: 'Blueberry Muffin',
          category: 'bakery',
          description: 'Moist vanilla muffin bursting with fresh blueberries',
          price: 4.25,
          sizes: [
            { size: 'Regular', price: 4.25 }
          ],
          isPopular: false,
          dietary: ['vegetarian'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 10,
          name: 'Chocolate Chip Cookie',
          category: 'bakery',
          description: 'Chewy cookie loaded with premium dark chocolate chips',
          price: 2.95,
          sizes: [
            { size: 'Regular', price: 2.95 }
          ],
          isPopular: true,
          dietary: ['vegetarian'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 11,
          name: 'Almond Scone',
          category: 'bakery',
          description: 'Traditional British scone with sliced almonds and light glaze',
          price: 3.75,
          sizes: [
            { size: 'Regular', price: 3.75 }
          ],
          isPopular: false,
          dietary: ['vegetarian'],
          image: '/api/placeholder/300/200'
        },
        {
          id: 12,
          name: 'Banana Bread',
          category: 'bakery',
          description: 'Homestyle banana bread with walnuts, served warm',
          price: 4.50,
          sizes: [
            { size: 'Slice', price: 4.50 },
            { size: 'Half Loaf', price: 12.95 }
          ],
          isPopular: true,
          dietary: ['vegetarian'],
          image: '/api/placeholder/300/200'
        }
      ];
      setMenuItems(mockMenuItems);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedItems = filteredItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-6 animate-pulse"></div>
            <div className="flex justify-center space-x-4 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
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
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-green-700 border border-green-200 hover:bg-green-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {activeCategory === 'all' ? (
          Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-green-800 capitalize">{category}</h2>
                <div className="ml-4 flex-1 h-px bg-gradient-to-r from-green-300 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-green-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-green-800 mb-2">No items found</h3>
            <p className="text-green-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuList;