const dialogue = {
	loading:{
		1:{
			txt:[
				"Am I glad I took the plunge and ventured out into the outside world?",
				"―――Elu"
			],
			voice:"01_Natsume.mp3",
		},
		2:{
			txt:[
				"The world is much bigger than it looks in pictures!",
				"―――Natsume-chan"
			],
			voice:"02_Elu.mp3",
		},
	},
	home:{
		sotodura:[
			{
				chara:"natsume",
				txt:[
					"how do you do...,everyone.",
					"Well... good luck finding the blue bird.",
					"Hey, Elu! Not that way!",
					"Uh... sorry..."
				],
				voice:"03_Natsume.mp3",
			},{
				chara:"elu",
				txt:[
					"Isn't it futile to look for blue birds?",
					"Oh, Natsume! Let's go over there!",
					"... I think it would be faster to find and sell them anyway."
				],
				voice:"04_Elu.mp3",
			},
			
		],
		negative:[
			{
				chara:"elu",
				txt:[
					"Huh... can't speak well.",
					"We could have been friends..."
				],
				voice:"05_Elu.mp3",
			},{
				chara:"natsume",
				txt:[
					"If we find the blue bird, we'll fall apart.",
					"You'll only miss them if you befriend them."
				],
				voice:"06_Natsume.mp3",
			},
		],
		happy:[
			{
				chara:"natsume",
				txt:[
					"YEAH!!! Blue bird complete!",
					"For me, it was easy.",
					"I'm going to brag to Maya♪"
				],
				voice:"07_Natsume.mp3",
			},{
				chara:"elu",
				txt:[
					"Why don't we invite Meg and the others and have a time attack together?",
					"I want to have a hot battle!",
					"Hehehe, it's fun, isn't it, Natsume-chan♪"
				],
				voice:"08_Elu.mp3",
			},
		],
	},
	comics:[
		[
			{
				chara:"natsume",
				text:[
					"Elu",
					"Please wake up."
				],
				voice:"09_Natsume.mp3"
			},{
				chara:"elu",
				text:[
					"Natsume-chan",
					"No blue birds over there..."
				],
				voice:"10_Elu.mp3"
			}
		],[
			{
				chara:"natsume",
				text:[
					"I had a weird dream.",
					"because of a game I borrowed from Maya. "
				],
				voice:"11_Natsume.mp3"
			},{
				chara:"elu",
				text:[
					"I've got angels swirling around in my head."
				],
				voice:"12_Elu.mp3"
			},
		],[
			{
				chara:"elu",
				text:[
					"Oh, no...",
					"My birdcage...？"
				],
				voice:"13_Elu.mp3"
			},{
				chara:"natsume",
				text:[
					"Still sleepwalking?",
					"Elu's bag!"
				],
				voice:"14_Natsume.mp3"
			},
		],[
			{
				chara:"elu",
				text:[
					"Hey, Natsume-chan.",
					"I'm still new to the town.",
					"I'm glad they accept us as we are."
				],
				voice:"15_Elu.mp3"
			},
		],[
			{
				chara:"natsume",
				text:[
					"Yeah, I'm glad too.",
					"I hope there will be more fun things to come.",
					"Elu"
				],
				voice:"16_Natsume.mp3"
			},
		],[
			{
				chara:"elu",
				text:[
					"I wonder what the reaction would be if I told everyone in the Rabbit House.",
					"the dream story"
				],
				voice:"17_Elu.mp3"
			},{
				chara:"natsume",
				text:[
					"I wonder if they'll give me funny looks.",
					"They were all little angels..."
				],
				voice:"18_Natsume.mp3"
			},
		]
	]
}
/*loading*/
const loadingImg = [];
const loadingImgName = ['rabbit.png','amp.png','brightbunny.png'];
for(let i=0;i<loadingImgName.length;i++){
	loadingImg[i] = new Image();
	loadingImg[i].src = 'core_sys/images/main/loading/'+loadingImgName[i];
}
/*home*/
let homeImg = [];
const homeImgName = ['chara_02.png','door.png','logo.png','playbtn.png','secretbtn.png','torikago.png','happy.png','special.png','chara_01.png','chara_03.png'];
for(let i=0;i<homeImgName.length;i++){
	homeImg[i] = new Image();
	homeImg[i].src = 'core_sys/images/main/home/'+homeImgName[i];
}
/*story*/
let storyImg = [];
const storyImgName = ['bg.jpg','logo.png','saki.png','natsume.png','elu.png'];
for(let i=0;i<storyImgName.length;i++){
	storyImg[i] = new Image();
	storyImg[i].src = 'core_sys/images/main/story/'+storyImgName[i];
}
/*start*/
let startImg = [];
const startImgName = ['bg.jpg','door1.png','door2.png','door3.png','door4.png','door5.png','door6.png','door7.png'];
for(let i=0;i<startImgName.length;i++){
	startImg[i] = new Image();
	startImg[i].src = 'core_sys/images/main/start/'+startImgName[i];
}
/*game*/
let gameImg = [];
const gameImgName = ['kv.png','chara01.png','chara02.png','egg.png','clear.png'];
for(let i=1;i<=6;i++){
	const imgNum = ( '00' + i ).slice( -2 );
	for(let x=0;x<gameImgName.length;x++){
		gameImg[imgNum+x] = new Image();
		gameImg[imgNum+x].src = 'core_sys/images/main/game/'+imgNum+'_'+gameImgName[x];
	}
}
gameImg[99] = new Image();
gameImg[99].src = 'core_sys/images/main/game/ed.png';

