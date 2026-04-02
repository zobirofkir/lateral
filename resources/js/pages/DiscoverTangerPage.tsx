import { motion } from "framer-motion";
import { useDiscover } from "@/hooks/useDiscover";

const DiscoverTangerPage = () => {

  const {
    articles,
    containerVariants,
    titleVariants,
    cardVariants,
    imageVariants,
    contentVariants,
    listItemVariants,
    ...discoverModule
  } = useDiscover();

  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#6B0F0F] to-[#8B1A1A] bg-clip-text text-transparent">
            {discoverModule.title}
          </h2>
          <motion.div
            className="w-28 h-1 bg-gradient-to-r from-green-500 to-green-600 mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <motion.div
                  className="h-72 md:h-full overflow-hidden relative"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={false}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="p-8 md:p-10 flex flex-col justify-center"
                  variants={contentVariants}
                >
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-green-600 mb-4 relative inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {article.title}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.h3>

                  <motion.p
                    className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {article.description}
                  </motion.p>

                  <motion.ul className="space-y-2 mb-6">
                    {article.points.map((point, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start text-gray-600 group-hover:text-gray-700 transition-colors"
                      >
                        <motion.span
                          className="text-green-500 mr-3 text-lg font-bold"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          •
                        </motion.span>
                        <span className="leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    className="pt-4 border-t border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-gray-500 flex items-center">
                      <span className="font-semibold text-gray-700 mr-2">
                        📍 Localisation :
                      </span>
                      <motion.span
                        className="text-green-600 font-medium inline-block"
                        whileHover={{ x: 5 }}
                      >
                        {article.location}
                      </motion.span>
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverTangerPage;