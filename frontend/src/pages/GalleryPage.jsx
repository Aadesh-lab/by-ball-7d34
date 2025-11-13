import React from 'react';
import GalleryGrid from '../components/GalleryGrid';
import ImageViewer from '../components/ImageViewer';
import CustomerMoments from '../components/CustomerMoments';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-green-50">
      <div className="bg-gradient-to-r from-amber-100 via-stone-100 to-green-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-4">Our Gallery</h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Step inside our world through captivating moments, artisanal creations, and the warm atmosphere 
            that makes Brew & Bliss a cherished gathering place.
          </p>
        </div>
      </div>
      <main>
        <GalleryGrid />
        <ImageViewer />
        <CustomerMoments />
      </main>
    </div>
  );
};

export default GalleryPage;