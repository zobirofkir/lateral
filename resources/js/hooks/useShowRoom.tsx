import { Link, usePage } from '@inertiajs/react';
import {
  ArrowLeft,
  BedDouble,
  Wifi,
  Tv,
  Home,
  Shield,
  Sparkles,
  Car,
  Coffee,
  Bath,
  VolumeX,
  Snowflake,
  CheckCircle,
} from 'lucide-react';

export function useShowRoom(roomId, roomsContent) {
    
  const roomsList = roomsContent.rooms || [];
  
  /**
   * Find the room by ID
   */
  const room = roomsList.find((r: any) => r.id === parseInt(roomId));
  
  /**
   * If room not found
   */
  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3E2723] mb-4">Room Not Found</h1>
          <p className="text-gray-600 mb-6">The apartment you're looking for doesn't exist.</p>
          <Link href="/rooms" className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B3410] text-white rounded-lg hover:bg-[#8B4513] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }
  
  /**
   * Function to get icon for feature
   */
  const getFeatureIcon = (feature: string) => {
    const text = feature.toLowerCase();
    if (text.includes('wifi') || text.includes('internet')) return Wifi;
    if (text.includes('climatisation') || text.includes('air conditioning')) return Snowflake;
    if (text.includes('insonoris') || text.includes('soundproof')) return VolumeX;
    if (text.includes('parking') || text.includes('parking')) return Car;
    if (text.includes('cuisine') || text.includes('kitchen')) return Coffee;
    if (text.includes('salle de bain') || text.includes('bathroom')) return Bath;
    if (text.includes('tv') || text.includes('smart tv')) return Tv;
    if (text.includes('balcon') || text.includes('balcony') || text.includes('terrasse') || text.includes('terrace')) return Home;
    if (text.includes('sécurité') || text.includes('security') || text.includes('coffre') || text.includes('safe')) return Shield;
    if (text.includes('ménage') || text.includes('cleaning')) return Sparkles;
    if (text.includes('literie') || text.includes('bedding')) return BedDouble;
    return CheckCircle;
  };

  /**
   * Animation variants
   */
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  /**
   * Room images (you can replace with actual images from your data)
   */
  const roomImages = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705",
    "https://images.unsplash.com/photo-1548013146-72479768bada",
    "https://images.unsplash.com/photo-1558981285-6f0c94958bb6",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
  ];

  return {
    room,
    getFeatureIcon,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    roomImages
  };
}