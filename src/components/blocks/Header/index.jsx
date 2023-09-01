'use client'

import AppDarkLogo from '@/components/ui/AppDarkLogo'
import AppLogo from '@/components/ui/AppLogo'
import { useEffect, useState } from 'react'
import cls from './Header.module.scss'

const Header = () => {
	const [open, setOpen] = useState(false)
	const items = [
		{
			id: 1,
			link: '#about',
			title: 'About us',
		},
		{
			id: 2,
			link: '#services',
			title: 'Our Services',
		},
		{
			id: 3,
			link: '#why-choose-us',
			title: 'Why Choose Us',
		},
		{
			id: 4,
			link: '#contact',
			title: 'Contact Us',
		},
	]

	useEffect(() => {
		if (open) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}, [open])

	const toggleMenu = () => {
		setOpen(prev => !prev)
	}
	return (
		<header className={cls.header}>
			<div className='container'>
				<nav className={cls.nav}>
					{open ? <AppDarkLogo /> : <AppLogo />}
					<ul className={`${cls.nav__list} ${open ? cls.active : ''} `}>
						{items.map(item => (
							<li onClick={toggleMenu} key={item.id} className={cls.nav__item}>
								<a href={item.link} className={cls.nav_}>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<div
					className={`${cls.burger__menu} ${open ? cls.active : ''}`}
					onClick={toggleMenu}
				>
					<span></span>
				</div>
			</div>
		</header>
	)
}
export default Header
