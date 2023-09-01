import Footer from '@/components/blocks/Footer'
import Header from '@/components/blocks/Header'
import About from '@/components/sections/About'
import Choose from '@/components/sections/Choose'
import Contact from '@/components/sections/Contact'
import Promo from '@/components/sections/Promo'
import Services from '@/components/sections/Services'
import '@/styles/index.scss'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Promo />
				<About />
				<Services />
				<Choose />
				<Contact />
			</main>
			<Footer />
		</>
	)
}
