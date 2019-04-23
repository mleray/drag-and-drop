import React, { useState, useEffect } from 'react';
import injectSheet from 'react-jss';
import { object } from 'prop-types';

// Components
import SubmitButton from './components/SubmitButton';

// Containers
import Items from './containers/DraggableItems';
import DropAreas from './containers/DropAreas';

// Constants
import PETS from './constants/pets';
import FOODS from './constants/foods';
import DRINKS from './constants/drinks';

const styles = {
	container: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		width: '100%',
		height: '100%',
		textAlign: 'center'
	}
};

const items = [PETS, FOODS, DRINKS];

const App = ({ classes }) => {
	const [currentItems, setCurrentItems] = useState(0);

	const submit = () => {
		if (currentItems < items.length - 1) {
			setCurrentItems(currentItems + 1);
		} else {
			setCurrentItems(-1);
		}
	};

	return (
		<div className={classes.container}>
			{currentItems > -1 ? (
				<div>
					<h2>Please rank the following items:</h2>
					<Items items={items[currentItems]} />
					<DropAreas amount={items[currentItems].length} />
					<SubmitButton handler={submit} />
				</div>
			) : (
				<h2>Survey is over, thank you!</h2>
			)}
		</div>
	);
};

App.propTypes = {
	classes: object.isRequired
};

export default injectSheet(styles)(App);
