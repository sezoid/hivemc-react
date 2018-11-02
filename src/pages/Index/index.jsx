import React, { Component, lazy, Suspense } from 'react';

// Components
import Page from '../_page';
import { Card, Headline, Search } from '@hivemc/components';

// Styles
import './index.sass';

// Utils
import * as Lang from '../../lang';

// Lazy loading...
const Profile = lazy(() => import('./blocks/Profile'));
const InGame = lazy(() => import('./blocks/InGame'));

const API = 'https://api.hivemc.com/v1';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentGame: '',
			games: [],
			error: false,
			profile: {},
			profileGame: {},
			username: '',
		};
	};

	componentWillMount() {
		fetch(`${API}/game`)
			.then(response => response.json())
			.then(data => this.setState({ currentGame: Object.keys(data)[0], games: data }))
			.catch(error => this.setState({ error: true }));
	};

	checkStats = async (event) => {
		event.preventDefault();
		const { username } = this.state;

		await fetch(`${API}/player/${username}`)
			.then(response => response.json())
			.then(userdata => this.setState({ profile: userdata }))
			.catch(error => this.setState({ error: true }));

		await this.checkGameStats();
	};

	handleOnChange = async (event) => {
		await this.setState({username: event.target.value});
	};

	gameOnChange = async (event) => {
		await this.setState({ currentGame: event.target.value });
		await this.checkGameStats();
	};

	async checkGameStats() {
		const { currentGame, username } = this.state;
		await fetch(`${API}/player/${username}/${currentGame}`)
			.then(response => response.json())
			.then(data => this.setState({ profileGame: data }))
			.catch(error => this.setState({ error: true }));
	}

	render() {
		const { currentGame, games, profile, profileGame, username } = this.state;
		return (
			<Page>
				<Search action={this.checkStats} onChange={this.handleOnChange} placeholder={Lang.en.enter_username} value={username} />
				{Object.keys(profile).length > 0 ? (
					<>
						<Card style={{'margin': '99px 15px 15px 15px'}}>
							<Suspense fallback={<Headline type='h2'>{Lang.en.loading}</Headline>}>
								<Profile { ...profile } />
							</Suspense>
						</Card>
						<Card>
							<Suspense fallback={<Headline type='h2'>{Lang.en.loading}</Headline>}>
								<InGame action={this.gameOnChange} data={profileGame} list={games} value={currentGame} />
							</Suspense>
						</Card>
					</>
				) : null}
			</Page>
		);
	};
};

Index.displayName = 'Index';
export default Index;
