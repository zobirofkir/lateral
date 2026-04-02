import React from 'react'
import { motion } from "framer-motion";


const LogoComponent = () => {
  return (
    <>
        {/* Logo */}
        <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            >
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#6B3410] to-[#4A2508] rounded-xl shadow-md">
                <img src="/assets/images/logo/logo.png" className="rounded-xl" alt="Logo" />
            </div>
        </motion.div>
    </>
  )
}

export default LogoComponent