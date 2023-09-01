import cls from './AppTitle.module.scss'

const AppTitle = ({ title }) => {
	return <h2 className={cls.title}>{title}</h2>
}
export default AppTitle
