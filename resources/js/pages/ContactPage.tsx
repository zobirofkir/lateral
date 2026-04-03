import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
  CheckCircle,
  AlertCircle,
  Navigation,
  Calendar,
  User,
  MessageCircle,
  Star,
  Award,
  Users,
  Home,
  Mountain,
  Waves,
  Coffee,
  Wifi,
  Car,
  Utensils,
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useI18n } from '@/contexts/I18nContext';
import ContactHeroSectionComponent from '@/components/contacts/ContactHeroSectionComponent';
import ContactFormComponent from '@/components/contacts/ContactFormComponent';
import ContactMapComponent from '@/components/contacts/ContactMapComponent';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: '',
  });
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { t } = useI18n();    
  const contactModule = t.contactModule || {};

  const inquiryTypes = [
    contactModule.page.contactForm.fields.inquiryType.options[0],
    contactModule.page.contactForm.fields.inquiryType.options[1],
    contactModule.page.contactForm.fields.inquiryType.options[2],
    contactModule.page.contactForm.fields.inquiryType.options[3],
    contactModule.page.contactForm.fields.inquiryType.options[4],
    contactModule.page.contactForm.fields.inquiryType.options[5],
    contactModule.page.contactForm.fields.inquiryType.options[6],
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormStatus({
          type: 'success',
          message: contactModule.page.contactForm.successMessage,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
          checkIn: '',
          checkOut: '',
          guests: '',
        });
      } else {
        setFormStatus({
          type: 'error',
          message: 'Please fill in all required fields.',
        });
      }
      setIsSubmitting(false);
    }, 1500);
  };


  const stats = [
    { icon: Home, value: '24', label: contactModule.page.stats[0].label, color: 'text-blue-600' },
    { icon: Star, value: '5★', label: contactModule.page.stats[1].label, color: 'text-yellow-600' },
    { icon: Waves, value: contactModule.page.stats[2].value, label: contactModule.page.stats[2].label, color: 'text-cyan-600' },
    { icon: Mountain, value: contactModule.page.stats[3].value, label: contactModule.page.stats[3].label, color: 'text-emerald-600' },
  ];

  const amenities = [
    { icon: Wifi, label: contactModule.page.amenities[0].label },
    { icon: Car, label: contactModule.page.amenities[1].label },
    { icon: Utensils, label: contactModule.page.amenities[2].label },
    { icon: Coffee, label: contactModule.page.amenities[3].label },
  ];



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <ContactHeroSectionComponent contactModule={contactModule} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Contact Form & Map Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <ContactFormComponent
              contactModule={contactModule}
              formStatus={formStatus}
              handleSubmit={handleSubmit}
              formData={formData}
              handleInputChange={handleInputChange}
              inquiryTypes={inquiryTypes}
              isSubmitting={isSubmitting}
          />

          {/* Map & Additional Info */}
          <ContactMapComponent 
              contactModule={contactModule}
              stats={stats}
              amenities={amenities}
          />
          
        </div>

      </div>
    </div>
  );
};

export default ContactPage;