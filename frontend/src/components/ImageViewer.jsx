import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart, ZoomIn, ZoomOut } from 'lucide-react';

const ImageViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock images data for demonstration
  useEffect(() => {
    const mockImages = [
      {
        id: 1,
        title: 'Perfect Morning Latte',
        category: 'coffee-art',
        description: 'A beautiful latte art creation to start your day right',
        imageUrl: '/api/placeholder/800/600',
        highResUrl: '/api/placeholder/1200/900',
        photographer: 'Sarah Johnson',
        dateTaken: '2023-10-15',
        camera: 'Canon EOS R5',
        settings: 'f/2.8, 1/60s, ISO 400',
        tags: ['latte', 'morning', 'art', 'coffee'],
        likes: 324,
        downloads: 45
      },
      {
        id: 2,
        title: 'Cozy Reading Corner',
        category: 'interior',
        description: 'Our favorite reading nook bathed in natural morning light',
        imageUrl: '/api/placeholder/800/600',
        highResUrl: '/api/placeholder/1200/900',
        photographer: 'Mike Chen',
        dateTaken: '2023-10-12',
        camera: 'Sony A7IV',
        settings: 'f/1.8, 1/125s, ISO 200',
        tags: ['interior', 'reading', 'cozy', 'natural-light'],
        likes: 287,
        downloads: 32
      },
      {
        id: 3,
        title: 'Community Gathering',
        category: 'atmosphere',
        description: 'Local book club meeting in our main seating area',
        imageUrl: '/api/placeholder/800/600',
        highResUrl: '/api/placeholder/1200/900',
        photographer: 'Elena Martinez',
        dateTaken: '2023-10-08',
        camera: 'Nikon Z6II',
        settings: 'f/2.2, 1/80s, ISO 800',
        tags: ['community', 'book-club', 'gathering', 'social'],
        likes: 156,
        downloads: 21
      }
    ];
    setImages(mockImages);
  }, []);

  const openViewer = (image, imageArray = images, index = 0) => {
    setCurrentImage(image);
    setImages(imageArray);
    setCurrentIndex(index);
    setIsOpen(true);
    setIsZoomed(false);
    setIsFavorited(false);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setIsOpen(false);
    setCurrentImage(null);
    setIsZoomed(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (images.length > 0) {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      setCurrentIndex(newIndex);
      setCurrentImage(images[newIndex]);
      setIsZoomed(false);
    }
  };

  const goToNext = () => {
    if (images.length > 0) {
      const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      setCurrentIndex(newIndex);
      setCurrentImage(images[newIndex]);
      setIsZoomed(false);
    }
  };

  const handleKeyPress = (e) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        closeViewer();
        break;
      case 'ArrowLeft':
        goToPrevious();
        break;
      case 'ArrowRight':
        goToNext();
        break;
      default:
        break;
    }
  };

  const handleDownload = async () => {
    if (!currentImage) return;
    
    setLoading(true);
    // TODO: Implement actual download functionality
    // const response = await fetch(currentImage.highResUrl);
    // const blob = await response.blob();
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = `${currentImage.title.replace(/\s+/g, '_')}.jpg`;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    // window.URL.revokeObjectURL(url);
    
    setTimeout(() => {
      setLoading(false);
      console.log('Downloaded:', currentImage.title);
    }, 1000);
  };

  const handleShare = async () => {
    if (!currentImage) return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage.title,
          text: currentImage.description,
          url: window.location.href
        });
      } catch (error) {
        console.log('Share cancelled or failed:', error);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      console.log('Link copied to clipboard');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, currentIndex, images]);

  if (!isOpen || !currentImage) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 z-60 bg-gradient-to-b from-black to-transparent p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={closeViewer}
              className="text-white hover:text-green-400 transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-white">
              <h3 className="text-lg font-semibold">{currentImage.title}</h3>
              <p className="text-sm text-gray-300">
                {currentIndex + 1} of {images.length} • by {currentImage.photographer}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="text-white hover:text-green-400 transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            >
              {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full ${
                isFavorited ? 'text-red-400' : 'text-white hover:text-red-400'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="text-white hover:text-green-400 transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={handleDownload}
              disabled={loading}
              className="text-white hover:text-green-400 transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full disabled:opacity-50"
            >
              <Download className={`w-5 h-5 ${loading ? 'animate-pulse' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-green-400 transition-colors duration-200 p-3 hover:bg-white hover:bg-opacity-10 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-green-400 transition-colors duration-200 p-3 hover:bg-white hover:bg-opacity-10 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      {/* Main Image */}
      <div className="flex items-center justify-center w-full h-full p-20">
        <div className={`relative max-w-full max-h-full transition-transform duration-300 ${
          isZoomed ? 'transform scale-150 cursor-zoom-out' : 'cursor-zoom-in'
        }`}>
          <div className="bg-gradient-to-br from-amber-200 to-stone-300 flex items-center justify-center rounded-lg overflow-hidden shadow-2xl">
            <img
              src={currentImage.highResUrl || currentImage.imageUrl}
              alt={currentImage.title}
              className="max-w-full max-h-full object-contain"
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>
        </div>
      </div>

      {/* Bottom Info Panel */}
      <div className="absolute bottom-0 left-0 right-0 z-60 bg-gradient-to-t from-black to-transparent p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-white">
            <p className="text-sm text-gray-300 mb-2">{currentImage.description}</p>
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>{new Date(currentImage.dateTaken).toLocaleDateString()}</span>
                <span>{currentImage.camera}</span>
                <span>{currentImage.settings}</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{currentImage.likes}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>{currentImage.downloads}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {currentImage.tags.map((tag, index) => (
                <span key={index} className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip (for multiple images) */}
      {images.length > 1 && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-60">
          <div className="flex space-x-2 bg-black bg-opacity-50 rounded-lg p-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setCurrentImage(image);
                  setIsZoomed(false);
                }}
                className={`w-12 h-12 rounded-md overflow-hidden transition-all duration-200 ${
                  index === currentIndex ? 'ring-2 ring-green-400' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-stone-300 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;