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
import RulesDetailedPoliciesComponent from '@/components/rules/RulesDetailedPoliciesComponent';
import RulesFaqComponent from '@/components/rules/RulesFaqComponent';
import RulesImportantNoticeComponent from '@/components/rules/RulesImportantNoticeComponent';
import RulesContactComponent from '@/components/rules/RulesContactComponent';

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
        <RulesDetailedPoliciesComponent rulesModule={rulesModule} />

        {/* FAQ Section - Brown Theme */}
        <RulesFaqComponent 
          rulesModule={rulesModule}
          faqs={faqs}
          setOpenFaq={setOpenFaq}
          openFaq={openFaq}
        />

        {/* Important Notice - Brown Theme */}
        <RulesImportantNoticeComponent rulesModule={rulesModule} />

        {/* Contact Section - Brown Theme */}
        <RulesContactComponent rulesModule={rulesModule} />
        
      </div>
    </div>
  );
};

export default RulesPage;