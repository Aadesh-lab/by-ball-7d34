import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Bell, Coffee, Award, Users, Zap, ChevronRight } from 'lucide-react';

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('news');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchNewsData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/blog/news');
    //     const data = await response.json();
    //     setNewsItems(data.news);
    //     setAnnouncements(data.announcements);
    //     setEvents(data.events);
    //   } catch (error) {
    //     console.error('Error fetching news data:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchNewsData();

    // Using mock data for now
    setTimeout(() => {
      const mockNewsItems = [
        {
          id: 1,
          title: 'Brew & Bliss Wins \'Best London Coffee Shop\' 2023',
          summary: 'We\'re thrilled to announce our recognition by London Coffee Awards for exceptional service and quality.',
          publishedAt: '2023-10-14T10:00:00Z',
          type: 'award',
          isBreaking: true,
          source: 'London Coffee Awards',
          link: '#award-details'
        },
        {
          id: 2,
          title: 'New Seasonal Menu Launch',
          summary: 'Introducing our autumn-inspired drinks and pastries featuring local ingredients and warming spices.',
          publishedAt: '2023-10-10T08:30:00Z',
          type: 'product',
          isBreaking: false,
          source: 'Brew & Bliss',
          link: '#seasonal-menu'
        },
        {
          id: 3,
          title: 'Partnership with Local Roastery',
          summary: 'Exciting collaboration with East London\'s premier coffee roastery to bring you exclusive blends.',
          publishedAt: '2023-10-08T15:45:00Z',
          type: 'partnership',
          isBreaking: false,
          source: 'East London Roasters',
          link: '#partnership'
        },
        {
          id: 4,
          title: 'Sustainability Milestone Achieved',
          summary: 'Proud to announce we\'ve achieved carbon neutrality across all our locations.',
          publishedAt: '2023-10-05T12:00:00Z',
          type: 'sustainability',
          isBreaking: false,
          source: 'Brew & Bliss',
          link: '#sustainability'
        }
      ];

      const mockAnnouncements = [
        {
          id: 1,
          title: 'Extended Hours During Holiday Season',
          content: 'Starting December 1st, our Covent Garden location will be open until 11 PM to serve you better during the festive season.',
          type: 'hours',
          priority: 'high',
          validUntil: '2023-12-31T23:59:59Z',
          createdAt: '2023-10-12T09:00:00Z'
        },
        {
          id: 2,
          title: 'Wi-Fi Upgrade Complete',
          content: 'Enjoy faster, more reliable internet across all locations with our newly upgraded Wi-Fi infrastructure.',
          type: 'facility',
          priority: 'medium',
          validUntil: null,
          createdAt: '2023-10-09T14:30:00Z'
        },
        {
          id: 3,
          title: 'New Payment Options Available',
          content: 'We now accept Apple Pay, Google Pay, and contactless payments for your convenience.',
          type: 'service',
          priority: 'medium',
          validUntil: null,
          createdAt: '2023-10-07T11:15:00Z'
        }
      ];

      const mockEvents = [
        {
          id: 1,
          title: 'Coffee Cupping Workshop',
          description: 'Learn the art of coffee tasting with our expert baristas. Discover flavor notes and brewing techniques.',
          date: '2023-10-25T18:00:00Z',
          location: 'Covent Garden Branch',
          price: 25,
          capacity: 12,
          registered: 8,
          category: 'workshop',
          isRecurring: false
        },
        {
          id: 2,
          title: 'Live Jazz Evening',
          description: 'Enjoy smooth jazz music while sipping your favorite coffee in our cozy atmosphere.',
          date: '2023-10-20T19:30:00Z',
          location: 'Shoreditch Branch',
          price: 0,
          capacity: 30,
          registered: 22,
          category: 'entertainment',
          isRecurring: true
        },
        {
          id: 3,
          title: 'Latte Art Competition',
          description: 'Show off your latte art skills! Open to all skill levels with prizes for winners.',
          date: '2023-10-28T14:00:00Z',
          location: 'Camden Branch',
          price: 10,
          capacity: 20,
          registered: 5,
          category: 'competition',
          isRecurring: false
        }
      ];

      setNewsItems(mockNewsItems);
      setAnnouncements(mockAnnouncements);
      setEvents(mockEvents);
      setLoading(false);
    }, 900);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short'
    });
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getNewsIcon = (type) => {
    switch (type) {
      case 'award': return Award;
      case 'product': return Coffee;
      case 'partnership': return Users;
      case 'sustainability': return Zap;
      default: return Bell;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-300 bg-red-50';
      case 'medium': return 'border-amber-300 bg-amber-50';
      case 'low': return 'border-green-300 bg-green-50';
      default: return 'border-stone-300 bg-stone-50';
    }
  };

  const tabs = [
    { id: 'news', label: 'Latest News', count: newsItems.length },
    { id: 'announcements', label: 'Announcements', count: announcements.length },
    { id: 'events', label: 'Events', count: events.length }
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-lg border border-stone-200 p-6">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg text-white p-6">
        <div className="text-center">
          <Bell className="w-8 h-8 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-green-100 text-sm mb-4">
            Get the latest news, events, and special offers delivered to your inbox.
          </p>
          {!isSubscribed ? (
            <button
              onClick={() => setIsSubscribed(true)}
              className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
            >
              Subscribe to Newsletter
            </button>
          ) : (
            <div className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold">
              ✓ Subscribed!
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg border border-stone-200">
        <div className="border-b border-stone-200">
          <div className="flex space-x-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-4 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                    : 'text-stone-600 hover:text-green-600 hover:bg-stone-50'
                }`}
              >
                <div className="text-center">
                  <div>{tab.label}</div>
                  <div className="text-xs opacity-75">({tab.count})</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'news' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Latest News</h3>
              {newsItems.map((item) => {
                const IconComponent = getNewsIcon(item.type);
                return (
                  <div key={item.id} className="border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors duration-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <IconComponent className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-green-800 text-sm line-clamp-2">
                            {item.title}
                          </h4>
                          {item.isBreaking && (
                            <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2 flex-shrink-0">
                              Breaking
                            </span>
                          )}
                        </div>
                        <p className="text-green-700 text-xs mb-2 line-clamp-2">{item.summary}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-green-500 text-xs">{formatDate(item.publishedAt)}</span>
                          <button className="text-green-600 hover:text-green-800 text-xs flex items-center space-x-1">
                            <span>Read More</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'announcements' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Announcements</h3>
              {announcements.map((announcement) => (
                <div key={announcement.id} className={`border rounded-lg p-4 ${getPriorityColor(announcement.priority)}`}>
                  <h4 className="font-semibold text-green-800 text-sm mb-2">{announcement.title}</h4>
                  <p className="text-green-700 text-xs mb-3">{announcement.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-500 text-xs">{formatDate(announcement.createdAt)}</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      announcement.priority === 'high' ? 'bg-red-100 text-red-700' :
                      announcement.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {announcement.priority} priority
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Upcoming Events</h3>
              {events.map((event) => (
                <div key={event.id} className="border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-green-800 text-sm">{event.title}</h4>
                    {event.isRecurring && (
                      <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                        Recurring
                      </span>
                    )}
                  </div>
                  <p className="text-green-700 text-xs mb-3">{event.description}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-green-600">📅 {formatDateTime(event.date)}</span>
                      <span className="text-green-600">📍 {event.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-green-600">
                        💰 {event.price === 0 ? 'Free' : `£${event.price}`}
                      </span>
                      <span className="text-green-600">
                        👥 {event.registered}/{event.capacity} spots
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-full bg-green-200 rounded-full h-2 mr-3">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-full hover:bg-green-700 transition-colors duration-200 flex-shrink-0">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-stone-200 p-4">
          <button className="w-full text-green-600 hover:text-green-800 text-sm font-medium flex items-center justify-center space-x-2 transition-colors duration-200">
            <span>View All {tabs.find(tab => tab.id === activeTab)?.label}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg border border-amber-200 p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">Quick Links</h3>
        <div className="space-y-3">
          <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg border border-stone-200 hover:bg-stone-50 transition-colors duration-200">
            <span className="text-green-700 text-sm font-medium">Press Kit</span>
            <ExternalLink className="w-4 h-4 text-green-600" />
          </a>
          <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg border border-stone-200 hover:bg-stone-50 transition-colors duration-200">
            <span className="text-green-700 text-sm font-medium">Media Inquiries</span>
            <ExternalLink className="w-4 h-4 text-green-600" />
          </a>
          <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg border border-stone-200 hover:bg-stone-50 transition-colors duration-200">
            <span className="text-green-700 text-sm font-medium">Community Guidelines</span>
            <ExternalLink className="w-4 h-4 text-green-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;