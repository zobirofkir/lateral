import React from 'react'
import { motion } from "framer-motion";

const ShowRoomLeftColumnComponent = ({
    fadeInLeft, 
    fadeInUp,
    staggerContainer,
    room,
    getFeatureIcon,
    roomsContent
}) => {
  return (
    <>
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
                {roomsContent.amenties}
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
    </>
  )
}

export default ShowRoomLeftColumnComponent