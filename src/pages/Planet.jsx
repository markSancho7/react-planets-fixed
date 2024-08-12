import { useState } from 'react';
import Tabs from '../components/tabs/Tabs';
import { PLANETS_INFO } from '../constants/planetsinfo';
import { StledImgContainer } from './syles';

const Planet = ({ planetName }) => {
	const [tabActive, setTabActive] = useState(0);
	return (
		<>
			<StledImgContainer>
				<img src={PLANETS_INFO[planetName].planetImg[tabActive]} alt='' />
			</StledImgContainer>
			<div>
				<h1>{planetName}</h1>
				<p>{PLANETS_INFO[planetName].planetDescription}</p>
				{tabActive === 2 && (
					<img src={PLANETS_INFO[planetName].planetImg[3]} alt='' />
				)}
			</div>
			<div>
				<Tabs
					setTabActive={value => changeTabActive(value, setTabActive)}
				></Tabs>
				<div>
					<div>PLANET ROTATION: {PLANETS_INFO[planetName].planetRotation}</div>
					<div>
						PLANET REVOLUTION: {PLANETS_INFO[planetName].planetRevolution}
					</div>
					<div>PLANET RADIUS: {PLANETS_INFO[planetName].planetRadius}</div>
					<div>PLANET AVERAGE: {PLANETS_INFO[planetName].planetAverage}</div>
				</div>
			</div>
		</>
	);
};
const changeTabActive = (value, setTabActive) => {
	setTabActive(value);
};
export default Planet;
