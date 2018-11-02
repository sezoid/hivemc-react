import React from 'react';

// Components
import { Header } from '@hivemc/components';

const Page = ({ children }) => (
	<div className='Page'>
		<Header />
		{children}
	</div>
);

Page.displayName = 'Page';
export default Page;