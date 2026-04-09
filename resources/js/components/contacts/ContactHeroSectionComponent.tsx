import { Link } from '@inertiajs/react'
import React from 'react'

const ContactHeroSectionComponent = ({
  contactModule
}) => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {contactModule.page.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {contactModule.page.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={'/bookings'} className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                {contactModule.page.hero.ctaButtons[0].text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactHeroSectionComponent