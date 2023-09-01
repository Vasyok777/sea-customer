import AppTitle from '@/components/ui/AppTitle'
import Image from 'next/image'
import cls from './About.module.scss'

const About = () => {
	const items = [
		{
			id: 1,
			title:
				'Sea Chart LTD is a Shipping Company operating a fleet of modern Handysize, Supramax and Panamax vessels',
			text: 'Being a commercial dry bulk operator we are covering business on Time Charter, Period and Voyage basis also doing COA. Chartering managers in Bigor Ltd are experienced analysts of chartering market who enable clients to raise efficiency of their business and avoid risks. Development of long-term relations with the client is the main target here. We strive to provide wide range quality services and always open for new challenges.',
		},
		{
			id: 2,
			title: 'Vision Sea Chart LTD',
			text: 'Our vision is to emerge as the preeminent maritime institution in the eyes of our customers. We aspire to be the foremost name that comes to mind when maritime excellence is mentioned. This vision propels us forward, guiding our actions and decisions as we endeavor to provide exceptional services to our clients. With a deep commitment to understanding customer expectations, identifying opportunities, and enhancing supply chain strategies, we work to uphold the highest standards of service quality. Our values align with this vision, cementing our dedication to continuous improvement and innovative approaches that set us apart in the maritime industry.',
		},
		{
			id: 3,
			title: 'Mission Sea Chart LTD',
			text: 'Our mission revolves around achieving prominence in our operating market through a commitment to excellence. We set ourselves apart by delivering customers not just a service, but an unparalleled level of quality and distinction. Our dedication to staying abreast of the latest freight rate channels ensures that our service remains at the forefront. We believe in nurturing the ambitions of our staff, channeling their aspirations into the driving force behind our progress. Customer satisfaction stands as the bedrock of our efforts, aiming to provide clients with experiences that not only meet but exceed their expectations. As a positive and impactful contributor to our community, we work diligently to spread positivity and effectiveness in every interaction. Moreover, our global reach is extended through adept chartering practices, making import and export processes smoother for our clients.',
		},
	]
	return (
		<section className={cls.about} id='about'>
			<div className='container'>
				<div className={cls.about__inner}>
					<AppTitle title='About Us' />
					<div className={cls.about__content}>
						<div className={cls.about__left}>
							<div className={cls['about__left-list']}>
								<div className={cls['about__left-item']}>
									<h6 className={cls['about__left-title']}>
										Sea Chart LTD is a Shipping Company operating a fleet of
										modern Handysize, Supramax and Panamax vessels
									</h6>
									<p className={cls['about__left-text']}>
										Being a commercial dry bulk operator we are covering
										business on Time Charter, Period and Voyage basis also doing
										COA. Chartering managers in Bigor Ltd are experienced
										analysts of chartering market who enable clients to raise
										efficiency of their business and avoid risks. Development of
										long-term relations with the client is the main target here.
										We strive to provide wide range quality services and always
										open for new challenges.
									</p>
								</div>
								<div className={cls['about__left-img']}>
									<Image
										src='/images/about-mob.jpg'
										width={580}
										height={584}
										alt='Vision Sea Chart LTD'
									/>
								</div>
								<div className={cls['about__left-item']}>
									<h6 className={cls['about__left-title']}>
										Vision Sea Chart LTD
									</h6>
									<p className={cls['about__left-text']}>
										Our vision is to emerge as the preeminent maritime
										institution in the eyes of our customers. We aspire to be
										the foremost name that comes to mind when maritime
										excellence is mentioned. This vision propels us forward,
										guiding our actions and decisions as we endeavor to provide
										exceptional services to our clients. With a deep commitment
										to understanding customer expectations, identifying
										opportunities, and enhancing supply chain strategies, we
										work to uphold the highest standards of service quality. Our
										values align with this vision, cementing our dedication to
										continuous improvement and innovative approaches that set us
										apart in the maritime industry.
									</p>
								</div>
								<div className={cls['about__left-item']}>
									<h6 className={cls['about__left-title']}>
										Mission Sea Chart LTD
									</h6>
									<p className={cls['about__left-text']}>
										Our mission revolves around achieving prominence in our
										operating market through a commitment to excellence. We set
										ourselves apart by delivering customers not just a service,
										but an unparalleled level of quality and distinction. Our
										dedication to staying abreast of the latest freight rate
										channels ensures that our service remains at the forefront.
										We believe in nurturing the ambitions of our staff,
										channeling their aspirations into the driving force behind
										our progress. Customer satisfaction stands as the bedrock of
										our efforts, aiming to provide clients with experiences that
										not only meet but exceed their expectations. As a positive
										and impactful contributor to our community, we work
										diligently to spread positivity and effectiveness in every
										interaction. Moreover, our global reach is extended through
										adept chartering practices, making import and export
										processes smoother for our clients.
									</p>
								</div>
							</div>
						</div>
						<div className={cls.about__right}>
							<Image
								src='/about.jpg'
								width={580}
								height={584}
								alt='Vision Sea Chart LTD'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default About
