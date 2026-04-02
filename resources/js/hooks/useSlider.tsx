import { useState, useRef, useEffect } from 'react';

export function useSLider() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const videoRef = useRef(null);

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
  };

  const today = new Date().toISOString().split('T')[0];
  
  const defaultCheckIn = today;
  const defaultCheckOut = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  return {
    isPlaying,
    isMuted,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    guests,
    setGuests,
    isGuestDropdownOpen,
    setIsGuestDropdownOpen,
    videoRef,
    togglePlayPause,
    toggleMute,
    handleBooking,
    today,
    defaultCheckIn,
    defaultCheckOut
  }
}