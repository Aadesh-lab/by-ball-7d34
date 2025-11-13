import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedDrinks from '../components/FeaturedDrinks';
import OverviewSection from '../components/OverviewSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroBanner />
      <main>
        <FeaturedDrinks />
        <OverviewSection />
      </main>
    </div>
  );
};

export default HomePage;