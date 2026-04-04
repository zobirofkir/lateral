import React from 'react';
import { Calendar, Users, Check, ArrowRight, Star, Wifi, Coffee, Car, Wind, Home, Clock, Shield, Sparkles, Heart } from 'lucide-react';
import { useBooking } from '@/hooks/useBooking';
import { useI18n } from '@/contexts/I18nContext';

const BookingPage: React.FC = () => {
  const { t } = useI18n();
  const bookingModule = t.bookingModule;

  const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleGuestsChange,
    handleWhatsAppRedirect,
    formatDate,
    nights,
    today
  } = useBooking();

  const amenities = bookingModule.leftColumn.amenities.items.map((item: any) => {
    let IconComponent;
    switch (item.icon) {
      case 'Wifi': IconComponent = Wifi; break;
      case 'Wind': IconComponent = Wind; break;
      case 'Car': IconComponent = Car; break;
      case 'Clock': IconComponent = Clock; break;
      case 'Coffee': IconComponent = Coffee; break;
      case 'Home': IconComponent = Home; break;
      default: IconComponent = Wifi;
    }
    return { ...item, icon: IconComponent };
  });

  const features = bookingModule.leftColumn.welcomeCard.features.map((feature: any) => {
    let IconComponent;
    switch (feature.icon) {
      case 'Sparkles': IconComponent = Sparkles; break;
      case 'Heart': IconComponent = Heart; break;
      case 'Shield': IconComponent = Shield; break;
      default: IconComponent = Sparkles;
    }
    return { ...feature, icon: IconComponent };
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#3E2723] to-[#5D4037] text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-200 text-sm font-medium">
              {bookingModule.heroSection.badge.text}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            {bookingModule.heroSection.title}
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-4 font-light">
            {bookingModule.heroSection.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            {bookingModule.heroSection.tagline}
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
                  {bookingModule.leftColumn.welcomeCard.title}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {bookingModule.leftColumn.welcomeCard.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature: any, index: number) => {
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
                {bookingModule.leftColumn.amenities.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((item: any, index: number) => {
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
          </div>

          {/* Right Column - Booking Form */}
          <div className="sticky top-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
              <div className="bg-gradient-to-r from-[#3E2723] to-[#5D4037] px-6 py-6">
                <h3 className="text-2xl font-bold text-white">
                  {bookingModule.bookingForm.title}
                </h3>
                <p className="text-amber-200 text-sm mt-1">
                  {bookingModule.bookingForm.subtitle}
                </p>
              </div>
              
              <form onSubmit={handleWhatsAppRedirect} className="p-6 md:p-8 space-y-6">
                {/* Check-in Date */}
                <div className="group">
                  <label className="block text-[#3E2723] font-semibold mb-2 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center group-focus-within:bg-amber-200 transition-colors">
                      <Calendar className="w-4 h-4 text-[#5D4037]" />
                    </div>
                    {bookingModule.bookingForm.fields.checkIn.label}
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
                    {bookingModule.bookingForm.fields.checkOut.label}
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
                    {bookingModule.bookingForm.fields.guests.label}
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
                      {bookingModule.bookingSummary.title}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-1 border-b border-amber-200">
                        <span className="text-gray-600">
                          {bookingModule.bookingForm.fields.checkIn.label}:
                        </span>
                        <span className="font-semibold text-[#3E2723]">{formatDate(formData.checkIn)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-amber-200">
                        <span className="text-gray-600">
                          {bookingModule.bookingForm.fields.checkOut.label}:
                        </span>
                        <span className="font-semibold text-[#3E2723]">{formatDate(formData.checkOut)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-amber-200">
                        <span className="text-gray-600">Nights:</span>
                        <span className="font-semibold text-amber-700">
                          {nights} {nights === 1 
                            ? bookingModule.bookingSummary.nightText.singular
                            : bookingModule.bookingSummary.nightText.plural}
                        </span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-600">Guests:</span>
                        <span className="font-semibold text-[#3E2723]">
                          {formData.guests} {formData.guests === 1 
                            ? bookingModule.bookingSummary.guestText.singular
                            : bookingModule.bookingSummary.guestText.plural}
                        </span>
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
                      <span>{bookingModule.bookingForm.submitButton.loadingText}</span>
                    </>
                  ) : (
                    <>
                      <span>{bookingModule.bookingForm.submitButton.text}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  {bookingModule.bookingForm.termsText}
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