import React from 'react';

// Styles
import './index.sass';

const Select = (props) => {
	const { action, list, name, title, value } = props;
	let key,
		options = [];

	for (key in list) {
		if (list.hasOwnProperty(key)) {
			options = [...options, {key: key, title: list[key], value: key}]
		};
	};

	return (
		<div className='Dropdown'>
			<label htmlFor={name}>{title}</label>
			<select name={name} onChange={action} value={value}>
				{options.map(item => (
					<option key={item.key} value={item.value}>{item.title}</option>
				))}
			</select>
		</div>
	);
};

export default React.memo(Select);
