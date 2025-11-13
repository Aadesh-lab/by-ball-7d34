import React, { useState, useEffect } from 'react';
import { Leaf, Heart, Globe, Users, Award, Recycle, Coffee, Handshake } from 'lucide-react';

const MissionStatement = () => {
  const [missionData, setMissionData] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchMissionData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/about/mission');
    //     const data = await response.json();
    //     setMissionData(data);
    //   } catch (error) {
    //     console.error('Error fetching mission data:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchMissionData();

    // Using mock data for now
    setTimeout(() => {
      const mockMissionData = {
        mission: {
          title: "Our Mission",
          statement: "To create meaningful connections through exceptional coffee while fostering sustainable practices that benefit our community, our partners, and our planet.",
          description: "Every decision we make is guided by our commitment to quality, sustainability, and community. We believe that great coffee should not only taste amazing but should also contribute to a better world."
        },
        vision: {
          title: "Our Vision",
          statement: "To be the neighborhood café where everyone feels at home, where conversations flourish, and where every cup served makes a positive impact.",
          description: "We envision a world where coffee brings people together, where local businesses thrive, and where environmental stewardship is woven into the fabric of daily life."
        },
        values: {
          title: "Our Values",
          list: [
            {
              name: "Quality First",
              description: "We never compromise on the quality of our coffee, ingredients, or service",
              icon: "award"
            },
            {
              name: "Sustainability",
              description: "Environmental responsibility is at the heart of everything we do",
              icon: "leaf"
            },
            {
              name: "Community",
              description: "We're more than a café—we're a gathering place for our neighborhood",
              icon: "users"
            },
            {
              name: "Authenticity",
              description: "We stay true to our roots while embracing innovation and growth",
              icon: "heart"
            },
            {
              name: "Transparency",
              description: "Open communication with our customers, suppliers, and community",
              icon: "globe"
            },
            {
              name: "Social Impact",
              description: "Using our platform to create positive change in our community",
              icon: "handshake"
            }
          ]
        },
        sustainability: {
          title: "Our Sustainability Commitment",
          initiatives: [
            {
              category: "Sourcing",
              description: "Direct trade relationships with coffee farmers ensuring fair wages and sustainable farming practices",
              impact: "Supporting 12 farming communities across 3 countries",
              icon: "coffee"
            },
            {
              category: "Waste Reduction",
              description: "Zero-waste goal with comprehensive recycling and composting programs",
              impact: "90% waste diversion from landfills achieved",
              icon: "recycle"
            },
            {
              category: "Energy Efficiency",
              description: "Solar panels and energy-efficient equipment to minimize our carbon footprint",
              impact: "50% reduction in energy consumption since 2020",
              icon: "leaf"
            },
            {
              category: "Community Investment",
              description: "Local sourcing for pastries and supporting neighborhood businesses",
              impact: "75% of suppliers are local businesses",
              icon: "users"
            }
          ]
        },
        achievements: [
          {
            year: "2023",
            title: "B-Corp Certification",
            description: "Officially recognized for meeting high standards of social and environmental performance"
          },
          {
            year: "2022",
            title: "Carbon Neutral Status",
            description: "Achieved carbon neutrality through renewable energy and offset programs"
          },
          {
            year: "2021",
            title: "Community Impact Award",
            description: "Recognized by London Borough for outstanding community engagement"
          },
          {
            year: "2020",
            title: "Sustainable Business Leader",
            description: "Named one of London's most sustainable small businesses"
          }
        ]
      };
      setMissionData(mockMissionData);
      setLoading(false);
    }, 1000);
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      award: Award,
      leaf: Leaf,
      users: Users,
      heart: Heart,
      globe: Globe,
      handshake: Handshake,
      coffee: Coffee,
      recycle: Recycle
    };
    return icons[iconName] || Heart;
  };

  const tabs = [
    { id: 'mission', label: 'Mission', icon: Heart },
    { id: 'vision', label: 'Vision', icon: Globe },
    { id: 'values', label: 'Values', icon: Award },
    { id: 'sustainability', label: 'Sustainability', icon: Leaf }
  ];

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'mission':
        return (
          <div className="bg-gradient-to-br from-white to-stone-50 rounded-xl p-8 shadow-lg border border-stone-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-green-800 mb-4">{missionData.mission?.title}</h3>
              <blockquote className="text-xl text-green-700 italic font-medium leading-relaxed mb-6">
                "{missionData.mission?.statement}"
              </blockquote>
              <p className="text-green-600 leading-relaxed">{missionData.mission?.description}</p>
            </div>
          </div>
        );
      
      case 'vision':
        return (
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 shadow-lg border border-amber-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-green-800 mb-4">{missionData.vision?.title}</h3>
              <blockquote className="text-xl text-green-700 italic font-medium leading-relaxed mb-6">
                "{missionData.vision?.statement}"
              </blockquote>
              <p className="text-green-600 leading-relaxed">{missionData.vision?.description}</p>
            </div>
          </div>
        );
      
      case 'values':
        return (
          <div>
            <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">{missionData.values?.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionData.values?.list?.map((value, index) => {
                const IconComponent = getIcon(value.icon);
                return (
                  <div key={index} className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-green-800">{value.name}</h4>
                    </div>
                    <p className="text-green-700 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      
      case 'sustainability':
        return (
          <div>
            <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">{missionData.sustainability?.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {missionData.sustainability?.initiatives?.map((initiative, index) => {
                const IconComponent = getIcon(initiative.icon);
                return (
                  <div key={index} className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 shadow-lg border border-green-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <IconComponent className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-green-800">{initiative.category}</h4>
                    </div>
                    <p className="text-green-700 text-sm leading-relaxed mb-3">{initiative.description}</p>
                    <div className="bg-green-100 px-3 py-2 rounded-lg">
                      <p className="text-green-800 text-xs font-semibold">{initiative.impact}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-gradient-to-br from-white to-stone-50 rounded-xl p-8 shadow-lg border border-stone-200">
              <h4 className="text-2xl font-semibold text-green-800 mb-6 text-center">Our Achievements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {missionData.achievements?.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-700 mb-2">{achievement.year}</div>
                    <h5 className="font-semibold text-green-800 mb-2">{achievement.title}</h5>
                    <p className="text-green-600 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Purpose & Values</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Guided by purpose, driven by values, committed to positive impact
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-green-700 border border-green-200 hover:bg-green-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="min-h-[400px]">
            {renderTabContent()}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 via-stone-100 to-amber-100 rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold text-green-800 mb-6">Join Our Mission</h3>
            <p className="text-green-700 text-lg leading-relaxed mb-8">
              Every cup you enjoy with us contributes to our mission of creating positive change. 
              Together, we're building a more sustainable, connected, and compassionate community—one coffee at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                Learn More About Our Impact
              </button>
              <button className="border border-green-600 text-green-600 py-3 px-8 rounded-lg hover:bg-green-50 transition-colors duration-200 font-semibold">
                Visit Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;