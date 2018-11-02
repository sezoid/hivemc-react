import React from 'react';

// Styles
import './index.sass';

const Search = ({ action, onChange, placeholder, value }) => {
	return (
		<form className='Search' onSubmit={action}>
			<input autoComplete='off' name='username' onChange={onChange} onClick={(event) => event.target.select()} placeholder={placeholder} type='text' value={value} />
		</form>
	);
};

export default Search;
