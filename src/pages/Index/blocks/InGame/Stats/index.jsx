import React from 'react';

// Components
import Item from './Item/index';

// Styles
import './index.sass';

// Utils
import * as Lang from '../../../../../lang';

/*
	[PREVIOUS COMMIT]: Yes, I know It's a really bad code, but I don't know how can I make it good.
	If you can do it, please, help me. I'm alone, I don't have any ideas :c

	[RIGHT NOW]: already better
*/

const Stats = (props) => {
	const data = Object.entries(props.data);
	// blacklist of statistics properties of mini-games
	const blacklist = [
		'active_deathcrate', 'active_detectivestick', 'active_flareupgrade',
		'active_vanitycolor', 'arrowtrails', 'availablebanners',
		'battlecries', 'blocks', 'bookupgrade',
		'cached', 'crates_opened', 'cratesopened',
		'creeperfirework', 'cupidunlock', 'detectivebook',
		'detectivesticks', 'flareupgrade', 'firstlogin',
		'firstLogin', 'game_victories', 'herobrineunlock',
		'lastlogin', 'lastUsedEmote', 'mapdeaths',
		'mapkills', 'maprecords', 'multikills',
		'musicunlock', 'preferredEmoteSelectorMenu', 'rainboweggs',
		'rainbowunlock', 'rawBlockExperience', 'recentgames',
		'selected_bling', 'selected_death_sound', 'selected_trail',
		'selected_victory_sound', 'selectedbanner', 'sheepunlock',
		'shovelupgrade', 'teamselector', 'timealive',
		'title', 'trapclassdeaths', 'trapclasskills',
		'trapdeaths', 'trapkills', 'unlocked_bling',
		'unlocked_classes', 'unlocked_death_sounds', 'unlock_deathcrate',
		'unlock_mysword', 'unlocked_trails', 'UUID',
		'vanitycolors', 'visibility', 'wing_disable_narration'
	];
	return (
		<ul className='Stats'>
			{data.length > 3 ? data.map(item => {
				if (blacklist.indexOf(item[0]) !== -1) {
					return null;
				} else {
					if (item[0] === 'achievements') {
						const value = Object.keys(item[1]).length;
						return (
							<Item
								key={item[0]}
								title={Lang.en[item[0]]}
								value={value > 0 ? value - 1 : value}
							/>
						);
					} else {
						if (item[0] === 'firstwinday') {
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
					}
				}
			}) : <li>{Lang.en.nodata}</li>}
		</ul>
	);
};

export default React.memo(Stats);
