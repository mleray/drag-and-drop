import React, { useState } from 'react';
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

// Context
import SubmitProvider from './context/SubmitContext';

const styles = {
	container: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		width: '100%',
		height: '100%',
		textAlign: 'center'
	}
};

const ITEMS = [PETS, FOODS, DRINKS];

const App = ({ classes }) => {
	const [currentItems, setCurrentItems] = useState(0);

	const submit = () => {
		if (currentItems < ITEMS.length - 1) {
			setCurrentItems(currentItems + 1);
		} else {
			// This means that we are done with ranking all the items
			setCurrentItems(-1);
		}
	};

	return (
		<SubmitProvider>
			<div className={classes.container}>
				{currentItems > -1 ? (
					<div>
						<h2>Please rank the following items:</h2>
						<Items items={ITEMS[currentItems]} />
						<DropAreas
							amount={ITEMS[currentItems].length}
							index={currentItems}
						/>
						<SubmitButton handler={submit} />
					</div>
				) : (
					<h2>Nothing left to rank, thank you!</h2>
				)}
			</div>
		</SubmitProvider>
	);
};

App.propTypes = {
	classes: object.isRequired
};

export default injectSheet(styles)(App);
