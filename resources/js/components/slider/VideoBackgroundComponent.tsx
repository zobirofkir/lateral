import React from 'react'

const VideoBackgroundComponent = ({
    videoRef,
    isPlaying,
    isMuted
}) => {
  return (
    <>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay={isPlaying}
          loop={true}
          muted={isMuted}
          playsInline
        >
          <source src="https://tan-octopus-840205.hostingersite.com/lateral_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0D04]/85 via-[#2A1506]/70 to-[#1A0D04]/85"></div>
        
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0502]/60 via-transparent to-transparent"></div>
      </div>
    </>
  )
}

export default VideoBackgroundComponent