let gameCommonImg = [];
const gameCommonImgName = ['circle.png','kv_circle.png','kv_circle_on.png','natsume.png','elu.png','select.png','ed.png'];
for(let i=0;i<gameCommonImgName.length;i++){
	gameCommonImg[i] = new Image();
	gameCommonImg[i].src = 'core_sys/images/main/game/'+gameCommonImgName[i];
}
/*House*/
let houseImg = [];
const houseImgName = ['cocoa.png','rize.png','chiya.png','syaro.png','maya.png','megu.png','chino.png','fuyu.png','special.png','bird.png',];
for(let i=0;i<houseImgName.length;i++){
	houseImg[i] = new Image();
	houseImg[i].src = 'core_sys/images/main/house/'+houseImgName[i];
}
/*chara*/
let charaImg = [];
const charaImgName = ['cocoa.jpg','rize.jpg','chiya.jpg','syaro.jpg','maya.jpg','megu.jpg','chino.jpg','fuyu.jpg'];
for(let i=0;i<charaImgName.length;i++){
	charaImg[i] = new Image();
	charaImg[i].src = 'core_sys/images/main/chara/'+charaImgName[i];
}
/*comics*/
let comicsImg = [];
const comicsImgName = ['1.png','2.png','3.png','4.png','5.png','6.png','next.png','ending_coffee.jpg'];
for(let i=0;i<comicsImgName.length;i++){
	comicsImg[i] = new Image();
	comicsImg[i].src = 'core_sys/images/main/comics/'+comicsImgName[i];
}

/*special*/
const specialImgDir = 'core_sys/images/main/special/';
let specialImg = [];
const specialImgName = ['bg.jpg'];
for(let i=0;i<specialImgName.length;i++){
	specialImg[i] = new Image();
	specialImg[i].src = specialImgDir+specialImgName[i];
}
let specialCharaImg = [];
let specialCharaEggImg = [];
const specialCharaName = ['cocoa','rize','chiya','syaro','maya','megu','chino','fuyu'];
const specialCharaImgType = ['.jpg?2','_egg.jpg?2']
for(let i=0;i<specialCharaName.length;i++){
	specialCharaImg[specialCharaName[i]] = new Image();
	specialCharaImg[specialCharaName[i]].src = specialImgDir+specialCharaName[i]+specialCharaImgType[0];
	specialCharaEggImg[specialCharaName[i]] = new Image();
	specialCharaEggImg[specialCharaName[i]].src = specialImgDir+specialCharaName[i]+specialCharaImgType[1];
}


const charaToNum = {cocoa:1,rize:6,chiya:3,syaro:4,maya:5,megu:2,chino:7,fuyu:8,special:9};
const numToChara = ['cocoa','megu','chiya','syaro','maya','rize','chino','fuyu','special'];


