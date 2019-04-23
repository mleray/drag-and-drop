import React from 'react';
import { object } from 'prop-types';
import injectSheet from 'react-jss';

// Helpers
import dnd from '../helpers/dragAndDrop';

const styles = {
	container: {
		border: 'thin dotted grey',
		borderRadius: 4,
		height: 52,
		margin: 10
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
