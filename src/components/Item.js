import React from 'react';

const Item = ({ image, name }) => (
	<div>
		<p>{name}</p>
		<img src={image} />
	</div>
);

export default Item;
