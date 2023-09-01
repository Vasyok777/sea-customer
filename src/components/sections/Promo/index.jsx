import Image from 'next/image'
import cls from './Promo.module.scss'

const Promo = () => {
	return (
		<section className={cls.promo}>
			<Image
				className={cls.promo__bg}
				src='/images/bg.jpg'
				width={1440}
				height={740}
				alt=' Sea Chart LTD 
				Your Partner in Seamless Sea Transportation'
			/>
			<div className='container'>
				<div className={cls.promo__inner}>
					<h1 className={cls.promo__title}>
						Sea Chart LTD
						<br /> Your Partner in Seamless Sea <br />
						Transportation
					</h1>
				</div>
			</div>
		</section>
	)
}
export default Promo
