import { Link } from '@inertiajs/react'
import { Shield } from 'lucide-react'
import React from 'react'

const RulesHeroSectionComponent = ({
    rulesModule
}) => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-[#2C1810] via-[#3E2723] to-[#2C1810] text-white overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFFFFF" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-200 mb-4">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {rulesModule.hero.badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {rulesModule.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-amber-100/90 mb-8 leading-relaxed">
              {rulesModule.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={'/bookings'} className="bg-[#C68B5E] hover:bg-[#B07A4F] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                {rulesModule.hero.buttons.book}
              </Link>
              <Link href={'/contacts'} className="border border-amber-300/50 hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                {rulesModule.hero.buttons.contact}
              </Link>
            </div>
          </div>
        </div>
        {/* Smooth bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDF8F5] to-transparent"></div>
      </div>
    </>
  )
}

export default RulesHeroSectionComponent