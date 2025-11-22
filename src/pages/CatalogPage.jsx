import Highlight from '../components/common/highlight'
import Catalog from '../components/sections/Catalog'
import Footer from '../components/layout/Footer'
import SEO from '../utils/SEO'

const sections = [
  { Component: Highlight, props: { promotions: [
    {
      image: '/images/promotions/BlackFriday.png',
      alt: 'Black Friday - Desconto de 20% em todos os serviços!',
    }
  ]}},
  { Component: Catalog },
  { Component: Footer },
];

const bgClasses = ['bg-midnight', 'bg-purple-dark'];

function CatalogPage() {
  const seo = {
    title: "Vates Vesperion - Loja",
    description: "Descubra nossos serviços de tarot e oráculos para orientação e autoconhecimento.",
    image: "/hero-banner.png"
  }

  return (
    <>
      <SEO {...seo} />
      <div className="pt-[80px] mx-auto">
        {sections.map(({ Component, props }, idx) => (
          <div key={idx} className={bgClasses[idx % bgClasses.length]}>
            <Component {...props} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CatalogPage