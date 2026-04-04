import AboutComponent from '@/components/about/AboutComponent'
import GoogleReviewsComponent from '@/components/reviews/GoogleReviewsComponent';
import RoomsComponent from '@/components/rooms/RoomsComponent'
import SliderComponent from '@/components/slider/SliderComponent'
import WhyComponent from '@/components/why/WhyComponent'

export default function WelcomePage({ views, googleReviews, googleRating }) {
  return (
    <div>
      <SliderComponent 
        views={views} 
      />

      <GoogleReviewsComponent 
        googleReviews={googleReviews}
        googleRating={googleRating}
      />

      <AboutComponent />
      <WhyComponent />
      <RoomsComponent />
    </div>
  );
}