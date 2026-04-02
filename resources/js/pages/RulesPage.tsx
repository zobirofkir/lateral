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
} from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';
import { Link } from '@inertiajs/react';
import RulesHeroSectionComponent from '@/components/rules/RulesHeroSectionComponent';
import RulesGridComponent from '@/components/rules/RulesGridComponent';

const RulesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useI18n();    
  const rulesModule = t.rulesModule || {};


  const rules = [
    {
      icon: Clock,
      title: rulesModule.rules[0].title,
      description: rulesModule.rules[0].description,
      details: rulesModule.rules[0].details,
      type: "info",
    },
    {
      icon: CreditCard,
      title: rulesModule.rules[1].title,
      description: rulesModule.rules[1].description,
      details: rulesModule.rules[1].details,
      type: "warning",
    },
    {
      icon: Users,
      title: rulesModule.rules[2].title,
      description: rulesModule.rules[2].description,
      details: rulesModule.rules[2].details,
      type: "info",
    },
    {
      icon: Shield,
      title: rulesModule.rules[3].title,
      description: rulesModule.rules[3].description,
      details: rulesModule.rules[3].details,
      type: "success",
    },
    {
      icon: Scissors,
      title: rulesModule.rules[4].title,
      description: rulesModule.rules[4].description,
      details: rulesModule.rules[4].details,
      type: "success",
    },
    {
      icon: AlertTriangle,
      title: rulesModule.rules[5].title,
      description: rulesModule.rules[5].description,
      details: rulesModule.rules[5].details,
      type: "info",
    },
  ];

  const faqs = [
    {
      question: rulesModule.faqs[0].question,
      answer: rulesModule.faqs[0].answer
    },
    {
      question: rulesModule.faqs[1].question,
      answer: rulesModule.faqs[1].answer
    },
    {
      question: rulesModule.faqs[2].question,
      answer: rulesModule.faqs[2].answer
    },
    {
      question: rulesModule.faqs[3].question,
      answer: rulesModule.faqs[3].answer
    },
    {
      question: rulesModule.faqs[4].question,
      answer: rulesModule.faqs[4].answer
    },
    {
      question: rulesModule.faqs[5].question,
      answer: rulesModule.faqs[5].answer
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Brown Theme */}
      <RulesHeroSectionComponent rulesModule={rulesModule} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Rules Grid */}
        <RulesGridComponent 
            rulesModule={rulesModule}
            rules={rules}
            getTypeStyles={getTypeStyles}
        />

        {/* Detailed Policies Section - Brown Theme */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#3E2723] to-[#2C1810] text-white">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-amber-300" />
                <h3 className="text-2xl font-bold">
                  {rulesModule.detailedPolicies.booking.title}
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>
                    {rulesModule.detailedPolicies.booking.items[0]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>
                    {rulesModule.detailedPolicies.booking.items[1]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>
                    {rulesModule.detailedPolicies.booking.items[2]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                  <span>
                    {rulesModule.detailedPolicies.booking.items[3]}
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#F5EDE6] to-[#EFE3D9]">
              <div className="flex items-center gap-3 mb-6">
                <HeartHandshake className="w-8 h-8 text-[#5C3A21]" />
                <h3 className="text-2xl font-bold text-[#2C1810]">
                  {rulesModule.detailedPolicies.service.title}
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">
                    {rulesModule.detailedPolicies.service.items[0]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">
                    {rulesModule.detailedPolicies.service.items[1]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">
                    {rulesModule.detailedPolicies.service.items[2]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Smile className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">
                    {rulesModule.detailedPolicies.service.items[3]}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section - Brown Theme */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E6D5C3] px-4 py-1 rounded-full mb-4">
              <Gift className="w-4 h-4 text-[#5C3A21]" />
              <span className="text-sm font-medium text-[#5C3A21]">
                {rulesModule.faqSection.badge}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
              {rulesModule.faqSection.title}
            </h2>
            <p className="text-lg text-[#5C3A21]">
              {rulesModule.faqSection.subtitle}
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

        {/* Important Notice - Brown Theme */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl p-6 mb-20 shadow-md">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-1">
                {rulesModule.importantNotice.title}
              </h3>
              <p className="text-amber-700 mb-2 leading-relaxed">
                {rulesModule.importantNotice.content}
              </p>
              <p className="text-sm text-amber-600">
                {rulesModule.importantNotice.lastUpdated}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section - Brown Theme */}
        <div className="bg-gradient-to-r from-[#2C1810] to-[#3E2723] rounded-3xl text-white p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {rulesModule.contactSection.title}
            </h2>
            <p className="text-amber-100/80 max-w-2xl mx-auto">
              {rulesModule.contactSection.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <Phone className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">
                {rulesModule.contactSection.phone}
              </p>
              <p className="text-amber-100/70 text-sm">
                {rulesModule.contactSection.phoneNumber}
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <Mail className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">
                {rulesModule.contactSection.email}
              </p>
              <p className="text-amber-100/70 text-sm">
                {rulesModule.contactSection.emailAddress}
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">
                {rulesModule.contactSection.visit}
              </p>
              <p className="text-amber-100/70 text-sm">
                {rulesModule.contactSection.address}
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