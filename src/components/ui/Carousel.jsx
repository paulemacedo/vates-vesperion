import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Oculta as setas padrão do slick
const customArrowStyle = `
  .slick-arrow {
    display: none !important;
  }
  .slick-dots li button:before {
    color: gold !important;
    opacity: 0,3 !important;
  }
  .slick-dots li.slick-active button:before {
    color: gold !important; /* gold-dark */
    opacity: 1 !important;
  }
`
const Arrow = ({ direction, onClick, disabled }) => {
  if (disabled) return null
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
        borderRadius: "50%",
        width: 56,
        height: 56,
        zIndex: 2,
        color: "#FFD700",
        boxShadow: "none",
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        ...(direction === "left" ? { left: -28 } : { right: -28 }),
        padding: 0,
      }}
      onClick={onClick}
      aria-label={direction === "left" ? "Anterior" : "Próximo"}
      tabIndex={0}
    >
      {direction === "left" ? (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M28 36L16 22L28 8" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M16 8L28 22L16 36" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  )
}

const Carousel = ({ children, slidesToShow = 3, ...props }) => {
  const sliderRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState(slidesToShow)
  const slideCount = React.Children.count(children)
  
    // Atualiza slides visíveis conforme o breakpoint
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleSlides(1)
      else if (window.innerWidth < 1024) setVisibleSlides(2)
      else setVisibleSlides(slidesToShow)
    }
  
    React.useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [slidesToShow])
  

  // Injeta CSS para ocultar as setas padrão
  React.useEffect(() => {
    const styleTag = document.createElement('style')
    styleTag.innerHTML = customArrowStyle
    document.head.appendChild(styleTag)
    return () => {
      document.head.removeChild(styleTag)
    }
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: visibleSlides,
    arrows: false, 
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ],
    beforeChange: (_, next) => setCurrent(next),
    ...props
  }

  return (
    <div style={{ overflow: 'visible', position: 'relative' }}>
      <Arrow
        direction="left"
        onClick={() => sliderRef.current?.slickGoTo(Math.max(0, current - visibleSlides))}
        disabled={current === 0}
      />
      <Arrow
        direction="right"
        onClick={() => sliderRef.current?.slickGoTo(Math.min(slideCount - visibleSlides, current + visibleSlides))}
        disabled={current >= slideCount - visibleSlides || slideCount <= visibleSlides}
      />
      <Slider ref={sliderRef} {...settings}>
        {React.Children.map(children, child => (
          <div className="px-4">{child}</div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel