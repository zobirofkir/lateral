import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Users, ArrowRight, Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

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

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-block text-[#D4A574] text-sm sm:text-base uppercase tracking-wider font-semibold mb-4 bg-[#4A2508]/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4A574]/30">
                  ✨ Luxury & Comfort
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              >
                Hôtel Mauritania
                <span className="block text-[#D4A574] text-3xl sm:text-4xl lg:text-5xl mt-2">
                  Tanger
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed max-w-lg"
              >
                Découvrez l'excellence à la marocaine. Un séjour d'exception où le luxe rencontre 
                l'authenticité, avec une vue imprenable sur le détroit de Gibraltar.
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                {[
                  "✓ Vue panoramique",
                  "✓ Spa & Bien-être",
                  "✓ Restaurant Gastronomique",
                  "✓ Piscine à débordement"
                ].map((feature, index) => (
                  <span key={index} className="text-sm text-gray-200 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </motion.div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#D4A574] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-white/80 text-sm">5.0 • 1,250+ avis</span>
              </motion.div>
            </motion.div>

            {/* Right Column - Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:ml-auto"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#D4A574]/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#2A1506]">Réservez votre séjour</h3>
                  <p className="text-[#6B3410] text-sm mt-1">Meilleur prix garanti</p>
                </div>

                <form onSubmit={handleBooking} className="space-y-5">
                  {/* Check-in Date */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-[#4A2508] mb-2 flex items-center gap-2">
                      <Calendar size={16} className="text-[#6B3410]" />
                      Date d'arrivée
                    </label>
                    <input
                      type="date"
                      value={checkIn || defaultCheckIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={today}
                      className="w-full px-4 py-3 border-2 border-[#D4B896] rounded-xl focus:border-[#6B3410] focus:outline-none transition-colors text-[#2A1506] bg-white/90"
                      required
                    />
                  </div>

                  {/* Check-out Date */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-[#4A2508] mb-2 flex items-center gap-2">
                      <Calendar size={16} className="text-[#6B3410]" />
                      Date de départ
                    </label>
                    <input
                      type="date"
                      value={checkOut || defaultCheckOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || today}
                      className="w-full px-4 py-3 border-2 border-[#D4B896] rounded-xl focus:border-[#6B3410] focus:outline-none transition-colors text-[#2A1506] bg-white/90"
                      required
                    />
                  </div>

                  {/* Guests Dropdown */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-[#4A2508] mb-2 flex items-center gap-2">
                      <Users size={16} className="text-[#6B3410]" />
                      Nombre de voyageurs
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
                      className="w-full px-4 py-3 border-2 border-[#D4B896] rounded-xl focus:border-[#6B3410] focus:outline-none transition-colors text-[#2A1506] bg-white/90 flex justify-between items-center"
                    >
                      <span>{guests} voyageur{guests > 1 ? 's' : ''}</span>
                      <ChevronDown size={18} className={`transition-transform ${isGuestDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isGuestDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#D4B896] overflow-hidden z-20">
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[#4A2508] font-medium">Adultes</span>
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => setGuests(Math.max(1, guests - 1))}
                                className="w-8 h-8 rounded-full bg-[#FAF6F2] text-[#6B3410] hover:bg-[#6B3410] hover:text-white transition-colors"
                              >
                                -
                              </button>
                              <span className="w-8 text-center text-[#2A1506]">{guests}</span>
                              <button
                                type="button"
                                onClick={() => setGuests(Math.min(10, guests + 1))}
                                className="w-8 h-8 rounded-full bg-[#FAF6F2] text-[#6B3410] hover:bg-[#6B3410] hover:text-white transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setIsGuestDropdownOpen(false)}
                            className="w-full mt-3 bg-[#6B3410] text-white py-2 rounded-lg hover:bg-[#4A2508] transition-colors"
                          >
                            Valider
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#6B3410] to-[#4A2508] text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Réservez maintenant</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Small text */}
                  <p className="text-center text-xs text-[#6B3410] mt-4">
                    Annulation gratuite sous 24h • Paiement sécurisé
                  </p>
                </form>

                {/* Special Offer Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#D4A574] text-[#2A1506] px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                  🔥 -20% sur votre première réservation
                </div>
              </div>
            </motion.div>
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