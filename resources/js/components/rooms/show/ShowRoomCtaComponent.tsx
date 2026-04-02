import { Link } from '@inertiajs/react'
import { Phone } from 'lucide-react'
import { motion } from "framer-motion";


const ShowRoomCtaComponent = () => {
  return (
    <>
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
    </>
  )
}

export default ShowRoomCtaComponent