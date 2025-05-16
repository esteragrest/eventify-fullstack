import { ExtendedLink } from './extended-link/ExtendedLink';
import styles from './navigation-bar.module.css';

export const NavigationBar = () => {
	return (
		<nav className={styles['control-panel']}>
			<ul>
				<li>
					<ExtendedLink to="/">Главная</ExtendedLink>
				</li>
				<li>
					<ExtendedLink to="/events">Мероприятия</ExtendedLink>
				</li>
				<li>
					<ExtendedLink to="/profile">Профиль</ExtendedLink>
				</li>
			</ul>
		</nav>
	);
};
