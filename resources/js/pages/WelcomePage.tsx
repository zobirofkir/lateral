import AboutComponent from '@/components/about/AboutComponent'
import RoomsComponent from '@/components/rooms/RoomsComponent'
import SliderComponent from '@/components/slider/SliderComponent'
import WhyComponent from '@/components/why/WhyComponent'
import React from 'react'

const WelcomePage = () => {
  return (
    <div>
      <SliderComponent />

      <AboutComponent />

      <WhyComponent />

      <RoomsComponent />
    </div>
  )
}

export default WelcomePage