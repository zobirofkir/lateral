import { Link, usePage } from '@inertiajs/react';
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Users,
  BedDouble,
  Calendar,
  Phone,
  Mail,
  Star
} from 'lucide-react';
import { useShowRoom } from '@/hooks/useShowRoom';
import { useI18n } from '@/contexts/I18nContext';
import ShowRoomHeroSectionComponent from '@/components/rooms/show/ShowRoomHeroSectionComponent';
import ShowRoomLeftColumnComponent from '@/components/rooms/show/ShowRoomLeftColumnComponent';
import ShowRoomRightColumnComponent from '@/components/rooms/show/ShowRoomRightColumnComponent';
import ShowRoomIncludedFeatures from '@/components/rooms/show/ShowRoomIncludedFeatures';
import ShowRoomCtaComponent from '@/components/rooms/show/ShowRoomCtaComponent';

const ShowRoomPage = () => {

  const { t } = useI18n();


  /**
   * Get the room ID from the page props (passed from controller)
   */

  const { roomId } = usePage().props;
  const roomsContent = t.roomsModule || {};


  const {
    room,
    getFeatureIcon,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    roomImages
  } = useShowRoom(roomId, roomsContent);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <ShowRoomHeroSectionComponent roomImages={roomImages} room={room} />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Description & Features */}
          <ShowRoomLeftColumnComponent 
            fadeInLeft={fadeInLeft}
            fadeInUp={fadeInUp}
            staggerContainer={staggerContainer}
            room={room}
            getFeatureIcon={getFeatureIcon}
          />
          
          {/* Right Column - Booking Card */}
          <ShowRoomRightColumnComponent fadeInRight={fadeInRight} room={room} />

        </div>
        
        {/* Included Features Banner */}
        <ShowRoomIncludedFeatures roomsContent={roomsContent} />
        
        {/* CTA Section */}
        <ShowRoomCtaComponent />
      </div>
    </div>
  );
};

export default ShowRoomPage;