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

  const inquiryTypes = [
    'Select an inquiry type',
    'Booking & Availability',
    'Pricing & Offers',
    'Corporate Stay',
    'Long-term Residence',
    'Special Requests',
    'General Information',
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
          message: 'Request sent successfully! Our concierge team will respond within 24 hours.',
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['LA TERAL Residence', 'Route de Malabata', 'Tangier, Morocco'],
      action: 'Get Directions',
      link: 'https://maps.google.com',
      color: 'bg-red-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Reservations: +212 539 123 456', 'Concierge: +212 639 123 456'],
      action: 'Call Now',
      link: 'tel:+212539123456',
      color: 'bg-green-500',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['reservations@lateral.ma', 'concierge@lateral.ma'],
      action: 'Send Email',
      link: 'mailto:reservations@lateral.ma',
      color: 'bg-blue-500',
    },
    {
      icon: Clock,
      title: 'Concierge Service',
      details: [
        'Monday - Friday: 8AM - 10PM',
        'Saturday - Sunday: 9AM - 9PM',
        '24/7 Emergency Support',
      ],
      action: 'Book a Tour',
      link: '/bookings',
      color: 'bg-purple-500',
    },
  ];

  const stats = [
    { icon: Home, value: '24', label: 'Exclusive Suites', color: 'text-blue-600' },
    { icon: Star, value: '5★', label: 'Luxury Rating', color: 'text-yellow-600' },
    { icon: Waves, value: 'Sea View', label: 'Panoramic', color: 'text-cyan-600' },
    { icon: Mountain, value: 'Mountain', label: 'View Available', color: 'text-emerald-600' },
  ];

  const amenities = [
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Car, label: 'Private Parking' },
    { icon: Utensils, label: 'Room Service' },
    { icon: Coffee, label: 'Welcome Amenities' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              LA TERAL offers an exclusive collection of high-standing apartments, combining the independence of a private residence with the refinement of the most prestigious hotel services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={'/bookings'} className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                Check Availability
              </Link>
              <Link href={'/virtual-tour'} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-colors">
                Virtual Tour
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
                Reserve Your Stay
              </h2>
              <p className="text-gray-600">
                Experience excellence and absolute serenity. Our concierge team is at your service.
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
                    Full Name *
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
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none bg-white"
                    >
                      {inquiryTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none bg-white"
                    >
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message / Special Requests *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your stay preferences, special occasions, or any requests..."
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
                    Sending Request...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Inquiry
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
                <p className="text-gray-600 text-sm mb-2">
                  Route de Malabata, Tangier, Morocco
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  Immediate proximity to Malabata Beach and Villa Harris Park, steps away from the city's best restaurants and shopping centers.
                </p>
              </div>
              <div className="h-64 md:h-72 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.123456789012!2d-5.812345678901234!3d35.7890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b8b123456789%3A0x123456789abcdef!2sRoute%20de%20Malabata%2C%20Tanger%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LA TERAL Residence Location Map"
                ></iframe>
              </div>
            </div>

            {/* Stats & Amenities Section */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-amber-200 pt-4">
                <p className="text-sm text-gray-700 text-center italic">
                  "A unique experience enhanced by a spectacular panoramic view between sea and mountains"
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  {amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                      <amenity.icon className="w-3 h-3 text-amber-600" />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;