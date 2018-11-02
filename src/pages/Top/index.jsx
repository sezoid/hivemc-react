import React, { Component } from 'react';

// Components
import Page from '../_page';
import { Card, Headline, Select } from '@hivemc/components';

// Styles
import './index.sass';

/*
	This code in development. Please, don't judge me
*/

const API = 'https://api.hivemc.com/v1';

class Top extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentGame: '',
			games: [],
			players: []
		};
	};

	componentWillMount() {
		fetch(`${API}/game`)
			.then(response => response.json())
			.then(data => this.setState({ currentGame: Object.keys(data)[0], games: data }))
			.catch(error => this.setState({ error: true }));
	};

	gameOnChange = async (event) => {
		await this.setState({ currentGame: event.target.value });
		await this.getTop200();
	};

	async getTop200() {
		const { currentGame } = this.state;
		await fetch(`${API}/game/${currentGame}/leaderboard/0/200`)
			.then(response => response.json())
			.then(data => this.setState({ players: data.leaderboard }))
			.catch(error => this.setState({ error: true }));
	};

	render() {
		const { currentGame, games, players } = this.state;
		return (
			<Page>
				<Card>
					<Headline type='h2'>Top-200</Headline>
					<Select
						action={this.gameOnChange}
						list={games}
						name='games'
						title='Select a mini-game'
						value={currentGame}
					/>
					<ul>
						{players.map(player => (
							<li key={player.index}>
								{player.humanIndex}. {player.username}
							</li>
						))}
					</ul>
				</Card>
			</Page>
		);
	};
};

export default Top;
