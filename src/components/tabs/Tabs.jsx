import { TABS } from '../../constants/tabs';

const Tabs = ({ setTabActive }) => {
	return (
		<div>
			{TABS.map((tab, index) => (
				<button key={tab.id} onClick={() => setTabActive(index)}>
					{tab.name}
				</button>
			))}
		</div>
	);
};
export default Tabs;
