import React from 'react';
import StorySection from '../components/StorySection';
import InspirationSection from '../components/InspirationSection';
import MissionStatement from '../components/MissionStatement';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-green-50">
      <div className="bg-gradient-to-r from-amber-100 via-stone-100 to-green-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-4">About Brew & Bliss</h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Discover the passion, inspiration, and values that drive our commitment to exceptional coffee 
            and meaningful community connections.
          </p>
        </div>
      </div>
      <main>
        <StorySection />
        <InspirationSection />
        <MissionStatement />
      </main>
    </div>
  );
};

export default AboutUsPage;