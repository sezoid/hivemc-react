import React from 'react';

// Styles
import './index.sass';

const Card = ({ children, style }) => {
	return (
		<div className='Card' style={style}>
			{children}
		</div>
	);
};

export default React.memo(Card);
