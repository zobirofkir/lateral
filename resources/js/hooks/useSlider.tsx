import { useI18n } from '@/contexts/I18nContext';
import { useState, useRef, useEffect } from 'react';

export function useSLider() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const videoRef = useRef(null);
  const { t, locale } = useI18n();

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(error => {
          console.log("Video autoplay prevented:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    console.log('Booking:', { checkIn, checkOut, guests });
  };

  const today = new Date().toISOString().split('T')[0];
  
  const defaultCheckIn = today;
  const defaultCheckOut = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
      e.preventDefault();
      
      // Get the actual values (use defaults if empty)
      const finalCheckIn = checkIn || defaultCheckIn;
      const finalCheckOut = checkOut || defaultCheckOut;
      
      // Format dates for better readability
      const formatDate = (dateString: string) => {
          if (!dateString) return 'Not specified';
          const date = new Date(dateString);
          return date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
          });
      };
      
      /**
       * Create the message based on language
       */
      let message = '';
      if (locale === 'fr') {
          message = `📅 *NOUVELLE RÉSERVATION* 📅\n\n` +
                    `🏠 *Séjour à Dar Chems*\n` +
                    `📆 *Arrivée :* ${formatDate(finalCheckIn)}\n` +
                    `📆 *Départ :* ${formatDate(finalCheckOut)}\n` +
                    `👥 *Nombre de voyageurs :* ${guests}\n\n` +
                    `🔗 *Statut :* En attente de confirmation\n`;
      } else {
          message = `📅 *NEW BOOKING* 📅\n\n` +
                    `🏠 *Stay at Dar Chems*\n` +
                    `📆 *Check-in :* ${formatDate(finalCheckIn)}\n` +
                    `📆 *Check-out :* ${formatDate(finalCheckOut)}\n` +
                    `👥 *Number of guests :* ${guests}\n\n` +
                    `🔗 *Status :* Pending confirmation\n`;
      }
      
      /**
       * Encode the message for WhatsApp URL
       */
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/212619920942?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
      
      if (handleBooking) {
          handleBooking(e);
      }
  };

  return {
    isPlaying,
    isMuted,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    guests,
    setGuests,
    isGuestDropdownOpen,
    setIsGuestDropdownOpen,
    videoRef,
    togglePlayPause,
    toggleMute,
    handleBooking,
    today,
    defaultCheckIn,
    defaultCheckOut,
    handleWhatsAppRedirect
  }
}