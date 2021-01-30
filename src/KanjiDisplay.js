import React, { useState } from 'react';
import Kanji from './Kanji';
import { useLocation, Link, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Grid, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CasinoIcon from '@material-ui/icons/Casino';
import * as wanakana from 'wanakana';

function KanjiDisplay(props) {
	const query = new URLSearchParams(useLocation().search);
	let history = useHistory();
	const [linksView, setLinksView] = useState(false);
	const [meaningHide, setMeaningHide] = useState(true);
	const [definitionHide, setDefinitionHide] = useState(true);

	const foundKanji = Kanji.filter((kanji) => {
		if (kanji.kanji === query.get('kanji')) {
			return kanji;
		}
	});
	if (foundKanji.length === 0) {
		return (
			<Grid
				container
				item
				xs={10}
				className="errMsg"
				direction="column"
				justify="center"
				alignContent="center"
			>
				<Typography variant="h6" color="textSecondary" className="errMsgSub">
					<i className="errMsgSub2">
						<strong>残念 ... </strong>
					</i>
					何も見つからなかった！
				</Typography>
				<Typography className="errMsgHeader" variant="h1">
					Nothing found for
					<Typography variant="h3">
						<strong>
							<i>{query.get('kanji')}</i>
						</strong>
					</Typography>
				</Typography>
				<Typography variant="h6" className="errMsgSub">
					<i className="errMsgSub2">Please try a different search query!</i>
				</Typography>
				<Typography variant="body1" className="errMsgSub2">
					...or here are some links with your query on:
				</Typography>
				<Typography>
					<a
						target="_blank"
						href={`https://tangorin.com/words?search=${query.get('kanji')}`}
					>
						tangorin
					</a>
				</Typography>
				<Typography>
					<a
						target="_blank"
						href={`http://www.kanjidamage.com/kanji/search?utf8=%E2%9C%93&q=${query.get(
							'kanji'
						)}`}
					>
						kanji damage
					</a>
				</Typography>
				<Typography>
					<a
						target="_blank"
						href={`https://translate.google.com/?sl=ja&tl=en&text=${query.get(
							'kanji'
						)}&op=translate`}
					>
						google translate
					</a>
				</Typography>
			</Grid>
		);
	} else {
		const kanji = foundKanji[0];

		return (
			<Grid
				item
				container
				xs={12}
				md={9}
				spacing={4}
				justify="center"
				alignContent="center"
				className="displaycontain"
			>
				<Grid item xs={12} className="toparrowstuff" container justify="center">
					<Typography variant="body1" className="resultsFor">
						{/* Results for: {query.get('kanji') || props.searchTerm} */}
						<ArrowBackIosIcon
							className="arrows"
							onClick={() => {
								const found = Kanji.findIndex((k) => k.kanji === kanji.kanji);
								const newFound = found === 0 ? Kanji.length - 1 : found - 1;
								history.push(`search?kanji=${Kanji[newFound].kanji}`);
							}}
						></ArrowBackIosIcon>
						<CasinoIcon
							fontSize="large"
							onClick={() => {
								const randomNum = Math.floor(Math.random() * Kanji.length);
								history.push(`search?kanji=${Kanji[randomNum].kanji}`);
							}}
							className="dice"
						/>
						<ArrowForwardIosIcon
							className="arrows"
							onClick={() => {
								const found = Kanji.findIndex((k) => k.kanji === kanji.kanji);
								const newFound = found + 1 === Kanji.length ? 0 : found + 1;
								history.push(`search?kanji=${Kanji[newFound].kanji}`);
							}}
						></ArrowForwardIosIcon>
					</Typography>
				</Grid>
				<Grid item xs={12} className="topresultsfor">
					<Typography variant="body1" className="resultsFor">
						Results for: {query.get('kanji') || props.searchTerm}
						<AddIcon
							className="linksOpenClose"
							onClick={() => {
								linksView ? setLinksView(false) : setLinksView(true);
							}}
						>
							+
						</AddIcon>
					</Typography>

					{linksView && (
						<Grid item xs={12}>
							<Typography variant="body1" color="secondary">
								Links:
							</Typography>
							<Typography>
								<a
									target="_blank"
									href={`https://tangorin.com/words?search=${kanji.kanji}`}
								>
									tangorin
								</a>
							</Typography>
							<Typography>
								<a
									target="_blank"
									href={`http://www.kanjidamage.com/kanji/search?utf8=%E2%9C%93&q=${kanji.kanji}`}
								>
									kanji damage
								</a>
							</Typography>
							<Typography>
								<a
									target="_blank"
									href={`https://translate.google.com/?sl=ja&tl=en&text=${kanji.kanji}&op=translate`}
								>
									google translate
								</a>
							</Typography>
						</Grid>
					)}
				</Grid>
				<Grid item xs={12} justify="center" alignContent="center" container>
					{definitionHide ? (
						<IconButton onClick={() => setDefinitionHide(false)}>
							<Typography className="defin">Definition Hidden</Typography>
							<ToggleOnIcon fontSize="large" color="secondary" />
						</IconButton>
					) : (
						<IconButton onClick={() => setDefinitionHide(true)}>
							<ToggleOffIcon fontSize="large" className="meaningHideFalse" />
						</IconButton>
					)}
				</Grid>

				<Grid
					item
					xs={12}
					sm={6}
					container
					className="largeKanjiDisplay"
					justify="center"
					alignContent="center"
				>
					<Typography variant="h1" className="largeKanjiDisplay-text meaning">
						<a
							target="_blank"
							href={`https://tangorin.com/words?search=${kanji.kanji}`}
						>
							<Typography variant="subtitle1" className="numberK">
								{Kanji.findIndex((k) => kanji === k) + 1}
							</Typography>
							{kanji.kanji}
						</a>
					</Typography>
				</Grid>
				{!definitionHide && (
					<Grid
						item
						container
						justify="center"
						alignContent="center"
						className="rightmeaning"
						spacing={4}
						xs={12}
						sm={6}
					>
						<Grid
							item
							xs={12}
							container
							direction="column"
							className="Kanji-heading wordcontainer"
						>
							<Typography variant="subtitle2">meaning:</Typography>
							<Typography
								variant="h4"
								color="secondary"
								className="meaningEnglish"
							>
								{kanji.english}
							</Typography>
						</Grid>
						{kanji.onyomi.length > 0 && (
							<Grid xs={12} item className="wordcontainer">
								<Typography variant="h4" color="initial">
									Onyomi:　
								</Typography>
								{kanji.onyomi.map((o, index) => {
									return (
										<Typography
											key={index}
											variant="h5"
											className="ony"
											color="secondary"
										>
											{o}
											<br />
											{wanakana.toKana(o)}
										</Typography>
									);
								})}
							</Grid>
						)}

						{kanji.kunyomi.length > 0 && (
							<Grid item xs={12} className="wordcontainer">
								<Typography variant="h4" color="initial">
									Kunyomi:　
								</Typography>

								{kanji.kunyomi.map((k, ii) => {
									const seperateK = k.split(' ');
									return (
										<Grid key={ii} item direction="row" container>
											{seperateK.map((kk, index) => {
												return (
													<Typography
														key={index}
														variant="h5"
														className={`kunyomi${index}`}
													>
														{kk}
													</Typography>
												);
											})}
										</Grid>
									);
								})}
							</Grid>
						)}
					</Grid>
				)}
				<Grid
					item
					container
					xs={12}
					alignContent="center"
					spacing={4}
					justify="center"
					className="KanjiWords"
				>
					<Grid
						item
						xs={12}
						container
						justify="center"
						alignContent="center"
						direction="column"
						className="wordstitle wordEach"
					>
						<Typography variant="h4" color="initial">
							Words
						</Typography>
						{meaningHide ? (
							<IconButton onClick={() => setMeaningHide(false)}>
								<Typography className="defin">Meaning Hidden</Typography>
								<ToggleOnIcon fontSize="large" color="secondary"></ToggleOnIcon>
							</IconButton>
						) : (
							<IconButton onClick={() => setMeaningHide(true)}>
								<ToggleOffIcon fontSize="large" className="meaningHideFalse" />
							</IconButton>
						)}

						<Typography className="captionWord" variant="caption">
							click the word to find out more
						</Typography>
					</Grid>
					{kanji.words.map((word, index) => {
						return (
							<Grid
								item
								xs={12}
								lg={5}
								key={index}
								container
								justify="center"
								className="wordcontainer"
							>
								<Grid
									item
									xs={12}
									sm={7}
									container
									className="wordp1"
									direction="column"
								>
									<Typography variant="h4" className="meaning ">
										<a
											target="_blank"
											href={`https://tangorin.com/words?search=${word.word}`}
										>
											{word.word}
										</a>
									</Typography>
									{!meaningHide && (
										<Typography variant="h5">{word.hiragana}</Typography>
									)}
								</Grid>
								{!meaningHide && (
									<Grid
										item
										xs={12}
										sm={5}
										container
										direction="column"
										className="meaningWord"
									>
										<Typography variant="h5" color="initial">
											Meaning:
										</Typography>
										<Typography variant="h5" color="secondary">
											{word.meaning}
										</Typography>
									</Grid>
								)}
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		);
	}
}

export default KanjiDisplay;
