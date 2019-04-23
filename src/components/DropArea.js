import React, { useContext } from 'react';
import { object } from 'prop-types';
import injectSheet from 'react-jss';

// Helpers
import dnd from '../helpers/dragAndDrop';

// Context
import { SubmitContext } from '../context/SubmitContext';

const styles = {
	container: {
		border: 'thin dotted grey',
		borderRadius: 4,
		height: 52,
		margin: 10
	}
};

const DropArea = ({ classes }) => {
	const { submitDisabled, setSubmitDisabled } = useContext(SubmitContext);

	return (
		<div
			className={`${classes.container} drop-area`}
			onDrop={event => {
				dnd.drop(event);
				if (submitDisabled && dnd.areAllItemsDragged())
					setSubmitDisabled(false);
			}}
			onDragOver={event => dnd.allowDrop(event)}
		/>
	);
};

DropArea.propTypes = {
	classes: object.isRequired
};

export default injectSheet(styles)(DropArea);
