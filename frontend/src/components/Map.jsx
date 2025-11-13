import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Star, Navigation, ExternalLink } from 'lucide-react';

const Map = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('map');

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchLocations = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/contact/locations');
    //     const data = await response.json();
    //     setLocations(data);
    //   } catch (error) {
    //     console.error('Error fetching locations:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchLocations();

    // Using mock data for now
    setTimeout(() => {
      const mockLocations = [
        {
          id: 1,
          name: 'Brew & Bliss - Covent Garden',
          address: '42 Long Acre, Covent Garden, London WC2E 9LA',
          phone: '+44 20 7123 4567',
          email: 'coventgarden@brewandbliss.com',
          coordinates: { lat: 51.5129, lng: -0.1235 },
          isMainBranch: true,
          features: ['Free Wi-Fi', 'Outdoor Seating', 'Meeting Rooms', 'Live Music'],
          rating: 4.8,
          totalReviews: 342,
          openingHours: {
            monday: '6:00 AM - 9:00 PM',
            tuesday: '6:00 AM - 9:00 PM',
            wednesday: '6:00 AM - 9:00 PM',
            thursday: '6:00 AM - 9:00 PM',
            friday: '6:00 AM - 10:00 PM',
            saturday: '7:00 AM - 10:00 PM',
            sunday: '7:00 AM - 8:00 PM'
          },
          specialties: ['Signature Blend', 'Artisan Pastries', 'Local Art Gallery'],
          parking: 'Street parking available',
          accessibility: 'Wheelchair accessible',
          image: '/api/placeholder/400/250'
        },
        {
          id: 2,
          name: 'Brew & Bliss - Shoreditch',
          address: '15 Brick Lane, Shoreditch, London E1 6PU',
          phone: '+44 20 7234 5678',
          email: 'shoreditch@brewandbliss.com',
          coordinates: { lat: 51.5201, lng: -0.0718 },
          isMainBranch: false,
          features: ['Co-working Space', 'Free Wi-Fi', 'Roastery Tours', 'Art Workshops'],
          rating: 4.7,
          totalReviews: 198,
          openingHours: {
            monday: '7:00 AM - 8:00 PM',
            tuesday: '7:00 AM - 8:00 PM',
            wednesday: '7:00 AM - 8:00 PM',
            thursday: '7:00 AM - 8:00 PM',
            friday: '7:00 AM - 9:00 PM',
            saturday: '8:00 AM - 9:00 PM',
            sunday: '8:00 AM - 7:00 PM'
          },
          specialties: ['Cold Brew', 'Specialty Roasts', 'Vegan Options'],
          parking: 'Bicycle parking available',
          accessibility: 'Wheelchair accessible',
          image: '/api/placeholder/400/250'
        },
        {
          id: 3,
          name: 'Brew & Bliss - Camden',
          address: '28 Camden High Street, Camden, London NW1 0JH',
          phone: '+44 20 7345 6789',
          email: 'camden@brewandbliss.com',
          coordinates: { lat: 51.5392, lng: -0.1426 },
          isMainBranch: false,
          features: ['Outdoor Terrace', 'Free Wi-Fi', 'Book Exchange', 'Pet Friendly'],
          rating: 4.6,
          totalReviews: 156,
          openingHours: {
            monday: '7:00 AM - 8:00 PM',
            tuesday: '7:00 AM - 8:00 PM',
            wednesday: '7:00 AM - 8:00 PM',
            thursday: '7:00 AM - 8:00 PM',
            friday: '7:00 AM - 9:00 PM',
            saturday: '8:00 AM - 9:00 PM',
            sunday: '8:00 AM - 7:00 PM'
          },
          specialties: ['Matcha Lattes', 'Organic Teas', 'Healthy Snacks'],
          parking: 'Camden Market parking nearby',
          accessibility: 'Ground floor accessible',
          image: '/api/placeholder/400/250'
        }
      ];
      setLocations(mockLocations);
      setSelectedLocation(mockLocations[0]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleGetDirections = (location) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
            <div className="h-96 bg-gray-200 rounded-xl mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Locations in London</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Find your nearest Brew & Bliss location and discover the unique character of each branch
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'map'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-green-700 border border-green-200 hover:bg-green-50'
              }`}
            >
              Map View
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'list'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-green-700 border border-green-200 hover:bg-green-50'
              }`}
            >
              List View
            </button>
          </div>

          {activeTab === 'map' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-green-100 to-stone-200 rounded-xl h-96 flex items-center justify-center border border-green-200">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Interactive Map</h3>
                    <p className="text-green-700">Map integration would be implemented here</p>
                    <div className="mt-4 grid grid-cols-1 gap-2">
                      {locations.map((location) => (
                        <button
                          key={location.id}
                          onClick={() => setSelectedLocation(location)}
                          className={`text-left p-2 rounded-lg transition-colors duration-200 ${
                            selectedLocation?.id === location.id
                              ? 'bg-green-600 text-white'
                              : 'bg-white bg-opacity-70 text-green-700 hover:bg-green-50'
                          }`}
                        >
                          <div className="font-semibold text-sm">{location.name}</div>
                          <div className="text-xs opacity-90">{location.address}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                {selectedLocation && (
                  <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg border border-amber-200 overflow-hidden">
                    <div className="h-32 bg-gradient-to-br from-stone-200 to-amber-200 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-green-600" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-green-800 mb-1">{selectedLocation.name}</h3>
                          {selectedLocation.isMainBranch && (
                            <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                              Main Branch
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-green-700 font-semibold">
                            {selectedLocation.rating} ({selectedLocation.totalReviews})
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <p className="text-green-700 text-sm">{selectedLocation.address}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-green-600" />
                          <p className="text-green-700 text-sm">{selectedLocation.phone}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 text-green-600" />
                          <p className="text-green-700 text-sm">
                            Today: {selectedLocation.openingHours.monday}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-green-800 mb-2">Features</h4>
                        <div className="flex flex-wrap gap-1">
                          {selectedLocation.features.map((feature, index) => (
                            <span key={index} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleGetDirections(selectedLocation)}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>Get Directions</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'list' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <div key={location.id} className="bg-gradient-to-br from-white to-stone-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-200">
                  <div className="h-48 bg-gradient-to-br from-amber-200 to-stone-300 flex items-center justify-center relative">
                    <MapPin className="w-12 h-12 text-green-600" />
                    {location.isMainBranch && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Main Branch
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white bg-opacity-90 rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-green-700 font-semibold">
                        {location.rating}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-3">{location.name}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-green-700 text-sm">{location.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-green-600" />
                        <p className="text-green-700 text-sm">{location.phone}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-800 mb-2 text-sm">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {location.specialties.slice(0, 3).map((specialty, index) => (
                          <span key={index} className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 text-sm text-green-600">
                        <Clock className="w-4 h-4" />
                        <span>Open today: {location.openingHours.monday}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleGetDirections(location)}
                        className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold text-sm flex items-center justify-center space-x-1"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>Directions</span>
                      </button>
                      <button
                        onClick={() => setSelectedLocation(location)}
                        className="flex-1 border border-green-600 text-green-600 py-2 px-3 rounded-lg hover:bg-green-50 transition-colors duration-200 font-semibold text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-green-100 via-stone-100 to-amber-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-green-700 mb-6 max-w-2xl mx-auto">
            Get in touch with us directly and we'll help you find the perfect Brew & Bliss experience. 
            We're always here to help make your visit special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
              Contact Us
            </button>
            <button className="border border-green-600 text-green-600 py-3 px-6 rounded-lg hover:bg-green-50 transition-colors duration-200 font-semibold">
              Plan Your Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;