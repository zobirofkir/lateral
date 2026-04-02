import { useState, useRef, useEffect } from 'react';
import {  Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoBackgroundComponent from './VideoBackgroundComponent';
import LeftColumnComponent from './LeftColumnComponent';
import RightColumnComponent from './RightColumnComponent';
import VideoControlsComponent from './VideoControlsComponent';
import ScrollIndecatorComponent from './ScrollIndecatorComponent';

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
      <VideoControlsComponent 
          togglePlayPause={togglePlayPause}
          toggleMute={toggleMute}
          isPlaying={isPlaying}
          isMuted={isMuted}
      />

      {/* Scroll Indicator */}
      <ScrollIndecatorComponent />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#D4A574]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#6B3410]/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default SliderComponent;