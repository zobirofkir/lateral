import AboutComponent from '@/components/about/AboutComponent'
import RoomsComponent from '@/components/rooms/RoomsComponent'
import SliderComponent from '@/components/slider/SliderComponent'
import WhyComponent from '@/components/why/WhyComponent'

export default function WelcomePage({ views }) {
  return (
    <div>
      <SliderComponent />

      <div className="text-center py-4 text-gray-500">
        👀 Nombre de vues : {views}
      </div>

      <AboutComponent />
      <WhyComponent />
      <RoomsComponent />
    </div>
  );
}