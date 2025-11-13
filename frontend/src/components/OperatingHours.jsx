import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, Calendar, Info, Star, Coffee } from 'lucide-react';

const OperatingHours = () => {
  const [operatingData, setOperatingData] = useState({});
  const [selectedLocation, setSelectedLocation] = useState('covent-garden');
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchOperatingHours = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/contact/operating-hours');
    //     const data = await response.json();
    //     setOperatingData(data);
    //   } catch (error) {
    //     console.error('Error fetching operating hours:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchOperatingHours();

    // Using mock data for now
    setTimeout(() => {
      const mockOperatingData = {
        locations: {
          'covent-garden': {
            name: 'Brew & Bliss - Covent Garden',
            address: '42 Long Acre, Covent Garden, London WC2E 9LA',
            phone: '+44 20 7123 4567',
            isMainBranch: true,
            timezone: 'Europe/London',
            regularHours: {
              monday: { open: '06:00', close: '21:00', isOpen: true },
              tuesday: { open: '06:00', close: '21:00', isOpen: true },
              wednesday: { open: '06:00', close: '21:00', isOpen: true },
              thursday: { open: '06:00', close: '21:00', isOpen: true },
              friday: { open: '06:00', close: '22:00', isOpen: true },
              saturday: { open: '07:00', close: '22:00', isOpen: true },
              sunday: { open: '07:00', close: '20:00', isOpen: true }
            },
            specialHours: [
              {
                date: '2023-12-25',
                name: 'Christmas Day',
                status: 'closed',
                note: 'Closed for Christmas Day'
              },
              {
                date: '2023-12-31',
                name: 'New Year\'s Eve',
                hours: { open: '08:00', close: '18:00' },
                note: 'Limited hours for New Year\'s Eve'
              }
            ],
            busyTimes: {
              monday: [{ start: '08:00', end: '10:00', level: 'high' }, { start: '12:00', end: '14:00', level: 'medium' }],
              tuesday: [{ start: '08:00', end: '10:00', level: 'high' }, { start: '12:00', end: '14:00', level: 'medium' }],
              wednesday: [{ start: '08:00', end: '10:00', level: 'high' }, { start: '12:00', end: '14:00', level: 'medium' }],
              thursday: [{ start: '08:00', end: '10:00', level: 'high' }, { start: '12:00', end: '14:00', level: 'medium' }],
              friday: [{ start: '08:00', end: '10:00', level: 'high' }, { start: '12:00', end: '14:00', level: 'medium' }, { start: '17:00', end: '19:00', level: 'high' }],
              saturday: [{ start: '09:00', end: '12:00', level: 'high' }, { start: '14:00', end: '17:00', level: 'medium' }],
              sunday: [{ start: '10:00', end: '13:00', level: 'medium' }]
            }
          },
          'shoreditch': {
            name: 'Brew & Bliss - Shoreditch',
            address: '15 Brick Lane, Shoreditch, London E1 6PU',
            phone: '+44 20 7234 5678',
            isMainBranch: false,
            timezone: 'Europe/London',
            regularHours: {
              monday: { open: '07:00', close: '20:00', isOpen: true },
              tuesday: { open: '07:00', close: '20:00', isOpen: true },
              wednesday: { open: '07:00', close: '20:00', isOpen: true },
              thursday: { open: '07:00', close: '20:00', isOpen: true },
              friday: { open: '07:00', close: '21:00', isOpen: true },
              saturday: { open: '08:00', close: '21:00', isOpen: true },
              sunday: { open: '08:00', close: '19:00', isOpen: true }
            },
            specialHours: [],
            busyTimes: {
              monday: [{ start: '08:30', end: '10:30', level: 'medium' }],
              tuesday: [{ start: '08:30', end: '10:30', level: 'medium' }],
              wednesday: [{ start: '08:30', end: '10:30', level: 'medium' }],
              thursday: [{ start: '08:30', end: '10:30', level: 'medium' }],
              friday: [{ start: '08:30', end: '10:30', level: 'high' }, { start: '17:30', end: '19:30', level: 'high' }],
              saturday: [{ start: '10:00', end: '14:00', level: 'high' }],
              sunday: [{ start: '10:00', end: '13:00', level: 'medium' }]
            }
          },
          'camden': {
            name: 'Brew & Bliss - Camden',
            address: '28 Camden High Street, Camden, London NW1 0JH',
            phone: '+44 20 7345 6789',
            isMainBranch: false,
            timezone: 'Europe/London',
            regularHours: {
              monday: { open: '07:00', close: '20:00', isOpen: true },
              tuesday: { open: '07:00', close: '20:00', isOpen: true },
              wednesday: { open: '07:00', close: '20:00', isOpen: true },
              thursday: { open: '07:00', close: '20:00', isOpen: true },
              friday: { open: '07:00', close: '21:00', isOpen: true },
              saturday: { open: '08:00', close: '21:00', isOpen: true },
              sunday: { open: '08:00', close: '19:00', isOpen: true }
            },
            specialHours: [],
            busyTimes: {
              friday: [{ start: '18:00', end: '20:00', level: 'high' }],
              saturday: [{ start: '11:00', end: '16:00', level: 'high' }],
              sunday: [{ start: '11:00', end: '15:00', level: 'medium' }]
            }
          }
        },
        generalInfo: {
          holidayPolicy: 'We may have modified hours during public holidays. Check our website or call ahead.',
          lastOrderTime: '30 minutes before closing',
          reservationPolicy: 'Reservations recommended for groups of 6 or more',
          peakTimes: 'Weekday mornings (8-10 AM) and weekend afternoons tend to be our busiest times.'
        }
      };
      setOperatingData(mockOperatingData);
      setLoading(false);
    }, 800);

    // Update current time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const getCurrentDayStatus = (location) => {
    if (!location) return { isOpen: false, message: 'Closed' };
    
    const now = currentTime;
    const dayName = now.toLocaleDateString('en-US', { weekday: 'lowercase' });
    const currentTimeString = now.toTimeString().slice(0, 5);
    
    const todayHours = location.regularHours[dayName];
    
    if (!todayHours || !todayHours.isOpen) {
      return { isOpen: false, message: 'Closed today' };
    }
    
    const openTime = todayHours.open;
    const closeTime = todayHours.close;
    
    if (currentTimeString >= openTime && currentTimeString <= closeTime) {
      return { isOpen: true, message: `Open until ${closeTime}` };
    } else if (currentTimeString < openTime) {
      return { isOpen: false, message: `Opens at ${openTime}` };
    } else {
      return { isOpen: false, message: 'Closed' };
    }
  };

  const getBusyLevel = (location) => {
    if (!location) return null;
    
    const now = currentTime;
    const dayName = now.toLocaleDateString('en-US', { weekday: 'lowercase' });
    const currentTimeString = now.toTimeString().slice(0, 5);
    
    const busyTimes = location.busyTimes[dayName] || [];
    
    for (const period of busyTimes) {
      if (currentTimeString >= period.start && currentTimeString <= period.end) {
        return period.level;
      }
    }
    
    return 'low';
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getDayName = (dayKey) => {
    const days = {
      monday: 'Monday',
      tuesday: 'Tuesday', 
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    };
    return days[dayKey] || dayKey;
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg border border-amber-200 p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-6"></div>
          <div className="space-y-4">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentLocation = operatingData.locations?.[selectedLocation];
  const status = getCurrentDayStatus(currentLocation);
  const busyLevel = getBusyLevel(currentLocation);

  const getBusyLevelColor = (level) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getBusyLevelText = (level) => {
    switch (level) {
      case 'high': return 'Very Busy';
      case 'medium': return 'Moderately Busy';
      case 'low': return 'Quiet';
      default: return 'Unknown';
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg border border-amber-200">
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Operating Hours</h2>
          <p className="text-green-700">
            Find our opening times and plan your perfect coffee break
          </p>
        </div>

        {/* Location Selector */}
        <div className="mb-8">
          <label className="block text-green-800 font-semibold mb-3">
            <MapPin className="w-4 h-4 inline mr-2" />
            Select Location
          </label>
          <div className="grid grid-cols-1 gap-3">
            {Object.entries(operatingData.locations || {}).map(([key, location]) => (
              <button
                key={key}
                onClick={() => setSelectedLocation(key)}
                className={`text-left p-4 rounded-lg border transition-all duration-200 ${
                  selectedLocation === key
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-green-700 border-green-200 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{location.name}</div>
                    <div className="text-sm opacity-90">{location.address}</div>
                  </div>
                  {location.isMainBranch && (
                    <span className="bg-white bg-opacity-20 text-xs font-semibold px-2 py-1 rounded-full">
                      Main
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {currentLocation && (
          <>
            {/* Current Status */}
            <div className="mb-8">
              <div className={`p-4 rounded-lg border-2 ${
                status.isOpen 
                  ? 'bg-green-50 border-green-300' 
                  : 'bg-red-50 border-red-300'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      status.isOpen ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>
                    <div>
                      <span className={`font-semibold ${
                        status.isOpen ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {status.isOpen ? 'OPEN NOW' : 'CLOSED'}
                      </span>
                      <p className={`text-sm ${
                        status.isOpen ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {status.message}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-800">
                      {currentTime.toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true 
                      })}
                    </div>
                    {status.isOpen && busyLevel && (
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getBusyLevelColor(busyLevel)}`}>
                        {getBusyLevelText(busyLevel)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Schedule */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Weekly Schedule
              </h3>
              <div className="space-y-2">
                {Object.entries(currentLocation.regularHours).map(([day, hours]) => {
                  const isToday = currentTime.toLocaleDateString('en-US', { weekday: 'lowercase' }) === day;
                  
                  return (
                    <div key={day} className={`flex items-center justify-between p-3 rounded-lg ${
                      isToday ? 'bg-green-100 border border-green-300' : 'bg-white border border-stone-200'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <span className={`font-semibold ${
                          isToday ? 'text-green-800' : 'text-green-700'
                        }`}>
                          {getDayName(day)}
                        </span>
                        {isToday && (
                          <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            Today
                          </span>
                        )}
                      </div>
                      <div className={`font-medium ${
                        isToday ? 'text-green-800' : 'text-green-700'
                      }`}>
                        {hours.isOpen 
                          ? `${formatTime(hours.open)} - ${formatTime(hours.close)}`
                          : 'Closed'
                        }
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-8 p-4 bg-stone-50 rounded-lg border border-stone-200">
              <h4 className="font-semibold text-green-800 mb-3">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-green-700">
                  <Phone className="w-4 h-4" />
                  <span>{currentLocation.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <MapPin className="w-4 h-4" />
                  <span>{currentLocation.address}</span>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                <Info className="w-4 h-4 mr-2" />
                Good to Know
              </h4>
              <div className="space-y-2 text-green-700 text-sm">
                <p>• {operatingData.generalInfo?.lastOrderTime}</p>
                <p>• {operatingData.generalInfo?.reservationPolicy}</p>
                <p>• {operatingData.generalInfo?.peakTimes}</p>
                <p>• {operatingData.generalInfo?.holidayPolicy}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OperatingHours;