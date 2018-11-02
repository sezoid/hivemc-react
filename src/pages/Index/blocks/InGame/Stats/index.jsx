import React from 'react';

// Components
import Item from './Item/index';

// Styles
import './index.sass';

// Utils
import * as Lang from '../../../../../lang';

/*
	Yes, I know It's a really bad code, but I don't know how can I make it good.
	If you can do it, please, help me. I'm alone, I don't have any ideas :c

	Contact me: sezyara@gmail.com
*/

const Stats = (props) => {
	const data = Object.entries(props.data);
	return (
		<ul className='Stats'>
			{data.length > 3 ? data.map(item => {
				if (
					item[0] === 'active_deathcrate'			|| item[0] === 'active_detectivestick'		||
					item[0] === 'active_flareupgrade'			|| item[0] === 'active_vanitycolor'		||
					item[0] === 'arrowtrails'				|| item[0] === 'availablebanners'			||
					item[0] === 'battlecries'				|| item[0] === 'blocks'					||
					item[0] === 'bookupgrade'				|| item[0] === 'cached'					||
					item[0] === 'crates_opened'				|| item[0] === 'cratesopened'				||
					item[0] === 'creeperfirework'				|| item[0] === 'cupidunlock'				||
					item[0] === 'detectivebook'				|| item[0] === 'detectivesticks'			||
					item[0] === 'flareupgrade'				|| item[0] === 'firstlogin'				||
					item[0] === 'firstLogin'					|| item[0] === 'game_victories'			||
					item[0] === 'herobrineunlock'				|| item[0] === 'lastlogin'				||
					item[0] === 'lastUsedEmote'				|| item[0] === 'mapdeaths'				||
					item[0] === 'mapkills'					|| item[0] === 'maprecords'				||
					item[0] === 'multikills'					|| item[0] === 'musicunlock'				||
					item[0] === 'preferredEmoteSelectorMenu'	|| item[0] === 'rainboweggs'				||
					item[0] === 'rainbowunlock'				|| item[0] === 'rawBlockExperience'		||
					item[0] === 'recentgames'				|| item[0] === 'selected_bling'			||
					item[0] === 'selected_death_sound'			|| item[0] === 'selected_trail'			||
					item[0] === 'selected_victory_sound'		|| item[0] === 'selectedbanner'			||
					item[0] === 'sheepunlock'				|| item[0] === 'shovelupgrade'			||
					item[0] === 'teamselector'				|| item[0] === 'timealive'				||
					item[0] === 'title'						|| item[0] === 'trapclassdeaths'			||
					item[0] === 'trapclasskills'				|| item[0] === 'trapdeaths'				||
					item[0] === 'trapkills'					|| item[0] === 'unlocked_bling'			||
					item[0] === 'unlocked_classes'			|| item[0] === 'unlocked_death_sounds'		||
					item[0] === 'unlock_deathcrate'			|| item[0] === 'unlock_mysword'			||
					item[0] === 'unlocked_trails'				|| item[0] === 'UUID'					||
					item[0] === 'vanitycolors'				|| item[0] === 'visibility'				||
					item[0] === 'wing_disable_narration'
				) {
					return null;
				} else if (item[0] === 'achievements') {
					const value = Object.keys(item[1]).length;
					return (
						<Item
							key={item[0]}
							title={Lang.en[item[0]]}
							value={value > 0 ? value - 1 : value}
						/>
					);
				} else if (item[0] === 'firstwinday') {
					const options = {
						year: 'numeric', month: 'long', day: 'numeric',
						timezone: 'UTC', hour: 'numeric', minute: 'numeric',
						second: 'numeric'
					};
					return (
						<Item
							key={item[0]}
							title={Lang.en[item[0]]}
							value={new Date(item[1] * 1000).toLocaleString("en-US", options)}
						/>
					);
				} else {
					return (
						<Item
							key={item[0]}
							title={Lang.en[item[0]]}
							value={JSON.stringify(item[1], null, 5).replace(/"/g, '')}
						/>
					);
				}
			}) : <li>{Lang.en.nodata}</li>}
		</ul>
	);
};

export default React.memo(Stats);
