import cls from './Button.module.scss'

const Button = ({ children, submit, disabled }) => {
	return (
		<button type={submit} className={cls.button} disabled={disabled}>
			{children}
		</button>
	)
}
export default Button
