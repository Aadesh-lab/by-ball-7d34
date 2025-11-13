import React, { useState, useEffect } from 'react';
import { MapPin, Camera, Building, Coffee, Palette, Music } from 'lucide-react';

const InspirationSection = () => {
  const [inspirationData, setInspirationData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchInspirationData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/about/inspiration');
    //     const data = await response.json();
    //     setInspirationData(data);
    //   } catch (error) {
    //     console.error('Error fetching inspiration data:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchInspirationData();

    // Using mock data for now
    setTimeout(() => {
      const mockInspirationData = {
        title: "London: Our Muse",
        subtitle: "Drawing inspiration from the world's greatest coffee capital",
        mainDescription: "London's rich coffee culture, from the historic Lloyd's Coffee House to the modern third-wave movement, serves as our constant inspiration. The city's blend of tradition and innovation mirrors our own approach to coffee crafting.",
        londonInfluences: [
          {
            aspect: "Historic Coffee Houses",
            description: "The intellectual discourse and community spirit of London's 17th-century coffee houses inspire our communal atmosphere",
            icon: "building",
            location: "Covent Garden & The City"
          },
          {
            aspect: "Borough Market Culture",
            description: "The artisanal quality and direct relationships with producers that define Borough Market guide our sourcing philosophy",
            icon: "coffee",
            location: "Southwark"
          },
          {
            aspect: "East London Creativity",
            description: "The innovative spirit and artistic community of East London fuel our experimental brewing methods and aesthetic",
            icon: "palette",
            location: "Shoreditch & Hackney"
          },
          {
            aspect: "Hyde Park Serenity",
            description: "The peaceful green spaces provide the calm, contemplative atmosphere we recreate in our café environment",
            icon: "camera",
            location: "Central London"
          }
        ],
        culturalElements: {
          architecture: "Victorian elegance meets modern minimalism in our interior design, echoing London's architectural diversity",
          music: "Curated playlists featuring London's diverse musical heritage, from classical to contemporary indie",
          literature: "A carefully selected library corner celebrating London's literary giants and contemporary voices",
          community: "The London tradition of neighborhood gathering places where ideas are born and friendships flourish"
        },
        seasonalInspiration: [
          {
            season: "Spring",
            inspiration: "Cherry blossoms in Regent's Park inspire our floral tea blends and light roasts",
            offerings: "Elderflower lattes, spring menu updates"
          },
          {
            season: "Summer",
            inspiration: "Thames-side café culture brings our cold brew and iced beverage innovations",
            offerings: "Cold brew flights, outdoor seating expansion"
          },
          {
            season: "Autumn",
            inspiration: "The golden hues of Hampstead Heath influence our seasonal spice blends",
            offerings: "Pumpkin spice alternatives, warming teas"
          },
          {
            season: "Winter",
            inspiration: "Cozy pub culture and Christmas markets create our warmest, most comforting atmosphere",
            offerings: "Mulled coffee, hearty winter pastries"
          }
        ]
      };
      setInspirationData(mockInspirationData);
      setLoading(false);
    }, 900);
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'building':
        return Building;
      case 'coffee':
        return Coffee;
      case 'palette':
        return Palette;
      case 'camera':
        return Camera;
      default:
        return MapPin;
    }
  };

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-stone-50">
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
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">{inspirationData.title}</h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto mb-6">
            {inspirationData.subtitle}
          </p>
          <p className="text-green-600 max-w-3xl mx-auto leading-relaxed">
            {inspirationData.mainDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 shadow-lg border border-amber-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-green-600 mr-3" />
                London Influences
              </h3>
              <div className="space-y-6">
                {inspirationData.londonInfluences?.map((influence, index) => {
                  const IconComponent = getIcon(influence.icon);
                  return (
                    <div key={index} className="border-l-4 border-green-300 pl-6">
                      <div className="flex items-start mb-2">
                        <IconComponent className="w-5 h-5 text-green-600 mr-2 mt-1" />
                        <div>
                          <h4 className="font-semibold text-green-800">{influence.aspect}</h4>
                          <p className="text-xs text-green-500 mb-2">{influence.location}</p>
                        </div>
                      </div>
                      <p className="text-green-700 text-sm leading-relaxed">{influence.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-stone-50 rounded-xl p-8 shadow-lg border border-stone-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Cultural Elements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Architecture</h4>
                    <p className="text-green-700 text-sm">{inspirationData.culturalElements?.architecture}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Music className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Music</h4>
                    <p className="text-green-700 text-sm">{inspirationData.culturalElements?.music}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Palette className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Literature</h4>
                    <p className="text-green-700 text-sm">{inspirationData.culturalElements?.literature}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Coffee className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Community</h4>
                    <p className="text-green-700 text-sm">{inspirationData.culturalElements?.community}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 shadow-lg border border-amber-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Seasonal Inspiration</h3>
              <div className="space-y-4">
                {inspirationData.seasonalInspiration?.map((season, index) => (
                  <div key={index} className="border border-stone-200 rounded-lg p-4 bg-white bg-opacity-50">
                    <h4 className="font-semibold text-green-800 mb-2">{season.season}</h4>
                    <p className="text-green-700 text-sm mb-2 leading-relaxed">{season.inspiration}</p>
                    <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">
                      {season.offerings}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 via-amber-50 to-stone-100 rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold text-green-800 mb-6">London Lives in Every Cup</h3>
            <p className="text-green-700 text-lg leading-relaxed mb-8">
              From the bustling energy of Camden Market to the quiet sophistication of Kensington, 
              London's diverse neighborhoods and rich history infuse every aspect of our café experience. 
              We don't just serve coffee—we serve a taste of London's soul.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-70 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                #LondonInspired
              </span>
              <span className="bg-white bg-opacity-70 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                #CommunityFirst
              </span>
              <span className="bg-white bg-opacity-70 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                #ArtisanalCraft
              </span>
              <span className="bg-white bg-opacity-70 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                #CulturalHeritage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;