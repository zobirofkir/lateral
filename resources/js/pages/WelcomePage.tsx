import AboutComponent from '@/components/about/AboutComponent'
import SliderComponent from '@/components/slider/SliderComponent'
import WhyComponent from '@/components/why/WhyComponent'
import React from 'react'

const WelcomePage = () => {
  return (
    <div>
      <SliderComponent />

      <AboutComponent />

      <WhyComponent />
    </div>
  )
}

export default WelcomePage