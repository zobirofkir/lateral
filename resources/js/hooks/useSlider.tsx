import { useI18n } from '@/contexts/I18nContext';
import { usePage } from '@inertiajs/react';
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

  const { whatsappPhoneNumber } = usePage().props;

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
      e.preventDefault();
      
      const finalCheckIn = checkIn || defaultCheckIn;
      const finalCheckOut = checkOut || defaultCheckOut;
      
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
          message = `🏨 *NOUVELLE RSULTATION LA TERAL* 🏨\n\n` +
                    `✨ *Résidence de standing supérieur*\n` +
                    `📍 *LA TERAL – Vue mer & montagnes*\n\n` +
                    `📅 *Arrivée :* ${formatDate(finalCheckIn)}\n` +
                    `📅 *Départ :* ${formatDate(finalCheckOut)}\n` +
                    `👥 *Voyageurs :* ${guests}\n\n` +
                    `🔖 *Statut :* En attente de confirmation\n` +
                    `🕒 *Action requise :* Vérifier disponibilité\n`;
      } else {
          message = `🏨 *NEW LA TERAL INQUIRY* 🏨\n\n` +
                    `✨ *High-standing residence*\n` +
                    `📍 *LA TERAL – Sea & mountain view*\n\n` +
                    `📅 *Check-in :* ${formatDate(finalCheckIn)}\n` +
                    `📅 *Check-out :* ${formatDate(finalCheckOut)}\n` +
                    `👥 *Guests :* ${guests}\n\n` +
                    `🔖 *Status :* Pending confirmation\n` +
                    `🕒 *Action required :* Check availability\n`;
      }

      /**
       * Encode the message for WhatsApp URL
       */
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${encodedMessage}`;
      
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