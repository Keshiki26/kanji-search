import React, { useState } from 'react';
import {
	AppBar,
	Grid,
	InputAdornment,
	TextField,
	Toolbar,
	Typography,
	IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

export default function SearchBar(props) {
	const [term, setTerm] = useState('');
	let history = useHistory();

	return (
		<Grid
			item
			xs={11}
			container
			justify="center"
			direction="row"
			className="searchBar-main"
		>
			<Grid item xs={12} sm={3} container justify="center">
				<Link to="/">
					<IconButton className="nopadmar">
						<img src="風.png" alt="kaze" className="logo" />
						mykanji
					</IconButton>
				</Link>
			</Grid>
			<Grid item xs={12} container sm={9} alignContent="center">
				<form
					noValidate
					onSubmit={(e) => {
						e.preventDefault();
						history.push(`search?kanji=${term}`);
						props.onSearchTerm(term);
					}}
					className="searchBar-form"
				>
					<TextField
						label="Search"
						autoFocus
						color="secondary"
						className="searchBar-Bar"
						fullWidth
						value={term}
						variant="outlined"
						placeholder="Search Kanji..."
						onChange={(e) => {
							setTerm(e.target.value);
							props.onSearchTerm(term);
						}}
						size="small"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</form>
			</Grid>
		</Grid>
	);
}
