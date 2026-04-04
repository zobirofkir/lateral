// BookingPage.tsx
import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { Calendar, Users, Check, ArrowRight, Moon, Sun, Star, Wifi, Coffee, Car, Wind, Home, Clock, Shield, Sparkles, Heart } from 'lucide-react';

interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
}

const BookingPage: React.FC = () => {
  const { whatsappPhoneNumber } = usePage().props;
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locale] = useState('en');

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const defaultCheckIn = today.toISOString().split('T')[0];
  const defaultCheckOut = tomorrow.toISOString().split('T')[0];

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};
    
    if (!formData.checkIn) {
      newErrors.checkIn = 'Please select check-in date';
    }
    
    if (!formData.checkOut) {
      newErrors.checkOut = 'Please select check-out date';
    }
    
    if (formData.checkIn && formData.checkOut && formData.checkIn >= formData.checkOut) {
      newErrors.checkOut = 'Check-out date must be after check-in date';
    }
    
    if (formData.guests < 1) {
      newErrors.guests = 'Minimum 1 guest required';
    }
    
    if (formData.guests > 20) {
      newErrors.guests = 'Maximum 20 guests allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Not specified';
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateNights = (): number => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleGuestsChange = (increment: boolean) => {
    const newValue = formData.guests + (increment ? 1 : -1);
    if (newValue >= 1 && newValue <= 20) {
      setFormData(prev => ({ ...prev, guests: newValue }));
      if (errors.guests) {
        setErrors(prev => ({ ...prev, guests: undefined }));
      }
    }
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    const finalCheckIn = formData.checkIn || defaultCheckIn;
    const finalCheckOut = formData.checkOut || defaultCheckOut;
    const nights = calculateNights();
    
    let message = '';
    if (locale === 'fr') {
      message = `🏠 *NOUVELLE RÉSERVATION - Lateral* 🏠\n\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                `📅 *Détails du séjour :*\n` +
                `• Arrivée : ${formatDate(finalCheckIn)}\n` +
                `• Départ : ${formatDate(finalCheckOut)}\n` +
                `• Nombre de nuits : ${nights}\n\n` +
                `👥 *Voyageurs :* ${formData.guests} personne${formData.guests > 1 ? 's' : ''}\n\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                `✅ *Statut :* En attente de confirmation\n` +
                `📍 *Établissement :* Lateral\n\n` +
                `_Message généré automatiquement_`;
    } else {
      message = `🏠 *NEW BOOKING - Lateral* 🏠\n\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                `📅 *Stay Details :*\n` +
                `• Check-in : ${formatDate(finalCheckIn)}\n` +
                `• Check-out : ${formatDate(finalCheckOut)}\n` +
                `• Number of nights : ${nights}\n\n` +
                `👥 *Guests :* ${formData.guests} guest${formData.guests > 1 ? 's' : ''}\n\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                `✅ *Status :* Pending confirmation\n` +
                `📍 *Property :* Lateral\n\n` +
                `_Auto-generated message_`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const nights = calculateNights();

  const amenities = [
    { icon: Wifi, name: 'Free WiFi', color: 'text-blue-600' },
    { icon: Wind, name: 'Air Conditioning', color: 'text-cyan-600' },
    { icon: Car, name: 'Private Parking', color: 'text-green-600' },
    { icon: Clock, name: '24/7 Service', color: 'text-purple-600' },
    { icon: Coffee, name: 'Breakfast', color: 'text-amber-600' },
    { icon: Home, name: 'Swimming Pool', color: 'text-teal-600' },
  ];

  const features = [
    { icon: Sparkles, title: 'Luxury Experience', description: 'Premium comfort and elegance' },
    { icon: Heart, title: 'Personalized Service', description: 'Tailored to your needs' },
    { icon: Shield, title: 'Safe & Secure', description: '24/7 security and support' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#3E2723] to-[#5D4037] text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-200 text-sm font-medium">Luxury Retreat</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Lateral
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-4 font-light">
            Your Luxurious Retreat
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Experience unparalleled comfort and elegance in the heart of paradise
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Welcome Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#3E2723]">
                  Welcome to Paradise
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Book your stay at Lateral and enjoy an unforgettable experience 
                in our beautifully appointed spaces. Perfect for family gatherings, 
                romantic getaways, or peaceful retreats.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-amber-50 rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#3E2723]">{feature.title}</h3>
                        <p className="text-gray-600 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-lg p-6 border border-amber-200">
              <h3 className="text-xl font-bold text-[#3E2723] mb-5 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                Premium Amenities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-amber-100/50 transition-colors">
                      <div className={`w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-[#3E2723] to-[#5D4037] rounded-3xl p-6 text-white">
              <div className="flex gap-3 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-200 italic mb-3">
                "An absolutely magical experience! The attention to detail and warm hospitality made our stay unforgettable."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">JD</span>
                </div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-amber-300 text-xs">Verified Guest</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="sticky top-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
              <div className="bg-gradient-to-r from-[#3E2723] to-[#5D4037] px-6 py-6">
                <h3 className="text-2xl font-bold text-white">Book Your Stay</h3>
                <p className="text-amber-200 text-sm mt-1">Fill in the details to get started</p>
              </div>
              
              <form onSubmit={handleWhatsAppRedirect} className="p-6 md:p-8 space-y-6">
                {/* Check-in Date */}
                <div className="group">
                  <label className="block text-[#3E2723] font-semibold mb-2 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center group-focus-within:bg-amber-200 transition-colors">
                      <Calendar className="w-4 h-4 text-[#5D4037]" />
                    </div>
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    min={today.toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D4037] transition-all ${
                      errors.checkIn ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#5D4037]'
                    }`}
                  />
                  {errors.checkIn && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <span className="text-xs">⚠️</span> {errors.checkIn}
                    </p>
                  )}
                </div>

                {/* Check-out Date */}
                <div className="group">
                  <label className="block text-[#3E2723] font-semibold mb-2 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center group-focus-within:bg-amber-200 transition-colors">
                      <Calendar className="w-4 h-4 text-[#5D4037]" />
                    </div>
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    min={formData.checkIn || today.toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D4037] transition-all ${
                      errors.checkOut ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#5D4037]'
                    }`}
                  />
                  {errors.checkOut && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <span className="text-xs">⚠️</span> {errors.checkOut}
                    </p>
                  )}
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-[#3E2723] font-semibold mb-2 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-[#5D4037]" />
                    </div>
                    Number of Guests
                  </label>
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
                    <button
                      type="button"
                      onClick={() => handleGuestsChange(false)}
                      className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 text-[#5D4037] font-bold text-xl transition-all shadow-sm hover:shadow"
                    >
                      -
                    </button>
                    <span className="text-3xl font-bold text-[#3E2723] min-w-[50px] text-center">
                      {formData.guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleGuestsChange(true)}
                      className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 text-[#5D4037] font-bold text-xl transition-all shadow-sm hover:shadow"
                    >
                      +
                    </button>
                  </div>
                  {errors.guests && (
                    <p className="text-red-500 text-sm mt-1">{errors.guests}</p>
                  )}
                </div>

                {/* Booking Summary */}
                {formData.checkIn && formData.checkOut && (
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200 animate-fadeIn">
                    <h4 className="font-bold text-[#3E2723] mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      Booking Summary
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-1 border-b border-amber-200">
                        <span className="text-gray-600">Check-in:</span>
                        <span className="font-semibold text-[#3E2723]">{formatDate(formData.checkIn)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-amber-200">
                        <span className="text-gray-600">Check-out:</span>
                        <span className="font-semibold text-[#3E2723]">{formatDate(formData.checkOut)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-amber-200">
                        <span className="text-gray-600">Nights:</span>
                        <span className="font-semibold text-amber-700">{nights} {nights === 1 ? 'night' : 'nights'}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Guests:</span>
                        <span className="font-semibold text-[#3E2723]">{formData.guests} {formData.guests === 1 ? 'guest' : 'guests'}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#3E2723] to-[#5D4037] hover:from-[#2C1A14] hover:to-[#3E2723] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Book Now on WhatsApp</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  By booking, you agree to our terms and conditions
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default BookingPage;