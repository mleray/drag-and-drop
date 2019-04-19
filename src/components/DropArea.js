import React from 'react';
import { object } from 'prop-types';
import injectSheet from 'react-jss';

// Helpers
import dnd from '../helpers/dragAndDrop';

const styles = {
	container: {
		border: 'thin solid grey',
		borderRadius: 4,
		maxWidth: 300,
		height: '100%',
		margin: '50px auto'
	}
};

const DropArea = ({ classes }) => (
	<div
		className={classes.container}
		onDrop={event => dnd.drop(event)}
		onDragOver={event => dnd.allowDrop(event)}
	/>
);

DropArea.propTypes = {
	classes: object.isRequired
};

export default injectSheet(styles)(DropArea);
