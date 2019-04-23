import React from 'react';
import { object, func } from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
	submitButton: {}
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
