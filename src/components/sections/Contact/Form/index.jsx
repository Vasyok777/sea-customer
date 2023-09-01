'use client'

import AppModal from '@/components/ui/AppModal'
import Button from '@/components/ui/Button'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import 'reactjs-popup/dist/index.css'
import cls from './Form.module.scss'

const Form = () => {
	const [modalActive, setModalActive] = useState(true)
	const [loading, setLoading] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})
	const form = useRef()
	const onSubmit = async data => {
		try {
			setLoading(true)
			await emailjs.sendForm(
				'service_lt263yx',
				'template_mp47lcq',
				form.current,
				'2B8TNoQA0DnBTOdYk'
			)
			// await axios.post('/send-message', JSON.stringify(data), {
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// })
			setModalActive(true)
			reset()
		} catch (e) {
			console.log(e)
		} finally {
			setLoading(false)
		}
	}
	return (
		<>
			<form ref={form} className={cls.form} onSubmit={handleSubmit(onSubmit)}>
				<label className={cls.label}>
					<span className={cls.input__hidden}>Name</span>
					<input
						{...register('name', {
							required: 'Name is required',
						})}
						type='text'
						className={cls.input}
						placeholder={'Name and Surname'}
					/>
					{errors.name && errors.name.message && (
						<span className={cls.input__error}>{errors.name.message}</span>
					)}
				</label>
				<label className={cls.label}>
					<span className={cls.input__hidden}>Email</span>
					<input
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
								message: 'Please enter a valid email',
							},
						})}
						type='email'
						className={cls.input}
						placeholder={'E-mail Address'}
					/>
					{errors.email && errors.email.message && (
						<span className={cls.input__error}>{errors.email.message}</span>
					)}
				</label>
				<label className={cls.label}>
					<span className={cls.input__hidden}>Phone</span>
					<input
						{...register('phone', {
							required: 'Phone is required',
							pattern: {
								value: /^\+(?:[0-9] ?|\(?[0-9]+\)?){6,14}[0-9]$|^[0-9]*$/,
								message: 'Please enter a valid phone',
							},
						})}
						type='phone'
						className={cls.input}
						placeholder={'Phone'}
					/>
					{errors.phone && errors.phone.message && (
						<span className={cls.input__error}>{errors.phone.message}</span>
					)}
				</label>
				<label className={cls.label}>
					<span className={cls.input__hidden}>Subject</span>
					<input
						{...register('subject', {
							required: 'Subject is required',
							minLength: {
								value: 3,
								message: 'Subject must be at least 3 letters',
							},
						})}
						type='text'
						className={cls.input}
						placeholder={'Subject'}
					/>
					{errors.subject && errors.subject.message && (
						<span className={cls.input__error}>{errors.subject.message}</span>
					)}
				</label>
				<textarea
					{...register('message')}
					className={cls.form__textarea}
					placeholder='Message'
				></textarea>
				<p className={cls.form__text}>
					Partner with Sea Chart LTD for efficient, hassle-free, and reliable
					sea transportation services. Your cargo's journey is our priority.
				</p>
				<Button type='submit' disabled={loading}>
					{loading ? 'Submitting...' : 'Submit'}
				</Button>
			</form>
			{modalActive && (
				<AppModal active={modalActive} setActive={setModalActive}>
					<div className={cls.modal__top}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='140'
							height='140'
							viewBox='0 0 140 140'
							fill='none'
						>
							<circle cx='70' cy='70' r='50' fill='#EFF3FF' />
							<path
								d='M63.0233 85.9526L94.7917 54.1842L96.0915 55.484L61.609 89.9665L43.6842 72.0417L44.984 70.7418L60.1948 85.9526L61.609 87.3668L63.0233 85.9526ZM48.7513 120.204L49.5431 118.367L48.7513 120.204C55.4032 123.071 62.4994 124.5 70.0195 124.5C77.5399 124.5 84.6335 123.07 91.28 120.199C97.8876 117.345 103.655 113.462 108.564 108.549C113.474 103.635 117.353 97.8621 120.204 91.2487L118.367 90.4569L120.204 91.2487C123.071 84.5967 124.5 77.5006 124.5 69.9805C124.5 62.4601 123.07 55.3665 120.199 48.72L118.49 49.4582L120.199 48.72C117.345 42.1124 113.462 36.3449 108.549 31.4357L107.135 32.8506L108.549 31.4357C103.635 26.5265 97.8621 22.6473 91.2487 19.7962L90.4569 21.6328L91.2487 19.7962C84.5967 16.9285 77.5006 15.5 69.9805 15.5C62.4601 15.5 55.3665 16.93 48.72 19.8006L49.507 21.6226L48.72 19.8007C42.1124 22.6546 36.3449 26.5375 31.4357 31.4513L31.4357 31.4513C26.5265 36.3652 22.6473 42.1379 19.7962 48.7513L19.7962 48.7513C16.9285 55.4032 15.5 62.4994 15.5 70.0195C15.5 77.5399 16.93 84.6335 19.8006 91.28C22.6546 97.8876 26.5375 103.655 31.4513 108.564C36.3652 113.474 42.1379 117.353 48.7513 120.204Z'
								fill='#4FA863'
								stroke='#EFF3FF'
								stroke-width='4'
							/>
						</svg>
						<svg
							className={cls['modal__top-close']}
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 32 32'
							fill='none'
						>
							<path
								d='M8.53329 25.3332L6.66663 23.4665L14.1333 15.9998L6.66663 8.53317L8.53329 6.6665L16 14.1332L23.4666 6.6665L25.3333 8.53317L17.8666 15.9998L25.3333 23.4665L23.4666 25.3332L16 17.8665L8.53329 25.3332Z'
								fill='#EFF3FF'
							/>
						</svg>
					</div>
					<div className={cls.modal__content}>
						<h4 className={cls['modal__content-title']}>Great!</h4>
						<p className={cls['modal__content-text']}>
							Your request has been submitted successfully
						</p>
						<Button>OK</Button>
					</div>
				</AppModal>
			)}
		</>
	)
}
export default Form
