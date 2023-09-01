import AppLogo from '@/components/ui/AppLogo'
import cls from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={cls.footer}>
			<div className='container'>
				<div className={cls.footer__top}>
					<AppLogo />
					<div className={cls['footer__top-right']}>
						SEA CHART LTD (COMMODITIES & FREIGHTS)
						<br />
						5/3 Gagarinskoe plato, <br />
						office 230
						<br />
						Odessa 65009
						<br />
						Ukraine
					</div>
					<div className={cls['footer__top-center']}>
						<p>
							Office: <a href='tel:380487340146'>+38 048 734 0146</a>
						</p>
						<p>
							Mobile:
							<a href='https://api.whatsapp.com/send?phone=380675194929&text=Hello!'>
								+38 067 519 4929 (whatsapp)
							</a>
						</p>
						<p>
							E-mail:
							<a href='mailto:chart@sea-chart.net'> chart@sea-chart.net</a>
						</p>
						<p>
							Skype ID: <a href='skype:mdomaratckiy'>mdomaratckiy</a>
						</p>
					</div>
				</div>
				<div className={cls.footer__bottom}>
					<p className={cls['footer__bottom-left']}>
						© 2023 Sea Chart LTD | All rights reserved | Privacy Policy | Terms
						of Use
					</p>
					<a
						className={cls['footer__bottom-link']}
						href='https://t.me/maks_geruk'
						target='_blank'
					>
						Developed by S&L Studio
					</a>
				</div>
			</div>
		</footer>
	)
}
export default Footer
