import TitleSectionComponent from "./TitleSectionComponent";
import MainImageSectionComponent from "./MainImageSectionComponent";
import TextContentComponent from "./TextContentComponent";
import DecorativeElementComponent from "./DecorativeElementComponent";
import { useAbout } from "@/hooks/useAbout";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600607686527-6fb886090705",
    alt: "Hotel exterior",
    title: "Hotel Exterior"
  }
];

const AboutComponent = () => {

  const {
    selectedImage,
    setSelectedImage,
    hoveredIndex,
    setHoveredIndex,
    containerVariants,
    itemVariants,
    titleVariants,
    imageVariants,
    mainImageVariants,
    galleryVariants,
    galleryItemVariants,
  } = useAbout(images);

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

        {/* Decorative Elements */}
        <DecorativeElementComponent />
        
      </div>
    </section>
  );
};

export default AboutComponent;