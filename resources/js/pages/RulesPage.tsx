import React, { useState } from 'react';
import {
  Shield,
  Clock,
  CreditCard,
  Users,
  Scissors,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Calendar,
  Bell,
  Smile,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Gift,
  Star,
  HeartHandshake,
  Wifi,
  Car,
  Sparkles,
  Wind,
  Volume2,
  Lock,
  Utensils,
  Coffee,
  Dumbbell,
  Tv,
  Bath,
  Bed,
  Home,
  Building2,
  Mountain,
  Waves,
  Eye,
  Sun,
  Thermometer,
  DoorOpen,
  Key,
  Sofa,
  ChefHat,
  Shirt,
  Flower2
} from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';
import { Link } from '@inertiajs/react';

const RulesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<number | null>(null);
  const { t } = useI18n();    
  const rulesModule = t.rulesModule || {};

  const rules = [
    {
      icon: Clock,
      title: rulesModule.rules?.[0]?.title || "Arrival Time",
      description: rulesModule.rules?.[0]?.description || "",
      details: rulesModule.rules?.[0]?.details || "",
      type: "info",
    },
    {
      icon: Volume2,
      title: rulesModule.rules?.[1]?.title || "Respect for Neighbors",
      description: rulesModule.rules?.[1]?.description || "",
      details: rulesModule.rules?.[1]?.details || "",
      type: "warning",
    },
    {
      icon: Users,
      title: rulesModule.rules?.[2]?.title || "Parties & Events",
      description: rulesModule.rules?.[2]?.description || "",
      details: rulesModule.rules?.[2]?.details || "",
      type: "info",
    },
    {
      icon: Lock,
      title: rulesModule.rules?.[3]?.title || "Windows & Security",
      description: rulesModule.rules?.[3]?.description || "",
      details: rulesModule.rules?.[3]?.details || "",
      type: "success",
    },
    {
      icon: Sparkles,
      title: rulesModule.rules?.[4]?.title || "Housekeeping & Cleanliness",
      description: rulesModule.rules?.[4]?.description || "",
      details: rulesModule.rules?.[4]?.details || "",
      type: "success",
    },
    {
      icon: Car,
      title: rulesModule.rules?.[5]?.title || "Secure Parking",
      description: rulesModule.rules?.[5]?.description || "",
      details: rulesModule.rules?.[5]?.details || "",
      type: "info",
    },
  ];

  const faqs = [
    {
      question: rulesModule.faqs?.[0]?.question || "How do I book an apartment?",
      answer: rulesModule.faqs?.[0]?.answer || ""
    },
    {
      question: rulesModule.faqs?.[1]?.question || "Is parking available?",
      answer: rulesModule.faqs?.[1]?.answer || ""
    },
    {
      question: rulesModule.faqs?.[2]?.question || "Are pets allowed?",
      answer: rulesModule.faqs?.[2]?.answer || ""
    },
    {
      question: rulesModule.faqs?.[3]?.question || "Do you offer baby services?",
      answer: rulesModule.faqs?.[3]?.answer || ""
    },
    {
      question: rulesModule.faqs?.[4]?.question || "Can I have visitors in my apartment?",
      answer: rulesModule.faqs?.[4]?.answer || ""
    },
    {
      question: rulesModule.faqs?.[5]?.question || "How does the Wi-Fi connection work?",
      answer: rulesModule.faqs?.[5]?.answer || ""
    },
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "success":
        return {
          bg: "bg-emerald-50",
          border: "border-emerald-200",
          iconBg: "bg-emerald-100",
          iconColor: "text-emerald-700",
          text: "text-emerald-900",
          hoverBg: "hover:bg-emerald-100/50",
        };
      case "warning":
        return {
          bg: "bg-amber-50",
          border: "border-amber-200",
          iconBg: "bg-amber-100",
          iconColor: "text-amber-700",
          text: "text-amber-900",
          hoverBg: "hover:bg-amber-100/50",
        };
      default:
        return {
          bg: "bg-[#FDF8F5]",
          border: "border-[#E6D5C3]",
          iconBg: "bg-[#E6D5C3]",
          iconColor: "text-[#5C3A21]",
          text: "text-[#4A2C1A]",
          hoverBg: "hover:bg-[#F5EDE6]",
        };
    }
  };

  // Services list from the data
  const servicesList = rulesModule.servicesSection?.servicesList || [
    "Central air conditioning",
    "Free high-speed Wi-Fi",
    "Free secure parking",
    "Free housekeeping service throughout your stay",
    "24/7 security service",
    "Private washing machine in each apartment",
    "Smart TV in every bedroom",
    "Hypoallergenic bedding",
    "Soundproof windows",
    "Elevator access to all floors"
  ];

  // Apartments data
  const apartments = rulesModule.apartments || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Luxury Brown Theme */}
      <div className="relative bg-gradient-to-r from-[#1A0F0A] via-[#2C1810] to-[#1A0F0A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFFFFF" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-300 mb-4">
              <Building2 className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {rulesModule.hero?.badge || "Welcome to La Teral"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {rulesModule.hero?.title || "Excellence with La Teral"}
            </h1>
            <p className="text-lg md:text-xl text-amber-100/90 mb-8 leading-relaxed">
              {rulesModule.hero?.description || ""}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={'/bookings'} className="bg-[#C68B5E] hover:bg-[#B07A4F] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                {rulesModule.hero?.buttons?.book || "Book Now"}
              </Link>
              <Link href={'/contacts'} className="border border-amber-300/50 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                {rulesModule.hero?.buttons?.contact || "Contact Us"}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Presentation Section */}
      {rulesModule.presentationSection && (
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#E6D5C3] px-4 py-1 rounded-full mb-4">
                <Star className="w-4 h-4 text-[#5C3A21]" />
                <span className="text-sm font-medium text-[#5C3A21]">{rulesModule.presentationSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
                {rulesModule.presentationSection.title}
              </h2>
              <p className="text-lg text-[#5C3A21] max-w-3xl mx-auto leading-relaxed">
                {rulesModule.presentationSection.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="La Teral View" 
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-[#E6D5C3] p-2 rounded-lg">
                    <Waves className="w-5 h-5 text-[#5C3A21]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810]">Proximité Plage Malabata</h3>
                    <p className="text-[#5C3A21]">À quelques pas de la célèbre plage</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-[#E6D5C3] p-2 rounded-lg">
                    <Mountain className="w-5 h-5 text-[#5C3A21]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810]">Vue Panoramique</h3>
                    <p className="text-[#5C3A21]">Entre mer et montagnes</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-[#E6D5C3] p-2 rounded-lg">
                    <Utensils className="w-5 h-5 text-[#5C3A21]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810]">Restaurants & Commerces</h3>
                    <p className="text-[#5C3A21]">À proximité immédiate</p>
                  </div>
                </div>
                <p className="text-[#5C3A21] italic pt-4 border-t border-[#E6D5C3]">
                  {rulesModule.presentationSection.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-[#FDF8F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E6D5C3] px-4 py-1 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#5C3A21]" />
              <span className="text-sm font-medium text-[#5C3A21]">{rulesModule.servicesSection?.badge || "Services & Amenities"}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
              {rulesModule.servicesSection?.title || "Our General Services"}
            </h2>
            <p className="text-lg text-[#5C3A21] max-w-2xl mx-auto">
              {rulesModule.servicesSection?.subtitle || "Total comfort for a worry-free stay"}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {servicesList.map((service: string, index: number) => (
              <div key={index} className="flex items-center gap-3 bg-white border border-[#E6D5C3] rounded-xl p-4 hover:shadow-md transition-all hover:-translate-y-1">
                <CheckCircle className="w-5 h-5 text-[#C68B5E] flex-shrink-0" />
                <span className="text-sm text-[#4A2C1A]">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apartments Showcase */}
      {apartments.length > 0 && (
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#E6D5C3] px-4 py-1 rounded-full mb-4">
                <Home className="w-4 h-4 text-[#5C3A21]" />
                <span className="text-sm font-medium text-[#5C3A21]">Our Collection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
                Nos Appartements de Prestige
              </h2>
              <p className="text-lg text-[#5C3A21] max-w-2xl mx-auto">
                Découvrez notre sélection d'appartements haut de gamme
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apartments.slice(0, 3).map((apt: any) => (
                <div 
                  key={apt.id}
                  className="bg-white border border-[#E6D5C3] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  onClick={() => setSelectedApartment(selectedApartment === apt.id ? null : apt.id)}
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#2C1810] to-[#5C3A21]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-white/20" />
                    </div>
                    <div className="absolute top-4 right-4 bg-[#C68B5E] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {apt.surface}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2C1810] mb-2">{apt.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {apt.features?.slice(0, 3).map((feature: string, idx: number) => (
                        <span key={idx} className="text-xs bg-[#FDF8F5] text-[#5C3A21] px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                      {apt.features?.length > 3 && (
                        <span className="text-xs bg-[#FDF8F5] text-[#5C3A21] px-2 py-1 rounded-full">
                          +{apt.features.length - 3}
                        </span>
                      )}
                    </div>
                    <p className="text-[#5C3A21] text-sm line-clamp-3 mb-4">
                      {apt.description}
                    </p>
                    <button className="text-[#C68B5E] font-semibold text-sm hover:text-[#B07A4F] transition-colors flex items-center gap-1">
                      {selectedApartment === apt.id ? "Voir moins" : "En savoir plus"}
                      <ChevronDown className={`w-4 h-4 transition-transform ${selectedApartment === apt.id ? "rotate-180" : ""}`} />
                    </button>
                    {selectedApartment === apt.id && (
                      <div className="mt-4 pt-4 border-t border-[#E6D5C3]">
                        <p className="text-[#4A2C1A] text-sm leading-relaxed">{apt.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {apt.features?.map((feature: string, idx: number) => (
                            <span key={idx} className="text-xs bg-[#E6D5C3] text-[#5C3A21] px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Rules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Rules Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E6D5C3] px-4 py-1 rounded-full mb-4">
              <Shield className="w-4 h-4 text-[#5C3A21]" />
              <span className="text-sm font-medium text-[#5C3A21]">{rulesModule.rulesSection?.badge || "Why Choose Us"}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
              {rulesModule.rulesSection?.title || "Our Commitment to Excellence"}
            </h2>
            <p className="text-lg text-[#5C3A21] max-w-2xl mx-auto">
              {rulesModule.rulesSection?.subtitle || "To provide the highest quality service, we ask all clients to follow these simple guidelines"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              const styles = getTypeStyles(rule.type);
              return (
                <div
                  key={index}
                  className={`${styles.bg} border ${styles.border} rounded-2xl p-6 transition-all duration-300 ${styles.hoverBg} hover:shadow-xl hover:-translate-y-1 group`}
                >
                  <div className={`${styles.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${styles.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${styles.text}`}>
                    {rule.title}
                  </h3>
                  <p className="text-[#5C3A21] mb-3 leading-relaxed">{rule.description}</p>
                  <p className="text-sm text-[#8B6B4A] border-t border-[#E6D5C3] pt-3 mt-2">{rule.details}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Policies Section */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#3E2723] to-[#2C1810] text-white">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-amber-300" />
                <h3 className="text-2xl font-bold">
                  {rulesModule.detailedPolicies?.booking?.title || "Booking Conditions"}
                </h3>
              </div>
              <ul className="space-y-4">
                {rulesModule.detailedPolicies?.booking?.items?.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    {idx === 3 ? (
                      <XCircle className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#F5EDE6] to-[#EFE3D9]">
              <div className="flex items-center gap-3 mb-6">
                <HeartHandshake className="w-8 h-8 text-[#5C3A21]" />
                <h3 className="text-2xl font-bold text-[#2C1810]">
                  {rulesModule.detailedPolicies?.service?.title || "Included Services"}
                </h3>
              </div>
              <ul className="space-y-4">
                {rulesModule.detailedPolicies?.service?.items?.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    {idx === 3 ? (
                      <Smile className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-[#3E2723]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E6D5C3] px-4 py-1 rounded-full mb-4">
              <Gift className="w-4 h-4 text-[#5C3A21]" />
              <span className="text-sm font-medium text-[#5C3A21]">
                {rulesModule.faqSection?.badge || "Knowledge Base"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
              {rulesModule.faqSection?.title || "Frequently Asked Questions"}
            </h2>
            <p className="text-lg text-[#5C3A21]">
              {rulesModule.faqSection?.subtitle || "Find answers to common questions about our policies and services"}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E6D5C3] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#FDF8F5] transition-colors"
                >
                  <span className="font-semibold text-[#2C1810]">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#5C3A21]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#5C3A21]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-[#5C3A21] border-t border-[#E6D5C3] pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl p-6 mb-20 shadow-md">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-1">
                {rulesModule.importantNotice?.title || "Important Notice"}
              </h3>
              <p className="text-amber-700 mb-2 leading-relaxed">
                {rulesModule.importantNotice?.content || ""}
              </p>
              <p className="text-sm text-amber-600">
                {rulesModule.importantNotice?.lastUpdated || "Last updated: March 2025"}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#2C1810] to-[#3E2723] rounded-3xl text-white p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {rulesModule.contactSection?.title || "Still Have Questions?"}
            </h2>
            <p className="text-amber-100/80 max-w-2xl mx-auto">
              {rulesModule.contactSection?.subtitle || "Our team is here to help you with any questions about our policies or services"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <Phone className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">
                {rulesModule.contactSection?.phone || "Call Us"}
              </p>
              <p className="text-amber-100/70 text-sm">
                {rulesModule.contactSection?.phoneNumber || "+212539300221"}
              </p>
              {rulesModule.contactSection?.altPhoneNumber && (
                <p className="text-amber-100/70 text-sm mt-1">
                  {rulesModule.contactSection.altPhoneNumber}
                </p>
              )}
            </div>
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <Mail className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">
                {rulesModule.contactSection?.email || "Email"}
              </p>
              <p className="text-amber-100/70 text-sm">
                {rulesModule.contactSection?.emailAddress || "lateralhotel@gmail.com"}
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">
                {rulesModule.contactSection?.visit || "Visit Us"}
              </p>
              <p className="text-amber-100/70 text-sm">
                {rulesModule.contactSection?.address || "N16 RTE TANJA BALIA, TANGER.MAROC"}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-10">
            <button className="bg-[#5C3A21] hover:bg-[#C68B5E] p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="bg-[#5C3A21] hover:bg-[#C68B5E] p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="bg-[#5C3A21] hover:bg-[#C68B5E] p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Twitter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;