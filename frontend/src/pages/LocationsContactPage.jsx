import React from 'react';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import OperatingHours from '../components/OperatingHours';

const LocationsContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-green-50">
      <div className="bg-gradient-to-r from-amber-100 via-stone-100 to-green-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-4">Find Us & Get in Touch</h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Visit one of our London locations or reach out to us directly. We're here to serve you 
            exceptional coffee and create memorable experiences.
          </p>
        </div>
      </div>
      <main>
        <Map />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-16">
          <ContactForm />
          <OperatingHours />
        </div>
      </main>
    </div>
  );
};

export default LocationsContactPage;