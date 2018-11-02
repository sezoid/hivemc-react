import React from 'react';

// Components
import { Headline } from '@hivemc/components';

// Styles
import './index.sass';

// Utils
import * as Lang from '../../../../lang';

const Profile = (props) => {
	return (
		<>
			<img
				className='Avatar'
				src={`https://avatar.hivemc.com/avatar/${props.username}/128`}
				alt={props.username}
			/>
			<Headline type='h1' className='text-center' style={{'marginTop': '30px'}}>{props.username}</Headline>
			<Headline type='h3' className='text-center'>{Lang.en.rank}: {props.modernRank['human']}</Headline>
			<table className='GlobalStats'>
				<tbody>
					<tr>
						<td>
							<li>{props.tokens}</li>
							<li>{Lang.en.tokens}</li>
						</td>
						<td>
							<li>{props.crates}</li>
							<li>{Lang.en.crates}</li>
						</td>
						<td>
							<li>{props.credits}</li>
							<li>{Lang.en.credits}</li>
						</td>
						<td>
							<li>{Object.keys(props.achievements).length}</li>
							<li>{Lang.en.achievements}</li>
						</td>
						<td>
							<li>{props.medals}</li>
							<li>{Lang.en.medals}</li>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default Profile;
