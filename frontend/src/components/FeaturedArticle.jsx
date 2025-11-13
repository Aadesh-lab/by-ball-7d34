import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, Eye, Heart, Share2, ArrowRight } from 'lucide-react';

const FeaturedArticle = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchFeaturedArticle = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8000/api/blog/featured');
    //     const data = await response.json();
    //     setFeaturedArticle(data);
    //   } catch (error) {
    //     console.error('Error fetching featured article:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchFeaturedArticle();

    // Using mock data for now
    setTimeout(() => {
      const mockFeaturedArticle = {
        id: 1,
        title: 'The Art of Slow Coffee: London's Third Wave Revolution',
        slug: 'art-of-slow-coffee-london-third-wave',
        excerpt: 'Discover how London has become the epicenter of the third wave coffee movement, where every cup tells a story of craftsmanship, origin, and passion. From bean to cup, we explore the meticulous process that transforms coffee into an art form.',
        content: 'The bustling streets of London have witnessed a remarkable transformation in coffee culture over the past decade. What once was dominated by instant coffee and quick fixes has evolved into a sophisticated appreciation for the craft of brewing...',
        author: {
          name: 'Elena Martinez',
          bio: 'Coffee Expert & Brew & Bliss Founder',
          avatar: '/api/placeholder/60/60',
          socialMedia: {
            twitter: '@elena_coffee',
            instagram: '@brewandblissfounder'
          }
        },
        publishedAt: '2023-10-15T10:00:00Z',
        updatedAt: '2023-10-15T10:00:00Z',
        readTime: 8,
        category: {
          name: 'Coffee Culture',
          slug: 'coffee-culture',
          color: 'green'
        },
        tags: ['third wave', 'london', 'coffee culture', 'artisan', 'specialty coffee'],
        featuredImage: {
          url: '/api/placeholder/800/400',
          alt: 'Barista carefully pouring latte art in London coffee shop'
        },
        stats: {
          views: 2847,
          likes: 156,
          shares: 43,
          comments: 28
        },
        isFeatured: true,
        isPremium: false,
        seoTitle: 'The Art of Slow Coffee: London\'s Third Wave Coffee Revolution | Brew & Bliss',
        seoDescription: 'Explore how London leads the third wave coffee movement with artisan brewing techniques and specialty coffee culture.'
      };
      setFeaturedArticle(mockFeaturedArticle);
      setLoading(false);
    }, 1000);
  }, []);

  const handleShare = async () => {
    if (!featuredArticle) return;
    
    const shareData = {
      title: featuredArticle.title,
      text: featuredArticle.excerpt,
      url: window.location.href + '/article/' + featuredArticle.slug
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Share cancelled or failed:', error);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      console.log('Link copied to clipboard');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="mb-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <div className="h-96 bg-gray-200"></div>
            <div className="p-8">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
              <div className="flex space-x-4">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!featuredArticle) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Featured Story</h2>
        <p className="text-green-700 text-lg max-w-2xl mx-auto">
          Dive deep into the latest insights and stories from the world of coffee culture
        </p>
      </div>

      <article className="bg-gradient-to-br from-white to-stone-50 rounded-2xl shadow-xl overflow-hidden border border-stone-200">
        <div className="relative">
          <div className="h-96 bg-gradient-to-br from-stone-200 to-amber-200 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10 text-center text-white">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10" />
              </div>
              <p className="text-sm opacity-90">Featured Article Image</p>
            </div>
          </div>
          
          <div className="absolute top-6 left-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-${featuredArticle.category.color}-600`}>
              {featuredArticle.category.name}
            </span>
          </div>
          
          <div className="absolute top-6 right-6">
            <span className="bg-amber-600 text-white text-sm font-semibold px-3 py-2 rounded-full">
              Featured
            </span>
          </div>
        </div>

        <div className="p-8 lg:p-12">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-green-600">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{featuredArticle.author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(featuredArticle.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{featuredArticle.readTime} min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>{featuredArticle.stats.views.toLocaleString()} views</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6 leading-tight">
            {featuredArticle.title}
          </h1>

          <p className="text-xl text-green-700 leading-relaxed mb-8">
            {featuredArticle.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {featuredArticle.tags.slice(0, 4).map((tag, index) => (
                <span key={index} className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
              {featuredArticle.tags.length > 4 && (
                <span className="text-green-600 text-sm">+{featuredArticle.tags.length - 4} more</span>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  isLiked 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{featuredArticle.stats.likes + (isLiked ? 1 : 0)}</span>
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 bg-stone-100 text-stone-600 rounded-full hover:bg-stone-200 transition-colors duration-200"
              >
                <Share2 className="w-4 h-4" />
                <span>{featuredArticle.stats.shares}</span>
              </button>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-300 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-stone-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">{featuredArticle.author.name}</h4>
                  <p className="text-green-600 text-sm">{featuredArticle.author.bio}</p>
                  {featuredArticle.author.socialMedia && (
                    <div className="flex space-x-3 mt-1">
                      <span className="text-green-500 text-xs">{featuredArticle.author.socialMedia.twitter}</span>
                      <span className="text-green-500 text-xs">{featuredArticle.author.socialMedia.instagram}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 font-semibold flex items-center space-x-2 transform hover:-translate-y-0.5">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default FeaturedArticle;