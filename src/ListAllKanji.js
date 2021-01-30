import React from 'react';
import Kanji from './Kanji';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Draggable } from 'react-drag-reorder';

export default function ListAllKanji(props) {
	const K = [...Kanji];

	return K.map((kanji, index) => {
		return (
			<Grid
				key={kanji.kanji}
				item
				container
				xs={12}
				justify="center"
				spacing={4}
				className="alllistcont"
			>
				<Grid
					item
					xs={3}
					container
					justify="flex-start"
					className="displaylistof"
					alignContent="center"
				>
					<Typography className="defin"> {index + 1}</Typography>
					<Typography variant="h1" className="listofkanjikanji">
						<Link to={`/search?kanji=${kanji.kanji}`}>{kanji.kanji}</Link>
					</Typography>
				</Grid>
				{console.log(props.practiceMode)}
				{!props.practiceMode && (
					<Grid item xs={9} className="listmeaning">
						<Typography variant="subtitle2">meaning:</Typography>
						<Typography variant="h5" color="secondary">
							{kanji.english}
						</Typography>
					</Grid>
				)}
			</Grid>
		);
	});
}
