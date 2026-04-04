import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';

interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
}

export function useBooking() {
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
                `📍 *Property :* Lateral\n\n`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const nights = calculateNights();

  return {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleGuestsChange,
    handleWhatsAppRedirect,
    formatDate,
    calculateNights,
    nights,
    defaultCheckIn,
    defaultCheckOut,
    today
  }
}