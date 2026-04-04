import VideoBackgroundComponent from './VideoBackgroundComponent';
import LeftColumnComponent from './LeftColumnComponent';
import RightColumnComponent from './RightColumnComponent';
import VideoControlsComponent from './VideoControlsComponent';
import ScrollIndecatorComponent from './ScrollIndecatorComponent';
import { useSLider } from '@/hooks/useSlider';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';

const SliderComponent = ({views}) => {

  const { t, locale } = useI18n();
  
  const bookingContent = t.leftslide?.booking || {};

  const {
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
    defaultCheckOut,
    handleWhatsAppRedirect
  } = useSLider();

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
            <div className='lg:block hidden' >

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
                handleWhatsAppRedirect={handleWhatsAppRedirect}
              />

            </div>

            <div className='lg:hidden block'>
              {/* Submit Button */}
              <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#6B3410] to-[#4A2508] text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  onClick={() => window.location.href = '/bookings'}
              >
                  <span>{bookingContent.submit || (locale === 'fr' ? "Réservez maintenant" : "Book Now")}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <VideoControlsComponent 
          togglePlayPause={togglePlayPause}
          toggleMute={toggleMute}
          isPlaying={isPlaying}
          isMuted={isMuted}
          views={views}
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