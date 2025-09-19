import Hero from '../components/sections/Hero'
import Leituras from '../components/sections/Leituras'
import FAQ from '../components/sections/FAQ'
import Depoimentos from '../components/sections/Depoimentos'
import Footer from '../components/layout/Footer'
import SEO from '../utils/SEO'
import useScrollOnParam from '../hooks/useScrollOnParam'





const sections = [
	{ Component: Hero },
	{ Component: Leituras },
	{ Component: FAQ },
	{ Component: Depoimentos },
  { Component: Footer },
];

const bgClasses = ['bg-midnight', 'bg-purple-dark'];

function MainPage() {
  useScrollOnParam('scroll', 'leituras')
	useScrollOnParam('scroll', 'faq')
	useScrollOnParam('scroll', 'depoimentos')

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

export default MainPage

