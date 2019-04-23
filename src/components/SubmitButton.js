import React, { useContext } from 'react';
import { object, func } from 'prop-types';
import injectSheet from 'react-jss';

// Context
import { SubmitContext } from '../context/SubmitContext';

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
		},
		'&:disabled': {
			backgroundColor: 'pink',
			cursor: 'not-allowed'
		}
	}
};

const SubmitButton = ({ classes, handler }) => {
	const { submitDisabled, setSubmitDisabled } = useContext(SubmitContext);

	return (
		<button
			disabled={submitDisabled}
			className={classes.submitButton}
			onClick={() => {
				handler();
				setSubmitDisabled(true);
			}}
		>
			Submit
		</button>
	);
};

SubmitButton.propTypes = {
	classes: object.isRequired,
	handler: func.isRequired
};

export default injectSheet(styles)(SubmitButton);
