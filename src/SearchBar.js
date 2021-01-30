import React, { useState } from 'react';
import Kanji from './Kanji';
import {
	Grid,
	InputAdornment,
	TextField,
	Typography,
	IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, Link, Route, useLocation } from 'react-router-dom';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import * as wanakana from 'wanakana';

export default function SearchBar(props) {
	const query = new URLSearchParams(useLocation().search);
	const [term, setTerm] = useState('');
	const [searchFocus, setSearchFocus] = useState(false);
	let history = useHistory();

	return (
		<Grid
			item
			xs={11}
			container
			spacing={3}
			justify="center"
			direction="row"
			className="searchBar-main"
		>
			<Route exact path="/">
				<Grid
					item
					xs={1}
					sm={1}
					container
					justify="center"
					alignContent="flex-start"
					Z
				>
					<IconButton onClick={() => props.changePractice()}>
						{props.practiceMode ? (
							<ToggleOnIcon fontSize="large" color="secondary" />
						) : (
							<ToggleOffIcon fontSize="large" />
						)}
					</IconButton>
				</Grid>
			</Route>

			<Grid item xs={11} sm={2} container justify="center">
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
						onFocus={() => setSearchFocus(true)}
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
					></TextField>
					<Grid className="searchResults">
						{searchFocus &&
							Kanji.map((kanji, key) => {
								if (
									term !== '' &&
									(term.includes(kanji.kanji) ||
										//search for english definition
										kanji.english.includes(term.toLowerCase()) ||
										//search for the index number that the kanji is
										(key + 1).toString().includes(term) ||
										//search for the onyomi in both katakana and romanji
										kanji.onyomi.some((o) => {
											if (
												wanakana.toKatakana(o).includes(term) ||
												o.includes(term.toUpperCase())
											) {
												return true;
											}
										}) ||
										//search for the kunyomi in both hiragana and romaji
										kanji.kunyomi.some((k) => {
											const kk = k.replace('＊', '');
											console.log(wanakana.toRomaji(kk));
											if (
												wanakana.toRomaji(kk).includes(term.toLowerCase()) ||
												kk.includes(term)
											) {
												return true;
											}
										}))
								) {
									return (
										<Link
											key={key}
											to={`/search?kanji=${kanji.kanji}`}
											onClick={() => setTerm('')}
											className="searchL"
										>
											<Typography
												variant="h6"
												className="searchLinks"
												color={
													// query.get('kanji') === kanji.kanji
													// 	? 'secondary'
													// 	: 'initial'
													'initial'
												}
											>
												{Kanji.indexOf(kanji) + 1}. {kanji.kanji} -{' '}
												{kanji.english}
											</Typography>
										</Link>
									);
								}
							})}
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
}
