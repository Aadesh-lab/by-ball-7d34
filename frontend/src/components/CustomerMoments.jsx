import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Calendar, Users, Star, Camera, Quote } from 'lucide-react';

const CustomerMoments = () => {
  const [customerMoments, setCustomerMoments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMoment, setSelectedMoment] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const momentsPerPage = 6;

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchCustomerMoments = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/gallery/customer-moments');
    //     const data = await response.json();
    //     setCustomerMoments(data);
    //   } catch (error) {
    //     console.error('Error fetching customer moments:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchCustomerMoments();

    // Using mock data for now
    setTimeout(() => {
      const mockCustomerMoments = [
        {
          id: 1,
          customerName: 'Emma Wilson',
          customerImage: '/api/placeholder/60/60',
          momentType: 'celebration',
          title: 'Birthday Surprise',
          description: 'The staff surprised me with a birthday cake and sang happy birthday. It made my day so special!',
          quote: 'This place feels like a second home. The warmth and care from the team is incredible.',
          imageUrl: '/api/placeholder/400/300',
          date: '2023-10-10',
          likes: 42,
          comments: 8,
          tags: ['birthday', 'celebration', 'surprise', 'cake'],
          occasion: 'Birthday',
          rating: 5,
          verified: true
        },
        {
          id: 2,
          customerName: 'James Rodriguez',
          customerImage: '/api/placeholder/60/60',
          momentType: 'proposal',
          title: 'She Said Yes!',
          description: 'Proposed to my girlfriend at our favorite corner table. The staff helped make it perfect with fairy lights!',
          quote: 'Our love story began here over coffee dates. It was only fitting to start our engagement here too.',
          imageUrl: '/api/placeholder/400/300',
          date: '2023-10-05',
          likes: 156,
          comments: 23,
          tags: ['proposal', 'engagement', 'love', 'fairy-lights'],
          occasion: 'Proposal',
          rating: 5,
          verified: true
        },
        {
          id: 3,
          customerName: 'Sarah and Mike',
          customerImage: '/api/placeholder/60/60',
          momentType: 'first-date',
          title: 'First Date Nerves',
          description: 'Our first date was here 2 years ago. Now we come every Sunday for brunch!',
          quote: 'The cozy atmosphere helped break the ice. We talked for hours without realizing.',
          imageUrl: '/api/placeholder/400/300',
          date: '2023-09-28',
          likes: 73,
          comments: 12,
          tags: ['first-date', 'anniversary', 'brunch', 'tradition'],
          occasion: 'Anniversary',
          rating: 5,
          verified: true
        },
        {
          id: 4,
          customerName: 'Lisa Park',
          customerImage: '/api/placeholder/60/60',
          momentType: 'achievement',
          title: 'Book Signing Success',
          description: 'Celebrated finishing my first novel with the best latte in town. Dreams do come true!',
          quote: 'I wrote half of my book in this café. The creative energy here is infectious.',
          imageUrl: '/api/placeholder/400/300',
          date: '2023-09-25',
          likes: 89,
          comments: 15,
          tags: ['achievement', 'book', 'writing', 'dreams'],
          occasion: 'Book Launch',
          rating: 5,
          verified: true
        },
        {
          id: 5,
          customerName: 'Tommy & Friends',
          customerImage: '/api/placeholder/60/60',
          momentType: 'friendship',
          title: 'Weekly Study Group',
          description: 'Our study group has been meeting here every Tuesday for 3 years. We all graduated together!',
          quote: 'This place saw us through exams, stress, and celebrations. Forever grateful.',
          imageUrl: '/api/placeholder/400/300',
          date: '2023-09-20',
          likes: 124,
          comments: 19,
          tags: ['study-group', 'graduation', 'friendship', 'tradition'],
          occasion: 'Graduation',
          rating: 5,
          verified: true
        },
        {
          id: 6,
          customerName: 'Maria Garcia',
          customerImage: '/api/placeholder/60/60',
          momentType: 'family',
          title: 'Three Generations',
          description: 'Brought my grandmother and daughter here for a three-generation coffee date. So precious!',
          quote: 'Creating beautiful memories across generations. This place brings families together.',
          imageUrl: '/api/placeholder/400/300',
          date: '2023-09-15',
          likes: 98,
          comments: 14,
          tags: ['family', 'generations', 'grandmother', 'tradition'],
          occasion: 'Family Time',
          rating: 5,
          verified: true
        },
        {
          id: 7,
          customerName: 'David Kim',
          customerImage: '/api/placeholder/60/60',
          momentType: 'work',
          title: 'Promotion Celebration',
          description: 'Got promoted and treated my team to coffee. The staff congratulated us with complimentary pastries!',
          quote: 'Success tastes better when shared with good people in a great place.',
          imageUrl: '/api/placeholder/400/300',
          date: '2023-09-12',
          likes: 67,
          comments: 9,
          tags: ['promotion', 'team', 'celebration', 'success'],
          occasion: 'Work Promotion',
          rating: 5,
          verified: true
        },
        {
          id: 8,
          customerName: 'Anna Thompson',
          customerImage: '/api/placeholder/60/60',
          momentType: 'community',
          title: 'Art Exhibition Opening',
          description: 'My local art exhibition opened here last month. The community support was overwhelming!',
          quote: 'This café supports local artists and creates a platform for our dreams.',
          imageUrl: '/api/placeholder/400/300',
          date: '2023-09-08',
          likes: 145,
          comments: 27,
          tags: ['art', 'exhibition', 'community', 'support'],
          occasion: 'Art Exhibition',
          rating: 5,
          verified: true
        }
      ];
      setCustomerMoments(mockCustomerMoments);
      setLoading(false);
    }, 1200);
  }, []);

  const getMomentIcon = (momentType) => {
    switch (momentType) {
      case 'celebration':
        return Star;
      case 'proposal':
        return Heart;
      case 'first-date':
        return Heart;
      case 'achievement':
        return Star;
      case 'friendship':
        return Users;
      case 'family':
        return Users;
      case 'work':
        return Star;
      case 'community':
        return Users;
      default:
        return Camera;
    }
  };

  const getMomentColor = (momentType) => {
    switch (momentType) {
      case 'celebration':
        return 'from-yellow-100 to-orange-100 border-yellow-200';
      case 'proposal':
        return 'from-pink-100 to-red-100 border-pink-200';
      case 'first-date':
        return 'from-pink-100 to-purple-100 border-pink-200';
      case 'achievement':
        return 'from-blue-100 to-indigo-100 border-blue-200';
      case 'friendship':
        return 'from-green-100 to-emerald-100 border-green-200';
      case 'family':
        return 'from-amber-100 to-yellow-100 border-amber-200';
      case 'work':
        return 'from-slate-100 to-gray-100 border-slate-200';
      case 'community':
        return 'from-teal-100 to-cyan-100 border-teal-200';
      default:
        return 'from-stone-100 to-gray-100 border-stone-200';
    }
  };

  const paginatedMoments = customerMoments.slice(
    currentPage * momentsPerPage,
    (currentPage + 1) * momentsPerPage
  );

  const totalPages = Math.ceil(customerMoments.length / momentsPerPage);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Customer Moments</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Real stories from our amazing customers who have made Brew & Bliss part of their special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedMoments.map((moment) => {
            const IconComponent = getMomentIcon(moment.momentType);
            const colorClasses = getMomentColor(moment.momentType);
            
            return (
              <div
                key={moment.id}
                className={`bg-gradient-to-br ${colorClasses} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1`}
                onClick={() => setSelectedMoment(moment)}
              >
                <div className="relative h-48 bg-gradient-to-br from-stone-200 to-amber-200 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-green-400" />
                  
                  <div className="absolute top-4 left-4">
                    <div className={`w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  
                  {moment.verified && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Verified</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-stone-300 rounded-full mr-3"></div>
                    <div>
                      <h3 className="font-semibold text-green-800">{moment.customerName}</h3>
                      <p className="text-sm text-green-600">{moment.occasion}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-green-800 mb-2">{moment.title}</h4>
                  <p className="text-green-700 text-sm mb-4 line-clamp-3">{moment.description}</p>
                  
                  <div className="bg-white bg-opacity-60 rounded-lg p-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <Quote className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-green-700 text-sm italic line-clamp-2">{moment.quote}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-green-600">
                      <span className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{moment.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{moment.comments}</span>
                      </span>
                    </div>
                    <span className="text-xs text-green-500">
                      {new Date(moment.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
                    {moment.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-white bg-opacity-70 text-green-700 px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                    {moment.tags.length > 3 && (
                      <span className="text-xs text-green-600">+{moment.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-10 h-10 rounded-full font-medium transition-all duration-200 ${
                  currentPage === index
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-green-600 border border-green-200 hover:bg-green-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-green-100 via-stone-100 to-amber-100 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold text-green-800 mb-6">Share Your Moment</h3>
            <p className="text-green-700 text-lg leading-relaxed mb-8">
              Have a special memory from Brew & Bliss? We'd love to feature your story and celebrate 
              the moments that make our café community so special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                Submit Your Story
              </button>
              <button className="border border-green-600 text-green-600 py-3 px-8 rounded-lg hover:bg-green-50 transition-colors duration-200 font-semibold">
                View All Moments
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerMoments;