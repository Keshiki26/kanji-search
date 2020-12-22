import React, { useState } from 'react';
import Kanji from './Kanji';
import { useLocation, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Divider, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function KanjiDisplay(props) {
	const query = new URLSearchParams(useLocation().search);
	const [linksView, setLinksView] = useState(false);

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
				xs={11}
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
					Nothing found :(
				</Typography>
				<Typography variant="h6" className="errMsgSub">
					Remember, in your search term:
					<br />　
					<i className="errMsgSub2">
						use only a single <strong>Kanji</strong>
					</i>
				</Typography>
			</Grid>
		);
	} else {
		const kanji = foundKanji[0];

		return (
			<Grid
				item
				container
				xs={11}
				spacing={4}
				justify="center"
				alignContent="center"
				className="displaycontain"
			>
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
							{kanji.kanji}
						</a>
					</Typography>
				</Grid>
				<Grid
					item
					container
					justify="center"
					alignContent="center"
					className="rightmeaning"
					spacing={4}
					xs={12}
					sm={6}
					a
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
					<Grid xs={12} item className="wordcontainer">
						<Typography variant="h4" color="initial">
							Onyomi:　
						</Typography>
						{kanji.onyomi.map((o) => {
							return (
								<Typography variant="h5" className="ony" color="secondary">
									{o}
								</Typography>
							);
						})}
					</Grid>
					<Grid item xs={12} className="wordcontainer">
						<Typography variant="h4" color="initial">
							Kunyomi:　
						</Typography>
						{kanji.kunyomi.map((k) => {
							const seperateK = k.split(' ');
							console.log(seperateK);
							return (
								<Grid item direction="row" container>
									{seperateK.map((kk, index) => {
										return (
											<Typography variant="h5" className={`kunyomi${index}`}>
												{kk}
											</Typography>
										);
									})}
								</Grid>
							);
						})}
					</Grid>
				</Grid>
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
						<Typography className="captionWord" variant="caption">
							click the word to find out more
						</Typography>
					</Grid>
					{kanji.words.map((word) => {
						return (
							<Grid
								item
								xs={12}
								lg={5}
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
									<Typography variant="h1" className="meaning ">
										<a
											target="_blank"
											href={`https://tangorin.com/words?search=${word.word}`}
										>
											{word.word}
										</a>
									</Typography>
									<Typography variant="h5">{word.hiragana}</Typography>
								</Grid>
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
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		);
	}
}

export default KanjiDisplay;
