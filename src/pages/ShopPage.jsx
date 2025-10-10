import Shop from '../components/sections/Shop'
import Footer from '../components/layout/Footer'
import SEO from '../utils/SEO'

const sections = [
  { Component: Shop },
  { Component: Footer },
];

const bgClasses = ['bg-midnight', 'bg-purple-dark'];


function ShopPage() {
  const seo = {
    title: "Vates Vesperion - Loja",
    description: "Descubra nossos serviços de tarot e oráculos para orientação e autoconhecimento.",
    image: "/hero-banner.png"
  }

  return (
    <>
      <SEO {...seo} />
      {sections.map(({ Component }, idx) => (
        <div key={idx} className={bgClasses[idx % bgClasses.length]}>
          <Component />
        </div>
      ))}
    </>
  );
}

export default ShopPage
