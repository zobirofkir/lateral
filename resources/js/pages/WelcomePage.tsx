import AboutComponent from '@/components/about/AboutComponent'
import RoomsComponent from '@/components/rooms/RoomsComponent'
import SliderComponent from '@/components/slider/SliderComponent'
import WhyComponent from '@/components/why/WhyComponent'

export default function WelcomePage({ views }) {
  return (
    <div>
      <SliderComponent views={views} />

      <AboutComponent />
      <WhyComponent />
      <RoomsComponent />
    </div>
  );
}