import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleSectionComponent from "./TitleSectionComponent";
import MainImageSectionComponent from "./MainImageSectionComponent";
import TextContentComponent from "./TextContentComponent";
import GallerySectionComponent from "./GallerySectionComponent";
import DecorativeElementComponent from "./DecorativeElementComponent";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600607686527-6fb886090705",
    alt: "Hotel exterior",
    title: "Hotel Exterior"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1548013146-72479768bada",
    alt: "Luxury room",
    title: "Luxury Suite"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6",
    alt: "Restaurant area",
    title: "Fine Dining"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1548013146-72479768bada",
    alt: "Swimming pool",
    title: "Infinity Pool"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    alt: "Spa center",
    title: "Luxury Spa"
  },
];

const AboutComponent = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const mainImageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  const galleryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const galleryItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#faf6f2] via-[#f8f5f0] to-[#f5efe8] py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <TitleSectionComponent 
            containerVariants={containerVariants}
            titleVariants={titleVariants}
            itemVariants={itemVariants}
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Main Image Section */}
          <MainImageSectionComponent
              itemVariants={itemVariants}
              selectedImage={selectedImage}
              mainImageVariants={mainImageVariants}
          />

          {/* Text Content */}
          <TextContentComponent 
              containerVariants={containerVariants}
              itemVariants={itemVariants}
          />
          
        </div>

        {/* Gallery Section */}
        <GallerySectionComponent 
              itemVariants={itemVariants}
              galleryVariants={galleryVariants}
              images={images}
              galleryItemVariants={galleryItemVariants}
              setHoveredIndex={setHoveredIndex}
              setSelectedImage={setSelectedImage}
              imageVariants={imageVariants}
              selectedImage={selectedImage}
              hoveredIndex={hoveredIndex}
        />

        {/* Decorative Elements */}
        <DecorativeElementComponent />
        
      </div>
    </section>
  );
};

export default AboutComponent;