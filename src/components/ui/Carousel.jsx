import React, { useRef, useState, useLayoutEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const customArrowStyle = `
  .slick-arrow {
    display: none !important;
  }
  .slick-dots li button:before {
    color: gold !important;
    opacity: 0.3 !important;
  }
  .slick-dots li.slick-active button:before {
    color: gold !important;
    opacity: 1 !important;
  }
  .slick-track {
    display: flex;
    align-items: stretch;
  }
  .slick-slide > div {
    height: auto;
  }
  .slick-slide > div > div {
    height: auto;
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
  const wrapperRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState(slidesToShow)
  const [containerHeight, setContainerHeight] = useState(0)

  const slideCount = React.Children.count(children)

  // Ajusta altura automaticamente com base no maior slide
  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      if (wrapperRef.current) {
        const heights = [...wrapperRef.current.querySelectorAll('.slick-slide')]
          .map(el => el.offsetHeight)
        const max = Math.max(...heights, 0)
        setContainerHeight(max)
      }
    })
    if (wrapperRef.current) observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [children, visibleSlides])

  React.useEffect(() => {
    const styleTag = document.createElement('style')
    styleTag.innerHTML = customArrowStyle
    document.head.appendChild(styleTag)
    return () => document.head.removeChild(styleTag)
  }, [])

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleSlides(1)
      else if (window.innerWidth < 1024) setVisibleSlides(2)
      else setVisibleSlides(slidesToShow)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [slidesToShow])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: visibleSlides,
    adaptativeHeight: true,
    arrows: false,
    beforeChange: (_, next) => setCurrent(next),
    ...props
  }

  return (
    <div style={{ overflow: 'visible', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative' }}>
        <Arrow
          direction="left"
          onClick={() => sliderRef.current?.slicSkGoTo(Math.max(0, current - visibleSlides))}
          disabled={current === 0}
        />
        <Arrow
          direction="right"
          onClick={() => sliderRef.current?.slickGoTo(Math.min(slideCount - visibleSlides, current + visibleSlides))}
          disabled={current >= slideCount - visibleSlides || slideCount <= visibleSlides}
        />
        <div ref={wrapperRef} style={{ minHeight: containerHeight }}>
          <Slider ref={sliderRef} {...settings}>
            {React.Children.map(children, child => (
              <div className="px-4">{child}</div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Carousel
