import React from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Award, ExternalLink } from 'lucide-react'

const GoogleReviewsComponent = ({ googleRating, googleReviews }) => {
  const ratingPercentage = (googleRating / 5) * 100
  
  const getRatingLabel = (rating) => {
    if (rating >= 4.5) return "Excellent"
    if (rating >= 4.0) return "Very Good"
    if (rating >= 3.5) return "Good"
    if (rating >= 3.0) return "Average"
    return "Fair"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-br from-[#faf6f2] via-[#f8f5f0] to-[#f5efe8] py-8 px-4 md:px-10 lg:px-20 border-y border-[#D4A574]/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Left Section - Rating Summary */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Big Rating Number */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#6B3410] to-[#4A2508] bg-clip-text text-transparent">
                {googleRating}
              </div>
              <div className="text-sm text-gray-500 mt-1">out of 5</div>
            </div>

            {/* Stars and Label */}
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.floor(googleRating)
                        ? 'fill-[#FFD700] text-[#FFD700]'
                        : i < googleRating
                        ? 'fill-[#FFD700]/50 text-[#FFD700]'
                        : 'fill-gray-200 text-gray-200'
                    } transition-all duration-300`}
                  />
                ))}
              </div>
              <div className="text-lg font-semibold text-[#6B3410]">
                {getRatingLabel(googleRating)}
              </div>
            </div>

            {/* Rating Bar - Desktop */}
            <div className="hidden md:block w-32">
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ratingPercentage}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Divider - Desktop */}
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-[#D4A574] to-transparent" />

          {/* Middle Section - Review Count */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4A574]/10 flex items-center justify-center">
                <Users size={20} className="text-[#6B3410]" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#4A2508]">
                  {googleReviews.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Verified Reviews</div>
              </div>
            </div>
          </div>

        </div>

        {/* Rating Bar - Mobile Only */}
        <div className="md:hidden mt-6">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Rating</span>
            <span>{ratingPercentage}%</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${ratingPercentage}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full"
            />
          </div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute left-0 right-0 mt-6 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
            <div className="flex justify-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-[#D4A574]/30"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default GoogleReviewsComponent