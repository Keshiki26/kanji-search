let kanji = [];

function Kanji(kanji, english, onyomi, kunyomi, words) {
	return { kanji, english, onyomi, kunyomi, words };
}
function Word(word, meaning, hiragana) {
	return { word, meaning, hiragana };
}
// 1 初
const 初 = new Kanji(
	'初',
	'first time; beginning',
	['SHO'],
	['はじ ＊ め', 'はじ ＊ めて'],
	[
		new Word('初', 'first; new', 'はつ'),
		new Word('初め', 'the first; at the beginning', 'はじめ'),
		new Word('最初', 'beginning; outset; first; onset', 'さいしょ'),
		new Word(
			'当初',
			'at first; at the beginning; initially; originally',
			'とうしょ'
		),
	]
);
kanji.push(初);

// 2 刀
const 刀 = new Kanji(
	'刀',
	'sword; saber',
	['TOU'],
	['かたな'],
	[new Word('刀', 'sword', 'かたな')]
);
kanji.push(刀);

// 3 剣
kanji.push({
	kanji: '剣',
	english: 'sword; blade; sabre',
	onyomi: ['KEN'],
	kunyomi: [],
	words: [
		{
			word: '剣',
			meaning: 'sword; blade',
			hiragana: 'けん',
		},
		{
			word: '真剣',
			meaning: 'serious; earnest;',
			hiragana: 'しんけん',
		},
		{
			word: '剣士',
			meaning: 'swordsman; swordswoman',
			hiragana: 'けんし',
		},
	],
});
// 4 見
kanji.push({
	kanji: '見',
	english: 'see; idea; opinion; look at; find',
	onyomi: ['KEN'],
	kunyomi: ['み*る'],
	words: [
		{
			word: '見',
			meaning: 'looking; viewing',
			hiragana: 'み',
		},
		{
			word: '見方',
			meaning: 'viewpoint; point of view;',
			hiragana: 'みかた',
		},
		{
			word: '見',
			meaning: 'view (of life, etc.); outlook',
			hiragana: 'けん',
		},
		{
			word: '意見',
			meaning: 'opinion; view; comment',
			hiragana: 'いけん',
		},
		{
			word: '見つける',
			meaning: 'to discover; to find ',
			hiragana: 'みつける',
		},
	],
});
// 5 中
kanji.push({
	kanji: '中',
	english: 'in; inside; middle; mean; center',
	onyomi: ['CHUU'],
	kunyomi: ['なか'],
	words: [
		{
			word: '中',
			meaning: 'inside; in; within',
			hiragana: 'なか',
		},
		{
			word: '中央',
			meaning: '(physically) centre; (physically) middle; ',
			hiragana: 'ちゅうおう',
		},
		{
			word: '中心',
			meaning:
				'center (physically and metaphorically); centre; middle; heart; core;',
			hiragana: 'ちゅうしん',
		},
		{
			word: '中間',
			meaning: 'middle; midway; interim',
			hiragana: 'ちゅうかん',
		},
	],
});
// 6 内
kanji.push({
	kanji: '内',
	english: 'inside; within; between; among; house; home',
	onyomi: ['NAI'],
	kunyomi: ['うち'],
	words: [
		{
			word: '内',
			meaning: 'inside; within;',
			hiragana: 'うち',
		},
		{
			word: '案内',
			meaning: 'guide; leading (the way); showing around',
			hiragana: 'あんない',
		},
		{
			word: '以内',
			meaning: 'within (as in "within 10 hours"); ',
			hiragana: 'いない',
		},
	],
});
// 7 国
kanji.push({
	kanji: '国',
	english: 'country; state',
	onyomi: ['KOKU'],
	kunyomi: ['くに'],
	words: [
		{
			word: '国',
			meaning: 'inside; within;',
			hiragana: 'うち',
		},
		{
			word: '天国',
			meaning: 'heaven',
			hiragana: 'てんごく',
		},
		{
			word: '全国',
			meaning: 'nationwide; national',
			hiragana: 'ぜんこく',
		},
	],
});
// 8 来
kanji.push({
	kanji: '来',
	english: 'come; next; future;',
	onyomi: ['RAI'],
	kunyomi: ['く＊る'],
	words: [
		{
			word: '来る',
			meaning: 'come',
			hiragana: 'くる',
		},
		{
			word: '来年',
			meaning: 'next year',
			hiragana: 'らいねん',
		},
		{
			word: '未来',
			meaning: 'future',
			hiragana: 'みらい',
		},
	],
});
// 9 増
kanji.push({
	kanji: '増',
	english: 'increase; add;',
	onyomi: ['ZOU'],
	kunyomi: ['ふ＊える'],
	words: [
		{
			word: '増える',
			meaning: 'increase',
			hiragana: 'ふえる',
		},
		{
			word: '急増',
			meaning: 'rapid increase',
			hiragana: 'きゅうぞう',
		},
	],
});
// 10 多
kanji.push({
	kanji: '多',
	english: 'many; frequent; much',
	onyomi: ['TA'],
	kunyomi: ['おお＊い'],
	words: [
		{
			word: '多い',
			meaning: 'many; a lot',
			hiragana: 'おおい',
		},
		{
			word: '多分',
			meaning: 'maybe; probably',
			hiragana: 'たぶん',
		},
	],
});
// 11 未
kanji.push({
	kanji: '未',
	english: 'even now; not yet',
	onyomi: ['MI'],
	kunyomi: ['ま＊だ'],
	words: [
		{
			word: '未だ',
			meaning: 'many; a lot',
			hiragana: 'おおい',
		},
		{
			word: '未来',
			meaning: 'future',
			hiragana: 'みらい',
		},
	],
});
// 12 査
kanji.push({
	kanji: '査',
	english: 'inspect',
	onyomi: ['SA'],
	kunyomi: [],
	words: [
		{
			word: '検査',
			meaning: 'inspection',
			hiragana: 'けんさ',
		},
	],
});
// 13 減
kanji.push({
	kanji: '減',
	english: 'decrease',
	onyomi: ['GEN'],
	kunyomi: ['へ＊る'],
	words: [
		{
			word: '減る',
			meaning: 'decreases',
			hiragana: 'へる',
		},
		{
			word: 'いい加減にしろ！',
			meaning: 'cut it out!',
			hiragana: 'いいかげんにしろ!',
		},
		{
			word: 'いい加減',
			meaning:
				'halfhearted; vague or reasonable; moderate (in suggestions or orders ➜ いい加減にする) or considerably; quite; rather;',
			hiragana: 'いいかげんにしろ!',
		},
	],
});
// 14 以
kanji.push({
	kanji: '以',
	english: 'since; compared to',
	onyomi: ['i'],
	kunyomi: [],
	words: [
		{
			word: '以来',
			meaning: 'since; henceforth',
			hiragana: 'いらい',
		},
		{
			word: '以内',
			meaning: 'within (as in "within 10 hours"); ',
			hiragana: 'いない',
		},
		{
			word: '以上',
			meaning: 'this is all; more than',
			hiragana: 'いじょう',
		},
		{
			word: '以前',
			meaning: 'ago; in the past; since; before; previous',
			hiragana: 'いぜん',
		},
		{
			word: '以下',
			meaning: 'below; under; not exceeding',
			hiragana: 'いか',
		},
	],
});
// 15 前
kanji.push({
	kanji: '前',
	english: 'before; in front',
	onyomi: ['ZEN'],
	kunyomi: ['まえ'],
	words: [
		{
			word: '前',
			meaning: 'ago; before (some event); previously;',
			hiragana: 'まえ',
		},
		{
			word: '前半',
			meaning: 'first half',
			hiragana: 'ぜんはん',
		},
		{
			word: '前回',
			meaning: 'previous time; last time;',
			hiragana: 'ぜんかい',
		},
	],
});
// 16 全
kanji.push({
	kanji: '全',
	english: 'whole; entire; all; ',
	onyomi: ['ZEN'],
	kunyomi: ['まった＊く'],
	words: [
		{
			word: '全く',
			meaning: 'really; truly; good grief',
			hiragana: 'まったく',
		},
		{
			word: '全て',
			meaning: 'everything; all; entirely',
			hiragana: 'すべて',
		},
		{
			word: '安全',
			meaning: 'safety; security',
			hiragana: 'あんぜん',
		},
		{
			word: '全部',
			meaning: 'all; entire; whole; altogether',
			hiragana: 'ぜんぶ',
		},
		{
			word: '全然',
			meaning: 'not at all; wholly; entirely;',
			hiragana: 'ぜんぜん',
		},
	],
});
// 17 足
kanji.push({
	kanji: '足',
	english: 'leg; add; be sufficient;',
	onyomi: ['SOKU'],
	kunyomi: ['あし', 'た＊りる'],
	words: [
		{
			word: '足りる',
			meaning: 'to be sufficient; to be enough',
			hiragana: 'たりる',
		},
		{
			word: '足す',
			meaning: 'to add (numbers); to add (something)',
			hiragana: 'たす',
		},
		{
			word: '足',
			meaning: 'foot;',
			hiragana: 'あし',
		},
		{
			word: '満足',
			meaning: 'satisfaction; contentment;',
			hiragana: 'まんぞく',
		},
		{
			word: '不足',
			meaning: 'insufficiency; shortage;',
			hiragana: 'ふそく',
		},
	],
});
// 18 節
kanji.push({
	kanji: '節',
	english: 'season; period; occasion; ',
	onyomi: ['SETSU'],
	kunyomi: [],
	words: [
		{
			word: '季節',
			meaning: 'season',
			hiragana: 'きせつ',
		},
	],
});
// 19 部
kanji.push({
	kanji: '部',
	english: 'section',
	onyomi: ['BU'],
	kunyomi: ['ぶ'],
	words: [
		{
			word: '部分',
			meaning: 'portion; section; part',
			hiragana: 'ぶぶん',
		},
		{
			word: '本部',
			meaning: 'headquarters; head office; main office',
			hiragana: 'ほんぶ',
		},
		{
			word: '全部',
			meaning: 'all of it',
			hiragana: 'ぜんぶ',
		},
		{
			word: '部屋',
			meaning: 'room',
			hiragana: 'へや',
		},
	],
});
// 20 船
kanji.push({
	kanji: '船',
	english: 'ship; boat',
	onyomi: ['SEN'],
	kunyomi: ['ふね'],
	words: [
		{
			word: '船',
			meaning: 'ship; boat',
			hiragana: 'ふね',
		},
		{
			word: '船長',
			meaning: "ship's captain",
			hiragana: 'せんちょう',
		},
		{
			word: '風船',
			meaning: 'balloon',
			hiragana: 'ふうせん',
		},
	],
});
// 21 渋
kanji.push({
	kanji: '渋',
	english: 'acidic; bitter; hesitate',
	onyomi: ['JUU'],
	kunyomi: ['しぶ＊い', 'しぶ＊る'],
	words: [
		{
			word: '渋い',
			meaning: 'bitter;',
			hiragana: 'しぶい',
		},
		{
			word: '渋る',
			meaning: 'to hesitate; to hold back',
			hiragana: 'しぶる',
		},
		{
			word: '渋滞',
			meaning: 'congestion (e.g. traffic); delay',
			hiragana: 'じゅうたい',
		},
	],
});
// 22 充
kanji.push({
	kanji: '充',
	english: 'fill',
	onyomi: ['JUU'],
	kunyomi: [],
	words: [
		{
			word: '充実',
			meaning: 'fullfilling;',
			hiragana: 'じゅうじつ',
		},
		{
			word: '充分',
			meaning: 'enough; sufficient',
			hiragana: 'じゅうぶん',
		},
	],
});
// 23 鳥
kanji.push({
	kanji: '鳥',
	english: 'bird; chicken',
	onyomi: ['CHOU'],
	kunyomi: ['とり'],
	words: [
		{
			word: '鳥',
			meaning: 'bird; bird meat (chicken meat)',
			hiragana: 'とり',
		},
		{
			word: '鳥人',
			meaning: 'birdman; aviator; flying ace',
			hiragana: 'ちょうじん',
		},
	],
});
// 24 馬
kanji.push({
	kanji: '馬',
	english: 'horse',
	onyomi: ['BA'],
	kunyomi: ['うま'],
	words: [
		{
			word: '馬',
			meaning: 'horse',
			hiragana: 'うま',
		},
		{
			word: '馬鹿',
			meaning: 'stupiiiid',
			hiragana: 'バカ',
		},
	],
});
// 25 軽
kanji.push({
	kanji: '軽',
	english: 'light',
	onyomi: ['KEI'],
	kunyomi: ['かる＊い'],
	words: [
		{
			word: '軽い',
			meaning: 'light; carefree; mild',
			hiragana: 'かるい',
		},
		{
			word: '軽減',
			meaning: 'reduction; decreasing',
			hiragana: 'けいげん',
		},
	],
});
// 26 造
kanji.push({
	kanji: '造',
	english: 'to make / to manufacture (large things such as made in a factory)',
	onyomi: ['ZOU'],
	kunyomi: ['つく＊る'],
	words: [
		{
			word: '造る',
			meaning: 'create; make',
			hiragana: 'つくる',
		},
		{
			word: '造船',
			meaning: 'shipbuilding',
			hiragana: 'ぞうせん',
		},
	],
});
// 27 象
kanji.push({
	kanji: '象',
	english: 'elephant; phenomenon',
	onyomi: ['SHOU'],
	kunyomi: ['ぞう'],
	words: [
		{
			word: '象',
			meaning: 'elephant',
			hiragana: 'ぞう',
		},
		{
			word: '印象',
			meaning: 'impression',
			hiragana: 'いんしょう',
		},
		{
			word: '象徴',
			meaning: 'symbol',
			hiragana: 'しょうちょう',
		},
	],
});
// 28 牛
kanji.push({
	kanji: '牛',
	english: 'cow',
	onyomi: ['GYUU'],
	kunyomi: ['うし'],
	words: [
		{
			word: '牛',
			meaning: 'cow',
			hiragana: 'うし',
		},
		{
			word: '牛肉',
			meaning: 'beef (cow meat)',
			hiragana: 'ぎゅうにく',
		},
	],
});
// 29 物
kanji.push({
	kanji: '物',
	english: 'thing; object; matter',
	onyomi: ['BUTSU', 'MOTSU'],
	kunyomi: ['もの'],
	words: [
		{
			word: '物',
			meaning: 'thing; object; article; stuff; substance',
			hiragana: 'もの',
		},
		{
			word: '物語',
			meaning: 'tale; story; legend',
			hiragana: 'ものがたり',
		},
		{
			word: '動物',
			meaning: 'animal',
			hiragana: 'どうぶつ',
		},
		{
			word: '怪物',
			meaning: 'monster',
			hiragana: 'かいぶつ',
		},
		{
			word: '荷物',
			meaning: 'luggage',
			hiragana: 'にもつ',
		},
	],
});
// 30 怪
kanji.push({
	kanji: '怪',
	english: 'suspicious; mystery',
	onyomi: ['KAI'],
	kunyomi: ['あや＊しい'],
	words: [
		{
			word: '怪しい',
			meaning: 'suspicious; dubious',
			hiragana: 'あやしい',
		},
		{
			word: '怪物',
			meaning: 'monster',
			hiragana: 'かいぶつ',
		},

		{
			word: '怪談',
			meaning: 'ghost story',
			hiragana: 'かいだん',
		},
	],
});
// 31 羽
kanji.push({
	kanji: '羽',
	english: 'feathers; counter for birds, rabbits',
	onyomi: [],
	kunyomi: ['はね'],
	words: [
		{
			word: '羽',
			meaning: 'feathers',
			hiragana: 'はね',
		},
		{
			word: '羽',
			meaning: 'counter for birds and rabbits',
			hiragana: 'わ',
		},
	],
});
// 32 談
kanji.push({
	kanji: '談',
	english: 'discuss; talk; consult',
	onyomi: ['DAN'],
	kunyomi: [],
	words: [
		{
			word: '会談',
			meaning: 'discussion; conference; interview ',
			hiragana: 'かいだん',
		},
		{
			word: '相談',
			meaning: 'consultation; discussion',
			hiragana: 'そうだん',
		},
		{
			word: '怪談',
			meaning: 'ghost story',
			hiragana: 'かいだん',
		},
	],
});
// 33 相
kanji.push({
	kanji: '相',
	english: 'partner; together; each other',
	onyomi: ['SOU'],
	kunyomi: ['あい'],
	words: [
		{
			word: '相手',
			meaning:
				'companion; opponent/match(sports etc); partner (all can be in conversation, tennis, or anything else however temporary)',
			hiragana: 'あいて',
		},
		{
			word: '相談',
			meaning: 'consultation; discussion',
			hiragana: 'そうだん',
		},
		{
			word: '相互',
			meaning: 'mutual; reciprocal',
			hiragana: 'そうご',
		},
	],
});
// 34 紙
kanji.push({
	kanji: '紙',
	english: 'paper',
	onyomi: ['SHI'],
	kunyomi: ['かみ'],
	words: [
		{
			word: '紙',
			meaning: 'paper',
			hiragana: 'かみ',
		},
		{
			word: '手紙',
			meaning: 'letter',
			hiragana: 'てがみ',
		},
		{
			word: '紙面',
			meaning: 'space on a page; surface of paper',
			hiragana: 'しめん',
		},
		{
			word: '紙幣',
			meaning: 'note; bill; paper money',
			hiragana: 'しへい',
		},
	],
});
// 35 杯
kanji.push({
	kanji: '杯',
	english: 'counter for cupfuls',
	onyomi: ['HAI'],
	kunyomi: [],
	words: [
		{
			word: '一杯',
			meaning: 'one cup-full',
			hiragana: 'いっぱい',
		},
		{
			word: '乾杯',
			meaning: 'cheers; toast',
			hiragana: 'かんぱい',
		},
		{
			word: '力一杯',
			meaning: "with all one's strength",
			hiragana: 'ちからいっぱい',
		},
	],
});
// 36 力
kanji.push({
	kanji: '力',
	english: 'power; strength; strong',
	onyomi: ['ROKU'],
	kunyomi: ['ちから'],
	words: [
		{
			word: '努力',
			meaning: 'effort',
			hiragana: 'どりょく',
		},
		{
			word: '勢力',
			meaning: 'force; strength; might',
			hiragana: 'せいりょく',
		},
		{
			word: '力',
			meaning: "with all one's strength",
			hiragana: 'ちから',
		},
		{
			word: '力一杯',
			meaning: "with all one's strength",
			hiragana: 'ちからいっぱい',
		},
	],
});
// 37 午
kanji.push({
	kanji: '午',
	english: 'noon',
	onyomi: ['GO'],
	kunyomi: [],
	words: [
		{
			word: '午後',
			meaning: 'afternoon; p.m.',
			hiragana: 'ごご',
		},
		{
			word: '午前',
			meaning: 'morning; a.m',
			hiragana: 'ごぜん',
		},
		{
			word: '正午',
			meaning: 'noon; mid-day',
			hiragana: 'しょうご',
		},
	],
});
// 38 始
kanji.push({
	kanji: '始',
	english: 'begin; start',
	onyomi: ['SHI'],
	kunyomi: ['はじ＊める'],
	words: [
		{
			word: '始まり',
			hiragana: 'はじまり',
			meaning: 'origin; start; beginning',
		},
		{
			word: '開始',
			meaning: 'start; commencement',
			hiragana: 'かいし',
		},
	],
});
// 39 闇
kanji.push({
	kanji: '闇',
	english: 'pitch-black darkness',
	onyomi: ['AN'],
	kunyomi: ['やみ'],
	words: [
		{
			word: '闇',
			meaning: 'darkness; the dark; dark',
			hiragana: 'やみ',
		},
		{
			word: '暗闇',
			meaning: 'darkness',
			hiragana: 'くらやみ',
		},
		{
			word: '闇夜',
			meaning: 'dark night',
			hiragana: 'あんや',
		},
	],
});
// 40 暗
kanji.push({
	kanji: '暗',
	english: 'dark',
	onyomi: ['AN'],
	kunyomi: ['くら＊い'],
	words: [
		{
			word: '暗い',
			meaning: 'dark',
			hiragana: 'くらい',
		},
		{
			word: '暗殺',
			meaning: 'assassination',
			hiragana: 'あんさつ',
		},
		{
			word: '暗記',
			meaning: 'memorization; memorisation; learning by heart',
			hiragana: 'あんき',
		},
		{
			word: '真っ暗',
			meaning: 'total darkness; pitch dark',
			hiragana: 'まっくら',
		},
	],
});

// 41 頭
const 頭 = new Kanji(
	'頭',
	'head',
	['TOU', 'ZU'],
	['あたま'],
	[
		new Word('頭', 'head', 'あたま'),
		new Word('頭痛', 'headache', 'ずつう'),
		new Word('先頭', 'lead; first', 'せんとう'),
		new Word('頭上', "overhead; above one's head; high in the sky", 'ずじょう'),
	]
);
kanji.push(頭);

// 42 恨
const 恨 = new Kanji(
	'恨',
	'hold a grudge',
	['KON'],
	['うら＊む'],
	[
		new Word('恨む', 'hold a grudge', 'うらむ'),
		new Word('痛恨', 'deep regret', 'つうこん'),
	]
);
kanji.push(恨);

// 43 問
const 問 = new Kanji(
	'問',
	'question; ask; problem',
	['MON'],
	['と＊う'],
	[
		new Word('問う', 'to ask; to inquire;', 'とう'),
		new Word('問題', 'problem', 'もんだい'),
		new Word('質問', 'question;', 'しつもん'),
	]
);
kanji.push(問);

// 44 痛
const 痛 = new Kanji(
	'痛',
	'pain; hurt',
	['TSUU'],
	['いた＊い'],
	[
		new Word('痛み', 'pain; ache', 'いたみ'),
		new Word('痛恨', 'deep regret', 'つうこん'),
		new Word('頭痛', 'headache', 'ずつう'),
	]
);
kanji.push(痛);

// 45 良
const 良 = new Kanji(
	'良',
	'good',
	['RYOU'],
	['よ＊い'],
	[
		new Word('良い', 'good', 'よい'),
		new Word('仲良し', 'close friend', 'なかよし'),
		new Word('不良', 'delinquent; bad', 'ふりょう'),
	]
);
kanji.push(良);

// 46 隠
const 隠 = new Kanji(
	'隠',
	'hide; conceal',
	['IN'],
	['かく＊す'],
	[
		new Word('隠す', 'hide', 'かくす'),
		new Word('隠居', 'retirement', 'いんきょ'),
	]
);
kanji.push(隠);

//47 居
const 居 = new Kanji(
	'居',
	'reside; to be; exist; live with',
	['KYO'],
	['い＊る'],
	[
		new Word('居', 'residence', 'きょ'),
		new Word('芝居', 'play; drama', 'しばい'),
		new Word('居る', 'to be; to exist', 'いる'),
		new Word('居間', 'living room', 'いま'),
	]
);
kanji.push(居);

// 48 予
const 予 = new Kanji(
	'予',
	'beforehand; previous',
	['YO'],
	[],
	[
		new Word('予定', 'plan', 'よてい'),
		new Word('予報', 'forecast, prediction', 'よほう'),
		new Word('予想', 'expectation', 'よそう'),
		new Word('予約', 'reservation; booking; contract', 'よやく'),
		new Word('予算', 'budget', 'よさん'),
	]
);
kanji.push(予);

// 49 語
const 語 = new Kanji(
	'語',
	'talk about; speech; language',
	['GO'],
	['かた＊る'],
	[
		new Word('語る', 'to talk about; to speak of', 'かたる'),
		new Word('物語', 'tale; story;', 'ものがたり'),
		new Word('英語', 'english(language)', 'えいご'),
		new Word('言語', 'language', 'げんご'),
	]
);
kanji.push(語);

// 50 英
const 英 = new Kanji(
	'英',
	'hero; english',
	['EI'],
	[],
	[
		new Word('英語', 'english(language)', 'えいご'),
		new Word('英雄', 'hero', 'えいゆう'),
	]
);
kanji.push(英);

// 51 会
const 会 = new Kanji(
	'会',
	'meeting; meet',
	['KAI'],
	['あ＊う'],
	[
		new Word('会った', 'to meet; to encounter', 'あった'),
		new Word('会談', 'discussion; conference', 'かいだん'),
		new Word('社会', 'society', 'しゃかい'),
		new Word('会社', 'company', 'かいしゃ'),
		new Word('会話', 'conversation', 'かいわ'),
	]
);
kanji.push(会);

// 52 傘
const 傘 = new Kanji(
	'傘',
	'umbrella',
	['SAN'],
	['かさ'],
	[
		new Word('傘', 'umbrella', 'かさ'),
		new Word('傘下', 'under jurisdiction of; under the umbrella of', 'さんか'),
	]
);
kanji.push(傘);

// 53 仲
const 仲 = new Kanji(
	'仲',
	'relationship',
	['CHUU'],
	['なか'],
	[
		new Word('仲良く', 'on good terms with; get along with', 'なかよく'),
		new Word('仲間', 'mate; colleague; comrade', 'なかま'),
		new Word('仲', 'relation; relationship', 'なか'),
	]
);
kanji.push(仲);

// 54 毎
const 毎 = new Kanji(
	'毎',
	'every',
	['MAI'],
	[],
	[
		new Word('毎日', 'every day', 'まいにち'),
		new Word('毎年', 'every year', 'まいとし'),
		new Word('毎月', 'every month', 'まいげつ'),
		new Word('毎週', 'every week', 'まいしゅう'),
		new Word('毎回', 'every time', 'まいかい'),
	]
);
kanji.push(毎);

// 55 週
const 週 = new Kanji(
	'週',
	'week',
	['SHUU'],
	[],
	[
		new Word('週', 'week', 'しゅう'),
		new Word('先週', 'last week; the week before', 'せんしゅう'),
		new Word('毎週', 'every week', 'まいしゅう'),
		new Word('今週', 'this week', 'こんしゅう'),
	]
);
kanji.push(週);

// 56 先
const 先 = new Kanji(
	'先',
	'before; ahead; previous',
	['SHUU'],
	['さき'],
	[
		new Word('先', 'previous; ahead', 'さき'),
		new Word('先生', 'teacher', 'せんせい'),
		new Word('先月', 'last month', 'せんげつ'),
		new Word('先週', 'last week', 'せんしゅう'),
	]
);
kanji.push(先);

// 57 外
const 外 = new Kanji(
	'外',
	'outside',
	['GAI'],
	['そと', 'はず‘＊れ'],
	[
		new Word('外れ', 'to miss (like a shot)', 'はずれ'),
		new Word('外', 'outside', 'そと'),
		new Word('外人', 'foreigner', 'がいじん'),
		new Word('以外', 'other than xxx / except for xxx', 'いがい'),
		new Word('例外', 'exception', 'れいがい'),
		new Word('意外', 'unexpectedly; suprisingly', 'いがい'),
	]
);
kanji.push(外);

// 58 字
const 字 = new Kanji(
	'字',
	'character; letter; word;',
	['JI'],
	[],
	[
		new Word('字', 'hand-writing; character (i.e. kanji)', 'じ'),
		new Word('数字', 'numeral; digit; numeric character', 'すうじ'),
		new Word('文字', 'letter (eg: of alphabet); character', 'もじ'),
	]
);
kanji.push(字);

// 59 姓
const 姓 = new Kanji(
	'姓',
	'surname',
	['SEI'],
	[],
	[
		new Word('姓', 'surname', 'せい'),
		new Word('姓名', 'fullname', 'せいめい'),
		new Word('同姓', 'same surname', 'どうせい'),
	]
);
kanji.push(姓);

// 60 同
const 同 = new Kanji(
	'同',
	'the same; equal',
	['DOU'],
	['おな＊じ'],
	[
		new Word('同', 'the same', 'おなじ'),
		new Word('同姓', 'same surname', 'どうせい'),
		new Word('同日', 'the same day', 'どうじつ'),
	]
);
kanji.push(同);

// 61 達
const 達 = new Kanji(
	'達',
	'accomplished; reach; arrive',
	['TATSU'],
	['たち'],
	[
		new Word('達成', 'achievement; attainment', 'たっせい'),
		new Word('友達', 'friend', 'ともだち'),
		new Word('xxx達', 'more than one of XXX', 'xxxたち'),
	]
);
kanji.push(達);

// 62 軍
const 軍 = new Kanji(
	'軍',
	'army',
	['GUN'],
	[],
	[
		new Word('軍隊', 'army', 'ぐんたい'),
		new Word('軍人', 'soldier', 'ぐんじん'),
		new Word('海軍', 'navy', 'かいぐん'),
	]
);
kanji.push(軍);

// 63 長
const 長 = new Kanji(
	'長',
	'long; superior;',
	['CHOU'],
	['なが＊い'],
	[
		new Word('長い', 'long', 'ながい'),
		new Word(
			'部長',
			'head (chief, director) of a section or department; / head of a (school) club; head of a (school) team',
			'ぶちょう'
		),
		new Word('長期', 'long term', 'ちょうき'),
		new Word('成長', 'growth; development', 'せいちょう'),
	]
);
kanji.push(長);

// 64 与
const 与 = new Kanji(
	'与',
	'bestow',
	['YO'],
	['あた＊える'],
	[new Word('与える', 'to give; bestow; grant', '与える')]
);
kanji.push(与);

// 65 汚
const 汚 = new Kanji(
	'汚',
	'dirty; pollute',
	['O'],
	['きたな＊い', 'よご＊れる'],
	[
		new Word('汚い', 'dirty; filthy', 'きたない'),
		new Word('汚れる', 'to get dirty; to become dirty', 'よごれる'),
		new Word('汚染', 'pollution; contamination', 'おせん'),
	]
);
kanji.push(汚);

// 66 海
const 海 = new Kanji(
	'海',
	'sea; ocean',
	['KAI'],
	['うみ'],
	[
		new Word('海', 'ocean; sea', 'うみ'),
		new Word('海軍', 'navy', 'かいぐん'),
		new Word('海岸', 'coast; beach', 'かいがん'),
	]
);
kanji.push(海);

// 67 妊
const 妊 = new Kanji(
	'妊',
	'pregnancy',
	['NIN'],
	[],
	[
		new Word('妊娠', 'pregnancy', 'にんしん'),
		new Word('妊婦', 'pregnant woman', 'にんぷ'),
		new Word('不妊', 'infertility; sterility', 'ふにん'),
	]
);
kanji.push(妊);

// 68 友
const 友 = new Kanji(
	'友',
	'friend',
	['YUU'],
	['とも'],
	[
		new Word('友', 'friend; companion', 'とも'),
		new Word('友達', 'friend', 'ともだち'),
		new Word('友人', 'friend (more formal)', 'ゆうじん'),
	]
);
kanji.push(友);

// 69 髪
const 髪 = new Kanji(
	'髪',
	'hair (head)',
	['HATSU'],
	['かみ'],
	[
		new Word('髪', 'hair (on the head)', 'かみ'),
		new Word(
			'散髪',
			'(having a) haircut; hair-cutting; hair-dressing',
			'さんぱつ'
		),
	]
);
kanji.push(髪);

// 70 壁
const 壁 = new Kanji(
	'壁',
	'wall',
	['HEKI'],
	['かべ'],
	[
		new Word('壁', 'wall; obstacle', 'かべ'),
		new Word('外壁', 'outer wall', 'がいへき'),
	]
);
kanji.push(壁);

// 71 崩
const 崩 = new Kanji(
	'崩',
	'collapse; crumble',
	['HOU'],
	['くず＊れる'],
	[
		new Word('崩れる', 'to collapse; to crumble', 'くずれる'),
		new Word(
			'崩壊',
			"a collapse- said of a building, but also (figuratively) like 'The collapse of communism'",
			'ほうかい'
		),
	]
);
kanji.push(崩);

// 72 落
const 落 = new Kanji(
	'落',
	'fall; drop; come down',
	['RAKU'],
	['お＊ちる'],
	[
		new Word('落ちる', 'to fall down; to drop', 'おちる'),
		new Word('下落', 'depreciation; decline', 'げらく'),
		new Word('落第', 'fail a test', 'らくだい'),
	]
);
kanji.push(落);

// 73 片
const 片 = new Kanji(
	'片',
	'fragment',
	['HEN'],
	['かた'],
	[
		new Word('片思い', 'unrequited love', 'かたおもい'),
		new Word('破片', 'fragment', 'はへん'),
		new Word('片手(に　XXX)', 'to do xxx one-handed.', 'かたて'),
	]
);
kanji.push(片);

// 74 避
const 避 = new Kanji(
	'避',
	'avoid; dodge',
	['HI'],
	['さ＊ける'],
	[
		new Word('避ける', 'to avoid', 'さける'),
		new Word('避妊', 'contraception', 'ひにん'),
	]
);
kanji.push(避);

// 75 負
const 負 = new Kanji(
	'負',
	'lose',
	['FU'],
	['ま＊け'],
	[
		new Word('負け', 'lose', 'まけ'),
		new Word('勝負', 'match; contest', 'しょうぶ'),
	]
);
kanji.push(負);

// 76 座
const 座 = new Kanji(
	'座',
	'sit',
	['ZA'],
	['すわ＊る'],
	[
		new Word('座る', 'sit', '座る'),
		new Word('座', 'seat; place; position', 'ざ'),
	]
);
kanji.push(座);

// 77 然
const 然 = new Kanji(
	'然',
	'sort of thing; so; if so; in that case',
	['ZEN'],
	[],
	[
		new Word('自然', 'nature; / natural', 'しぜん'),
		new Word('全然', 'absolutely; not at all', 'ぜんぜん'),
		new Word('当然', 'natural; as a matter of course', 'とうぜん'),
	]
);
kanji.push(然);

// 78 吉
const 吉 = new Kanji(
	'吉',
	'good omen',
	['KITSU'],
	['きち'],
	[new Word('吉', 'good omen - usually used only in fortune-telling', 'きち')]
);
kanji.push(吉);

// 79 窓
const 窓 = new Kanji(
	'窓',
	'window',
	[],
	['まど'],
	[
		new Word('窓', 'window', 'まど'),
		new Word(
			'窓口',
			'service window - where you get a ticket or food from a person in a box with usually a bulletproof plexiglas window between you and them.',
			'まどぐち'
		),
	]
);
kanji.push(窓);

// 80 者
const 者 = new Kanji(
	'者',
	'professional',
	['SHA'],
	['もの'],
	[
		new Word('若者', 'young person', 'わかもの'),
		new Word('記者', 'reporter', 'きしゃ'),
	]
);
kanji.push(者);

// 81 暑
const 暑 = new Kanji(
	'暑',
	'hot place',
	['SHO'],
	['あつ＊い'],
	[new Word('暑い', 'hot weather, a place with a hot climate', 'あつい')]
);
kanji.push(暑);

// 82 熱
const 熱 = new Kanji(
	'熱',
	'heat; temperature; fever;',
	['NETSU'],
	['あつ＊い'],
	[
		new Word(
			'熱い',
			'a hot thing. Also can be used figuratively for hot emotions.',
			'あつい'
		),
		new Word('熱', 'a fever.', 'ねつ'),
	]
);
kanji.push(熱);

// 83 寒
const 寒 = new Kanji(
	'寒',
	'cold (weather / temperature)',
	['KAN'],
	['さむ＊い'],
	[
		new Word('悪寒', 'chills; shakes', 'おかん'),
		new Word('寒い', 'cold', 'さむい'),
	]
);
kanji.push(寒);

// 84 景
const 景 = new Kanji(
	'景',
	'scenery; view',
	['KEI'],
	[],
	[
		new Word('背景', 'background', 'はいけい'),
		new Word('景色', 'view; scenery', 'けしき'),
		new Word(
			'景気',
			'business conditions; the market; economic activity',
			'けいき'
		),
	]
);
kanji.push(景);

// 85 被
const 被 = new Kanji(
	'被',
	'injured; victim',
	['HI'],
	[],
	[
		new Word('被害者', 'victim', 'ひがいしゃ'),
		new Word('被爆', 'being bombed', 'ひばく'),
		new Word('被告', 'defendant; the accused', 'ひこく'),
	]
);
kanji.push(被);

// 86 雲
const 雲 = new Kanji(
	'雲',
	'cloud',
	['UN'],
	['くも'],
	[new Word('雲', 'cloud', 'くも')]
);
kanji.push(雲);

// 87 雷
const 雷 = new Kanji(
	'雷',
	'lightning',
	['UN'],
	['かみなり'],
	[
		new Word('雷', 'lightning', 'かみなり'),
		new Word('雷雨', 'thunderstorm', 'らいう'),
		new Word('落雷', 'lightning strike; thunderbolt', 'らくらい'),
	]
);
kanji.push(雷);

// 88 震
const 震 = new Kanji(
	'震',
	'shake; tremble; quiver',
	['SHIN'],
	['ふる＊える'],
	[
		new Word('震える', 'to shake or tremble', 'ふるえる'),
		new Word('地震', 'earthquake', 'じしん'),
	]
);
kanji.push(震);

// 89 懐
const 懐 = new Kanji(
	'懐',
	'nostalgia',
	['KAI'],
	['なつ＊かしい'],
	[new Word('懐かしい', 'nostalgic', 'なつかしい')]
);
kanji.push(懐);

// 90 調
const 調 = new Kanji(
	'調',
	'check out; to find out; investigate',
	['CHOU'],
	['しら＊べる'],
	[
		new Word('調べ', 'find out; investigate', 'しらべ'),
		new Word('調査', 'investigation', 'ちょうさ'),
		new Word(
			'調子',
			"the condition something's in; eg: 調子が悪い！",
			'ちょうし'
		),
	]
);
kanji.push(調);

// 91 客
const 客 = new Kanji(
	'客',
	'customer; client; guest; visitor',
	['KYAKU'],
	[],
	[
		new Word('客', 'customer; client; visitor; guest', 'きゃく'),
		new Word('観客', 'audience; spectator', 'かんきゃく'),
		new Word('観光客', 'tourist', 'かんこうきゃく'),
	]
);
kanji.push(客);

// 92 売
const 売 = new Kanji(
	'売',
	'sell',
	['BAI'],
	['う＊れる'],
	[
		new Word('売れる', 'sell', 'うれる'),
		new Word(
			'商売',
			'a business, a line of work: (the camera business, the pimp game, the clock business, etc.)',
			'しょうばい'
		),
	]
);
kanji.push(売);

// 93 散
const 散 = new Kanji(
	'散',
	'scatter',
	['SAN'],
	['散＊る'],
	[
		new Word('散る', 'scatter', 'ちる'),
		new Word('散歩', 'walk; stroll', 'さんぽ'),
	]
);
kanji.push(散);

// 94 結
const 結 = new Kanji(
	'結',
	'bind; tie',
	['KETSU'],
	['むす＊ぶ'],
	[
		new Word('結ぶ', 'to tie; to bind; to connect', 'むすぶ'),
		new Word('結婚', 'marriage', 'けっこん'),
		new Word('結果', 'result', 'けっか'),
		new Word('結構', 'ok / no thanks / very', 'けっこう'),
		new Word('結論', 'conclusion', 'けつろん'),
		new Word('結局', 'after all; in the end', 'けっきょく'),
	]
);
kanji.push(結);

// 95 構
const 構 = new Kanji(
	'構',
	'set up / care about',
	['KOU'],
	['かま＊う', 'かま＊える'],
	[
		new Word(
			'構う',
			'to care about, to look after something, to take responsibility for it',
			'かまう'
		),
		new Word(
			'構え',
			"to get into one's fighting stance, say, when a Samurai challenges one. Nowadays, usually used in the negative: 構えなくてもいい： don't be so nervous. relax",
			'かまえる'
		),
		new Word('結構', 'ok / no thanks / very', 'けっこう'),
		new Word('構いません!', "I don't care", 'かまいません!'),
	]
);
kanji.push(構);

// 96 周
const 周 = new Kanji(
	'周',
	'circumference',
	['SHUU'],
	['まわ＊り'],
	[
		new Word('周わり', 'around here. All around me. All around it.', 'まわり'),
		new Word(
			'一周',
			'one time around (the lake, the trail , etc.)',
			'いっしゅう'
		),
	]
);
kanji.push(周);

// 97 光
const 光 = new Kanji(
	'光',
	'ray; light',
	['KOU'],
	['ひか＊る'],
	[
		new Word('光', 'light', 'ひかり'),
		new Word('観光客', 'tourist', 'かんこうきゃく'),
		new Word('日光', 'sunlight; sunshine', 'にっこう'),
	]
);
kanji.push(光);

// 98 満
const 満 = new Kanji(
	'満',
	'full; fullness; enough; satisfy',
	['MAN'],
	['み＊たす'],
	[
		new Word('満たす', 'to satisfy or fulfill)', 'みたす'),
		new Word('満足', 'satisfaction', 'まんぞく'),
		new Word('不満', 'dissatisfaction; displeasure; complaints', 'ふまん'),
	]
);
kanji.push(満);

// 99 員
const 員 = new Kanji(
	'員',
	'employee; member; clerk',
	['IN'],
	[],
	[
		new Word('店員', 'shop staff', 'てんいん'),
		new Word('全員', 'all members', 'ぜんいん'),
		new Word('駅員', 'train station staff', 'えきいん'),
	]
);
kanji.push(員);

// 100 買
const 買 = new Kanji(
	'買',
	'buy',
	['BAI'],
	['か＊う'],
	[
		new Word('買う', 'purchase; buy', 'かう'),
		new Word('買い物', 'shopping; purchased goods', 'かいもの'),
	]
);
kanji.push(買);

// 101 破
const 破 = new Kanji(
	'破',
	'rend; rip; tear; break',
	['HA'],
	['やぶ＊る'],
	[
		new Word('破壊', 'destruction', 'はかい'),
		new Word(
			'破る',
			'violate, destroy, tear up. Often used figuratively- she breaks the rules, he breaks with convention, they broke the promise or the rules.',
			'やぶる'
		),
		new Word('破片', 'fragment', 'はへん'),
	]
);
kanji.push(破);

// 102 壊
const 壊 = new Kanji(
	'壊',
	'break; destroy',
	['KAI'],
	['こわ＊す'],
	[
		new Word('破す', 'destroy', 'こわす'),
		new Word('破壊', 'destruction', 'はかい'),
		new Word('壊れ物', 'fragile thing', 'こわれもの'),
		new Word('崩壊', 'collapse; crumbling', 'ほうかい'),
	]
);
kanji.push(壊);

// 103 聴
const 聴 = new Kanji(
	'聴',
	'listen to',
	['CHOU'],
	['き＊く'],
	[
		new Word('聴く', 'deliberately listen to', 'きく'),
		new Word('盗聴', 'wiretap', 'とうちょう'),
	]
);
kanji.push(聴);

// 104 読
const 読 = new Kanji(
	'読',
	'read',
	['DOKU'],
	['よ＊む'],
	[
		new Word('読む', 'to read', 'よむ'),
		new Word('読者', 'reader', 'どくしゃ'),
		new Word('訓読み', 'kunyomi', 'くんよみ'),
	]
);
kanji.push(読);

// 105 桜
const 桜 = new Kanji(
	'桜',
	'cherry blossom',
	['OU'],
	['さくら'],
	[new Word('桜', 'cherry (blossoms)', 'さくら')]
);
kanji.push(桜);

// 106 誰
const 誰 = new Kanji(
	'誰',
	'who; someone',
	[],
	['だれ'],
	[
		new Word('誰', 'whoo?', 'だれ'),
		new Word('誰か', 'somebody; someone', 'だれか'),
	]
);
kanji.push(誰);

// 107 額
const 額 = new Kanji(
	'額',
	'amount of money / forehead',
	['GAKU'],
	['ひたい'],
	[
		new Word('額', 'forehead', 'ひたい'),
		new Word('全額', 'full price', 'ぜんがく'),
		new Word('半額', 'half price', 'はんがく'),
	]
);
kanji.push(額);

// 108 自
const 自 = new Kanji(
	'自',
	'oneself; my own',
	['JI'],
	['みずか＊ら'],
	[
		new Word('自ら', "for one's self; personally", 'みずから'),
		new Word('自由', 'freedom; liberty', 'じゆう'),
		new Word('自分', 'myself; yourself; oneself', 'じぶん'),
		new Word('自身', 'by oneself; personally', 'じしん'),
	]
);
kanji.push(自);

// 109 目
const 目 = new Kanji(
	'目',
	'eye',
	['MOKU'],
	['め'],
	[
		new Word('目', 'eye', 'め'),
		new Word('目的', 'purpose; goal; objective', 'もくてき'),
		new Word('目立つ', 'to stand out', 'めだつ'),
		new Word('目指す', 'to aim for', 'めざす'),
	]
);
kanji.push(目);

// 110 指
const 指 = new Kanji(
	'指',
	'finger / point at',
	['SHI'],
	['ゆび', 'さ＊す'],
	[
		new Word('指', 'finger', 'ゆび'),
		new Word('指す', 'to point at or to', 'さす'),
		new Word('目指す', 'to aim for', 'めざす'),
		new Word('指摘', 'To point out a shortcoming', 'してき'),
	]
);
kanji.push(指);

// 111 影
const 影 = new Kanji(
	'影',
	'shadow; silhouette',
	['EI'],
	['かげ'],
	[
		new Word('影', 'shadow', 'かげ'),
		new Word('撮影', 'a photoshoot or movie shoot', 'さつえい'),
		new Word('影響', 'influence', 'えいきょう'),
	]
);
kanji.push(影);

// 112 撮
const 撮 = new Kanji(
	'撮',
	'snapshot; take pictures',
	['SATSU'],
	['と＊る'],
	[
		new Word('撮る', 'to take a picture', 'とる'),
		new Word(
			'撮影',
			'taking a photo (still or motion); filming(photoshoot or movie shoot)',
			'さつえい'
		),
		new Word('写真撮影', 'photography', 'しゃしんさつえい'),
	]
);
kanji.push(撮);

// 113 念
const 念 = new Kanji(
	'念',
	'sense; concern',
	['NEN'],
	[],
	[
		new Word(
			'念のため',
			'just in case; precaution; concern; attention',
			'ねんのため'
		),
		new Word('記念', 'memorial', 'きねん'),
		new Word('残念', "That's too bad!!", 'ざんねん'),
	]
);
kanji.push(念);

// 114 受
const 受 = new Kanji(
	'受',
	'accept; recieve',
	['JU'],
	['う＊け'],
	[
		new Word('受け入れる', 'to accept; to receive; to agree', 'うけいれる'),
		new Word(
			'受験',
			'taking an examination (esp. school and university entrance)',
			'じゅけん'
		),
	]
);
kanji.push(受);

// 115 付
const 付 = new Kanji(
	'付',
	'attach to; stick to; adhere',
	['FU'],
	['つ＊ける'],
	[
		new Word('付ける', 'to attach; to put on', 'つける'),
		new Word(
			'思い付い',
			'to think of; come up with; recall; remember',
			'おもいつい'
		),
		new Word('付き合い', 'association; date', 'つきあい'),
		new Word('気を付けて', 'be careful!', 'きをつけて'),
		new Word('見付ける', 'find', 'みつける'),
		new Word('追い付く', 'catch up to', 'に 追い付く'),
		new Word('気付いた', 'to realize something', 'きづいた'),
		new Word('名付け', 'naming; to name', 'なづけ'),
	]
);
kanji.push(付);

// 116 易
const 易 = new Kanji(
	'易',
	'easy; simple',
	['EKI', 'I'],
	['やさ＊しい'],
	[
		new Word('易しい', 'easy/simple to do', 'やさしい'),
		new Word('貿易', 'international trade', 'ぼうえき'),
		new Word('容易', 'easy; simple; plain', 'ようい'),
	]
);
kanji.push(易);

// 117 場
const 場 = new Kanji(
	'場',
	'place',
	['JOU'],
	['ば'],
	[
		new Word(
			'場',
			'xxx場 means the place where we do XXX(eg: graveyard = grave-場)',
			'ば'
		),
		new Word('場合', 'in the case of XXX ', 'ばあい'),
		new Word('場所', 'place; location; spot; position', 'ばしょ'),
	]
);
kanji.push(場);

// 118 所
const 所 = new Kanji(
	'所',
	'area; place; extent',
	['SHO'],
	['ところ'],
	[
		new Word(
			'所',
			`area; place / place in time / attribute. "He's got a stupid tokoro." means "He's stupid."`,
			'ところ'
		),
		new Word('所得', 'income; earnings', 'しょとく'),
		new Word('場所', 'place; location; spot; position', 'ばしょ'),
	]
);
kanji.push(所);

// 119 行
const 行 = new Kanji(
	'行',
	'go',
	['KOU'],
	['い＊く', 'おこな＊う'],
	[
		new Word('行く', `go`, 'いく'),
		new Word(
			'行う',
			'to carry out a task, to execute a command; perform; do',
			'おこなう'
		),
		new Word('行', 'line (i.e. of text); row; verse', 'ぎょう'),
	]
);
kanji.push(行);

// 120 飛
const 飛 = new Kanji(
	'飛',
	'fly',
	['HI'],
	['と＊べ'],
	[
		new Word('飛べ', `fly`, 'とべ'),
		new Word('飛行機', 'airplane', 'ひこうき'),
		new Word('飛び出す', 'to jump out; appear (suddenly)', 'とびだす'),
	]
);
kanji.push(飛);

// 121 遠
const 遠 = new Kanji(
	'遠',
	'distant; far',
	['EN'],
	['とお＊い'],
	[
		new Word('遠い', `far away`, 'とおい'),
		new Word('永遠', 'eternity; forever', 'えいえん'),
		new Word('遠慮', 'reserve; constraint; holdback', 'えんりょ'),
	]
);
kanji.push(遠);

// 122 本
const 本 = new Kanji(
	'本',
	'book; the real',
	['HON'],
	[],
	[
		new Word('本', `book`, 'ほん'),
		new Word('本当', 'in truth; really', 'ほんとう'),
		new Word('本音', "one's real feelings; true opinion", 'ほんね'),
		new Word('本来', 'originally; primarily', 'ほんらい'),
		new Word('一本', 'one of something (eg: one finger - 1本の指)', 'いっぽん'),
	]
);
kanji.push(本);

// 123 止
const 止 = new Kanji(
	'止',
	'stop',
	['SHI'],
	['と＊める'],
	[
		new Word('止める', `stop`, 'とめる'),
		new Word('廃止', 'abolished', 'はいし'),
		new Word('痛み止め', 'pain-killer (like aspirin)', 'いたみどめ'),
	]
);
kanji.push(止);

// 124 妥
const 妥 = new Kanji(
	'妥',
	'compromise; gentle',
	['DA'],
	[],
	[
		new Word('妥協', `compromise`, 'だきょう'),
		new Word('妥結', 'settlement; an agreement', 'だけつ'),
	]
);
kanji.push(妥);

// 125 叫
const 叫 = new Kanji(
	'叫',
	'shout',
	['KYOU'],
	['さけ＊ぶ'],
	[new Word('叫ぶ', `shout`, 'さけぶ')]
);
kanji.push(叫);

// 126 巨
const 巨 = new Kanji(
	'巨',
	'giant',
	['KYO'],
	[],
	[
		new Word('巨人', `giant person; titan`, 'きょだい'),
		new Word('巨大', 'huge; gigantic; enormous', 'きょだい'),
	]
);
kanji.push(巨);

// 127 距
const 距 = new Kanji(
	'距',
	'distance',
	['KYO'],
	[],
	[new Word('距離', `distance; range`, 'きょり')]
);
kanji.push(距);

// 128 益
const 益 = new Kanji(
	'益',
	'profit',
	['EKI'],
	[],
	[
		new Word('利益', `profit; gains`, 'りえき'),
		new Word('減益', 'decrease in profits', 'げんえき'),
	]
);
kanji.push(益);

// 129 誕
const 誕 = new Kanji(
	'誕',
	'birth; birthday',
	['TAN'],
	[],
	[
		new Word('誕生日', `birthday`, 'たんじょうび'),
		new Word('誕生', 'birth', 'たんじょう'),
	]
);
kanji.push(誕);

// 130 生
const 生 = new Kanji(
	'生',
	'life; raw; birth',
	['SEI', 'SHOU'],
	['う＊まれる', 'い＊きる', 'なま'],
	[
		new Word('生まれる', `to be born`, 'うまれる'),
		new Word('生きる', 'to live', 'いきる'),
		new Word('生', 'live / direct; raw', 'なま'),
		new Word('先生', 'teacher', 'せんせい'),
		new Word('生活', 'lifestyle', 'せいかつ'),
	]
);
kanji.push(生);

// 131 呂
const 呂 = new Kanji(
	'呂',
	'spine; backbone; bath',
	['RO'],
	[],
	[
		new Word('お風呂', `bathtub`, 'おふろ'),
		new Word('風呂場', 'bathroom', 'ふろば'),
	]
);
kanji.push(呂);

// 132 風
const 風 = new Kanji(
	'風',
	'wind; the flu; style',
	['FUU'],
	['かぜ'],
	[
		new Word('風邪', `the cold / flu`, 'かぜ'),
		new Word('風', 'wind', 'かぜ'),
		new Word('風景', 'scenery; scene', 'ふうけい'),
		new Word('風船', 'balloon', 'ふうせん'),
	]
);
kanji.push(風);

// 133 和
const 和 = new Kanji(
	'和',
	'peace; Japan',
	['WA'],
	['かぜ'],
	[
		new Word('平和', `peace; harmony`, 'へいわ'),
		new Word('和風', 'Japanese-style', 'わふう'),
		new Word('和服', 'Japanese clothes', 'わふく'),
		new Word('和食', 'Japanese-style food', 'わしょく'),
	]
);
kanji.push(和);

// 134 味
const 味 = new Kanji(
	'味',
	'flavor; taste',
	['MI'],
	['あじ'],
	[
		new Word('味', `flavor; flavour; taste`, 'あじ'),
		new Word('意味', 'meaning; significance', 'いみ'),
		new Word(
			'興味',
			'interest (in something); curiosity (about something)',
			'きょうみ'
		),
		new Word('趣味', 'hobby', 'しゅうみ'),
	]
);
kanji.push(味);

// 135 知
const 知 = new Kanji(
	'知',
	'know; wisdom',
	['CHI'],
	['し＊る'],
	[
		new Word('知る', `to be aware of; to know`, 'しる'),
		new Word('知識', 'knowledge', 'ちしき'),
		new Word('知り合い', 'an acquaintance', 'しりあい'),
		new Word('お知らせ', 'news; word; advertisement', 'おしらせ'),
	]
);
kanji.push(知);

// 136 平
const 平 = new Kanji(
	'平',
	'even; flat; peace',
	['HEI'],
	['たい＊ら'],
	[
		new Word('平ら', `flat`, 'たいら'),
		new Word(
			'平気',
			'ok?(Usually phrased as a question, as in, 平気？ "Is that ok with you?")',
			'へいき'
		),
		new Word('平和', 'peace', 'へいわ'),
		new Word('平日', 'weekday', 'へいじつ'),
	]
);
kanji.push(平);

// 137 半
const 半 = new Kanji(
	'半',
	'half; middle',
	['HAN'],
	['なか＊ば'],
	[
		new Word('半ば', `middle; half; semi; halfway; partly`, 'なかば'),
		new Word('2時半', '2:30', 'にじはん'),
		new Word('半分', 'half', 'はんぶん'),
		new Word('前半', 'first half', 'ぜんはん'),
		new Word('半額', 'half-price', 'はんがく'),
	]
);
kanji.push(半);

// 138 興
const 興 = new Kanji(
	'興',
	'interest; entertainment',
	['KOU', 'KYOU'],
	[],
	[
		new Word(
			'興味',
			'interest (in something); curiosity (about something)',
			'きょうみ'
		),
		new Word('新興国', 'Emerging countries', 'しんこうこく'),
	]
);
kanji.push(興);

// 139 盗
const 盗 = new Kanji(
	'盗',
	'steal; rob',
	['TOU'],
	['ぬす＊む'],
	[
		new Word('盗む', 'to steal', 'ぬすむ'),
		new Word('盗作', 'plagiarism', 'とうさく'),
		new Word('盗撮', 'hidden camera', 'とうさつ'),
	]
);
kanji.push(盗);

// 140 音
const 音 = new Kanji(
	'音',
	'sound; noise',
	['ON'],
	['おと'],
	[
		new Word('音', 'sound; noise', 'おと'),
		new Word('音楽', 'music', 'おんがく'),
		new Word('音声', 'voice; speech; sound of a voice', 'おんせい'),
		new Word('本音', 'real intention; motive; true opinion', 'ほんね'),
	]
);
kanji.push(音);

// 141 楽
const 楽 = new Kanji(
	'楽',
	'enjoy; music; comfort; ease',
	['RAKU', 'GAKU'],
	['たの＊しい', 'らく'],
	[
		new Word(
			'楽しい',
			'enjoyment; pleasure / anticipation; looking forward to',
			'たのしい'
		),
		new Word('音楽', 'music', 'おんがく'),
		new Word('楽', 'comfort; easy', 'らく'),
		new Word('楽観的', 'optimistic', 'らっかんてき'),
	]
);
kanji.push(楽);

// 142 切
const 切 = new Kanji(
	'切',
	'cut; cutoff; be sharp',
	['SETSU'],
	['き＊る'],
	[
		new Word('切る', 'cut', 'きる'),
		new Word('大切', 'important', 'たいせつ'),
		new Word('売り切れ', 'sold out', 'うりきれ'),
		new Word('一切', 'all; everything; the whole', 'いっさい'),
		new Word('裏切り', 'betray; backstab', 'うらぎり'),
	]
);
kanji.push(切);

// 143 掛
const 掛 = new Kanji(
	'掛',
	'hang / halfway done',
	['GAI'],
	['か＊ける'],
	[
		new Word('掛る', 'to hang something / on', 'かける'),
		new Word('切っ掛け', 'trigger; chance; excuse; motive', 'きっかけ'),
		new Word('追い掛ける', 'to chase; to pursue', 'おいかける'),
		new Word('手掛かり', 'clue; lead', 'てがかり'),
		new Word('呼び掛け', 'call; appeal', 'よびかけ'),
	]
);
kanji.push(掛);

// 144 努
const 努 = new Kanji(
	'努',
	'make an effort',
	['DO'],
	['つと＊める'],
	[
		new Word(
			'努める',
			'to endeavor (endeavour); to try; to strive',
			'つとめる'
		),
		new Word('努力', 'effort; exertion; endeavour', 'どりょく'),
	]
);
kanji.push(努);

// 145 怒
const 怒 = new Kanji(
	'怒',
	'get mad',
	['DO'],
	['いか＊り', 'おこ＊る'],
	[
		new Word('怒る', 'to get mad', 'おこる'),
		new Word('怒り', 'anger; wrath; rage', 'いかり'),
	]
);
kanji.push(怒);

// 146 歌
const 歌 = new Kanji(
	'歌',
	'sing',
	['KA'],
	['うた'],
	[
		new Word('歌', 'song', 'うた'),
		new Word('歌手', 'singer', 'かしゅ'),
		new Word('歌詞', 'lyrics', 'かし'),
	]
);
kanji.push(歌);

// 147 恐
const 恐 = new Kanji(
	'恐',
	'fear; dread; awe',
	['KYOU'],
	['おそ＊れる'],
	[
		new Word('恐れ', 'fear; horror', 'おそれ'),
		new Word('恐怖', 'fear; dread; dismay', 'きょうふ'),
	]
);
kanji.push(恐);

// 148 怖
const 怖 = new Kanji(
	'怖',
	'scary; dreadful',
	['FU'],
	['こわ＊い'],
	[
		new Word('怖い', 'scary', 'こわい'),
		new Word('恐怖', 'fear; dread; dismay', 'きょうふ'),
	]
);
kanji.push(怖);

// 149 身
const 身 = new Kanji(
	'身',
	'somebody; person',
	['SHIN'],
	['み'],
	[
		new Word('自身', 'by oneself; personally', 'じしん'),
		new Word(
			'出身',
			"person's origin (e.g. city, country, parentage, school)",
			'しゅっしん'
		),
		new Word('中身', 'contents; interior', 'なかみ'),
		new Word('身長', 'height (of body); stature', 'しんちょう'),
	]
);
kanji.push(身);

// 150 直
const 直 = new Kanji(
	'直',
	'straightaway; repair; correct a problem; direct contact',
	['CHOKU', 'JIKI'],
	['なお＊す'],
	[
		new Word('直す', 'to fix / reform / correct a problem', 'なおす'),
		new Word('見直し', 'review; reconsideration; revision', 'みなおし'),
		new Word('直前', 'just before', 'ちょくぜん'),
		new Word('正直', 'honest / loyal', 'しょうじき'),
		new Word('素直', 'obedient; honest; meek; upfront', 'すなお'),
		new Word('直後', 'immediately following', 'ちょくご'),
	]
);
kanji.push(直);

// 151 置
const 置 = new Kanji(
	'置',
	'put; set',
	['CHI'],
	['お＊く'],
	[
		new Word('置く', 'to put; to place', 'おく'),
		new Word('前置き', 'preface; introduction', 'まえおき'),
		new Word('位置する', 'place; location; situation', 'いちする'),
	]
);
kanji.push(置);

// 152 話
const 話 = new Kanji(
	'話',
	'talk; conversation',
	['WA'],
	['はな＊す'],
	[
		new Word('話す', 'talk; speech; chat; conversation; discuss', 'はなす'),
		new Word('電話', 'telephone call; phone call', 'でんわ'),
		new Word('会話', 'conversation', 'かいわ'),
		new Word(
			'話題',
			'a theme (of a book or show) topic (of conversation)',
			'わだい'
		),
	]
);
kanji.push(話);

// 153 穴
const 穴 = new Kanji(
	'穴',
	'hole',
	['KETSU'],
	['あな'],
	[
		new Word('穴', 'hole', 'あな'),

		new Word('風穴', 'air hole; windhole', 'かざあな'),
		new Word(
			'穴埋め',
			'filling in gaps; filling in blanks (in a form, etc.); covering up a deficit; making up for something',
			'あなうめ'
		),
	]
);
kanji.push(穴);

// 154 埋
const 埋 = new Kanji(
	'埋',
	'bury; fill',
	['MAI'],
	['うまる'],
	[
		new Word('埋まる', 'to be buried; to be filled; to overflow', 'うまる'),
		new Word('埋葬', 'burial', 'まいそう'),
	]
);
kanji.push(埋);

// 155 呼
const 呼 = new Kanji(
	'呼',
	'call to someone; call out',
	['KO'],
	['よ＊ぶ'],
	[
		new Word('呼ぶ', 'call out to someone; call on', 'よぶ'),
		new Word(
			'呼吸',
			'breathing; respiration; / knack; trick; secret (of doing something)',
			'こきゅう'
		),
		new Word('嗚呼', 'ah!; oh!; alas!​', 'ああ'),
	]
);
kanji.push(呼);

// 156 嗚
const 嗚 = new Kanji(
	'嗚',
	'weep; ah; alas',
	['O'],
	['ああ'],
	[new Word('嗚呼', 'ah!; oh!; alas!​', 'ああ')]
);
kanji.push(嗚);

// 157 材
const 材 = new Kanji(
	'材',
	'lumber; log; timber; raw materials',
	['ZAI'],
	[],
	[
		new Word('材料', 'ingredients', 'ざいりょう'),
		new Word('素材', 'raw material ', 'そざい'),
		new Word('人材', 'capable person; talented person', 'じんざい'),
	]
);
kanji.push(材);

// 158 囚
const 囚 = new Kanji(
	'囚',
	'prisoner; captured; criminal',
	['SHUU'],
	['とら＊われる'],
	[
		new Word(
			'囚われる',
			'to be caught; to be captured; to be taken prisoner; to be a slave to',
			'とらわれる'
		),
		new Word('囚人', 'prisoner', 'しゅうじん'),
	]
);
kanji.push(囚);

// 159 困
const 困 = new Kanji(
	'困',
	'troubled; become distressed; annoyed',
	['KON'],
	['こま＊る'],
	[
		new Word('困る', 'to be troubled / distressed', 'こまる'),
		new Word('貧困', 'poverty', 'ひんこん'),
		new Word(
			'困り果てる',
			'to be at a complete loss; to be without recourse; to be completely stymied; to have absolutely no idea what to do',
			'こまりはてる'
		),
	]
);
kanji.push(困);

// 160 玉
const 玉 = new Kanji(
	'玉',
	'ball',
	[],
	['たま'],
	[
		new Word('玉', 'ball', 'たま'),
		new Word('金玉', 'testicles', 'きんたま'),
		new Word('玉子', 'Egg', 'たまご'),
	]
);
kanji.push(玉);

// 161 街
const 街 = new Kanji(
	'街',
	'street; city; town',
	['GAI'],
	['まち'],
	[
		new Word('街', 'town; street; neighbourhood', 'まち'),
		new Word(
			'商店街',
			'shopping district. Not quite a mall, but a street with a tin roof, and all the shops are decorated similarly',
			'しょうてんがい'
		),
	]
);
kanji.push(街);

// 162 川
const 川 = new Kanji(
	'川',
	'river',
	['SEN'],
	['かわ'],
	[new Word('川', 'river', 'かわ')]
);
kanji.push(川);

// 163 寺
const 寺 = new Kanji(
	'寺',
	'temple',
	['JI'],
	['てら'],
	[
		new Word('寺', 'temple', 'てら'),
		new Word('XXX 寺', '"temple of xxx."', 'じ'),
	]
);
kanji.push(寺);

// 164 等
const 等 = new Kanji(
	'等',
	'equal; etc.; and so forth',
	['TOU'],
	['ひと＊しい'],
	[
		new Word('等しい', 'equal; the same', 'ひとしい'),
		new Word('彼等', 'them', 'かれら'),
		new Word('等々', 'et cetera.', 'などなど'),
	]
);
kanji.push(等);

// 165 皆
const 皆 = new Kanji(
	'皆',
	'everyone',
	['KAI'],
	['みんな'],
	[
		new Word('皆', 'everyone', 'みんな'),
		new Word('皆殺し', 'massacre; annihilation', 'みなごろし'),
	]
);
kanji.push(皆);

// 166 保
const 保 = new Kanji(
	'保',
	'protect; guarantee; maintain',
	['HO'],
	['たも＊つ'],
	[
		new Word('保つ', 'maintain', 'たもつ'),
		new Word('保証', 'guarantee', 'ほしょう'),
	]
);
kanji.push(保);

// 167 褒
const 褒 = new Kanji(
	'褒',
	'praise',
	['HOU'],
	['ほ＊める'],
	[
		new Word('褒める', 'praise', 'ほめる'),
		new Word('褒美', 'reward; prize', 'ほうび'),
	]
);
kanji.push(褒);

// 168 慢
const 慢 = new Kanji(
	'慢',
	'neglect; persevere; egotistic',
	['MAN'],
	[],
	[
		new Word('我慢', 'persevere; to endure, to bear something', 'がまん'),
		new Word('じまん', 'prideful; show off; to brag', 'to brag'),
	]
);
kanji.push(慢);

// 169 忙
const 忙 = new Kanji(
	'忙',
	'busy',
	['BOU'],
	['いそが＊しい'],
	[new Word('忙しい', 'busy', 'いそがしい')]
);
kanji.push(忙);

// 170 流
const 流 = new Kanji(
	'流',
	'flow',
	['RYUU'],
	['なが＊れる'],
	[
		new Word(
			'流れる',
			'something flowing (music through a city/ time passing etc)',
			'ながれる'
		),
		new Word('流行', 'trend', 'りゅうこう'),
	]
);
kanji.push(流);

// 171 荒
const 荒 = new Kanji(
	'荒',
	'rough; rude; wild',
	['KOU'],
	['あら＊い'],
	[new Word('荒い', 'rough; wild; violent; rude', 'あらい')]
);
kanji.push(荒);

// 172 使
const 使 = new Kanji(
	'使',
	'use',
	['SHI'],
	['つか＊う'],
	[
		new Word('使う', 'use', 'つかう'),
		new Word('使命', 'mission; task; duty; obligation', 'しめい'),
		new Word('天使', 'angel', 'てんし'),
		new Word('使用', 'use; application', 'しよう'),
	]
);
kanji.push(使);

// 173 史
const 史 = new Kanji(
	'史',
	'history',
	['SHI'],
	[],
	[
		new Word('歴史', 'history', 'れきし'),
		new Word('史上', 'in history; ever; historical', 'しじょう'),
	]
);
kanji.push(史);

// 174 利
const 利 = new Kanji(
	'利',
	'profit; advantage; benefit',
	['RI'],
	['き＊く'],
	[
		new Word('金利', 'interest rate; interest', 'きんり'),
		new Word('利用', 'use; utilization; utilisation; application', 'りよう'),
		new Word('権利', 'right; privilege', 'けんり'),
		new Word('利益', 'profit; gains', 'りえき'),
	]
);
kanji.push(利);

// 175 抜
const 抜 = new Kanji(
	'抜',
	'extract; draw out',
	['BATSU'],
	['ぬ＊く'],
	[
		new Word('抜く', 'to pull out; to draw out', 'ぬく'),
		new Word('抜け', 'to pass through; to come out; to fall out', 'ぬけ'),
		new Word('腰抜け', 'coward', 'こしぬけ'),
		new Word(
			'見抜く',
			"to see through (to see through someone's pretension or their deception.)",
			'みぬく'
		),
	]
);
kanji.push(抜);

// 176 隙
const 隙 = new Kanji(
	'隙',
	'a narrow opening or fissure; gap; space',
	['GEKI'],
	['すき', 'ひま'],
	[
		new Word('隙', 'gap; space', 'すき'),
		new Word(
			'隙人',
			'person with a lot of free time on their hands',
			'ひまじん'
		),
		new Word('隙間', 'a narrow opening; crack; gap', 'すきま'),
	]
);
kanji.push(隙);

// 177 覗
const 覗 = new Kanji(
	'覗',
	'peek',
	['SHI'],
	['のぞ＊く'],
	[new Word('覗く', 'to peek; to sneak a look at', 'のぞく')]
);
kanji.push(覗);

// 178 待
const 待 = new Kanji(
	'待',
	'wait',
	['TAI'],
	['ま＊つ'],
	[
		new Word('待つ', 'to wait', 'まつ'),
		new Word('期待', 'expectation; anticipation; hope', 'きたい'),
		new Word('招待', 'invitation', 'しょうたい'),
	]
);
kanji.push(待);

// 179 陰
const 陰 = new Kanji(
	'陰',
	'shade',
	['IN'],
	['かげ'],
	[
		new Word(
			'陰',
			'shadow (Unlike the OTHER shadow kanji (影) which is literal, this shadow kanji (陰) is more figurative: things that are shady, dark, secret, or hidden.)',
			'かげ'
		),
		new Word('xxx　の...お陰で', 'thanks to XXX', 'おかげで'),
		new Word('木陰', 'shade under the trees', 'こかげ'),
		new Word(
			'陰気',
			'gloomy or dismal(depressing / dreary) atmosphere',
			'いんき'
		),
	]
);
kanji.push(陰);

// 180 頬
const 頬 = new Kanji(
	'頬',
	'cheeks; jaw',
	['KYOU'],
	['ほお'],
	[
		new Word('頬', 'cheek (of face)', 'ほお'),
		new Word('頬笑む', 'to smile', 'ほほえむ'),
	]
);
kanji.push(頬);

// 181 上
const 上 = new Kanji(
	'上',
	'above',
	['JOU'],
	['あ＊がる', 'うえ'],
	[
		new Word('以上', "more than / that's all", 'いじょう'),
		new Word('上手', 'skillful; skilled; proficient', 'じょうず'),
		new Word('史上', 'in history; ever; historical', 'しじょう'),
		new Word('頭上', "overhead; above one's head", 'ずじょう'),
		new Word('見上げる', 'to look up at; to look up to', 'みあげる'),
	]
);
kanji.push(上);

// 182 咲
const 咲 = new Kanji(
	'咲',
	'blossom; bloom',
	['SHOU'],
	['さく'],
	[new Word('咲', 'to bloom', 'さく')]
);
kanji.push(咲);

// 183 億
const 億 = new Kanji(
	'億',
	'a hundred million',
	['OKU'],
	[],
	[
		new Word('一億円', '100,000,000 YEN', 'いちおくえん'),
		new Word('億劫', 'troublesome; bothersome; tiresome; annoying', 'おっくう'),
	]
);
kanji.push(億);

// 184 瞬
const 瞬 = new Kanji(
	'瞬',
	'moment; wink; blink; twinkle',
	['SHUN'],
	['またた＊く', 'まばた＊き'],
	[
		new Word('一瞬', 'instant; moment; for an instant', 'いっしゅん'),
		new Word('瞬間', 'moment; second; instant', 'しゅんかん'),
		new Word(
			'瞬く',
			"to blink, but also to flicker or twinkle。 Usually used as a adjective like, 'またたく ほし' (twinkling star)",
			'またたく'
		),
		new Word('瞬き', 'to blink; a wink', 'まばたき'),
	]
);
kanji.push(瞬);

// 185 過
const 過 = new Kanji(
	'過',
	'overdo; exceed; go beyond',
	['KA'],
	['す＊ごす', 'す＊ぎる'],
	[
		new Word(
			'過ぎる',
			'to pass through; to pass by; to surpass, literally (be ahead of) or figuratively, (surpass our goals)',
			'すぎる'
		),
		new Word('過ごす', 'to pass (time); to spend', 'すごす'),
		new Word('過去', 'the past; bygone days; the previous', 'かこ'),
		new Word('過半数', 'majority', 'かはんすう'),
	]
);
kanji.push(過);

// 186 去
const 去 = new Kanji(
	'去',
	'gone; past; past tense',
	['KYO', 'KO'],
	['さ＊る'],
	[
		new Word('去年', 'last year', 'きょねん'),
		new Word(
			'去る',
			'to leave (as in leave while others stay). also to be xxx miles away from a particular place.',
			'さる'
		),
		new Word('過去', 'the past; bygone days; the previous', 'かこ'),
		new Word('除去', 'removal; getting rid of', 'じょきょ'),
		new Word('死去', 'death', 'しきょ'),
	]
);
kanji.push(去);

// 187 降
const 降 = new Kanji(
	'降',
	'descend; rainfall; to step down',
	['KOU'],
	['お＊りる', 'ふ＊る'],
	[
		new Word(
			'降りる',
			'to descend; get off the bus/ taxi / train; to step down',
			'おりる'
		),
		new Word(
			'降る',
			'to fall (of rain, snow, ash, etc.); to come down',
			'ふる'
		),

		new Word(
			'降参',
			'a casual word for surrender: to give up mid-game. A politician concedes defeat. To say uncle.',
			'こうさん'
		),
		new Word(
			'降伏',
			'surrender - unlike the more casual 降参　（こうさん）, 降伏 is used when you, like, lose a war.',
			'こうふく'
		),
	]
);
kanji.push(降);

// 188 晴
const 晴 = new Kanji(
	'晴',
	'clear up; weather get good now',
	['SEI'],
	['は＊れる'],
	[
		new Word('晴れ', 'clear weather; fine weather; sunny weather', 'はれ'),
		new Word('素晴らしい', 'wonderful; splendid; magnificent', 'すばらしい'),
		new Word('晴れる', 'to clear up; to clear away; to be sunny', 'はれる'),
	]
);
kanji.push(晴);

// 189 雪
const 雪 = new Kanji(
	'雪',
	'snow',
	['SETSU'],
	['ゆき'],
	[
		new Word('雪', 'snow', 'ゆき'),
		new Word('吹雪', 'snow storm; blizzard', 'ふぶき'),
	]
);
kanji.push(雪);

// 190 匂
const 匂 = new Kanji(
	'匂',
	'scent/smell (good or bad)',
	[],
	['にお＊い'],
	[
		new Word(
			'匂い',
			'Odor. Sometimes bad, sometimes, good (Odor. Sometimes bad, sometimes, good)',
			'におい'
		),
	]
);
kanji.push(匂);

// 191 道
const 道 = new Kanji(
	'道',
	'road; street',
	['DOU'],
	['みち'],
	[
		new Word('道', 'road; path; street; lane; passage', 'みち'),
		new Word('歩道', 'sidewalk', 'ほどう'),
		new Word('剣道', 'kendo(martial arts)', 'けんどう'),
		new Word('近道', 'a short-cut ', 'ちかみち'),
	]
);
kanji.push(道);

// 192 残
const 残 = new Kanji(
	'残',
	'remainder; leftover; balance',
	['ZAN'],
	['のこ＊り'],
	[
		new Word('残り', 'the remaining; remnant', 'のこり'),
		new Word('残念', "That's too bad!!", 'ざんねん'),
		new Word('名残り', 'remains; traces', 'なごり'),
		new Word('残高', '(bank) balance; remainder', 'ざんだか'),
	]
);
kanji.push(残);

// 193 沿
const 沿 = new Kanji(
	'沿',
	'along; parallel to',
	['EN'],
	['ぞ＊い', 'そ＊って'],
	[
		new Word(
			'沿い',
			'parallel to, like a trail parallel to the edge of a lake, or a line of houses running alongside the train tracks.',
			'ぞい'
		),
		new Word(
			'(xxxに) 沿って (YYY)',
			'by; in accordance with XXX, we will do YYY.',
			'そって'
		),
		new Word('川沿い', 'along the river; riverside', 'かわぞい'),
		new Word(
			'沿う',
			'to run along; to follow (a policy, plan, etc.); to act in accordance with',
			'そう'
		),
		new Word('沿道', 'roadside; wayside; route', 'えんどう'),
	]
);
kanji.push(沿);

// 194 丘
const 丘 = new Kanji(
	'丘',
	'hill',
	['KYUU'],
	['おか'],
	[
		new Word('丘', 'hill', 'おか'),
		new Word('砂丘', 'sand dune; sand hill', 'さきゅう'),
	]
);
kanji.push(丘);

// 195 嵐
const 嵐 = new Kanji(
	'嵐',
	'storm; tempest',
	['RAN'],
	['あらし'],
	[
		new Word('嵐', 'storm', 'あらし'),
		new Word('砂嵐', 'sandstorm', 'すなあらし'),
	]
);
kanji.push(嵐);

// 196 泥
const 泥 = new Kanji(
	'泥',
	'mud',
	['DEI'],
	['どろ'],
	[
		new Word('泥', 'mud; dirt', 'どろ'),
		new Word(
			'泥棒',
			"a robber - not like a mugger but like a break-into-your-house-when-you're-not-home guy	",
			'どろぼう'
		),
	]
);
kanji.push(泥);

// 197 棒
const 棒 = new Kanji(
	'棒',
	'pole; rod; stick',
	['BOU'],
	[],
	[
		new Word('棒', 'pole; rod; stick', 'ぼう'),
		new Word(
			'泥棒',
			"a robber - not like a mugger but like a break-into-your-house-when-you're-not-home guy	",
			'どろぼう'
		),
		new Word('相棒', 'partner; pal', 'あいぼう'),
		new Word('鉄棒', 'iron rod; iron bar; iron club', 'てつぼう'),
	]
);
kanji.push(棒);

// 198 終
const 終 = new Kanji(
	'終',
	'end; finish',
	['SHUU'],
	['お＊わり'],
	[
		new Word('終わり', 'the end', 'おわり'),
		new Word('最終', 'last; final; closing', 'さいしゅう'),
		new Word('終結', 'end; close', 'しゅうけつ'),
		new Word('終了後', 'after the end (of something); post-', 'しゅうりょうご'),
	]
);
kanji.push(終);

// 199 言
const 言 = new Kanji(
	'言',
	'say; word',
	['GEN'],
	['い＊う', 'こと'],
	[
		new Word('言う', 'to say', 'いう'),
		new Word('言', 'word; remark; statement', 'げん・こと'),
		new Word('言葉', 'word; words; phrase', 'ことば'),
		new Word(
			'発言',
			'statement; remark; observation; utterance; speech',
			'はつげん'
		),
		new Word('証言', 'testimony; (verbal) evidence', 'しょうげん'),
	]
);
kanji.push(言);

// 200 葉
const 葉 = new Kanji(
	'葉',
	'leaf',
	['YOU'],
	[' ＊ '],
	[
		new Word('葉', 'counter for leaves, pieces of paper', 'よう'),
		new Word('言葉', 'word; words; phrase', 'ことば'),
		new Word('葉', 'leaf; blade (of grass)', 'は'),
	]
);
kanji.push(葉);

// 201 踏
const 踏 = new Kanji(
	'踏',
	'step on; tread on; trample',
	['TOU'],
	['ふ＊む'],
	[
		new Word(
			'踏む',
			'to step on; to tread on; to trample on;　to set foot on',
			'ふむ'
		),
		new Word(
			'踏切',
			'railway crossing; railroad crossing; train crossing',
			'ふみきり'
		),
	]
);
kanji.push(踏);

// 202 開
const 開 = new Kanji(
	'開',
	'open',
	['KAI'],
	['あ＊く', 'ひら＊け'],
	[
		new Word('開く', 'to open(e.g. doors, business etc)', 'あく'),
		new Word('開け', 'open; begin', 'ひらけ'),
		new Word('開始', 'start; commencement; beginning; initiation', 'かいし'),
		new Word('展開', 'development; evolution; expansion', 'てんかい'),
	]
);
kanji.push(開);

// 203 仕
const 仕 = new Kanji(
	'仕',
	'work; attend; doing',
	['SHI'],
	[],
	[
		new Word('仕事', 'work; job', 'しごと'),
		new Word('仕方', 'way to do something', 'しかた'),
		new Word(
			'仕組み',
			'workings; how it works; structure; mechanisms',
			'しくみ'
		),
		new Word('仕掛け', 'device; gadget / trap; trick', 'しかけ'),
	]
);
kanji.push(仕);

// 204 舞
const 舞 = new Kanji(
	'舞',
	'flutter / dance',
	['BU'],
	['ま＊う'],
	[
		new Word('仕舞い', 'end; close; finish; termination', 'しまい'),
		new Word('舞う', 'to flutter or dance - like leaves in the wind.', 'まう'),
		new Word('歌舞伎', 'kabuki play(Japanese classical drama)', 'かぶき'),
		new Word(
			'舞台',
			'stage (theatre, theater); / scene or setting (e.g. of novel, play, etc.)',
			'ぶたい'
		),
	]
);
kanji.push(舞);

// 205 鳴
const 鳴 = new Kanji(
	'鳴',
	'chirp; bark; ring; animal cry',
	['MEI'],
	['な＊く', 'な＊る'],
	[
		new Word(
			'鳴く',
			"animal's sound. Not just loud angry animals either. Baby birds also naku.",
			'なく'
		),
		new Word('鳴る', 'the sound of a phone or alarm ringing.', 'なる'),
	]
);
kanji.push(鳴);

// 206 眼
const 眼 = new Kanji(
	'眼',
	'eyeball',
	['GAN'],
	['め'],
	[
		new Word('眼', 'eyeball', 'め'),
		new Word('眼鏡', 'glasses; eyeglasses; spectacles', 'めがね'),
	]
);
kanji.push(眼);

// 207 覚
const 覚 = new Kanji(
	'覚',
	'memorize; remember; wake up',
	['KAKU'],
	['さ＊ます', 'おぼ＊える'],
	[
		new Word('覚える', 'memorize; to memorise; to remember', 'おぼえる'),
		new Word('覚める', "to wake; to come to one's senses", 'さめる'),
		new Word('幻覚', 'hallucination', 'げんかく'),
		new Word('感覚', 'physical sense/sensation', 'かんかく'),
	]
);
kanji.push(覚);

// 208 邪
const 邪 = new Kanji(
	'邪',
	'wicked; hindarance; wrong',
	['JA'],
	[],
	[
		new Word('風邪', 'common cold; flu', 'かぜ'),
		new Word('邪魔', 'hindrance; obstacle; in the way', 'じゃま'),
		new Word('無邪気', 'innocent; simple-minded', 'むじゃき'),
	]
);
kanji.push(邪);

// 209 時
const 時 = new Kanji(
	'時',
	'time',
	['JI'],
	['とき'],
	[
		new Word('四時', "4 o'clock", 'よじ'),
		new Word('時間', 'time', 'じかん'),
		new Word('時計', 'time', 'とけい'),
		new Word('時代', 'watch; clock; timepiece', 'じだい'),
	]
);
kanji.push(時);

// 210 虚
const 虚 = new Kanji(
	'虚',
	'void; empty',
	['KYO'],
	['むな＊しい'],
	[
		new Word('虚しい', 'empty; void', 'むなしい'),
		new Word(
			'虚偽',
			'falsehood; untruth; lie; misinformation; / fallacy (logic)',
			'きょぎ'
		),
		new Word('虚無', 'nihility; nothingness', 'きょむ'),
	]
);
kanji.push(虚);

// 211 嘘
const 嘘 = new Kanji(
	'嘘',
	'lie',
	[],
	['うそ'],
	[new Word('嘘', 'lie', 'うそ'), new Word('嘘つき', 'liar', 'うそつき')]
);
kanji.push(嘘);

// 212 報
const 報 = new Kanji(
	'報',
	'report; news; data',
	['HOU'],
	['むく＊いる'],
	[
		new Word('報いる', 'to reward', 'むくいる'),
		new Word('報じる', 'to report(usually on tv/newspaper)', 'ほうじる'),
		new Word('予報', 'forecast, prediction', 'よほう'),
		new Word('情報', 'data; information', 'じょうほう'),
	]
);
kanji.push(報);

// 213 喉
const 喉 = new Kanji(
	'喉',
	'throat',
	['KOU'],
	['のど'],
	[new Word('喉', 'throat', 'のど')]
);
kanji.push(喉);

// 214 渇
const 渇 = new Kanji(
	'渇',
	'thirst; dry up',
	['KATSU'],
	['かわ＊く'],
	[
		new Word(
			'渇く',
			'something which is/should be wet , becomes dry: eg: My throat is dry.(喉が渇く)',
			'かわく'
		),
	]
);
kanji.push(渇);

// 215 魔
const 魔 = new Kanji(
	'魔',
	'witch; demon; devil',
	['MA'],
	[],
	[
		new Word('邪魔', 'hindrance; obstacle; in the way', 'じゃま'),
		new Word('悪魔', 'devil; demon; fiend', 'あくま'),
		new Word('魔法', 'magic; witchcraft', 'まほう'),
	]
);
kanji.push(魔);

// 216 速
const 速 = new Kanji(
	'速',
	'quick; fast',
	['SOKU'],
	['はや＊い'],
	[
		new Word('速い', 'fast; quick', 'はやい'),
		new Word('速度', 'speed; velocity; rate', 'そくど'),
		new Word(
			'速報',
			'news flash; prompt report; bulletin; quick announcement',
			'そくほう'
		),
	]
);
kanji.push(速);

// 217 例
const 例 = new Kanji(
	'例',
	'example',
	['REI'],
	['たと＊えば'],
	[
		new Word('例', 'custom; practice; habit; usual', 'れい'),
		new Word('例えば', 'for example', 'たとえば'),
		new Word('例外', 'exception', 'れいがい'),
	]
);
kanji.push(例);

// 218 寝
const 寝 = new Kanji(
	'寝',
	'lie down; go to bed',
	['SHIN'],
	['ね＊る'],
	[
		new Word('寝る', 'to lie down; / to go to bed', 'ねる'),
		new Word('寝室', 'bedroom', 'しんしつ'),
		new Word('寝ぼけ', 'sleepy head/eyes; being still half asleep', 'ねぼけ'),
		new Word('昼寝', 'a nap', 'ひるね'),
	]
);
kanji.push(寝);

// 219 眠
const 眠 = new Kanji(
	'眠',
	'sleep',
	['MIN'],
	['ねむ＊る'],
	[
		new Word('眠る', 'to sleep', 'ねむる'),
		new Word(
			'睡眠',
			'a somewhat medical-sounding / technical word for sleep',
			'すいみん'
		),
	]
);
kanji.push(眠);

// 220 民
const 民 = new Kanji(
	'民',
	'people; folk',
	['MIN'],
	[],
	[
		new Word(
			'民族',
			'two meanings: 1) ethnic group, 2) folk (as in folk customs, folk music, etc)',
			'みんぞく'
		),
		new Word('国民', 'people (of a country)', 'こくみん'),
		new Word('市民', 'citizen; public', 'しみん'),
	]
);
kanji.push(民);

// 221 氏
const 氏 = new Kanji(
	'氏',
	'family name; surname',
	['SHI'],
	[],
	[
		new Word(
			'氏名',
			'full name (used as in "please write down your 氏名(full name)", but not really used regular in conversation (instead you would use "what is your 名前（name）" then',
			'しめい'
		),
		new Word('彼氏', 'boyfriend', 'かれし'),
		new Word('XXX 氏', 'Mr.XXX', 'XXX し'),
	]
);
kanji.push(氏);

// 222 捨
const 捨 = new Kanji(
	'捨',
	'discard; throw away; abandon',
	['SHA'],
	['す＊てる'],
	[
		new Word('見捨てる', 'to abandon; to desert', 'みすてる'),
		new Word(
			'捨てる',
			'to throw away; to cast away; to dump; to discard',
			'すてる'
		),
		new Word('使い捨て', 'disposable; throwaway', 'つかいすて'),
		new Word(
			'切り捨てる',
			'to cut down; to truncate; to discard; to cast away',
			'きりすてる'
		),
	]
);
kanji.push(捨);

// 223 果
const 果 = new Kanji(
	'果',
	'fruit; result',
	['KA'],
	['くだ', 'は＊たして'],
	[
		new Word('果物', 'fruit', 'くだもの'),
		new Word('果て', 'the end; the extremity; the limit; the limits', 'はて'),
		new Word(
			'果たして',
			'as was expected; just as one thought; sure enough',
			'はたして'
		),
		new Word('結果', 'result', 'けっか'),
	]
);
kanji.push(果);

// 224 裸
const 裸 = new Kanji(
	'裸',
	'naked; nude',
	['RA'],
	['はだか'],
	[
		new Word('裸', 'nakedness; nudity', 'はだか'),
		new Word('裸足', 'barefoot', 'はだし'),
	]
);
kanji.push(裸);

// 225 訳
const 訳 = new Kanji(
	'訳',
	'translate / reason',
	['YAKU'],
	['わけ'],
	[
		new Word(
			'訳',
			`the reason for something. This is not used by itself, only used in expressions, such as 'XXX訳だ!!' (so that's the reason) or 'XXX訳ではない！' (It can't effing be!!!)`,
			'わけ'
		),
		new Word('言い訳', 'excuse', 'いいわけ'),
		new Word('翻訳', 'translation; / de-encryption; deciphering', 'ほんやく'),
		new Word(
			'通訳',
			'interpretation (i.e. oral translation); interpreter',
			'つうやく'
		),
	]
);
kanji.push(訳);

// 226 胸
const 胸 = new Kanji(
	'胸',
	'chest / breasts',
	['KYOU'],
	['むね'],
	[
		new Word('胸', 'chest / breasts', 'むね'),
		new Word('度胸', 'courage', 'どきょう'),
	]
);
kanji.push(胸);

// 227 夕
const 夕 = new Kanji(
	'夕',
	'evening',
	['SEKI'],
	['ゆう'],
	[
		new Word('夕方', 'evening', 'ゆうがた'),
		new Word('夕焼け', 'sunset', 'ゆうやけ'),
		new Word('夕飯', 'evening meal', 'ゆうはん'),
	]
);
kanji.push(夕);

// 228 飯
const 飯 = new Kanji(
	'飯',
	'meal; boiled rice',
	['HAN'],
	['めし'],
	[
		new Word(
			'飯',
			"literally, cooked rice. But usually used to mean, 'a meal.'",
			'めし'
		),
		new Word('御飯', 'two meanings - 1) cooked rice, 2) a meal', 'ごはん'),
		new Word('夕飯', 'evening meal', 'ゆうはん'),
		new Word('朝ご飯', 'breakfast', 'あさごはん'),
	]
);
kanji.push(飯);

// 229 反
const 反 = new Kanji(
	'反',
	'anti-',
	['HAN'],
	[],
	[
		new Word('反対', 'to be against something', 'はんたい'),
		new Word('反則', 'to break a rule', 'はんそく'),
		new Word('反応', 'a reaction', 'はんのう'),
	]
);
kanji.push(反);

// 230 触
const 触 = new Kanji(
	'触',
	'touch; feel; contact',
	['SHOKU'],
	['ふ＊れる', 'さわ＊る'],
	[
		new Word('触る', 'touch, feel', 'さわる'),
		new Word('触る', 'touch', 'ふれる'),
		new Word(
			'感触',
			`a physical sensation of touch, as in "I've lost all feeling in my left ball." Also can be used as "impression", as in, "What kind of feeling did you get from the interview? Do you think it went well?"`,
			'かんしょく'
		),
	]
);
kanji.push(触);

// 231 昔
const 昔 = new Kanji(
	'昔',
	'once upon a time; long ago',
	['SEKI'],
	['むかし'],
	[new Word('昔', 'long ago; olden days', 'むかし')]
);
kanji.push(昔);

// 232 久
const 久 = new Kanji(
	'久',
	'long time ago; old story',
	['KYUU'],
	['ひさ＊しぶり'],
	[
		new Word('久しぶり', "it's been a long time", 'ひさしぶり'),
		new Word(
			'永久',
			'forever - the more technical / science word for it',
			'えいきゅう'
		),
		new Word('久々', '(in a) long time', 'ひさびさ'),
	]
);
kanji.push(久);

// 233 素
const 素 = new Kanji(
	'素',
	'elementary; element',
	['SO', 'SU'],
	[],
	[
		new Word('素晴らしい', 'wonderful; splendid; magnificent', 'すばらしい'),
		new Word('素敵', 'lovely; wonderful', 'すてき'),
		new Word('素晴らし', 'splendid; magnificent', 'すばらしい'),
		new Word(
			'素材',
			`raw material - both literally and figuratively (as in, the raw data that you base your essay or report or novel on) ("I'm working on materal for my novel!")`,
			'かしゅ'
		),
		new Word('素直', 'obedient; honest', 'すなお'),
	]
);
kanji.push(素);

// 234 新
const 新 = new Kanji(
	'新',
	'new',
	['SHIN'],
	['あたら＊しい'],
	[
		new Word('新しい', 'new', 'あたらしい'),
		new Word('新聞', 'newspaper', 'しんぶん'),
		new Word('新人', 'newcomer; rookie; fresh recruit', 'しんじん'),
	]
);
kanji.push(新);

// 235 親
const 親 = new Kanji(
	'親',
	'parent /  kindness',
	['SHIN'],
	['おや', 'した＊しい'],
	[
		new Word('親', 'parent', 'おや'),
		new Word('親しい', 'close (e.g. friend); familiar; friendly', 'したしい'),
		new Word('親切', 'kind (emphasis on action); gentle', 'しんせつ'),
		new Word('親友', 'best friend', 'しんゆう'),
	]
);
kanji.push(親);

// 236 納
const 納 = new Kanji(
	'納',
	'settle / supply',
	['NA', 'NOU'],
	['おさ＊める'],
	[
		new Word(
			'納める',
			'to pay taxes/school fees/bribes; or to place something in the place/to deliver',
			'おさめる'
		),
		new Word(
			'納得',
			'content; convinced / to give consent (like in a document)',
			'なっとく'
		),
		new Word('納屋', 'shed; barn', 'なや'),
	]
);
kanji.push(納);

// 237 押
const 押 = new Kanji(
	'押',
	'push',
	['OU'],
	['お＊す'],
	[
		new Word('押す', 'to push; to press', 'おす'),
		new Word('押さえる', 'to physically hold down or restrain', 'かしゅ'),
	]
);
kanji.push(押);

// 238 復
const 復 = new Kanji(
	'復',
	'restore; re-do; return to',
	['FUKU'],
	['また'],
	[
		new Word('復活', 'revival; resurrection', 'ふっかつ'),
		new Word(
			'復習',
			"review what you've learned - like vocabulary or even kanji",
			'ふくしゅう'
		),
		new Word('復讐', 'revenge', 'ふくしゅう'),
	]
);
kanji.push(復);

// 239 履
const 履 = new Kanji(
	'履',
	'put on pants or shoes',
	['RI'],
	['は＊く'],
	[
		new Word('履く', 'put on shoes / pants', 'はく'),
		new Word(
			'履行',
			'performance (of a duty); fulfillment (of a promise)',
			'りこう'
		),
	]
);
kanji.push(履);

