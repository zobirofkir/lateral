import React from 'react'
import { motion } from "framer-motion";
import { BedDouble, Calendar, Mail, Phone, Star, Users } from 'lucide-react';

const ShowRoomRightColumnComponent = ({
    fadeInRight,
    room
}) => {
  return (
    <>
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
    </>
  )
}

export default ShowRoomRightColumnComponent