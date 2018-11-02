import React from 'react';

// Styles
import './index.sass';

const Headline = ({ children, className, style, type }) => {
	return React.createElement(type, { className: className, style: style }, children);
};

export { Headline };
