import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, ArrowRight, ChevronDown } from 'lucide-react';

const RightColumnComponent = ({
    handleBooking,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    guests,
    setGuests,
    isGuestDropdownOpen,
    setIsGuestDropdownOpen,
    today,
    defaultCheckIn,
    defaultCheckOut
}) => {
  return (
    <>
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:ml-auto"
        >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#D4A574]/30">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#2A1506]">Réservez votre séjour</h3>
                <p className="text-[#6B3410] text-sm mt-1">Meilleur prix garanti</p>
            </div>

            <form onSubmit={handleBooking} className="space-y-5">
                {/* Check-in Date */}
                <div className="relative">
                <label className="block text-sm font-semibold text-[#4A2508] mb-2 flex items-center gap-2">
                    <Calendar size={16} className="text-[#6B3410]" />
                    Date d'arrivée
                </label>
                <input
                    type="date"
                    value={checkIn || defaultCheckIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={today}
                    className="w-full px-4 py-3 border-2 border-[#D4B896] rounded-xl focus:border-[#6B3410] focus:outline-none transition-colors text-[#2A1506] bg-white/90"
                    required
                />
                </div>

                {/* Check-out Date */}
                <div className="relative">
                <label className="block text-sm font-semibold text-[#4A2508] mb-2 flex items-center gap-2">
                    <Calendar size={16} className="text-[#6B3410]" />
                    Date de départ
                </label>
                <input
                    type="date"
                    value={checkOut || defaultCheckOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn || today}
                    className="w-full px-4 py-3 border-2 border-[#D4B896] rounded-xl focus:border-[#6B3410] focus:outline-none transition-colors text-[#2A1506] bg-white/90"
                    required
                />
                </div>

                {/* Guests Dropdown */}
                <div className="relative">
                <label className="block text-sm font-semibold text-[#4A2508] mb-2 flex items-center gap-2">
                    <Users size={16} className="text-[#6B3410]" />
                    Nombre de voyageurs
                </label>
                <button
                    type="button"
                    onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
                    className="w-full px-4 py-3 border-2 border-[#D4B896] rounded-xl focus:border-[#6B3410] focus:outline-none transition-colors text-[#2A1506] bg-white/90 flex justify-between items-center"
                >
                    <span>{guests} voyageur{guests > 1 ? 's' : ''}</span>
                    <ChevronDown size={18} className={`transition-transform ${isGuestDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isGuestDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#D4B896] overflow-hidden z-20">
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                        <span className="text-[#4A2508] font-medium">Adultes</span>
                        <div className="flex items-center gap-3">
                            <button
                            type="button"
                            onClick={() => setGuests(Math.max(1, guests - 1))}
                            className="w-8 h-8 rounded-full bg-[#FAF6F2] text-[#6B3410] hover:bg-[#6B3410] hover:text-white transition-colors"
                            >
                            -
                            </button>
                            <span className="w-8 text-center text-[#2A1506]">{guests}</span>
                            <button
                            type="button"
                            onClick={() => setGuests(Math.min(10, guests + 1))}
                            className="w-8 h-8 rounded-full bg-[#FAF6F2] text-[#6B3410] hover:bg-[#6B3410] hover:text-white transition-colors"
                            >
                            +
                            </button>
                        </div>
                        </div>
                        <button
                        type="button"
                        onClick={() => setIsGuestDropdownOpen(false)}
                        className="w-full mt-3 bg-[#6B3410] text-white py-2 rounded-lg hover:bg-[#4A2508] transition-colors"
                        >
                        Valider
                        </button>
                    </div>
                    </div>
                )}
                </div>

                {/* Submit Button */}
                <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#6B3410] to-[#4A2508] text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                <span>Réservez maintenant</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Small text */}
                <p className="text-center text-xs text-[#6B3410] mt-4">
                Annulation gratuite sous 24h • Paiement sécurisé
                </p>
            </form>

            {/* Special Offer Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#D4A574] text-[#2A1506] px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                🔥 -20% sur votre première réservation
            </div>
            </div>
        </motion.div>
    </>
  )
}

export default RightColumnComponent