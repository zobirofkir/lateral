import ContactHeroSectionComponent from '@/components/contacts/ContactHeroSectionComponent';
import ContactFormComponent from '@/components/contacts/ContactFormComponent';
import ContactMapComponent from '@/components/contacts/ContactMapComponent';
import { useContact } from '@/hooks/useContact';

const ContactPage = () => {

  const {
    formData,
    formStatus,
    isSubmitting,
    handleSubmit,
    handleInputChange,
    inquiryTypes,
    stats,
    amenities,
    contactModule
  } = useContact();


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