import React, { useState, useEffect } from 'react';
import { Camera, Coffee, Users, Palette, Search, Filter } from 'lucide-react';

const GalleryGrid = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'interior', name: 'Interior', icon: Palette },
    { id: 'coffee-art', name: 'Coffee Art', icon: Coffee },
    { id: 'atmosphere', name: 'Atmosphere', icon: Users }
  ];

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchGalleryImages = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/gallery');
    //     const data = await response.json();
    //     setGalleryImages(data);
    //   } catch (error) {
    //     console.error('Error fetching gallery images:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchGalleryImages();

    // Using mock data for now
    setTimeout(() => {
      const mockGalleryImages = [
        {
          id: 1,
          title: 'Main Seating Area',
          category: 'interior',
          description: 'Our cozy main seating area with vintage furniture and warm lighting',
          imageUrl: '/api/placeholder/400/300',
          tags: ['seating', 'cozy', 'vintage'],
          photographer: 'Sarah Johnson',
          dateTaken: '2023-09-15',
          featured: true
        },
        {
          id: 2,
          title: 'Perfect Latte Art',
          category: 'coffee-art',
          description: 'Intricate rosetta pattern created by our skilled barista',
          imageUrl: '/api/placeholder/400/300',
          tags: ['latte', 'art', 'rosetta'],
          photographer: 'Mike Chen',
          dateTaken: '2023-10-02',
          featured: true
        },
        {
          id: 3,
          title: 'Window Corner Reading Nook',
          category: 'interior',
          description: 'Natural light streams through our reading corner',
          imageUrl: '/api/placeholder/400/300',
          tags: ['reading', 'natural-light', 'corner'],
          photographer: 'Elena Martinez',
          dateTaken: '2023-08-20',
          featured: false
        },
        {
          id: 4,
          title: 'Coffee Bean Selection',
          category: 'coffee-art',
          description: 'Our carefully curated selection of premium coffee beans',
          imageUrl: '/api/placeholder/400/300',
          tags: ['beans', 'selection', 'premium'],
          photographer: 'David Wilson',
          dateTaken: '2023-09-28',
          featured: false
        },
        {
          id: 5,
          title: 'Morning Rush Atmosphere',
          category: 'atmosphere',
          description: 'The bustling energy of our morning customers',
          imageUrl: '/api/placeholder/400/300',
          tags: ['morning', 'busy', 'customers'],
          photographer: 'Lisa Park',
          dateTaken: '2023-10-05',
          featured: true
        },
        {
          id: 6,
          title: 'Barista Counter Setup',
          category: 'interior',
          description: 'Behind the scenes of our professional espresso station',
          imageUrl: '/api/placeholder/400/300',
          tags: ['barista', 'counter', 'equipment'],
          photographer: 'Tom Rodriguez',
          dateTaken: '2023-09-12',
          featured: false
        },
        {
          id: 7,
          title: 'Cappuccino Foam Art',
          category: 'coffee-art',
          description: 'Beautiful leaf pattern in freshly steamed milk foam',
          imageUrl: '/api/placeholder/400/300',
          tags: ['cappuccino', 'foam', 'leaf-art'],
          photographer: 'Anna Thompson',
          dateTaken: '2023-10-08',
          featured: false
        },
        {
          id: 8,
          title: 'Evening Study Session',
          category: 'atmosphere',
          description: 'Students enjoying quiet study time in our café',
          imageUrl: '/api/placeholder/400/300',
          tags: ['evening', 'study', 'students'],
          photographer: 'James Lee',
          dateTaken: '2023-09-30',
          featured: false
        },
        {
          id: 9,
          title: 'Wall Art Display',
          category: 'interior',
          description: 'Local artist exhibition on our feature wall',
          imageUrl: '/api/placeholder/400/300',
          tags: ['art', 'wall', 'local-artist'],
          photographer: 'Maria Garcia',
          dateTaken: '2023-08-25',
          featured: true
        },
        {
          id: 10,
          title: 'Cold Brew Creation',
          category: 'coffee-art',
          description: 'The meticulous process of our signature cold brew',
          imageUrl: '/api/placeholder/400/300',
          tags: ['cold-brew', 'process', 'signature'],
          photographer: 'Kevin Brown',
          dateTaken: '2023-10-01',
          featured: false
        },
        {
          id: 11,
          title: 'Community Event',
          category: 'atmosphere',
          description: 'Local poetry reading event in our main space',
          imageUrl: '/api/placeholder/400/300',
          tags: ['community', 'poetry', 'event'],
          photographer: 'Rachel Green',
          dateTaken: '2023-09-18',
          featured: false
        },
        {
          id: 12,
          title: 'Kitchen Pastry Display',
          category: 'interior',
          description: 'Fresh pastries and baked goods in our display case',
          imageUrl: '/api/placeholder/400/300',
          tags: ['pastries', 'display', 'baked-goods'],
          photographer: 'Chris Taylor',
          dateTaken: '2023-10-03',
          featured: false
        }
      ];
      setGalleryImages(mockGalleryImages);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleImageClick = (image) => {
    setSelectedImage(image);
    // In a real implementation, this would trigger the ImageViewer component to open
    console.log('Selected image:', image);
  };

  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-6 animate-pulse"></div>
            <div className="flex justify-center space-x-4 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-xl animate-pulse">
                <div className="h-64 bg-gray-200 rounded-t-xl"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Visual Stories</h2>
            <p className="text-green-700 text-lg max-w-2xl mx-auto">
              Explore the moments that make our café special, from artisanal creations to cherished memories
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-green-700 border border-green-200 hover:bg-green-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-green-400 mb-4">
              <Camera className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-green-800 mb-2">No photos found</h3>
            <p className="text-green-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => handleImageClick(image)}
                className={`group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  image.featured ? 'ring-2 ring-green-400' : ''
                }`}
              >
                {image.featured && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="relative h-64 bg-gradient-to-br from-amber-100 to-stone-200 flex items-center justify-center overflow-hidden">
                  <Camera className="w-12 h-12 text-green-400" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <Camera className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-green-800 text-sm line-clamp-1">{image.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      image.category === 'interior' ? 'bg-amber-100 text-amber-700' :
                      image.category === 'coffee-art' ? 'bg-stone-100 text-stone-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {categories.find(cat => cat.id === image.category)?.name || image.category}
                    </span>
                  </div>
                  <p className="text-green-600 text-xs mb-3 line-clamp-2">{image.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {image.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                      {image.tags.length > 2 && (
                        <span className="text-xs text-green-500">+{image.tags.length - 2}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-green-100">
                    <div className="flex items-center justify-between text-xs text-green-500">
                      <span>by {image.photographer}</span>
                      <span>{new Date(image.dateTaken).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-50 via-stone-50 to-amber-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Share Your Moments</h3>
            <p className="text-green-700 mb-6">
              Captured a special moment at Brew & Bliss? We'd love to feature your photos in our gallery!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                Submit Your Photo
              </button>
              <button className="border border-green-600 text-green-600 py-3 px-6 rounded-lg hover:bg-green-50 transition-colors duration-200 font-semibold">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;