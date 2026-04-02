import { useState, useRef, useEffect } from 'react';
import {  Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoBackgroundComponent from './VideoBackgroundComponent';
import LeftColumnComponent from './LeftColumnComponent';
import RightColumnComponent from './RightColumnComponent';

const SliderComponent = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const videoRef = useRef(null);

  // Handle video playback
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(error => {
          console.log("Video autoplay prevented:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    console.log('Booking:', { checkIn, checkOut, guests });
    // Add your booking logic here
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];
  
  // Set default dates (today and tomorrow)
  const defaultCheckIn = today;
  const defaultCheckOut = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  return (
    <div className="relative w-full h-screen overflow-hidden">

      <VideoBackgroundComponent isPlaying={isPlaying} isMuted={isMuted} videoRef={videoRef} />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <LeftColumnComponent />

            {/* Right Column - Booking Form */}
            <RightColumnComponent 
                handleBooking={handleBooking}
                checkIn={checkIn}
                setCheckIn={setCheckIn}
                checkOut={checkOut}
                setCheckOut={setCheckOut}
                guests={guests}
                setGuests={setGuests}
                isGuestDropdownOpen={isGuestDropdownOpen}
                setIsGuestDropdownOpen={setIsGuestDropdownOpen}
                today={today}
                defaultCheckIn={defaultCheckIn}
                defaultCheckOut={defaultCheckOut}
            />
          </div>
        </div>
      </div>

      {/* Video Controls */}
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

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#D4A574]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#6B3410]/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default SliderComponent;