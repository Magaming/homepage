const clock = document.getElementById('clock');
const tick = () => {
	const d = new Date();
	const hh = String(d.getHours()).padStart(2, '0');
	const mm = String(d.getMinutes()).padStart(2, '0');
	clock.textContent = `${hh}:${mm}`;
};
tick();
setInterval(tick, 30000);

const SEASONS = {
	'初春': {
		months: [1, 2],
		phrases: [
			'寒椿が静かに咲いています。',
			'白い息を吐きながら歩く朝。',
			'梅の蕾がほころびはじめました。',
			'冬の終わりは、まだもう少し先。',
			'湯気の立つマグカップが手放せない。',
		],
	},
	'春': {
		months: [3, 4, 5],
		phrases: [
			'桜のたよりが届く頃となりました。',
			'新年度のはじまり。心機一転、いきましょう。',
			'春眠暁を覚えず、と言いますが…。',
			'やわらかな日差しに猫が伸びをする季節。',
			'風に花びらが舞っています。',
			'GWの予定はもう立てましたか？',
		],
	},
	'梅雨': {
		months: [6],
		phrases: [
			'雨音の心地よい季節になりました。',
			'あじさいが色づく頃。',
			'傘を忘れて駆け出さないように。',
			'長靴の似合う日が続きます。',
			'雨上がりの匂いが好きです。',
		],
	},
	'夏': {
		months: [7, 8],
		phrases: [
			'蝉時雨に夏を感じます。',
			'かき氷の旗が揺れる午後。',
			'遠くで花火の音が聞こえそうな夜。',
			'冷たい麦茶が沁みます。',
			'夕立のあと、空が高くなる。',
			'扇風機の前で「あ゛ーーー」と言いたい。',
		],
	},
	'秋': {
		months: [9, 10, 11],
		phrases: [
			'紅葉が静かに色づく頃。',
			'食欲の秋、芸術の秋。何の秋にしますか？',
			'月が美しい夜です。',
			'金木犀の香りに、ふと足が止まる。',
			'長袖を一枚、出しておきましょう。',
			'秋の夜長は本がよく進みます。',
		],
	},
	'冬': {
		months: [12],
		phrases: [
			'雪降る夜は静かに過ごしたい。',
			'こたつとみかんがあれば無敵。',
			'年の瀬ですね。今年はどんな一年でしたか？',
			'冷えた手をポケットに、家路を急ぐ。',
			'マフラーがあたたかい季節です。',
		],
	},
};

const findSeason = (month) => {
	for (const [name, data] of Object.entries(SEASONS)) {
		if (data.months.includes(month)) return { name, phrases: data.phrases };
	}
	return { name: '今', phrases: ['よい一日を。'] };
};

const pickSeasonPhrase = () => {
	const month = new Date().getMonth() + 1;
	const season = findSeason(month);
	const phrase = season.phrases[Math.floor(Math.random() * season.phrases.length)];
	document.getElementById('season-label').textContent = `> [ ${season.name} ] からの一言`;
	document.getElementById('season-phrase').textContent = phrase;
};
pickSeasonPhrase();
