import React from 'react';
import { object, func } from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
	submitButton: {
		padding: 10,
		fontSize: 18,
		borderRadius: 4,
		backgroundColor: 'palevioletred',
		cursor: 'pointer',
		color: 'white',
		borderColor: 'transparent',
		outline: 'none',
		'&:hover': {
			backgroundColor: 'pink'
		}
	}
};

const SubmitButton = ({ classes, handler }) => (
	<button className={classes.submitButton} onClick={() => handler()}>
		Submit
	</button>
);

SubmitButton.propTypes = {
	classes: object.isRequired,
	handler: func.isRequired
};

export default injectSheet(styles)(SubmitButton);
