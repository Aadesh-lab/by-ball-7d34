import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Users, Award, Coffee } from 'lucide-react';

const OverviewSection = () => {
  const [cafeInfo, setCafeInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchCafeInfo = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/home/overview');
    //     const data = await response.json();
    //     setCafeInfo(data);
    //   } catch (error) {
    //     console.error('Error fetching cafe info:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchCafeInfo();

    // Using mock data for now
    setTimeout(() => {
      const mockInfo = {
        about: "Brew & Bliss Café has been serving the community for over 10 years, creating a warm and welcoming space where coffee lovers can enjoy expertly crafted beverages, fresh pastries, and meaningful connections. Our commitment to quality and sustainability drives everything we do.",
        stats: {
          yearsServing: 10,
          happyCustomers: 25000,
          coffeeCupsServed: 500000,
          awards: 8
        },
        location: {
          address: "123 Coffee Street, Downtown District, City 12345",
          phone: "+1 (555) 123-BREW",
          hours: {
            weekdays: "6:00 AM - 9:00 PM",
            weekends: "7:00 AM - 10:00 PM"
          }
        },
        features: [
          {
            icon: "wifi",
            title: "Free Wi-Fi",
            description: "High-speed internet perfect for work or study"
          },
          {
            icon: "seating",
            title: "Comfortable Seating",
            description: "Cozy chairs, tables, and quiet corners"
          },
          {
            icon: "local",
            title: "Local Sourcing",
            description: "Supporting local farmers and suppliers"
          },
          {
            icon: "sustainable",
            title: "Eco-Friendly",
            description: "Sustainable practices and recyclable cups"
          }
        ]
      };
      setCafeInfo(mockInfo);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="space-y-4">
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">About Brew & Bliss</h2>
          <p className="text-green-600 text-lg max-w-2xl mx-auto">
            More than just a café - we're your neighborhood gathering place
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Story</h3>
              <p className="text-green-700 leading-relaxed">
                {cafeInfo.about}
              </p>
            </div>
            
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="text-green-700">{cafeInfo.location?.address}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <p className="text-green-700">{cafeInfo.location?.phone}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="text-green-700">
                      <span className="font-semibold">Mon-Fri:</span> {cafeInfo.location?.hours?.weekdays}
                    </p>
                    <p className="text-green-700">
                      <span className="font-semibold">Weekends:</span> {cafeInfo.location?.hours?.weekends}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Our Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{cafeInfo.stats?.yearsServing}+</div>
                  <p className="text-green-700">Years Serving</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{cafeInfo.stats?.happyCustomers?.toLocaleString()}+</div>
                  <p className="text-green-700">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{cafeInfo.stats?.coffeeCupsServed?.toLocaleString()}+</div>
                  <p className="text-green-700">Cups Served</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{cafeInfo.stats?.awards}</div>
                  <p className="text-green-700">Awards Won</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Why Choose Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cafeInfo.features?.map((feature, index) => {
                  let IconComponent;
                  switch (feature.icon) {
                    case 'wifi':
                      IconComponent = Coffee;
                      break;
                    case 'seating':
                      IconComponent = Users;
                      break;
                    case 'local':
                      IconComponent = Award;
                      break;
                    case 'sustainable':
                      IconComponent = Coffee;
                      break;
                    default:
                      IconComponent = Coffee;
                  }
                  
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">{feature.title}</h4>
                        <p className="text-green-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Ready to Experience Brew & Bliss?</h3>
            <p className="text-green-700 mb-6">Join our community of coffee lovers and discover your new favorite spot.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                View Our Menu
              </button>
              <button className="border border-green-600 text-green-600 py-3 px-8 rounded-lg hover:bg-green-50 transition-colors duration-200 font-semibold">
                Find Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;