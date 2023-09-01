import AppTitle from '@/components/ui/AppTitle'
import Image from 'next/image'
import cls from './Choose.module.scss'

const Choose = () => {
	const choose = [
		{
			id: 1,
			img: '/images/choose-one.svg',
			alt: 'Expert team',
			title: 'Expert Team',
			text: 'Our team comprises professionals who understand the intricacies of sea transportation. From planning routes to managing documentation, we ensure that every aspect of your cargo`s journey is handled with expertise.',
		},
		{
			id: 2,
			img: '/images/choose-two.svg',
			alt: 'Global Network',
			title: 'Global Network',
			text: 'With a vast network of partners and agents around the world, we have the resources to manage shipments to and from virtually any destination. No matter where your cargo needs to go, we have the connections to make it happen.',
		},
		{
			id: 3,
			img: '/images/choose-three.svg',
			alt: 'Shipownership',
			title: 'Shipownership',
			text: 'Our institution is aware of all such risks, and takes the most appropriate actions professionally in every situation, with its highly experienced and well-equipped team, to prevent misfortunes and minimize the risks.',
		},
		{
			id: 4,
			img: '/images/choose-four.svg',
			alt: 'Reliability',
			title: 'Reliability',
			text: 'We take pride in our reputation for reliability. Your cargo is valuable, and we treat it as such. Count on us to deliver your shipments safely and punctually, every time.',
		},
	]
	return (
		<section className={cls.choose} id='why-choose-us'>
			<div className='container'>
				<AppTitle title='Why Choose Us' />
				<div className={cls.choose__list}>
					{choose.map(item => (
						<div key={item.id} className={cls.choose__item}>
							<div className={cls['choose__item-image']}>
								<Image src={item.img} width='140' height='140' alt={item.alt} />
							</div>
							<h6 className={cls['choose__item-title']}>{item.title}</h6>
							<p className={cls['choose__item-text']}>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default Choose
