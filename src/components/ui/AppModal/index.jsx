import cls from './AppModal.module.scss'

const AppModal = ({ active, setActive, children }) => {
	return (
		<div
			className={`${cls.modal} ${active ? cls.active : ''}`}
			onClick={() => setActive(false)}
		>
			<div
				className={`${cls.modal__content} ${active ? cls.active : ''}`}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}
export default AppModal
