import { Pause, Play, Volume2, VolumeX, Eye, TrendingUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const VideoControlsComponent = ({
    togglePlayPause,
    toggleMute,
    isPlaying,
    isMuted,
    views
}) => {
  const [animatedViews, setAnimatedViews] = useState(0);
  const [formattedViews, setFormattedViews] = useState('0');

  /**
   * 
   * @param num Format number to K, M, B format
   * @returns 
   */
  const formatNumber = (num) => {
    if (num === undefined || num === null) return '0';
    
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  };

  /**
   * Format with full number on hover
   */
  const [isHovered, setIsHovered] = useState(false);
  const [displayViews, setDisplayViews] = useState('0');

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = views / (duration / 16);
    
    if (views > 0) {
      const timer = setInterval(() => {
        start += increment;
        if (start >= views) {
          setAnimatedViews(views);
          clearInterval(timer);
        } else {
          setAnimatedViews(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [views]);

  /**
   * Update display format based on hover state
   */
  useEffect(() => {
    if (isHovered) {
      setDisplayViews(animatedViews.toLocaleString());
    } else {
      setDisplayViews(formatNumber(animatedViews));
    }
  }, [animatedViews, isHovered]);

  return (
    <>
      <div className="absolute bottom-6 left-6 z-20 flex gap-3 bg-[#2A1506]/80 backdrop-blur-md rounded-full p-2 shadow-lg">
        <button
          onClick={togglePlayPause}
          className="p-2 hover:bg-[#6B3410] rounded-full transition-colors text-white"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={toggleMute}
          className="p-2 hover:bg-[#6B3410] rounded-full transition-colors text-white"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* View Counter */}
      <div 
        className="absolute bottom-6 right-6 z-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="group relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Main counter card */}
          <div className="relative flex items-center gap-2 px-4 py-2 bg-[#2A1506]/80 backdrop-blur-md rounded-full border border-white/10 hover:bg-[#2A1506]/90 transition-all duration-300 group-hover:scale-105">
            {/* Icon with gradient background */}
            <div className="w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
              <Eye className="w-3.5 h-3.5 text-white" />
            </div>
            
            {/* Views count */}
            <div className="flex items-baseline gap-1">
              <span className="text-white font-bold font-mono text-sm transition-all duration-200">
                {displayViews}
              </span>
              <TrendingUp className="w-2.5 h-2.5 text-green-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoControlsComponent