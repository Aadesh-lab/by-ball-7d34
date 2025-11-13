import React from 'react';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleList from '../components/ArticleList';
import NewsSection from '../components/NewsSection';

const BlogNewsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50 to-green-50">
      <div className="bg-gradient-to-r from-stone-100 via-amber-100 to-green-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-4">Blog & News</h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Dive into the rich world of coffee culture, London lifestyle, and seasonal inspirations. 
            Discover stories that celebrate the art of coffee and community.
          </p>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 py-16">
        <FeaturedArticle />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <div className="lg:col-span-2">
            <ArticleList />
          </div>
          <div className="lg:col-span-1">
            <NewsSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogNewsPage;