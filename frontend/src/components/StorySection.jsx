import React, { useState, useEffect } from 'react';
import { Coffee, Heart, Users, Calendar } from 'lucide-react';

const StorySection = () => {
  const [storyData, setStoryData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchStoryData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/about/story');
    //     const data = await response.json();
    //     setStoryData(data);
    //   } catch (error) {
    //     console.error('Error fetching story data:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchStoryData();

    // Using mock data for now
    setTimeout(() => {
      const mockStoryData = {
        foundingYear: 2013,
        founderName: "Elena Martinez",
        origin: "A small kitchen in East London",
        mainStory: "What began as a simple dream to create the perfect cup of coffee has blossomed into a cherished community gathering place. Elena Martinez, a former architect with a passion for coffee culture, started Brew & Bliss in her small East London kitchen, experimenting with different brewing techniques and sourcing beans directly from sustainable farms around the world.",
        evolution: "From humble beginnings serving friends and neighbors, Brew & Bliss grew organically through word-of-mouth and a commitment to quality that never wavered. Our first café opened in 2014, and since then, we've remained dedicated to the artisanal approach that made us who we are today.",
        philosophy: "We believe that great coffee is about more than just the perfect roast—it's about the connections formed over a shared cup, the conversations that spark creativity, and the community that grows around a common appreciation for life's simple pleasures.",
        milestones: [
          {
            year: 2013,
            title: "The Beginning",
            description: "Elena starts experimenting with coffee roasting in her home kitchen"
          },
          {
            year: 2014,
            title: "First Café Opens",
            description: "Our flagship location opens in the heart of London's creative quarter"
          },
          {
            year: 2017,
            title: "Direct Trade Partnerships",
            description: "Established direct relationships with coffee farmers in Ethiopia and Colombia"
          },
          {
            year: 2019,
            title: "Sustainability Focus",
            description: "Became fully carbon-neutral and zero-waste certified"
          },
          {
            year: 2021,
            title: "Community Hub",
            description: "Expanded to include co-working spaces and local artist showcases"
          },
          {
            year: 2023,
            title: "Today",
            description: "Serving over 500 customers daily while maintaining our artisanal roots"
          }
        ]
      };
      setStoryData(mockStoryData);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Story</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            From a passionate dream to a beloved community cornerstone
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-stone-50 rounded-xl p-8 shadow-lg border border-stone-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-green-800">The Beginning</h3>
                  <p className="text-green-600">Founded in {storyData.foundingYear} by {storyData.founderName}</p>
                </div>
              </div>
              <p className="text-green-700 leading-relaxed mb-6">
                {storyData.mainStory}
              </p>
              <div className="border-l-4 border-green-300 pl-4">
                <p className="text-green-600 italic">
                  "{storyData.philosophy}"
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 shadow-lg border border-amber-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Evolution</h3>
              <p className="text-green-700 leading-relaxed">
                {storyData.evolution}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-stone-50 rounded-xl p-8 shadow-lg border border-stone-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Our Journey</h3>
              <div className="space-y-6">
                {storyData.milestones?.map((milestone, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <Calendar className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full mr-3">
                            {milestone.year}
                          </span>
                          <h4 className="text-lg font-semibold text-green-800">{milestone.title}</h4>
                        </div>
                        <p className="text-green-700 text-sm leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    {index < storyData.milestones.length - 1 && (
                      <div className="ml-8 mt-4 h-6 w-px bg-gradient-to-b from-green-300 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 via-stone-50 to-amber-50 rounded-2xl p-12 text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-700 mb-1">10+</div>
              <p className="text-green-600 text-sm">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-700 mb-1">25K+</div>
              <p className="text-green-600 text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-700 mb-1">500K+</div>
              <p className="text-green-600 text-sm">Cups Served</p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Still Growing, Still Passionate</h3>
          <p className="text-green-700 max-w-2xl mx-auto leading-relaxed">
            Every cup we serve carries the same passion and dedication that Elena brought to her kitchen over a decade ago. 
            We're not just serving coffee—we're building community, one conversation at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;