import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const GoogleReviewsComponent = ({ googleRating, googleReviews, googleName, reviews = [] }) => {
  const fullStars = Math.floor(googleRating);
  const hasHalfStar = googleRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const getRatingLabel = (rating) => {
    if (rating >= 4.5) return "EXCELLENT";
    if (rating >= 4.0) return "VERY GOOD";
    if (rating >= 3.5) return "GOOD";
    if (rating >= 3.0) return "AVERAGE";
    return "FAIR";
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    for (let i = 0; i < full; i++) {
      stars.push(
        <Star key={`full-${i}`} size={16} className="fill-[#FFD700] text-[#FFD700]" />
      );
    }

    if (hasHalf) {
      stars.push(
        <div key="half" className="relative">
          <Star size={16} className="text-gray-300 fill-gray-300" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star size={16} className="fill-[#FFD700] text-[#FFD700]" />
          </div>
        </div>
      );
    }

    for (let i = 0; i < empty; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={16} className="text-gray-300 fill-gray-300" />
      );
    }

    return stars;
  };

  const renderMainStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} size={22} className="fill-[#FFD700] text-[#FFD700]" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={22} className="text-gray-300 fill-gray-300" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star size={22} className="fill-[#FFD700] text-[#FFD700]" />
          </div>
        </div>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={22} className="text-gray-300 fill-gray-300" />
      );
    }

    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 mt-10"
    >
      {/* Google Header */}
      <div className="px-6 pt-6 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Google G Logo - Gmail style colors */}
            <div className="w-8 h-8 relative shadow-sm rounded-full">
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <span className="font-medium text-gray-700 text-base">Google</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-[#4285F4] text-[#4285F4]" />
            <Star size={14} className="fill-[#4285F4] text-[#4285F4]" />
            <Star size={14} className="fill-[#4285F4] text-[#4285F4]" />
            <Star size={14} className="fill-[#4285F4] text-[#4285F4]" />
            <Star size={14} className="text-gray-300 fill-gray-300" />
          </div>
        </div>
      </div>

      {/* EXCELLENT Badge */}
      <div className="px-6 pb-2">
        <div className="text-4xl font-bold tracking-tight text-gray-900">
          {getRatingLabel(googleRating)}
        </div>
      </div>

      {/* Stars Row */}
      <div className="px-6 pb-2">
        <div className="flex items-center gap-0.5">
          {renderMainStars()}
        </div>
      </div>

      {/* Based on X reviews */}
      <div className="px-6 pb-6">
        <div className="text-sm text-gray-500 font-normal">
          Based on {googleReviews?.toLocaleString()} reviews
        </div>
      </div>

      {/* Individual Reviews Section */}
      {reviews && reviews.length > 0 && (
        <div className="border-t border-gray-100">
          <div className="divide-y divide-gray-100">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-5 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex gap-3">
                  {/* Profile Photo */}
                  {review.profile_photo_url && (
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                  
                  <div className="flex-1 min-w-0">
                    {/* Author Name & Date */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {review.author_name}
                      </h4>
                      <span className="text-xs text-gray-400">
                        {review.relative_time_description}
                      </span>
                    </div>
                    
                    {/* Stars for this review */}
                    <div className="flex items-center gap-0.5 mb-2">
                      {renderStars(review.rating)}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {review.text}
                      {review.translated && (
                        <span className="ml-1 text-xs text-gray-400">
                          (Translated)
                        </span>
                      )}
                    </p>
                    
                    {/* Language indicator (optional) */}
                    {review.language && review.language !== 'en' && (
                      <p className="text-xs text-gray-400 mt-1">
                        Original: {review.language.toUpperCase()}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GoogleReviewsComponent;