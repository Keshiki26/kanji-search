import React from 'react';
import SearchBar from './SearchBar';
import KanjiDisplay from './KanjiDisplay';
import './App.css';
import { Grid, Typography } from '@material-ui/core';
import ListAllKanji from './ListAllKanji';
import { Route } from 'react-router-dom';

class App extends React.Component {
	state = {
		searchTerm: '',
		practicemode: false,
	};
	onSearch = (term) => {
		this.setState({ searchTerm: term });
	};
	changePractice = () => {
		this.setState({ practicemode: !this.state.practicemode });
		console.log(this.state.practicemode);
	};
	render() {
		return (
			<Grid
				container
				alignContent="center"
				justify="center"
				className="rootcontainer"
			>
				<Grid container justify="center" className="search" item>
					<SearchBar
						onSearchTerm={this.onSearch}
						changePractice={this.changePractice}
						practiceMode={this.state.practicemode}
					/>
				</Grid>
				<Grid
					item
					container
					className="displayContainer"
					justify="center"
					alignContent="flex-start"
					xs={12}
				>
					<Route path="/search">
						<KanjiDisplay searchTerm={this.state.searchTerm} />
					</Route>

					<Route exact path="/">
						<Grid
							item
							container
							xs={12}
							justify="center"
							className="allheading"
						>
							<Typography className="allheadingtext">All Kanji</Typography>
						</Grid>
						<ListAllKanji practiceMode={this.state.practicemode} />
					</Route>
				</Grid>
			</Grid>
		);
	}
}

export default App;