const tags = {
	copyright:'<div class="copyright"><p>©Koi・芳文社／ご注文はBLOOM製作委員会ですか？<br>このホームページに掲載されている一切の文書・図版・写真等を、手段や形態を問わず複製、転載することを禁じます。</p></div>',
	loading:'<div class="loading__wrap"><div class="loading__inner"><div class="loading__logo"><ul><li><img src="'+loadingImg[0].src+'"></li><li><img src="'+loadingImg[1].src+'"></li><li><img src="'+loadingImg[2].src+'"></li></ul><p>PRESENTS</p></div><div class="loading__txt"></div></div></div>',
	home:'<div class="home__wrap">'+
		'	<div class="home__inner">'+
		'		<div class="home__kv">'+
		'			<div class="home__chara">'+
		'				<img src="'+homeImg[0].src+'">'+
		'			</div>'+
		'			<div class="home__dialogue">'+
		'				<div class="home__dialogue-natsume">'+
		'					<div class="home__dialogue-name">Natsume</div>'+
		'					<div class="home__dialogue-txt"></div>'+
		'				</div>'+
		'				<div class="home__dialogue-elu">'+
		'					<div class="home__dialogue-name">Elu</div>'+
		'					<div class="home__dialogue-txt"></div>'+
		'				</div>'+
		'			</div>'+
		'		</div>'+
		'		<div class="home__menu">'+
		'			<div class="home__logo">'+
		'				<img src="'+homeImg[2].src+'">'+
		'			</div>'+
		'			<div class="home__voice">'+
		'				<h2>Voice</h2>'+
		'				<ul>'+
		'					<li>'+
		'						<button type="button" data-type="sotodura">'+
		'							<span>Unduly Distant</span>'+
		'							<img src="'+homeImg[3].src+'">'+
		'						</button>'+
		'					</li>'+
		'					<li>'+
		'						<button type="button" data-type="negative">'+
		'							<span>Negative Mode</span>'+
		'							<img src="'+homeImg[3].src+'">'+
		'						</button>'+
		'					</li>'+
		'					<li>'+
		'						<button type="button" data-type="secret">'+
		'							<span></span>'+
		'							<img src="'+homeImg[4].src+'">'+
		'						</button>'+
		'					</li>'+
		'				</ul>'+
		'			</div>'+
		'			<div class="home__game">'+
		'				<h2>Game</h2>'+
		'				<ul>'+
		'					<li>'+
		'						<button type="button" data-type="story">'+
		'							<span>STORY</span>'+
		'							<img src="'+homeImg[5].src+'">'+
		'						</button>'+
		'					</li>'+
		'					<li>'+
		'						<button type="button" data-type="start">'+
		'							<span>START</span>'+
		'							<img src="'+homeImg[1].src+'">'+
		'						</button>'+
		'					</li>'+
		'				</ul>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+
		'</div>',
	story:'<div class="story">'+
		'	<div class="story__inner">'+
		'		<div class="story__bg"><span><img src="'+storyImg[0].src+'"></span></div>'+
		'		<div class="story__main">'+
		'			<div class="story__txt">'+
		'				We were in a small world.<br>And we had lots of free time.<br>So we had a question.<br>What is <span class="blue">happiness</span>?</div>'+
		'			<div class="story__logo">'+
		'				<img src="'+storyImg[1].src+'">'+
		'			</div>'+
		'			<div class="story__dialogue">'+
		'				<dl class="story__dialogue-right">'+
		'					<dt><img src="'+storyImg[2].src+'"></dt>'+
		'					<dd>I am a traveling wizard<br>I hear the call for happiness from here.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[3].src+'"></dt>'+
		'					<dd>Suspicious person.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[4].src+'"></dt>'+
		'					<dd>I have to call the police.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-right">'+
		'					<dt><img src="'+storyImg[2].src+'"></dt>'+
		'					<dd>Is the order a <span class="blue">happiness</span>?<br>Now please go find the <span class="blue">blue bird</span>.<br><br>My daughter suffers from <span class="blue">blue bird </span>deficiency,<br> and if you find her, I will tell her <span class="blue">happiness</span>.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[3].src+'"></dt>'+
		'					<dd>It is like a scam.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[4].src+'"></dt>'+
		'					<dd>Yeah, I read that in some book.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[3].src+'"></dt>'+
		'					<dd>But I can go look for you. Im not busy.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[4].src+'"></dt>'+
		'					<dd>If she is suffering, we must help her!</dd>'+
		'				</dl>'+
		'			</div>'+
		'			<div class="story__txt">'+
		'				We jumped out of our narrow birdcages<br>in search of <span class="blue">happiness</span>.'+
		'			</div>'+
		'			<div class="story__button">'+
		'				<button type="button" data-type="start">'+
		'					<img src="'+homeImg[1].src+'">'+
		'					<span>START</span>'+
		'				</button>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+
		'</div>',
	start:[
		'<div class="start"><div class="start__inner"><div class="start__bg"><span><img src="'+startImg[0].src+'"></span></div><div class="start__main"><div class="start__txt">They say there is a blue bird egg at the end of the door.<br>You have to find the egg and hatch the blue bird.</div><div class="start__list"><ul>',
		'</ul></div><div class="start__button"><button type="button" data-type="home"><img src="'+homeImg[1].src+'"><span>HOME</span></button></div></div></div></div>',
	],
	startList:['森のパン屋さん','思い出の大都会','幸福の花園','夜の街','未来遺跡','墓場城','エルとナツメの家'],
	game:'<div class="game"><div class="game__read"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div><div class="game__inner"><div class="game__question"><div class="game__kv"><div class="game__title"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div><div class="game__charaName"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div><div class="game__charaImg"><img src=""></div><div class="game__kvImg"><img src=""><div class="game__line"></div><div class="game__circle"></div><div class="game__egg"><img src=""></div></div></div><div class="game__txt"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div></div><div class="game__answer"><ul><li class="game__answer-01"><div class="game__answer-txt"></div><div class="game__answer-button"><button type="button" data-answer="1"><img src="core_sys/images/main/game/select.png"></button></div></li><li class="game__answer-02"><div class="game__answer-txt"></div><div class="game__answer-button"><button type="button" data-answer="2"><img src="core_sys/images/main/game/select.png"></button></div></li></ul></div></div></div>',
	stageClear:'<div class="clear"><div class="clear__inner"><div class="clear__head"><div class="clear__name"><div class="clear__name-egg"><img src=""></div><div class="clear__name-name"></div></div><div class="clear__comment"></div></div><div class="clear__body"><div class="clear__chara"><img src="" alt=""></div><div class="clear__dialogue"><ul><li class="clear__dialogue-elu"><div class="clear__dialogue-txt"></div></li><li class="clear__dialogue-natsume"><div class="clear__dialogue-txt"></div></li></ul></div></div><div class="clear__button"><button type="button">STAGE CLEAR</button></div></div><div class="clear__read" style="display:none"><div class="clear__read-txt"></div><div class="clear__read-bg"></div></div></div>',
	house:[
		'<div class="house"><div class="house__inner"><div class="house__bg"><span><img src="'+storyImg[0].src+'"></span></div><div class="house__main"><div class="house__head">見つけた鳥を確認できます</div><div class="house__list"><ul>',
		'</ul></div><div class="house__button"><button type="button" class="house__button-bird"><div class="house__button-ph"><img src="'+houseImg[9].src+'"></div><div class="house__button-cap">最近よく来る鳥です<br>気にしないでください</div></button><button type="button" class="house__button-door" data-type="start"><div class="house__button-ph"><img src="'+homeImg[1].src+'"></div><div class="house__button-cap">Back</div></button></div></div></div></div>'
	],
	chara:'<div class="chara"><div class="chara__inner"><div class="chara__img"><img src=""></div><div class="chara__txt"><div class="chara__comment"></div><div class="chara__head"><div class="chara__name"><div class="chara__name-egg"><img src=""></div><div class="chara__name-name"></div></div><div class="chara__head-ph"><img src=""></div></div><div class="chara__dialogue"><ul><li class="chara__dialogue-elu"><div class="chara__dialogue-txt"></div></li><li class="chara__dialogue-natsume"><div class="chara__dialogue-txt"></div></li></ul></div><div class="chara__button"><button type="button" class="chara__button-dl"><div class="house__button-ph"><img src="core_sys/images/main/chara/dl.png"></div><div class="house__button-cap">拍照</div></button><button type="button" class="chara__button-door" data-stage="07"><div class="house__button-ph"><img src="core_sys/images/main/start/door7.png"></div><div class="house__button-cap">Exit Room</div></button></div></div></div></div>',
	comics:'<div class="comics"><div class="comics__inner"><div class="comics__ph"><img src="core_sys/images/main/game/ed.png" ></div><div class="comics__dialogue"><ul><li class="comics__dialogue-elu"><div class="comics__dialogue-name">Elu</div><div class="comics__dialogue-txt"></div></li><li class="comics__dialogue-natsume"><div class="comics__dialogue-name">Natsume</div><div class="comics__dialogue-txt"></div></li></ul></div></div></div>',
	fakeAds:'<div class="fakeAds"><div class="fakeAds__inner"><img src="'+comicsImg[7].src+'"></div></div>',
	special:'<div class="special"><div class="special__inner"><div class="special__bg"><span><img src="'+specialImg[0].src+'"></span></div><div class="special__main"><ul class="special__imgs"><li><div class="special__head"></div><div class="special__ph"><a href="#" download><img src="#" alt=""></a></div></li><li><div class="special__head"></div><div class="special__ph"><a href="#" download><img src="#" alt=""></a></div></li></ul><div class="special__button"><button type="button" class="special__button-home"><div class="special__button-ph"><img src="'+homeImg[1].src+'"></div><div class="special__button-cap">Exit Room</div></button></div></div></div></div>',
}
const stageTxt = {
	game:{
		'01':{
			title:"森のパン屋さん",
			read:"Bread Bread Bread Festival is underway!<br>Look for blue bird eggs in a large amount of baked bread.",
			fail:"I'm so full I don't think I can eat anymore<br>No choice, let's go home today.",
			1:{
				charaName:"chiyoko(Cocoa Mother)",
				txt:"Why don't we find the eggs later?<br>How about all-you-can-eat bread?<br>I am happy to be surrounded by bread.",
				answer01:"Um... well, just a few things...",
				answer02:"Overcome the temptation of the aroma of bread",
				answer:2
			},
			2:{
				charaName:"mocha",
				txt:"Welcome! What, the key to the egg room?<br>I put it in the bread as a surprise!<br>Well, which was it?",
				answer01:"Giant Special Keema Curry Bread",
				answer02:"Giant sticky melon bread",
				answer:1
			}
		},
		'02':{
			title:"思い出の大都会",
			read:"Big city...first time here and not first time...?<br>My feet naturally start to move...",
			fail:"Something is different...<br>I found myself back at home...",
			1:{
				charaName:"Weird girl I met in the city.",
				txt:"（Spa facility landscape expands…）And the twins can join me in the sauna!<br>",
				answer01:"Okay, let's play me.",
				answer02:"No! Fighting is not good!",
				answer:1
			},
			2:{
				charaName:"Interesting girl I met in the city.",
				txt:"（The landscape of a game center expands.）Hey, let's dance! This dance game is fun!<br>",
				answer01:"I'd love to play VR games.",
				answer02:"All right! Dance with me!",
				answer:2
			}
		},
		'03':{
			title:"幸福の花園",
			read:"The fragrance of flowers spreads.<br>I want to stay here forever, but I have to move on.",
			fail:"Kicked out of the flower garden...<br>Let's start over...",
			1:{
				charaName:"あんこ",
				txt:"A giant flower garden guardian is in the way...<br>There are wooden sticks and fluffy white fluff balls at his feet.",
				answer01:"throw a stick",
				answer02:"Throwing white furballs",
				answer:2
			},
			2:{
				charaName:"Grandmother of chiya",
				txt:"People who destroy the flower garden, go home!Take some chestnut buns and yokan as souvenirs.<br>What, you want a ginger bun too?You're so greedy...!",
				answer01:"And while you're at it, please give me a blue bird egg.",
				answer02:"Thank you, Grandma!",
				answer:1
			}
		},
		'04':{
			title:"夜の街",
			read:"The novelist's mansion is guarded by rabbit cops...<br>Sneak in with the thief and take the treasure eggs!",
			fail:"They called the cops and the rabbit cops caught me<br>and sent me home.",
			1:{
				charaName:"凛さん",
				txt:"Wow, you are the thief Lapin!<br>Let me see!A special move straight from Lapin the Phantom Thief!",
				answer01:"Royal Straight Flush! ",
				answer02:"Royal Full House! Right.",
				answer:1
			},
			2:{
				charaName:"青山ブルーマウンテン",
				txt:"Please take a look at my full-length security! If you can't break through, let me interview you!The clue is 'ruby,sapphire, emerald'.",
				answer01:"Press the buttons in the order of red, green, and blue.",
				answer02:"Press the buttons in the order of red, blue, and green.",
				answer:2
			}
		},
		'05':{
			title:"未来遺跡",
			read:"Outsmart the other treasure hunters<br>and get the egg, the hidden treasure of the ruins!",
			fail:"We failed ...<br>No choice, let's come back out.",
			1:{
				charaName:"ユラ",
				txt:"The barrier is in the way and you can't get through this end!<br>I can see the release button in the distance, but I can't seem to reach it.<br>Oh no!",
				answer01:"Is that blowgun for decoration? Why don't you use that?",
				answer02:"Let's throw some rocks.",
				answer:2
			},
			2:{
				charaName:"タカヒロ",
				txt:"I'm Takahiro, a treasure hunter chasing a dream.I'm going to take the treasure.",
				answer01:"Please work diligently. Your family will cry.",
				answer02:"The twins bonded to boldly take on the challenge!",
				answer:1
			}
		},
		'06':{
			title:"墓場城",
			read:"The dead are resting in peace...<br>Try to pass through as quietly as possible without the grave keeper noticing.",
			fail:"The tomb guard found me...<br>No choice, let's go back.",
			1:{
				charaName:"委員長",
				txt:"Hello.It's my classmate band<br>I'm gonna practice now since no one else is coming!",
				answer01:"move on quietly",
				answer02:"listen to a performance",
				answer:1
			},
			2:{
				charaName:"リゼ父",
				txt:"This is where the dead sleep...But sometimes the dead like to make noise! Listen to me, my song! ",
				answer01:"take away the microphone",
				answer02:"Please work diligently. Your family will cry.",
				answer:1
			}
		},
	},
	clear:{
		'01':{
			name:'ここあ',
			comment:'Im your newborn sister.Leave it to your sister!',
			dialogue:[
				'Wow, she smells like bread!',
				'But Im full of bread and happiness overload...'
			],
			result:'The egg I brought home was not a blue bird<br>*I can now check ここあ.',
		},
		'02':{
			name:'めぐ',
			comment:'Wow, this sounds like a cold!<br>You need a heart transplant!<br>Surgery is about to begin!',
			dialogue:[
				'If anything happens to Natsume＇s heart, Ill be your donor!',
				'What about Elu？'
			],
			result:'The egg I brought home was not a blue bird<br>*I can now check めぐ',
		},
		'03':{
			name:'ちや',
			comment:'Do you prefer mashed sweet bean paste? Do you prefer strained bean paste?',
			dialogue:[
				'Im a mixer！',
				'I kind of want some yokan bread…'
			],
			result:'The egg I brought home was not a blue bird<br>*I can now check ちや',
		},
		'04':{
			name:'しゃろ',
			comment:'You are trying to turn me into a roasted chicken, aren＇t you...!scary...!',
			dialogue:[
				'It is okay! We are just going to abduct you for a minute!',
				'Elu, the way you say it! I＇m just taking you home!'
			],
			result:'The egg I brought home was not a blue bird<br>*I can now check シャロ',
		},
		'05':{
			name:'まや',
			comment:'What is with the eyes?Penguins are great birds too!',
			dialogue:[
				'It is a penguin, but it is got feathers on its back!',
				'Wow, it is both land and air.'
			],
			result:'The egg I brought home was not a blue bird<br>*I can now check まや',
		},
		'06':{
			name:'りぜ',
			comment:'Only the bad ones survive.<br>Rize... is a bad girl... she sneaked out and ate the cake.',
			dialogue:[
				'After all, the only way to survive... is to be evil...',
				'Is that a line from some movie?'
			],
			result:'The egg I brought home was not a blue bird<br>*I can now check リゼ',
		},
		'07':{
			name:'ちの',
			comment:'This white fluffy thing is my best friend Tippy<br>Grandpa＇s eyelashes are a charm point.',
			dialogue:[
				'It smells like the coffee I＇ve always wanted to drink.',
				'We hope you will be our exclusive barista in the future.'
			],
			result:'The egg I brought home was not a blue bird<br>*I can now check ちの',
		},
		'08':{
			name:'ふゆ',
			comment:'<br>Do you like ......... bird?Well, it is the cats I like.',
			dialogue:[
				'What? Ventriloquism, great!',
				'Do more of it!'
			],
			result:'The egg I brought home was not a blue bird<br>*I can now check ふゆ',
		},
	},
	ending:[
		{
			elu:"Blue bird! Blue bird!",
			natsume:"We have to capture them!",
		},{
			saki:"Thank you very much.<br>The daughter seem to have realized that they are bluebirds."
		},{
			natsume:"We are glad to know the world too.<br>I think it changed the way we see and feel.",
			elu:"The 'blue bird of happiness' is all around us.",
		},{
			natsume:"In other words, stay home!<br>Rooms are full of fun!",
			elu:"Great to lie down and play games!<br>And the snacks are delicious!",
		},{
			saki:"But now the game is over.<br>It's time to wake up.<br>And wings of the blue bird is on your backs as well..."
		}
	],
}
