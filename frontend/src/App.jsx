import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutUsPage from './pages/AboutUsPage';
import GalleryPage from './pages/GalleryPage';
import LocationsContactPage from './pages/LocationsContactPage';
import BlogNewsPage from './pages/BlogNewsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<LocationsContactPage />} />
        <Route path="/blog" element={<BlogNewsPage />} />
      </Routes>
    </div>
  );
}

export default App;