import React from 'react'
import Carousel from './Carousel'

const Highlight = ({ promotions }) => {
  return (
    <section className="highlight-slideshow">
      <div className="mx-auto px-4 max-w-screen-xl py-12">
        <Carousel slidesToShow={1} autoplay>
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="relative w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
              
            >
              <img
                src={promo.image}
                alt={promo.alt || `Promoção ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              {promo.caption && (
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
                  {promo.caption}
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Highlight