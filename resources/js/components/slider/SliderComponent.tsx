import VideoBackgroundComponent from './VideoBackgroundComponent';
import LeftColumnComponent from './LeftColumnComponent';
import RightColumnComponent from './RightColumnComponent';
import VideoControlsComponent from './VideoControlsComponent';
import ScrollIndecatorComponent from './ScrollIndecatorComponent';
import { useSLider } from '@/hooks/useSlider';

const SliderComponent = () => {

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
    defaultCheckOut
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