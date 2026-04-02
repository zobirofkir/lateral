import { motion } from "framer-motion";
import {
  Wifi,
  Car,
  BedDouble,
  Users,
  Coffee,
  ConciergeBell,
} from "lucide-react";
import { useI18n } from '@/contexts/I18nContext';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const WhyComponent = () => {
  const { t } = useI18n();
  
  const whyContent = t.whyModule || {};
  
  const features = [
    { icon: BedDouble, text: whyContent.features?.[0] },
    { icon: ConciergeBell, text: whyContent.features?.[1] },
    { icon: Wifi, text: whyContent.features?.[2] },
    { icon: Users, text: whyContent.features?.[3] },
    { icon: Car, text: whyContent.features?.[4] },
    { icon: Coffee, text: whyContent.features?.[5] },
  ];

  return (
    <section className="relative w-full min-h-screen py-12 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/why/why_component_image.jpeg"
          alt="Hôtel Lateral background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 md:bg-black/60 backdrop-blur-[2px] md:backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-500 mb-3 md:mb-4 leading-tight">
            {whyContent.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-2">
            {whyContent.subtitle}
          </p>
          <p className="text-orange-400 mt-2 md:mt-3 font-semibold text-sm sm:text-base">
            {whyContent.highlight}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center gap-3 md:gap-4 group"
              >
                {/* Icon Circle */}
                <div className="relative">
                  <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-orange-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                {/* Text */}
                <p className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="hidden md:block w-24 h-1 bg-orange-500/50 mx-auto mt-16 rounded-full"
        />
      </div>
    </section>
  );
};

export default WhyComponent;