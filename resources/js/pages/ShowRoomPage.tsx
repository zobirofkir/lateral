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
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={roomImages[room.id % roomImages.length]}
            alt={room.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-4 md:top-8 md:left-8 z-20">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Rooms</span>
          </Link>
        </div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#D4B896] text-[#3E2723] text-sm font-semibold rounded-full">
                  {room.size}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {room.capacity}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
                {room.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-4">
                {room.description.split('.')[0]}.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4B896] text-[#3E2723] rounded-lg font-bold text-xl">
                {room.price}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Description & Features */}
          <div className="lg:col-span-2 space-y-8 md:space-y-10">
            {/* Full Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#D4B896] rounded-full"></span>
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {room.description}
              </p>
            </motion.div>
            
            {/* Features Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#D4B896] rounded-full"></span>
                Amenities & Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.features?.map((feature: string, idx: number) => {
                  const Icon = getFeatureIcon(feature);
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeInLeft}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-[#D4B896]/20 rounded-full group-hover:bg-[#D4B896]/40 transition-colors">
                        <Icon className="w-5 h-5 text-[#6B3410]" />
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Booking Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-[#6B3410] to-[#8B4513] p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Book This Suite</h3>
                <p className="text-white/80">Reserve your stay at La Teral</p>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Price Display */}
                <div className="text-center pb-4 border-b border-gray-200">
                  <div className="text-3xl font-bold text-[#6B3410]">{room.price}</div>
                  <p className="text-gray-500 text-sm">per night</p>
                </div>
                
                {/* Quick Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <span className="flex items-center gap-2 text-gray-600">
                      <BedDouble className="w-4 h-4" />
                      Size
                    </span>
                    <span className="font-semibold text-gray-800">{room.size}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      Capacity
                    </span>
                    <span className="font-semibold text-gray-800">{room.capacity}</span>
                  </div>
                </div>
                
                {/* Booking Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4B896] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4B896] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4B896] focus:border-transparent outline-none">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6 Guests</option>
                    </select>
                  </div>
                  
                  <button className="w-full py-3 bg-[#6B3410] text-white rounded-lg font-semibold hover:bg-[#8B4513] transition-colors duration-300 transform hover:scale-105">
                    Check Availability
                  </button>
                </div>
                
                {/* Contact Info */}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <p className="text-sm text-gray-500 text-center">Or contact us directly</p>
                  <div className="flex justify-center gap-4">
                    <a href="tel:+212123456789" className="flex items-center gap-2 text-[#6B3410] hover:text-[#8B4513] transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">Call</span>
                    </a>
                    <a href="mailto:info@lateral.com" className="flex items-center gap-2 text-[#6B3410] hover:text-[#8B4513] transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="mt-6 text-center">
              <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-500">Rated 5/5 by our guests</p>
            </div>
          </motion.div>
        </div>
        
        {/* Included Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 bg-gradient-to-r from-[#D4B896]/10 to-[#6B3410]/10 rounded-2xl text-center"
        >
          <p className="text-gray-700 text-sm md:text-base">
            ✨ {roomsContent.included_features}
          </p>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#6B3410] text-[#6B3410] rounded-lg font-semibold hover:bg-[#6B3410] hover:text-white transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Contact Us for Special Offers
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ShowRoomPage;