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

const RulesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const rules = [
    {
      icon: Clock,
      title: "Arrival Time",
      description: "Please arrive 5-10 minutes before your scheduled appointment to check-in and prepare for your service.",
      details: "Late arrivals may result in shortened service time or rescheduling to avoid impacting other clients.",
      type: "info",
    },
    {
      icon: CreditCard,
      title: "Cancellation Policy",
      description: "Cancel or reschedule at least 24 hours before your appointment to avoid charges.",
      details: "Late cancellations or no-shows may incur a fee of 50% of the service price.",
      type: "warning",
    },
    {
      icon: Users,
      title: "Children Policy",
      description: "Children under 12 must be accompanied by an adult at all times.",
      details: "For safety reasons, unsupervised children will not be permitted in the service area.",
      type: "info",
    },
    {
      icon: Shield,
      title: "Health & Safety",
      description: "All tools are sterilized, and fresh towels are used for each client.",
      details: "If you're feeling unwell, please reschedule your appointment for the safety of our staff and clients.",
      type: "success",
    },
    {
      icon: Scissors,
      title: "Service Guarantee",
      description: "Not satisfied with your cut? We offer complimentary adjustments within 3 days.",
      details: "Adjustments must be requested within 3 days of your original service date.",
      type: "success",
    },
    {
      icon: AlertTriangle,
      title: "Payment Methods",
      description: "We accept all major credit cards, cash, and digital payments.",
      details: "A valid credit card is required to hold all appointments.",
      type: "info",
    },
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book online through our website, call us directly, or visit our shop in person. Online booking is available 24/7.",
    },
    {
      question: "What if I need to reschedule?",
      answer: "You can reschedule online up to 24 hours before your appointment. For last-minute changes, please call us directly.",
    },
    {
      question: "Do you offer group bookings?",
      answer: "Yes! We accommodate group bookings for parties of 4 or more. Please call ahead to arrange special accommodations.",
    },
    {
      question: "Are walk-ins welcome?",
      answer: "Walk-ins are welcome based on availability, but we strongly recommend booking in advance to secure your preferred time.",
    },
    {
      question: "What's your refund policy?",
      answer: "We don't offer refunds but provide free adjustments within 3 days if you're not satisfied with your service.",
    },
    {
      question: "Do you have gift cards?",
      answer: "Yes, we offer digital and physical gift cards in any denomination. Perfect for holidays and special occasions!",
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
    <div className="min-h-screen bg-gradient-to-br from-[#FDF8F5] via-[#F9F2EB] to-[#F5EDE6]">
      {/* Hero Section - Brown Theme */}
      <div className="relative bg-gradient-to-r from-[#2C1810] via-[#3E2723] to-[#2C1810] text-white overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFFFFF" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-200 mb-4">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Policies</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Rules & Guidelines
            </h1>
            <p className="text-lg md:text-xl text-amber-100/90 mb-8 leading-relaxed">
              We strive to provide the best experience for all our clients. Please review our policies to ensure a smooth and enjoyable visit.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#C68B5E] hover:bg-[#B07A4F] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Appointment
              </button>
              <button className="border border-amber-300/50 hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* Smooth bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDF8F5] to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Rules Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E6D5C3] px-4 py-1 rounded-full mb-4">
              <Star className="w-4 h-4 text-[#5C3A21]" />
              <span className="text-sm font-medium text-[#5C3A21]">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-[#5C3A21] max-w-2xl mx-auto">
              To provide the highest quality service, we ask all clients to follow these simple guidelines
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

        {/* Detailed Policies Section - Brown Theme */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#3E2723] to-[#2C1810] text-white">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-amber-300" />
                <h3 className="text-2xl font-bold">Booking Policy</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Online booking available 24/7 for your convenience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Credit card required to secure all appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Same-day bookings accepted based on availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                  <span>No-show or late cancellation fee: 50% of service price</span>
                </li>
              </ul>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#F5EDE6] to-[#EFE3D9]">
              <div className="flex items-center gap-3 mb-6">
                <HeartHandshake className="w-8 h-8 text-[#5C3A21]" />
                <h3 className="text-2xl font-bold text-[#2C1810]">Service Guidelines</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">Consultation included before every service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">Free adjustments within 3 days of service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">Hygiene and sanitation protocols strictly followed</span>
                </li>
                <li className="flex items-start gap-3">
                  <Smile className="w-5 h-5 text-[#5C3A21] mt-0.5 flex-shrink-0" />
                  <span className="text-[#3E2723]">100% satisfaction guaranteed on all services</span>
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
              <span className="text-sm font-medium text-[#5C3A21]">Knowledge Base</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#5C3A21]">
              Find answers to common questions about our policies and services
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
              <h3 className="font-bold text-amber-800 text-lg mb-1">Important Notice</h3>
              <p className="text-amber-700 mb-2 leading-relaxed">
                Policies are subject to change without prior notice. Please review our rules periodically for updates.
              </p>
              <p className="text-sm text-amber-600">
                Last updated: December 1, 2024
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section - Brown Theme */}
        <div className="bg-gradient-to-r from-[#2C1810] to-[#3E2723] rounded-3xl text-white p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-amber-100/80 max-w-2xl mx-auto">
              Our team is here to help you with any questions about our policies or services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <Phone className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">Call Us</p>
              <p className="text-amber-100/70 text-sm">(555) 123-4567</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <Mail className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">Email</p>
              <p className="text-amber-100/70 text-sm">info@barbershop.com</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">Visit Us</p>
              <p className="text-amber-100/70 text-sm">123 Main St, City, State</p>
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