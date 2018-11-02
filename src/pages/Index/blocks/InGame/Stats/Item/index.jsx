import React from 'react';

const Item = (props) => (
	<li>
		<span>{props.title}: </span> {props.value}
	</li>
);

export default Item;
