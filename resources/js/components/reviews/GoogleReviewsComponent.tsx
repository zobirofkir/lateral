import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Calendar, User, ThumbsUp, Award, MapPin, ChevronUp, ChevronDown, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const GoogleReviewsComponent = ({ 
  googleRating = 0, 
  googleReviews = 0, 
  googleName = "", 
  reviews = [],
  showHeader = true,
  autoChangeInterval = 5000, // milliseconds between review changes
  showNavigation = true,
  showControls = true,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('down');

  // Memoized calculations for performance
  const ratingStats = useMemo(() => {
    const fullStars = Math.floor(googleRating);
    const hasHalfStar = googleRating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    const getRatingLevel = (rating) => {
      if (rating >= 4.8) return { label: "EXCEPTIONAL", color: "text-emerald-600", bg: "bg-emerald-50" };
      if (rating >= 4.5) return { label: "EXCELLENT", color: "text-blue-600", bg: "bg-blue-50" };
      if (rating >= 4.0) return { label: "VERY GOOD", color: "text-indigo-600", bg: "bg-indigo-50" };
      if (rating >= 3.5) return { label: "GOOD", color: "text-amber-600", bg: "bg-amber-50" };
      if (rating >= 3.0) return { label: "AVERAGE", color: "text-orange-600", bg: "bg-orange-50" };
      return { label: "FAIR", color: "text-red-600", bg: "bg-red-50" };
    };
    
    return { fullStars, hasHalfStar, emptyStars, getRatingLevel };
  }, [googleRating]);

  // Navigation functions
  const nextReview = useCallback(() => {
    setDirection('down');
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevReview = useCallback(() => {
    setDirection('up');
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  // Auto-play logic
  useEffect(() => {
    let interval;
    if (isAutoPlaying && reviews.length > 1) {
      interval = setInterval(nextReview, autoChangeInterval);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoChangeInterval, nextReview, reviews.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Format date professionally
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Star renderer with accessibility
  const StarRating = ({ rating, size = 16, showEmpty = true }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = showEmpty ? 5 - fullStars - (hasHalfStar ? 1 : 0) : 0;
    
    return (
      <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} size={size} className="fill-amber-400 text-amber-400" />
        ))}
        {hasHalfStar && (
          <div className="relative" key="half">
            <Star size={size} className="text-gray-200 fill-gray-200" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
              <Star size={size} className="fill-amber-400 text-amber-400" />
            </div>
          </div>
        )}
        {showEmpty && [...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-gray-200 fill-gray-200" />
        ))}
      </div>
    );
  };

  // Rating badge component
  const RatingBadge = ({ rating, size = "md" }) => {
    const { label, color, bg } = ratingStats.getRatingLevel(rating);
    const sizeClasses = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";
    
    return (
      <div className={`inline-flex items-center gap-1.5 ${bg} ${color} font-semibold ${sizeClasses} rounded-full`}>
        <Award size={size === "sm" ? 12 : 14} className={color} />
        <span>{label}</span>
      </div>
    );
  };

  // Progress indicator
  const ProgressIndicator = () => (
    <div className="flex gap-1.5 justify-center mt-4">
      {reviews.map((_, idx) => (
        <button
          key={idx}
          onClick={() => {
            setDirection(idx > currentIndex ? 'down' : 'up');
            setCurrentIndex(idx);
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), autoChangeInterval);
          }}
          className="transition-all duration-300"
        >
          <div className={`h-1.5 rounded-full ${
            idx === currentIndex 
              ? 'w-6 bg-blue-500' 
              : 'w-1.5 bg-gray-300 hover:bg-gray-400'
          }`} />
        </button>
      ))}
    </div>
  );

  
  if (!reviews || reviews.length === 0) {
    return (
      <div className={`w-full max-w-3xl mx-auto ${className}`}>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
          <Star size={48} className="mx-auto mb-4 text-gray-200" />
          <p className="text-gray-400">No reviews to display</p>
        </div>
      </div>
    );
  }

  const currentReview = reviews[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-3xl mx-auto ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white overflow-hidden transition-all duration-300 mt-10 rounded-md">
        
        {/* Header Section */}
        {showHeader && (
          <div className="relative bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-6 pt-6 pb-4 border-b border-gray-100">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Google Logo */}
                <div className="w-10 h-10">
                  <svg viewBox="0 0 24 24" width="40" height="40">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Google Reviews</h3>
                  {googleName && (
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <MapPin size={10} />
                      <span>{googleName}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <RatingBadge rating={googleRating} size="md" />
            </div>
          </div>
        )}
        
        {/* Rating Summary */}
        <div className="px-6 pt-6 pb-4 bg-white border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {googleRating.toFixed(1)}
              </div>
              <StarRating rating={googleRating} size={24} />
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-semibold text-gray-800">
                {googleReviews?.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">Verified Reviews</div>
            </div>
          </div>
        </div>
        
        {/* Vertical Carousel Section */}
        <div className="relative bg-gray-50/30 min-h-[320px]">
          {/* Navigation Arrows */}
          {showNavigation && reviews.length > 1 && (
            <>
              <button
                onClick={prevReview}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-white transition-all duration-200 opacity-70 hover:opacity-100"
                aria-label="Previous review"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-white transition-all duration-200 opacity-70 hover:opacity-100"
                aria-label="Next review"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </>
          )}
          
          {/* Auto-play Controls */}
          {showControls && reviews.length > 1 && (
            <div className="absolute top-3 right-3 z-10">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm hover:bg-white transition-all duration-200"
                aria-label={isAutoPlaying ? "Pause" : "Play"}
              >
                {isAutoPlaying ? <Pause size={14} className="text-gray-600" /> : <Play size={14} className="text-gray-600" />}
              </button>
            </div>
          )}
          
          {/* Review Card with Animation */}
          <div className="px-6 py-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ 
                  opacity: 0, 
                  y: direction === 'down' ? -30 : 30,
                  scale: 0.95
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0, 
                  y: direction === 'down' ? 30 : -30,
                  scale: 0.95
                }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeInOut"
                }}
                className="w-full"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    {currentReview.profile_photo_url ? (
                      <img
                        src={currentReview.profile_photo_url}
                        alt={currentReview.author_name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                        <User size={24} className="text-blue-600" />
                      </div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-semibold text-gray-900 text-base">
                            {currentReview.author_name}
                          </h4>
                          <div className="w-1 h-1 rounded-full bg-gray-300" />
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Calendar size={10} />
                            {formatDate(currentReview.time)}
                          </span>
                        </div>
                        <StarRating rating={currentReview.rating} size={14} />
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-gray-600 text-sm leading-relaxed mt-3">
                        {currentReview.text?.length > 400 
                          ? `${currentReview.text.substring(0, 400)}...` 
                          : currentReview.text}
                      </p>
                      
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Progress Indicator */}
            {reviews.length > 1 && <ProgressIndicator />}
            
            {/* Review Counter */}
            <div className="text-center mt-4 text-xs text-gray-400">
              {currentIndex + 1} of {reviews.length} reviews
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GoogleReviewsComponent;