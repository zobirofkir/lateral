import React from 'react'
import { motion } from 'framer-motion'

const LeftColumnComponent = () => {
  return (
    <>
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
            Hôtel Lateral
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
    </>
  )
}

export default LeftColumnComponent