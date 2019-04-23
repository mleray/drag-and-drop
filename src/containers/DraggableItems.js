import React from 'react';
import { object, array } from 'prop-types';
import injectSheet from 'react-jss';

// Components
import DraggableItem from '../components/DraggableItem';

const styles = {
	items: {
		display: 'flex',
		justifyContent: 'space-around'
	}
};

const DraggableItems = ({ classes, items }) => (
	<div id="draggable-items" className={classes.items}>
		{items.map(item => (
			<DraggableItem key={item.toLowerCase()} name={item} />
		))}
	</div>
);

DraggableItems.propTypes = {
	items: array.isRequired,
	classes: object.isRequired
};

export default injectSheet(styles)(DraggableItems);
