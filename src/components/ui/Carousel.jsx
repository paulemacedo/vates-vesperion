import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Oculta as setas padrão do slick
const customArrowStyle = `
  .slick-arrow {
    display: none !important;
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

const Carousel = ({ children, slidesToShow = 1, ...props }) => {
  const sliderRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const slideCount = React.Children.count(children)

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
    slidesToShow,
    slidesToScroll: 1,
    arrows: false, // Desativa as setas do slick
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.max(1, slidesToShow - 1) }
      }
    ],
    beforeChange: (_, next) => setCurrent(next),
    ...props
  }

  return (
    <div style={{ overflow: 'visible', position: 'relative' }}>
      <Arrow
        direction="left"
        onClick={() => sliderRef.current?.slickGoTo(Math.max(0, current - 3))}
        disabled={current === 0}
      />
      <Arrow
        direction="right"
        onClick={() => sliderRef.current?.slickGoTo(Math.min(slideCount - slidesToShow, current + 3))}
        disabled={current >= slideCount - slidesToShow}
      />
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  )
}

export default Carousel