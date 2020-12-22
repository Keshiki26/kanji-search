import React from 'react';
import Kanji from './Kanji';
import Typography from '@material-ui/core/Typography';
import { useLocation, Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

export default function ListAllKanji(props) {
	return Kanji.map((kanji) => {
		return (
			<Grid item container xs={11} justify="center">
				<Grid
					item
					xs={3}
					container
					justify="flex-start"
					className="displaylistof"
					alignContent="center"
				>
					<Typography variant="h1" className="listofkanjikanji">
						<Link to={`/search?kanji=${kanji.kanji}`}>{kanji.kanji}</Link>
					</Typography>
				</Grid>
				<Grid item xs={9} className="listmeaning">
					<Typography variant="subtitle2">meaning:</Typography>
					<Typography variant="h4" color="secondary">
						{kanji.english}
					</Typography>
				</Grid>
			</Grid>
		);
	});
}
