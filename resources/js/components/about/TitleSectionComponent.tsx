import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext';

const TitleSectionComponent = ({
    containerVariants,
    titleVariants,
    itemVariants
}) => {
    const { t, locale } = useI18n();
    
    const titleContent = t.titleSection || {};
    
    const defaultTitles = {
        fr: {
            main_title: "Un Séjour Authentique au Cœur de Tanger",
            subtitle: "Découvrez l'hospitalité marocaine dans un cadre d'exception"
        },
        en: {
            main_title: "An Authentic Stay in the Heart of Tangier",
            subtitle: "Discover Moroccan hospitality in an exceptional setting"
        }
    };
    
    const currentDefaults = defaultTitles[locale as keyof typeof defaultTitles] || defaultTitles.fr;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-16"
        >
            <motion.div variants={titleVariants} className="relative inline-block">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#D4B896]/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#6B3410]/10 rounded-full blur-2xl" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E2723] relative z-10">
                    {titleContent.main_title || currentDefaults.main_title}
                </h2>
            </motion.div>
            <motion.div
                variants={itemVariants}
                className="w-24 h-1 bg-gradient-to-r from-[#D4B896] to-[#6B3410] mx-auto mt-6 rounded-full"
            />
            <motion.p
                variants={itemVariants}
                className="text-[#5C2E0B] mt-4 max-w-2xl mx-auto text-lg"
            >
                {titleContent.subtitle || currentDefaults.subtitle}
            </motion.p>
        </motion.div>
    )
}

export default TitleSectionComponent