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

          {/* Divider - Desktop */}
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-[#D4A574] to-transparent" />

          {/* Right Section - Google Badge & CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-[#D4A574]/20">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
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