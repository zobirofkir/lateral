import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import React from 'react'

const VideoControlsComponent = ({
    togglePlayPause,
    toggleMute,
    isPlaying,
    isMuted
}) => {
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
    </>
  )
}

export default VideoControlsComponent