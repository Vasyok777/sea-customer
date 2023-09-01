import AppTitle from '@/components/ui/AppTitle'
import Image from 'next/image'
import cls from './Services.module.scss'

const Services = () => {
	const services = [
		{
			id: 1,
			img: '/images/services-one.jpg',
			alt: 'Cargo Handling at Ports',
			title: 'Cargo Handling at Ports',
			text: `Our staff deal directly with businesses which provide stevedore services at all Ukrainian ports, both sea and river. We are able to ensure that the loading and unloading work is carried out in the most time efficient manner without compromising the quality of the task and in accordance with any technical requirements of our client. Our team of professionals will monitor every step of the way so the customer can rest assured about the quality of loading of their cargo. We will ensure the safety of goods before and during transportation as well as guarantee correct handling plus weighing and sorting of cargo where necessary. It is important to choose a trusted expert who is able to offer a full range of such services as well as commit to overseeing the work of third parties such as ground carriers, railway service etc. Our team of professionals come highly recommended due to their wealth of experience when it comes to sea and rail transportation. We would be delighted to see how we can help deliver your goods to their port of destination.`,
		},
		{
			id: 2,
			img: '/images/services-two.jpg',
			alt: 'Chartering',
			title: 'Chartering',
			text: 'When offering chartering services, our team of professionals recognise the importance of entering into the contract between the Сharterer and the Ыhipowner for the shipment of goods by sea. One must be prepared to deal with every eventuality of loading, transport and unloading of cargo in accordance with international law in order to ensure smooth handling of goods. Furthermore, when drawing up a charterparty it is imperative to consider the needs and wishes of both the shipowner and the charterer. Should you wish receive advice on any aspects of chartering, our experts would be delighted to answer your questions. Our priority is always to minimise all associated risks and eliminate stress for our clients when faced with challenging situations.',
		},
		{
			id: 3,
			img: '/images/services-three.jpg',
			alt: 'Shipping agency',
			title: 'Shipping agency',
			text: 'Our shipping agents are authorized representatives of the Shipowner as well as large shipping companies. The agent will always act in the best interests of their client and would deal with all formalities on behalf of the shipowner. Should the situation ever arise where the client’s and the agent’s views may differ – the agent will always act on instructions from the client. The agent’s primary function is to offer advice and expertise based on experience. We always recommend our clients to seek advice from our agents who are well versed in quirks of any particular port of Ukraine and have knowledge necessary to deal with any type of scenario. To help you make the decision whether to engage our services - we would be more than happy to offer a free consultation on how we can help make it plain sailing for you.',
		},
	]
	return (
		<section className={cls.services} id='services'>
			<div className='container'>
				<AppTitle title='Our Services' />
				<div className={cls.services__inner}>
					{services.map(item => (
						<div className={cls.services__item} key={item.id}>
							<div className={cls['services__item-image']}>
								<Image src={item.img} width={380} height={200} alt={item.alt} />
							</div>
							<h6 className={cls['services__item-title']}>{item.title}</h6>
							<p className={cls['services__item-text']}>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default Services
