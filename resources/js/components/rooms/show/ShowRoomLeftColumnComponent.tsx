import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react'

const SectionHeader = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="w-1 h-7 bg-[#D4B896] rounded-full shrink-0" />
    <h2 className="text-xl md:text-2xl font-bold text-[#3E2723] tracking-tight">{label}</h2>
  </div>
)

const PREVIEW_COUNT = 5

const ShowRoomLeftColumnComponent = ({
  fadeInLeft,
  fadeInUp,
  staggerContainer,
  room,
  getFeatureIcon,
  roomsContent
}) => {
  const [expanded, setExpanded] = useState(false)
  const features: string[] = room.features ?? []
  const visible = expanded ? features : features.slice(0, PREVIEW_COUNT)
  const hasMore = features.length > PREVIEW_COUNT

  return (
    <div className="lg:col-span-2 space-y-6">

      {/* Description */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
      >
        <SectionHeader label="Description" />
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {room.description}
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
      >
        <SectionHeader label={roomsContent.amenties} />

        <ul className="space-y-3">
          <AnimatePresence initial={false}>
            {visible.map((feature, idx) => {
              const Icon = getFeatureIcon(feature)
              return (
                <motion.li
                  key={idx}
                  variants={fadeInLeft}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-start gap-3 group"
                >
                  {/* Tiret + icon */}
                  <div className="flex items-center gap-2 mt-0.5 shrink-0">
                    <span className="text-[#D4B896] font-bold text-base leading-none select-none">—</span>
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#D4B896]/15 group-hover:bg-[#D4B896]/30 transition-colors">
                      <Icon className="w-3.5 h-3.5 text-[#6B3410]" />
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm md:text-base leading-snug">{feature}</span>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ul>

        {/* Show more / less toggle */}
        {hasMore && (
          <button
            onClick={() => setExpanded(v => !v)}
            className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[#6B3410] hover:text-[#8B4513] transition-colors group"
          >
            <span>{expanded ? roomsContent.see_more?.replace('Voir', 'Voir moins') ?? 'Show less' : `${roomsContent.see_more ?? 'See more'} (${features.length - PREVIEW_COUNT})`}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </motion.div>

    </div>
  )
}

export default ShowRoomLeftColumnComponent
