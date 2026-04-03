import React from 'react'

const ContactMapComponent = ({
    contactModule,
    stats,
    amenities
}) => {
  return (
    <>
          <div className="space-y-6">
            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 pb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contactModule.page.map.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {contactModule.page.map.address}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  {contactModule.page.map.description}
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
                  {contactModule.page.testimonial.text}
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
    </>
  )
}

export default ContactMapComponent