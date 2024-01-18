import { Link } from 'react-router-dom';
import { MENU } from '../../constants/menu';
import { StyledUl } from './styles';

const Menu = () => {
	return (
		<>
			<nav>
				<StyledUl>
					{MENU.map(menuItem => (
						<li key={menuItem.id}>
							<Link to={menuItem.path}>{menuItem.name}</Link>
						</li>
					))}
				</StyledUl>
			</nav>
		</>
	);
};
export default Menu;
