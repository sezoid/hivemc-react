import React from 'react';

// Components
import { Headline, Select } from '@hivemc/components';
import Stats from './Stats/index';

// Utils
import * as Lang from '../../../../lang';

const InGame = (props) => (
	<>
		<Headline type='h2'>{Lang.en['ingame_stats']}</Headline>
		<Select
			action={props.action}
			list={props.list}
			name='games'
			title={Lang.en['select_game']}
			value={props.value}
		/>
		<Stats data={props.data} />
	</>
);

export default InGame;
