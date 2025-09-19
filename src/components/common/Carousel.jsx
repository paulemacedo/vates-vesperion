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
    align-items: flex-start;
  }
  .slick-slide {
    display: flex !important;
    align-items: flex-start;
  }
  .slick-slide > div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-start;
  }
  .slick-list {
    overflow: hidden;
  }
`

const Arrow = ({ direction, onClick, disabled }) => {
  if (disabled) return null
  return (
    <button
      className={`oracle-arrow ${direction === "left" ? "oracle-arrow-left" : "oracle-arrow-right"}`}
      onClick={onClick}
      aria-label={direction === "left" ? "Anterior" : "Próximo"}
      tabIndex={0}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        [direction === 'left' ? 'left' : 'right']: '-60px'
      }}
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

const Carousel = ({ children, slidesToShow = 5, ...props }) => {
  const sliderRef = useRef(null)
  const wrapperRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [showArrows, setShowArrows] = useState(true)

  const slideCount = React.Children.count(children)
  const [visibleSlides, setVisibleSlides] = useState(
    Math.min(slidesToShow, slideCount)
  )  

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
      if (window.innerWidth < 768) {
        setVisibleSlides(Math.min(1, slideCount))
        setShowArrows(false)
      } else {
        setShowArrows(true)
        if (window.innerWidth < 1300) setVisibleSlides(Math.min(2, slideCount))
        else if (window.innerWidth < 1400) setVisibleSlides(Math.min(3, slideCount))
        else if (window.innerWidth < 1800) setVisibleSlides(Math.min(4, slideCount))
        else setVisibleSlides(Math.min(slidesToShow, slideCount))
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [slidesToShow, slideCount])

  const settings = {
    dots: true,
    infinite: false, // Desabilitado para controle manual preciso
    speed: 500,
    slidesToShow: visibleSlides,
    slidesToScroll: visibleSlides, // Move a quantidade de slides visíveis
    adaptiveHeight: false, // Desabilitado para evitar problemas de altura
    arrows: false, // Usando setas customizadas
    centerMode: false,
    variableWidth: false,
    beforeChange: (_, next) => setCurrent(next),
    ...props
  }

  const goToPrevious = () => {
    if (sliderRef.current) {
      const newIndex = Math.max(0, current - visibleSlides)
      sliderRef.current.slickGoTo(newIndex)
    }
  }

  const goToNext = () => {
    if (sliderRef.current) {
      const remainingSlides = slideCount - current - visibleSlides
      const slidesToMove = remainingSlides < visibleSlides ? remainingSlides : visibleSlides
      const newIndex = Math.min(slideCount - visibleSlides, current + slidesToMove)
      sliderRef.current.slickGoTo(newIndex)
    }
  }

  const canGoNext = current < slideCount - visibleSlides
  const canGoPrev = current > 0

  return (
    <div style={{ 
      overflow: 'visible', 
      position: 'relative', 
      display: 'flex', 
      flexDirection: 'column',
      width: '100%'
    }}>
      <div style={{ position: 'relative', width: '100%' }}>
        {showArrows && (
          <>
            <Arrow
              direction="left"
              onClick={goToPrevious}
              disabled={!canGoPrev}
            />
          <Arrow
            direction="right"
            onClick={goToNext}
            disabled={!canGoNext}
          />
        </>
        )}
        <div 
          ref={wrapperRef} 
          style={{ 
            minHeight: containerHeight,
            width: '100%',
            margin: '0 auto'
          }}
        >
          <Slider ref={sliderRef} {...settings}>
            {React.Children.map(children, (child, index) => (
              <div key={index} style={{ padding: '0 8px' }}>
                {child}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Carousel