// 240 棚
const 棚 = new Kanji(
	'棚',
	'shelf',
	['HOU'],
	['たな / だな'],
	[new Word('棚', 'shelf', 'たな')]
);
kanji.push(棚);

// 241 値
const 値 = new Kanji(
	'値',
	'price; cost; value',
	['CHI'],
	['ね', 'あた＊い'],
	[
		new Word('値', 'price; cost', 'ね'),
		new Word(
			'値い',
			'a numerical value in a math or science sense. Angstroms. Light years',
			'あたい'
		),
		new Word('値引き', 'price reduction; discount', 'ねびき'),
		new Word('価値', 'value; worth', 'かち'),
		new Word('値段', 'price; cost', 'ねだん'),
	]
);
kanji.push(値);

// 242 閉
const 閉 = new Kanji(
	'閉',
	'closed; shut',
	['HEI'],
	['し＊める', 'と＊じる'],
	[
		new Word('閉める', 'I shut or close (a door, etc.)', 'しめる'),
		new Word('閉じ込める', 'to lock in; to lock up; to imprison', 'とじこめる'),
		new Word('閉店', 'close the store for the day', 'へいてん'),
	]
);
kanji.push(閉);

// 243 店
const 店 = new Kanji(
	'店',
	'store; shop',
	['TEN'],
	['みせ'],
	[
		new Word(
			'店',
			'	a shop, speaking generally. "I got to go open the shop now." - (The speaker can use this no matter what kind of shop it is).',
			'みせ'
		),
		new Word('閉店', 'close the store for the day', 'へいてん'),
		new Word('店員', 'shop staff', 'てんいん'),
	]
);
kanji.push(店);

// 244 騒
const 騒 = new Kanji(
	'騒',
	'make noise',
	['SOU'],
	['さわ＊ぐ'],
	[new Word('騒がしい', 'it is so noisy/turbulent!!', 'さわがしい')]
);
kanji.push(騒);

// 245 殴
const 殴 = new Kanji(
	'殴',
	'punch; hit',
	['OU'],
	['なぐ＊る'],
	[new Word('殴る', 'to strike; to hit; to beat; to punch', 'なぐる')]
);
kanji.push(殴);

// 246 腹
const 腹 = new Kanji(
	'腹',
	'abdomen; belly; stomach',
	['FUKU'],
	['はら', 'お＊なか'],
	[
		new Word('お腹', 'stomach', 'おなか'),
		new Word('腹', 'stomach', 'はら'),
		new Word('腹がヘタ', "I'm hungry!", 'はらがへた'),
	]
);
kanji.push(腹);

// 247 複
const 複 = new Kanji(
	'複',
	'duplicate; double; compound; multiple',
	['FUKU'],
	[],
	[
		new Word('複雑', 'complex; complicated', 'ふくざつ'),
		new Word('複数', 'plural; multiple; several', 'ふくすう'),
		new Word('複製', 'make a duplicate of something; reprinting', 'ふくせい'),
	]
);
kanji.push(複);

// 248 湯
const 湯 = new Kanji(
	'湯',
	'hot water; bath; hot spring',
	['TOU'],
	['ゆ'],
	[
		new Word('お湯', 'hot water', 'おゆ'),
		new Word('銭湯', 'public bath', 'せんとう'),
		new Word('熱湯', 'boiling water', 'ねっとう'),
	]
);
kanji.push(湯);

// 249 傷
const 傷 = new Kanji(
	'傷',
	'wound; pain; hurt',
	['SHOU'],
	['きず'],
	[
		new Word('傷', 'wound; injury', 'きず'),
		new Word('重傷', 'serious wound; serious injury', 'じゅうしょう'),
		new Word('軽傷', 'minor injury', 'けいしょう'),
		new Word('死傷者', 'casualties; killed and wounded', 'ししょうしゃ'),
	]
);
kanji.push(傷);

// 250 陽
const 陽 = new Kanji(
	'陽',
	'sun',
	['YOU'],
	[],
	[
		new Word('太陽', 'sun', 'たいよう'),
		new Word('陽気', 'cheerful; jovial; merry; lively', 'ようき'),
	]
);
kanji.push(陽);

// 251 眺
const 眺 = new Kanji(
	'眺',
	'gaze; look at',
	['CHOU'],
	['なが＊める'],
	[new Word('眺める', 'to look at; to gaze at', 'ながめる')]
);
kanji.push(眺);

// 252 処
const 処 = new Kanji(
	'処',
	'manage; deal with; dispose of',
	['SHO'],
	[],
	[
		new Word(
			'処理',
			'deal with or take care or manage (an issue, problem, complaint etc)',
			'しょり'
		),
		new Word(
			'処分',
			'dispose of; throw away; sell off / deal with or manage (a problem)',
			'しょぶん'
		),
		new Word('処女', 'female virgin', 'しょじょ'),
	]
);
kanji.push(処);

// 253 此
const 此 = new Kanji(
	'此',
	'this; current; next',
	['SHI'],
	['これ', 'ここ', 'この'],
	[
		new Word('此の前', 'some time ago; recently; lately', 'このまえ'),
		new Word(
			'此の間',
			' during this period; / meanwhile; in the meantime',
			'このあいだ'
		),
		new Word('此処', 'here', 'ここ'),
		new Word('此の頃', 'these days; now; at present', 'このごろ'),
	]
);
kanji.push(此);

// 254 対
const 対 = new Kanji(
	'対',
	'opposite; against; compare',
	['TAI'],
	[],
	[
		new Word(
			'対する',
			'to compare with; to contrast with / to confront; to face',
			'たいする'
		),
		new Word('反対', 'to be against something', 'はんたい'),
		new Word('絶対', 'absolutely, without fail', 'ぜったい'),
	]
);
kanji.push(対);

// 255 説
const 説 = new Kanji(
	'説',
	'explain',
	['SETSU'],
	['と＊く'],
	[
		new Word('説明', 'explanation', 'せつめい'),
		new Word('小説', 'novel', 'しょうせつ'),
		new Word('説得', 'persuade; persuasion', 'せっとく'),
	]
);
kanji.push(説);

// 256 寿
const 寿 = new Kanji(
	'寿',
	'longevity; lifespan / sushi',
	['JU', 'SU'],
	[],
	[
		new Word('寿命', 'life span', 'じゅみょう'),
		new Word('長寿', 'longevity', 'ちょうじゅ'),
		new Word('寿司', 'sushi', 'すし'),
	]
);
kanji.push(寿);

// 257 絵
const 絵 = new Kanji(
	'絵',
	'picture; drawing; painting; sketch',
	['KAI', 'E'],
	[],
	[
		new Word('絵', 'picture; drawing; painting; sketch', 'え'),
		new Word('絵本', 'picture book', 'えほん'),
	]
);
kanji.push(絵);

// 258 常
const 常 = new Kanji(
	'常',
	'usual; ordinary; normal; common',
	['JOU'],
	['つね'],
	[
		new Word('常', 'usual state of things; usually', 'つね'),
		new Word('常に', 'always; constantly', 'つねに'),
		new Word('日常', 'everyday life', 'にちじょう'),
		new Word('非常', 'emergency; / extraordinary; unusual', 'ひじょう'),
	]
);
kanji.push(常);

// 259 奪
const 奪 = new Kanji(
	'奪',
	'rob; steal by force; snatch away',
	['DATSU'],
	['うば＊う'],
	[new Word('奪う', 'to snatch away; to steal by force', 'うばう')]
);
kanji.push(奪);

// 260 宇
const 宇 = new Kanji(
	'宇',
	'cosmos',
	['U'],
	[],
	[
		new Word('宇宙', 'universe; cosmos; space', 'うちゅう'),
		new Word('宇宙人', 'alien', 'うちゅうじん'),
		new Word('宇宙飛行士', 'astronaut', 'うちゅうひこうし'),
	]
);
kanji.push(宇);

// 261 宙
const 宙 = new Kanji(
	'宙',
	'space',
	['CHUU'],
	[],
	[
		new Word('宙', 'space; air; midair', 'ちゅう'),
		new Word('宇宙', 'universe; cosmos; space', 'うちゅう'),
		new Word('宇宙人', 'alien', 'うちゅうじん'),
		new Word('宇宙飛行士', 'astronaut', 'うちゅうひこうし'),
	]
);
kanji.push(宙);

// 262 限
const 限 = new Kanji(
	'限',
	'limit',
	['GEN'],
	['かぎ＊る'],
	[
		new Word('限る', 'to limit; to restrict; to confine', 'かぎる'),
		new Word('限界', 'limit; bound', 'げんかい'),
		new Word('無限', 'infinity; infinitude; eternity', 'むげん'),
		new Word('有限', 'finite; limited', 'ゆうげん'),
		new Word('最低限', 'at the very least; minimum', 'さいていげん'),
	]
);
kanji.push(限);

// 263 滅
const 滅 = new Kanji(
	'滅',
	'annihilate',
	['METSU'],
	['ほろ＊びる'],
	[
		new Word('滅びる', 'to annhilate; to ruin; to get fucked up', ' ほろびる'),
		new Word('自滅', 'self-destruction; ruining oneself', 'じめつ'),
		new Word('消滅', 'extinction; annihilation', 'しょうめつ'),
	]
);
kanji.push(滅);

// 264 有
const 有 = new Kanji(
	'有',
	'exist',
	['YUU'],
	['あ＊る'],
	[
		new Word('有る', 'to exist', 'ある'),
		new Word('有名', 'famous', 'ゆうめい'),
		new Word('有限', 'finite; limited', 'ゆうげん'),
	]
);
kanji.push(有);

// 265 愚
const 愚 = new Kanji(
	'愚',
	'foolish',
	['GU'],
	['おろ＊か'],
	[
		new Word('愚か', 'foolish; stupid', 'おろか'),
		new Word(
			'愚痴',
			'grumble or mutter a complaint over and over - to bitch, whine',
			'ぐち'
		),
	]
);
kanji.push(愚);

// 266 歴
const 歴 = new Kanji(
	'歴',
	'chronicle; permanent record',
	['REKI'],
	[],
	[
		new Word('歴史', 'history', 'れきし'),
		new Word('履歴書', 'resume; work resume', 'りれきしょ'),
	]
);
kanji.push(歴);

// 267 告
const 告 = new Kanji(
	'告',
	'inform',
	['KOKU'],
	['つ＊げる'],
	[
		new Word('告げる', 'to tell', 'つげる'),
		new Word(
			'告白',
			'to confess- for example to a crime or to confess to a crush.',
			'こくはく'
		),
		new Word(
			'報告',
			'a report. 報告 has more of a nuance of a scientific, governmental, or corporate report',
			'ほうこく'
		),
		new Word('通告', 'announcement; notice', 'つうこく'),
	]
);
kanji.push(告);

// 268 賞
const 賞 = new Kanji(
	'賞',
	'prize; reward; praise',
	['SHOU'],
	[],
	[
		new Word('賞', 'prize; award', 'しょう'),
		new Word('賞金', 'prize money', 'しょうきん'),
		new Word('受賞', 'winning (a prize)', 'じゅしょう'),
		new Word(
			'賞状',
			'honorable certificate; honourable certificate',
			'しょうじょう'
		),
	]
);
kanji.push(賞);

// 269 状
const 状 = new Kanji(
	'状',
	'circumstance',
	['JOU'],
	[],
	[
		new Word(
			'状況',
			'context; state of affairs (around you); situation; circumstances',
			'じょうきょう'
		),
		new Word('状態', 'current status; condition', 'じょうたい'),
		new Word(
			'賞状',
			'honorable certificate; honourable certificate',
			'しょうじょう'
		),
		new Word('現状', 'present condition; current state', 'げんじょう'),
	]
);
kanji.push(状);

// 270 画
const 画 = new Kanji(
	'画',
	'drawing; picture',
	['GA'],
	[],
	[
		new Word('映画', 'movie; film', 'えいが'),
		new Word('漫画', 'manga', 'まんが'),
		new Word(
			'計画',
			`Pretty close to 予定　（よてい） in meaning, but perhaps more elaborate - you'd use 計画 to say "I have a plan to get rich!" or to say "I planned out our whole vacation to 3 countries." . . but you wouldn't use 予定。`,
			'けいかく'
		),
		new Word(
			'画面',
			'screen - both movie screen and computer/tv screen',
			'がめん'
		),
		new Word('画家', 'painter; artist', 'がか'),
	]
);
kanji.push(画);

// 271 走
const 走 = new Kanji(
	'走',
	'run',
	['SOU'],
	['はし＊る'],
	[
		new Word('走る', 'run', 'はしる'),
		new Word('走者', 'runner; / base runner', 'そうしゃ'),
	]
);
kanji.push(走);

// 272 起
const 起 = new Kanji(
	'起',
	'rouse; wake up; get up',
	['KI'],
	['お＊こる', 'お＊きる'],
	[
		new Word('起きる', 'to get up; to wake up ', 'おきる'),
		new Word('起こる', 'to occur (incident); to happen', 'おこる'),
	]
);
kanji.push(起);

// 273 遅
const 遅 = new Kanji(
	'遅',
	'slow; late',
	['CHI'],
	['おそ＊い', 'おく＊れ'],
	[
		new Word(
			'遅れ',
			'late; delay; lag; postponement; falling behind',
			'おくれ'
		),
		new Word('遅い', 'slow; time-consuming; sluggish; / late', 'おそい'),
		new Word('手遅れ', "being too late; losing one's final chance", 'ておくれ'),
	]
);
kanji.push(遅);

// 274 逃
const 逃 = new Kanji(
	'逃',
	'escape',
	['TOU'],
	['に＊げる', '逃が＊す'],
	[
		new Word('逃げる', 'run away', 'にげる'),
		new Word(
			'逃す',
			'to let something get awayー an opportunity, or, your prey',
			'のがす'
		),
	]
);
kanji.push(逃);

export default kanji;
