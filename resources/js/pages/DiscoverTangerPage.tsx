import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";

const DiscoverTangerPage = () => {
  const articles = [
    {
      id: 1,
      title: "Kasbah de Tanger",
      description:
        "La Kasbah domine la ville depuis le XVe siècle et raconte l’histoire des conquêtes et échanges qui ont façonné Tanger. Ses ruelles étroites vous plongent dans une ville médiévale animée.",
      points: [
        "Flâner dans les ruelles et admirer les panoramas",
        "Visiter des palais historiques et jardins",
        "Découvrir galeries et cafés cachés",
      ],
      location: "Kasbah de Tanger (Place de la Kasbah)",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Musée de la Kasbah",
      description:
        "Installé dans le palais du Sultan, ce musée conserve bijoux berbères, tapis et manuscrits rares, offrant une immersion dans la culture tangéroise.",
      points: [
        "Explorer les collections historiques",
        "Découvrir l’architecture du palais",
        "Profiter d’une vue panoramique",
      ],
      location: "Musée de la Kasbah, Tanger",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const { t } = useI18n();
  const discoverModule = t.discoverModule || {};


  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#6B0F0F]">
            {discoverModule.title}
          </h2>
          <div className="w-24 h-1 bg-green-500 mt-3 rounded-full"></div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-8">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="h-64 md:h-full">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-3">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.description}
                  </p>

                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    {article.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>

                  <p className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-700">
                      Localisation :
                    </span>{" "}
                    <span className="text-green-600 font-medium">
                      {article.location}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverTangerPage;