import React from 'react';
import { object, string } from 'prop-types';
import injectSheet from 'react-jss';

// Helpers
import dnd from '../helpers/dragAndDrop';

const styles = {
	container: {
		border: 'thin solid black',
		borderRadius: 4,
		padding: '0 30px',
		backgroundColor: 'lightgrey',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'lightblue'
		}
	}
};

const DraggableItem = ({ classes, name }) => (
	<div>
		<div
			id={name.toLowerCase()}
			className={classes.container}
			draggable="true"
			onDragStart={event => dnd.drag(event)}
		>
			<p> {name} </p>
		</div>
	</div>
);

DraggableItem.propTypes = {
	classes: object.isRequired,
	name: string.isRequired
};

export default injectSheet(styles)(DraggableItem);
