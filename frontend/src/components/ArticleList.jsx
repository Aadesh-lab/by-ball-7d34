import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, Eye, Heart, ArrowRight, Search, Filter, ChevronDown } from 'lucide-react';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [likedArticles, setLikedArticles] = useState(new Set());
  const articlesPerPage = 6;

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'coffee-culture', name: 'Coffee Culture', count: 8 },
    { id: 'london-lifestyle', name: 'London Lifestyle', count: 6 },
    { id: 'seasonal', name: 'Seasonal', count: 5 },
    { id: 'brewing-tips', name: 'Brewing Tips', count: 5 }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'trending', label: 'Trending' }
  ];

  useEffect(() => {
    // TODO: Connect to the backend API when ready.
    // const fetchArticles = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:8000/api/blog/articles?category=${selectedCategory}&sort=${sortBy}&search=${searchTerm}`);
    //     const data = await response.json();
    //     setArticles(data);
    //   } catch (error) {
    //     console.error('Error fetching articles:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchArticles();

    // Using mock data for now
    setTimeout(() => {
      const mockArticles = [
        {
          id: 2,
          title: 'Autumn Coffee Blends: Warming Your Soul This Season',
          slug: 'autumn-coffee-blends-warming-soul-season',
          excerpt: 'As leaves turn golden in London parks, discover the perfect coffee blends that capture the essence of autumn. From spiced lattes to rich, full-bodied roasts.',
          author: {
            name: 'Sarah Johnson',
            avatar: '/api/placeholder/40/40'
          },
          publishedAt: '2023-10-12T09:00:00Z',
          readTime: 5,
          category: {
            name: 'Seasonal',
            slug: 'seasonal',
            color: 'amber'
          },
          tags: ['autumn', 'seasonal blends', 'spiced coffee', 'comfort drinks'],
          featuredImage: {
            url: '/api/placeholder/400/250',
            alt: 'Autumn coffee setup with cinnamon and spices'
          },
          stats: {
            views: 1247,
            likes: 89,
            comments: 15
          },
          isPremium: false
        },
        {
          id: 3,
          title: 'London\'s Hidden Coffee Gems: Beyond the High Street',
          slug: 'london-hidden-coffee-gems-beyond-high-street',
          excerpt: 'Venture off the beaten path to discover London\'s best-kept coffee secrets. From converted Victorian warehouses to cozy basement cafés.',
          author: {
            name: 'Mike Chen',
            avatar: '/api/placeholder/40/40'
          },
          publishedAt: '2023-10-08T14:30:00Z',
          readTime: 7,
          category: {
            name: 'London Lifestyle',
            slug: 'london-lifestyle',
            color: 'blue'
          },
          tags: ['london', 'hidden gems', 'coffee shops', 'exploration'],
          featuredImage: {
            url: '/api/placeholder/400/250',
            alt: 'Cozy London coffee shop interior'
          },
          stats: {
            views: 2156,
            likes: 134,
            comments: 28
          },
          isPremium: false
        },
        {
          id: 4,
          title: 'The Science Behind the Perfect Pour-Over',
          slug: 'science-behind-perfect-pour-over',
          excerpt: 'Delve into the chemistry and physics that make pour-over coffee extraordinary. Temperature, grind size, and timing all play crucial roles.',
          author: {
            name: 'Dr. Lisa Park',
            avatar: '/api/placeholder/40/40'
          },
          publishedAt: '2023-10-05T11:15:00Z',
          readTime: 10,
          category: {
            name: 'Brewing Tips',
            slug: 'brewing-tips',
            color: 'green'
          },
          tags: ['pour-over', 'brewing science', 'technique', 'coffee chemistry'],
          featuredImage: {
            url: '/api/placeholder/400/250',
            alt: 'Pour-over coffee brewing process'
          },
          stats: {
            views: 1893,
            likes: 156,
            comments: 42
          },
          isPremium: true
        },
        {
          id: 5,
          title: 'Sustainable Coffee: Our Journey Towards Zero Waste',
          slug: 'sustainable-coffee-journey-zero-waste',
          excerpt: 'Learn how Brew & Bliss is leading the charge in sustainable coffee practices, from bean sourcing to compostable cups.',
          author: {
            name: 'Elena Martinez',
            avatar: '/api/placeholder/40/40'
          },
          publishedAt: '2023-10-02T08:00:00Z',
          readTime: 6,
          category: {
            name: 'Coffee Culture',
            slug: 'coffee-culture',
            color: 'green'
          },
          tags: ['sustainability', 'zero waste', 'environment', 'ethics'],
          featuredImage: {
            url: '/api/placeholder/400/250',
            alt: 'Sustainable coffee farming practices'
          },
          stats: {
            views: 987,
            likes: 78,
            comments: 19
          },
          isPremium: false
        },
        {
          id: 6,
          title: 'Camden Coffee Culture: A Neighborhood Transformation',
          slug: 'camden-coffee-culture-neighborhood-transformation',
          excerpt: 'How coffee culture has transformed Camden from a market town to London\'s most vibrant creative coffee scene.',
          author: {
            name: 'James Wilson',
            avatar: '/api/placeholder/40/40'
          },
          publishedAt: '2023-09-28T16:45:00Z',
          readTime: 8,
          category: {
            name: 'London Lifestyle',
            slug: 'london-lifestyle',
            color: 'blue'
          },
          tags: ['camden', 'neighborhood', 'culture', 'community'],
          featuredImage: {
            url: '/api/placeholder/400/250',
            alt: 'Camden coffee shop street view'
          },
          stats: {
            views: 1456,
            likes: 92,
            comments: 21
          },
          isPremium: false
        },
        {
          id: 7,
          title: 'Winter Warmers: Crafting the Perfect Hot Chocolate',
          slug: 'winter-warmers-crafting-perfect-hot-chocolate',
          excerpt: 'Master the art of hot chocolate making with premium cocoa, perfect milk temperature, and creative toppings for the cold London winter.',
          author: {
            name: 'Anna Thompson',
            avatar: '/api/placeholder/40/40'
          },
          publishedAt: '2023-09-25T13:20:00Z',
          readTime: 4,
          category: {
            name: 'Seasonal',
            slug: 'seasonal',
            color: 'amber'
          },
          tags: ['hot chocolate', 'winter', 'comfort drinks', 'recipes'],
          featuredImage: {
            url: '/api/placeholder/400/250',
            alt: 'Perfect hot chocolate with marshmallows'
          },
          stats: {
            views: 743,
            likes: 65,
            comments: 12
          },
          isPremium: false
        }
      ];
      setArticles(mockArticles);
      setLoading(false);
    }, 1200);
  }, [selectedCategory, sortBy, searchTerm]);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category.slug === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      case 'oldest':
        return new Date(a.publishedAt) - new Date(b.publishedAt);
      case 'popular':
        return b.stats.views - a.stats.views;
      case 'trending':
        return b.stats.likes - a.stats.likes;
      default:
        return 0;
    }
  });

  const paginatedArticles = sortedArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleLike = (articleId) => {
    setLikedArticles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(articleId)) {
        newSet.delete(articleId);
      } else {
        newSet.add(articleId);
      }
      return newSet;
    });
  };

  if (loading) {
    return (
      <div>
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded w-48 mb-4 animate-pulse"></div>
          <div className="flex space-x-4 mb-6">
            <div className="h-10 bg-gray-200 rounded w-64 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-xl animate-pulse">
              <div className="h-48 bg-gray-200 rounded-t-xl"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Latest Articles</h2>
        
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            />
          </div>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-green-200 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600 pointer-events-none" />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-stone-100 text-green-700 hover:bg-stone-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {paginatedArticles.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-green-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold text-green-800 mb-2">No articles found</h3>
          <p className="text-green-600">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {paginatedArticles.map(article => (
            <article key={article.id} className="bg-gradient-to-br from-white to-stone-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-200 group">
              <div className="relative h-48 bg-gradient-to-br from-stone-200 to-amber-200 flex items-center justify-center overflow-hidden">
                <Eye className="w-8 h-8 text-green-600" />
                
                {article.isPremium && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Premium
                    </span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-${article.category.color}-600`}>
                    {article.category.name}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4 text-sm text-green-600">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{article.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}min</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-green-700 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="text-green-600 text-xs">+{article.tags.length - 3}</span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-green-600">
                    <button
                      onClick={() => handleLike(article.id)}
                      className={`flex items-center space-x-1 transition-colors duration-200 ${
                        likedArticles.has(article.id) ? 'text-red-600' : 'hover:text-red-600'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedArticles.has(article.id) ? 'fill-current' : ''}`} />
                      <span>{article.stats.likes + (likedArticles.has(article.id) ? 1 : 0)}</span>
                    </button>
                    <span className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.stats.views}</span>
                    </span>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-green-600 hover:text-green-800 font-semibold transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-full font-medium transition-all duration-200 ${
                currentPage === index + 1
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-600 border border-green-200 hover:bg-green-50'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleList;