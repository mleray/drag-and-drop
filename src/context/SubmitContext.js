import React, { useState } from 'react';

export const SubmitContext = React.createContext();

const SubmitProvider = props => {
	const [submitDisabled, setSubmitDisabled] = useState(true);

	return (
		<SubmitContext.Provider
			value={{
				submitDisabled,
				setSubmitDisabled
			}}
		>
			{props.children}
		</SubmitContext.Provider>
	);
};

export default SubmitProvider;
