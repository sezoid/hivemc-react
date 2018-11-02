import React from 'react';

// Components
import { Headline } from '../index';

// Styles
import './index.sass';

const Header = (props) => {
	return (
		<header className='Header'>
			<Headline className='Title' type='h1'>Hive Stats</Headline>
		</header>
	);
};

export default Header;
