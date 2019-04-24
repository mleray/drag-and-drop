import React from 'react';
import { object, number } from 'prop-types';
import injectSheet from 'react-jss';

// Components
import DropArea from '../components/DropArea';

const styles = {
	dropAreas: {
		border: 'thin solid grey',
		borderRadius: 4,
		maxWidth: 300,
		margin: '50px auto'
	}
};

const generateDropAreas = (amount, index) => {
	let dropAreas = [];
	for (let i = 1; i <= amount; i++) {
		dropAreas.push(<DropArea key={`dropArea-${index}-${i}`} />);
	}
	return dropAreas;
};

const DropAreas = ({ amount, index, classes }) => (
	<div className={classes.dropAreas}>
		<h3> Your ranking </h3>
		{generateDropAreas(amount, index)}
	</div>
);

DropAreas.propTypes = {
	amount: number,
	classes: object.isRequired,
	index: number
};

DropAreas.defaultProps = {
	amount: 6,
	index: 0
};

export default injectSheet(styles)(DropAreas);
