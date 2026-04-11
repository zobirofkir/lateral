import React from 'react'
import { motion } from "framer-motion"
import {
  Wind, Wifi, Car, Sparkles, ShieldCheck,
  WashingMachine, Tv, BedDouble, Volume2, ArrowUpDown, Droplets
} from "lucide-react"

const FEATURE_ICONS = [
  Wind, Wifi, Car, Sparkles, ShieldCheck,
  WashingMachine, Tv, BedDouble, Volume2, ArrowUpDown, Droplets
]

const ShowRoomIncludedFeatures = ({ roomsContent }) => {
  const features: string[] = Array.isArray(roomsContent.included_features)
    ? roomsContent.included_features
    : []

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3E2723] to-[#6B3410] px-6 py-5 flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-[#D4B896]" />
        <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">
          {roomsContent.included_features_title}
        </h3>
      </div>

      {/* Features grid */}
      <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {features.map((feature, idx) => {
          const Icon = FEATURE_ICONS[idx] ?? Sparkles
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              className="flex items-center gap-3 group"
            >
              <span className="text-[#D4B896] font-bold text-lg leading-none select-none">—</span>
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-[#6B3410] shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">{feature}</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default ShowRoomIncludedFeatures
