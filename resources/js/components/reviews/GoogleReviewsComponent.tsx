import React from 'react'

const GoogleReviewsComponent = ({googleRating, googleReviews}) => {
  return (
    <>
      <div>
        <div className="text-sm font-medium">
          ⭐ {googleRating} ({googleReviews} Reviews)
        </div>
      </div>
    </>
  )
}

export default GoogleReviewsComponent