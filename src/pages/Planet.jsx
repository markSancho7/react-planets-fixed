import { useState } from 'react';
import Tabs from '../components/tabs/Tabs';
import { PLANETS_INFO } from '../constants/planetsinfo';

const Planet = ({ planetName }) => {
	const [tabActive, setTabActive] = useState(0);
	return (
		<>
			<h1>{planetName}</h1>
			<img src={PLANETS_INFO[planetName].planetImg[tabActive]} alt='' />
			{tabActive === 2 && (
				<img src={PLANETS_INFO[planetName].planetImg[3]} alt='' />
			)}
			<Tabs setTabActive={value => changeTabActive(value, setTabActive)}></Tabs>
		</>
	);
};
const changeTabActive = (value, setTabActive) => {
	setTabActive(value);
};
export default Planet;
