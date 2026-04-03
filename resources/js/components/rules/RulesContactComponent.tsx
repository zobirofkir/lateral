import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'

const RulesContactComponent = ({
    rulesModule
}) => {
  return (
    <>
        <div className="bg-gradient-to-r from-[#2C1810] to-[#3E2723] rounded-3xl text-white p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {rulesModule.contactSection.title}
            </h2>
            <p className="text-amber-100/80 max-w-2xl mx-auto">
              {rulesModule.contactSection.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <Phone className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">
                {rulesModule.contactSection.phone}
              </p>
              <p className="text-amber-100/70 text-sm">
                {rulesModule.contactSection.phoneNumber}
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <Mail className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">
                {rulesModule.contactSection.email}
              </p>
              <p className="text-amber-100/70 text-sm">
                {rulesModule.contactSection.emailAddress}
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#5C3A21] group-hover:bg-[#C68B5E] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 transform group-hover:scale-110">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-semibold text-lg">
                {rulesModule.contactSection.visit}
              </p>
              <p className="text-amber-100/70 text-sm">
                {rulesModule.contactSection.address}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-10">
            <button className="bg-[#5C3A21] hover:bg-[#C68B5E] p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="bg-[#5C3A21] hover:bg-[#C68B5E] p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="bg-[#5C3A21] hover:bg-[#C68B5E] p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Twitter className="w-5 h-5" />
            </button>
          </div>
        </div>
    </>
  )
}

export default RulesContactComponent