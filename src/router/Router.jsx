import { Route, Routes } from 'react-router-dom';
import { MENU } from '../constants/menu';
import Planet from '../pages/planet';

const Router = () => {
	return (
		<Routes>
			{MENU.map(menuItem => (
				<Route
					key={menuItem.id}
					path={menuItem.path}
					element={<Planet planetName={menuItem.name} />}
				/>
			))}
		</Routes>
	);
};
export default Router;
