import AppTitle from '@/components/ui/AppTitle'
import cls from './Contact.module.scss'
import Form from './Form'

const Contact = () => {
	return (
		<section className={cls.contact} id='contact'>
			<div className='container'>
				<AppTitle title='Contact Us' />
				<div className={cls.contact__content}>
					<h6 className={cls['contact__content-title']}>
						Let's Discuss Your Sea Transportation Needs
					</h6>
					<p className={cls['contact__content-text']}>
						Ready to take the next step? Whether you have questions about our
						services or want to discuss a specific shipment, our team is here to
						assist you. Feel free to reach out to us via:
					</p>
				</div>
				<Form />
			</div>
		</section>
	)
}
export default Contact
