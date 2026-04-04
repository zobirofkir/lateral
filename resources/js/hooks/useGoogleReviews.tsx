import { useState, useEffect, useMemo, useCallback } from 'react';
import { Star , Award } from 'lucide-react';

export function useGoogleReviews(
  googleRating = 0, 
  googleReviews = 0, 
  googleName = "", 
  reviews = [],
  showHeader = true,
  autoChangeInterval = 5000,
  showNavigation = true,
  showControls = true,
  className = ""
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('down');

  /**
   * Memoized calculations for performance
   */
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

  /**
   * Navigation functions
   */
  const nextReview = useCallback(() => {
    setDirection('down');
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevReview = useCallback(() => {
    setDirection('up');
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  /**
   * Auto-play logic
   */
  useEffect(() => {
    let interval;
    if (isAutoPlaying && reviews.length > 1) {
      interval = setInterval(nextReview, autoChangeInterval);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoChangeInterval, nextReview, reviews.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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

  return {
    currentIndex,
    isAutoPlaying,
    direction,
    ratingStats,
    nextReview,
    prevReview,
    handleMouseEnter,
    handleMouseLeave,
    formatDate,
    StarRating,
    RatingBadge,
    ProgressIndicator,
    currentReview
  };
}