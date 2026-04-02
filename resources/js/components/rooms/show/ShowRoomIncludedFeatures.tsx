import React from 'react'
import { motion } from "framer-motion";

const ShowRoomIncludedFeatures = ({
    roomsContent
}) => {
  return (
    <>
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
    </>
  )
}

export default ShowRoomIncludedFeatures