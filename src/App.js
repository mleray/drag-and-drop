import React from 'react';
import injectSheet from 'react-jss';
import { object } from 'prop-types';

// Components
import DraggableItem from './components/DraggableItem';
import DropArea from './components/DropArea';

// Constants
import PETS from './constants/pets';

const styles = {
	container: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		width: '100%',
		height: '100%'
	},
	items: {
		display: 'flex',
		justifyContent: 'space-around'
	}
};

const App = ({ classes }) => (
	<div className={classes.container}>
		<div className={classes.items}>
			{PETS.map(pet => (
				<DraggableItem key={pet} name={pet} />
			))}
		</div>
		<DropArea />
	</div>
);

App.propTypes = {
	classes: object.isRequired
};

export default injectSheet(styles)(App);
