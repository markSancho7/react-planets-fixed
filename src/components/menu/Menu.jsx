import { Link } from 'react-router-dom';
import { MENU } from '../../constants/menu';

const Menu = () => {
	return (
		<>
			<nav>
				<ul>
					{MENU.map(menuItem => (
						<li key={menuItem.id}>
							<Link to={menuItem.path}>{menuItem.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};
export default Menu;
