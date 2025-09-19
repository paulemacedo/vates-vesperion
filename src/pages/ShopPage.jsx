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
    title: "Vates Vesperion - Leituras Oraculares Personalizadas",
    description: "Consultas de Tarot, Baralho Cigano e oráculos. Descubra mensagens do universo com Vates Vesperion.",
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
