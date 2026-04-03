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
  Scissors,
} from 'lucide-react';
import { Link } from '@inertiajs/react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Select a service',
    'Classic Haircut',
    'Beard Trim & Shape',
    'Deluxe Package',
    'Hot Towel Shave',
    'Kids Haircut',
    'Color & Style',
    'General Inquiry',
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

    // Simulate API call
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! We\'ll get back to you within 24 hours.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Style Avenue', 'Downtown District', 'New York, NY 10001'],
      action: 'Get Directions',
      link: 'https://maps.google.com',
      color: 'bg-red-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Main: (555) 123-4567', 'Booking: (555) 765-4321'],
      action: 'Call Now',
      link: 'tel:+15551234567',
      color: 'bg-green-500',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@barbershop.com', 'support@barbershop.com'],
      action: 'Send Email',
      link: 'mailto:info@barbershop.com',
      color: 'bg-blue-500',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: [
        'Monday - Friday: 9AM - 8PM',
        'Saturday: 10AM - 6PM',
        'Sunday: 11AM - 5PM',
      ],
      action: 'Book Appointment',
      link: '/bookings',
      color: 'bg-purple-500',
    },
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Happy Clients', color: 'text-blue-600' },
    { icon: Scissors, value: '25+', label: 'Expert Barbers', color: 'text-green-600' },
    { icon: Star, value: '4.9', label: 'Rating', color: 'text-yellow-600' },
    { icon: Award, value: '15+', label: 'Awards', color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={'/bookings'} className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Contact Form & Map Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            {formStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  formStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {formStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <span>{formStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <div className="relative">
                    <Scissors className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none bg-white"
                    >
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your needs, questions, or special requests..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 pb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Find Us Here</h3>
                <p className="text-gray-600 text-sm mb-4">
                  123 Style Avenue, Downtown District, New York, NY 10001
                </p>
              </div>
              <div className="h-64 md:h-80 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb44637%3A0x6ccd6b6e4b7e2b6f!2s123%20Style%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Barbershop Location Map"
                ></iframe>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;