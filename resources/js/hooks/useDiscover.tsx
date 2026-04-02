import { useI18n } from "@/contexts/I18nContext";

export function useDiscover() {
  const articles = [
    {
      id: 1,
      title: "Kasbah de Tanger",
      description:
        "La Kasbah domine la ville depuis le XVe siècle et raconte l'histoire des conquêtes et échanges qui ont façonné Tanger. Ses ruelles étroites vous plongent dans une ville médiévale animée.",
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
        "Découvrir l'architecture du palais",
        "Profiter d'une vue panoramique",
      ],
      location: "Musée de la Kasbah, Tanger",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  /**
   * Animation variants
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const { t } = useI18n();
  const discoverModule = t.discoverModule || {};

  return {
    articles,
    containerVariants,
    titleVariants,
    cardVariants,
    imageVariants,
    contentVariants,
    listItemVariants,
    ...discoverModule,
  };
}