import React from 'react';
import SearchBar from './SearchBar';
import KanjiDisplay from './KanjiDisplay';
import './App.css';
import { Grid } from '@material-ui/core';
import ListAllKanji from './ListAllKanji';
import { Route } from 'react-router-dom';

class App extends React.Component {
	state = {
		searchTerm: '',
	};
	onSearch = (term) => {
		this.setState({ searchTerm: term });
	};

	render() {
		return (
			<Grid
				container
				align-items="center"
				spacing={4}
				className="rootcontainer"
			>
				<Grid container justify="center" className="search" item xs={12}>
					<SearchBar onSearchTerm={this.onSearch} />
				</Grid>
				<Grid
					item
					container
					className="displayContainer"
					justify="center"
					xs={12}
				>
					<Route path="/search">
						<KanjiDisplay searchTerm={this.state.searchTerm} />
					</Route>

					<Route exact path="/">
						<ListAllKanji />
					</Route>
				</Grid>
			</Grid>
		);
	}
}

export default App;
