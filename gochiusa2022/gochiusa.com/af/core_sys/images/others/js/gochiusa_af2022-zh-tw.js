const dialogue = {
	loading:{
		1:{
			txt:[
				"好想要盡情地朝向外面的世界飛去啊",
				"―――映月"
			],
			voice:"01_Natsume.mp3",
		},
		2:{
			txt:[
				"這世界並不只是空有景色，還很遼闊呢",
				"―――夏明醬"
			],
			voice:"02_Elu.mp3",
		},
	},
	home:{
		sotodura:[
			{
				chara:"natsume",
				txt:[
					"各位今日貴安。",
					"那個...如果能找到青鳥的話就好了呢！",
					"等等，映月！不是那個方向喔！",
					"啊...失禮了..."
				],
				voice:"03_Natsume.mp3",
			},{
				chara:"elu",
				txt:[
					"如果只是單純尋找青鳥那不是很浪費時間嗎？",
					"啊！夏明醬！去那邊看看吧！",
					"...總之我覺得請別人找再跟他們收購會比較快。"
				],
				voice:"04_Elu.mp3",
			},
			
		],
		negative:[
			{
				chara:"elu",
				txt:[
					"唉…沒辦法順利搭話啊",
					"明明已經感覺相處得很融洽了…"
				],
				voice:"05_Elu.mp3",
			},{
				chara:"natsume",
				txt:[
					"就算找到青鳥終要迎來離別",
					"即使相處很融洽也只會留下寂寞"
				],
				voice:"06_Natsume.mp3",
			},
		],
		happy:[
			{
				chara:"natsume",
				txt:[
					"太——好——啦—！青鳥全部蒐集完成了！",
					"有我在這種事只是小菜一疊啦！",
					"來去和麻耶炫耀一下♪"
				],
				voice:"07_Natsume.mp3",
			},{
				chara:"elu",
				txt:[
					"要不要把小惠他們叫來，大家一起來個競速通關呢？",
					"真想來場熱血沸騰的對戰啊！",
					"欸嘿嘿，感覺很開心對吧，夏明醬♪"
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
					"映月",
					"快起床快起床"
				],
				voice:"09_Natsume.mp3"
			},{
				chara:"elu",
				text:[
					"夏明醬",
					"那裡沒有青鳥啦..."
				],
				voice:"10_Elu.mp3"
			}
		],[
			{
				chara:"natsume",
				text:[
					"好奇怪的夢啊",
					"一定是跟麻耶借來的遊戲害的"
				],
				voice:"11_Natsume.mp3"
			},{
				chara:"elu",
				text:[
					"腦袋中好像有天使在轉來轉去～"
				],
				voice:"12_Elu.mp3"
			},
		],[
			{
				chara:"elu",
				text:[
					"啊咧～",
					"我的鳥籠呢～？"
				],
				voice:"13_Elu.mp3"
			},{
				chara:"natsume",
				text:[
					"還沒睡醒啊",
					"拿好！映月妳的書包"
				],
				voice:"14_Natsume.mp3"
			},
		],[
			{
				chara:"elu",
				text:[
					"吶，夏明醬",
					"雖然我們才剛來這木造小鎮沒多久",
					"但我們能以自己原本的樣子被大家接納，真的很高興呢"
				],
				voice:"15_Elu.mp3"
			},
		],[
			{
				chara:"natsume",
				text:[
					"嗯！能遇見大家真的是太好了",
					"希望從今以後快樂的事會越來越多",
					"映月"
				],
				voice:"16_Natsume.mp3"
			},
		],[
			{
				chara:"elu",
				text:[
					"如果向Rabbit House的大家分享剛剛夢裡發生的事",
					"不知道會有什麼反應"
				],
				voice:"17_Elu.mp3"
			},{
				chara:"natsume",
				text:[
					"也許會露出疑惑的表情吧",
					"畢竟大家都變成小小的天使之類的"
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
	copyright:'<div class="copyright"><p>©Koi・芳文社／ご注文はBLOOM製作委員会ですか？</p></div>',
	loading:'<div class="loading__wrap"><div class="loading__inner"><div class="loading__logo"><ul><li><img src="'+loadingImg[0].src+'"></li><li><img src="'+loadingImg[1].src+'"></li><li><img src="'+loadingImg[2].src+'"></li></ul><p>PRESENTS</p></div><div class="loading__txt"></div></div></div>',
	home:'<div class="home__wrap">'+
		'	<div class="home__inner">'+
		'		<div class="home__kv">'+
		'			<div class="home__chara">'+
		'				<img src="'+homeImg[0].src+'">'+
		'			</div>'+
		'			<div class="home__dialogue">'+
		'				<div class="home__dialogue-natsume">'+
		'					<div class="home__dialogue-name">夏明</div>'+
		'					<div class="home__dialogue-txt"></div>'+
		'				</div>'+
		'				<div class="home__dialogue-elu">'+
		'					<div class="home__dialogue-name">映月</div>'+
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
		'							<span>籠外模式</span>'+
		'							<img src="'+homeImg[3].src+'">'+
		'						</button>'+
		'					</li>'+
		'					<li>'+
		'						<button type="button" data-type="negative">'+
		'							<span>消極模式</span>'+
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
		'				我們  雖處於這狹小的世界中<br>然而  卻擁有許多空閒時間可以思考<br>但是  總是有疑問迴盪於腦海中<br><span class="blue">幸福</span>  到底是什麼樣的存在呢？'+
		'			</div>'+
		'			<div class="story__logo">'+
		'				<img src="'+storyImg[1].src+'">'+
		'			</div>'+
		'			<div class="story__dialogue">'+
		'				<dl class="story__dialogue-right">'+
		'					<dt><img src="'+storyImg[2].src+'"></dt>'+
		'					<dd>我是旅行的魔法師<br>從這裡可以聽見有人正在追求幸福</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[3].src+'"></dt>'+
		'					<dd>太可疑了</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[4].src+'"></dt>'+
		'					<dd>得趕快報警</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-right">'+
		'					<dt><img src="'+storyImg[2].src+'"></dt>'+
		'					<dd>請問您今天要來點<span class="blue">幸福</span>嗎？<br>那麼就請您們出發去尋找<span class="blue">青鳥</span>吧<br><br>我的女兒現在飽受<span class="blue">青鳥</span>缺乏症之苦<br>如果幫我找到的話就告訴您們何謂<span class="blue">幸福</span>吧！</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[3].src+'"></dt>'+
		'					<dd>是詐欺的話術</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[4].src+'"></dt>'+
		'					<dd>嗯，以前有在哪本書之中讀過</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[3].src+'"></dt>'+
		'					<dd>不過要去找也是可以哦  畢竟很閒</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[4].src+'"></dt>'+
		'					<dd>如果有人為病所苦的話還是要出手相救</dd>'+
		'				</dl>'+
		'			</div>'+
		'			<div class="story__txt">'+
		'				我們　從狹小的鳥籠中飛向外頭<br>為了尋找<span class="blue">幸福</span>'+
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
		'<div class="start"><div class="start__inner"><div class="start__bg"><span><img src="'+startImg[0].src+'"></span></div><div class="start__main"><div class="start__txt">聽說穿過這扇門好像就有青鳥的蛋<br>找到蛋並且孵化青鳥吧！</div><div class="start__list"><ul>',
		'</ul></div><div class="start__button"><button type="button" data-type="home"><img src="'+homeImg[1].src+'"><span>START</span></button></div></div></div></div>',
	],
	startList:['森林中的麵包店','回憶中的大城市','幸福的花園','夜晚的街道','未來遺跡','墓場城','映月和夏明的家'],
	game:'<div class="game"><div class="game__read"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div><div class="game__inner"><div class="game__question"><div class="game__kv"><div class="game__title"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div><div class="game__charaName"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div><div class="game__charaImg"><img src=""></div><div class="game__kvImg"><img src=""><div class="game__line"></div><div class="game__circle"></div><div class="game__egg"><img src=""></div></div></div><div class="game__txt"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div></div><div class="game__answer"><ul><li class="game__answer-01"><div class="game__answer-txt"></div><div class="game__answer-button"><button type="button" data-answer="1"><img src="core_sys/images/main/game/select.png"></button></div></li><li class="game__answer-02"><div class="game__answer-txt"></div><div class="game__answer-button"><button type="button" data-answer="2"><img src="core_sys/images/main/game/select.png"></button></div></li></ul></div></div></div>',
	stageClear:'<div class="clear"><div class="clear__inner"><div class="clear__head"><div class="clear__name"><div class="clear__name-egg"><img src=""></div><div class="clear__name-name"></div></div><div class="clear__comment"></div></div><div class="clear__body"><div class="clear__chara"><img src="" alt=""></div><div class="clear__dialogue"><ul><li class="clear__dialogue-elu"><div class="clear__dialogue-txt"></div></li><li class="clear__dialogue-natsume"><div class="clear__dialogue-txt"></div></li></ul></div></div><div class="clear__button"><button type="button">STAGE CLEAR</button></div></div><div class="clear__read" style="display:none"><div class="clear__read-txt"></div><div class="clear__read-bg"></div></div></div>',
	house:[
		'<div class="house"><div class="house__inner"><div class="house__bg"><span><img src="'+storyImg[0].src+'"></span></div><div class="house__main"><div class="house__head">可以確認發現的鳥的樣子</div><div class="house__list"><ul>',
		'</ul></div><div class="house__button"><button type="button" class="house__button-bird"><div class="house__button-ph"><img src="'+houseImg[9].src+'"></div><div class="house__button-cap">最近常飛來的鳥<br>請不用在意沒關係</div></button><button type="button" class="house__button-door" data-type="start"><div class="house__button-ph"><img src="'+homeImg[1].src+'"></div><div class="house__button-cap">出去</div></button></div></div></div></div>'
	],
	chara:'<div class="chara"><div class="chara__inner"><div class="chara__img"><img src=""></div><div class="chara__txt"><div class="chara__comment"></div><div class="chara__head"><div class="chara__name"><div class="chara__name-egg"><img src=""></div><div class="chara__name-name"></div></div><div class="chara__head-ph"><img src=""></div></div><div class="chara__dialogue"><ul><li class="chara__dialogue-elu"><div class="chara__dialogue-txt"></div></li><li class="chara__dialogue-natsume"><div class="chara__dialogue-txt"></div></li></ul></div><div class="chara__button"><button type="button" class="chara__button-dl"><div class="house__button-ph"><img src="core_sys/images/main/chara/dl.png"></div><div class="house__button-cap">拍照</div></button><button type="button" class="chara__button-door" data-stage="07"><div class="house__button-ph"><img src="core_sys/images/main/start/door7.png"></div><div class="house__button-cap">離開房間</div></button></div></div></div></div>',
	comics:'<div class="comics"><div class="comics__inner"><div class="comics__ph"><img src="core_sys/images/main/game/ed.png" ></div><div class="comics__dialogue"><ul><li class="comics__dialogue-elu"><div class="comics__dialogue-name">映月</div><div class="comics__dialogue-txt"></div></li><li class="comics__dialogue-natsume"><div class="comics__dialogue-name">夏明</div><div class="comics__dialogue-txt"></div></li></ul></div></div></div>',
	fakeAds:'<div class="fakeAds"><div class="fakeAds__inner"><img src="'+comicsImg[7].src+'"></div></div>',
	special:'<div class="special"><div class="special__inner"><div class="special__bg"><span><img src="'+specialImg[0].src+'"></span></div><div class="special__main"><ul class="special__imgs"><li><div class="special__head"></div><div class="special__ph"><a href="#" download><img src="#" alt=""></a></div></li><li><div class="special__head"></div><div class="special__ph"><a href="#" download><img src="#" alt=""></a></div></li></ul><div class="special__button"><button type="button" class="special__button-home"><div class="special__button-ph"><img src="'+homeImg[1].src+'"></div><div class="special__button-cap">離開房間</div></button></div></div></div></div>',
}
const stageTxt = {
	game:{
		'01':{
			title:"森林中的麵包店",
			read:"梆梆梆麵包祭舉辦中<br>在剛出爐的麵包堆中尋找青鳥的蛋",
			fail:"肚子撐得再也吃不下了<br>沒辦法了　今天只好先回去",
			1:{
				charaName:"千代子(心愛的母親)",
				txt:"等等再找蛋應該也可以吧？<br>比起那個要不要先來麵包吃到飽呢？<br>被麵包團團包圍的時光可是很幸福的唷！",
				answer01:"嗯...那麼就稍微吃一些...",
				answer02:"心無雜念，克服麵包香氣的誘惑",
				answer:2
			},
			2:{
				charaName:"摩卡",
				txt:"歡迎光臨！欸，蛋之小屋的鑰匙？<br>是我特別放在麵包裡的驚喜喔！<br>欸...是哪一個？",
				answer01:"巨大特製咖哩麵包",
				answer02:"巨大Q彈波蘿麵包",
				answer:1
			}
		},
		'02':{
			title:"回憶中的大城市",
			read:"大城市...雖然是初次拜訪卻如此熟悉...？<br>雙腳自顧自地走了起來...",
			fail:"好像有什麼地方怪怪的...<br>一回過神，就已經在家中了...",
			1:{
				charaName:"城市遇到的奇怪女孩",
				txt:"（水療中心的設施盡收眼底...）<br>喂！那邊的雙胞胎！來比看看誰能在三溫暖中撐得久！",
				answer01:"來啊！我做你的對手！",
				answer02:"不行！爭鬥是不好的喔！",
				answer:1
			},
			2:{
				charaName:"城市遇到的有趣女孩",
				txt:"（遊戲中心的機台映入眼簾...）<br>來跳舞吧！這款跳舞機很好玩喔！",
				answer01:"想要玩VR遊戲啊",
				answer02:"好啊！一起來跳舞！",
				answer:2
			}
		},
		'03':{
			title:"幸福花園",
			read:"四處瀰漫著花朵的香氣<br>雖然想一直待在這，但不往前進的話...",
			fail:"從花園中被趕出來了...<br>只好重新開始...",
			1:{
				charaName:"豆餡",
				txt:"巨大的花園守護者擋住了去路...<br>腳邊有一支木棒和一個蓬蓬的白色毛球。",
				answer01:"丟出木棒",
				answer02:"丟出白色毛球",
				answer:2
			},
			2:{
				charaName:"千夜的祖母",
				txt:"那些把花園搞成一團亂的人給我回去！把栗子饅頭和羊羹也順便帶回去當伴手禮！<br>什麼，居然連生薑饅頭也想要嗎？真是貪心鬼...！",
				answer01:"那麼也順便給我青鳥的蛋！",
				answer02:"奶奶，謝謝你！",
				answer:1
			}
		},
		'04':{
			title:"夜晚的街道",
			read:"小說家的宅邸有著兔子警官鎮守著...<br>和怪盜一同潛入，奪取寶物之蛋吧！",
			fail:"因為有人報警而被兔子警官逮捕了<br>被遣送回家了",
			1:{
				charaName:"凛小姐",
				txt:"哇，是怪盜Lapin的助手嗎！？<br>讓我見識見識吧！怪盜Lapin親授的必殺技！",
				answer01:"是叫「皇家同花順！」來著嗎",
				answer02:"是「皇家葫蘆！」對吧",
				answer:1
			},
			2:{
				charaName:"青山Blue Mountain",
				txt:"請看看我固若金湯的防盜機關！<br>如果無法突破的話就要乖乖讓我取材喔！<br>提示是「胭脂、藍寶石、翡翠」。",
				answer01:"按照紅、綠、藍的順序按下按鈕",
				answer02:"按照紅、藍、綠的順序按下按鈕",
				answer:2
			}
		},
		'05':{
			title:"未來遺跡",
			read:"要在其他寶藏獵出手前先下手為強<br>把遺跡祕寶的那顆蛋奪下！",
			fail:"探索失敗了...<br>沒辦法，重頭開始吧",
			1:{
				charaName:"結良",
				txt:"這前面有屏障擋住去路無法通行耶～。<br>雖然遠遠可以看到解除按鈕但似乎碰不到～。<br>果然還是無計可施了啊～。",
				answer01:"那個吹箭是裝飾嗎？要不然試試看？",
				answer02:"丟石頭看看吧",
				answer:2
			},
			2:{
				charaName:"隆宏",
				txt:"我是追逐夢想的寶藏獵人隆宏。<br>寶藏我就收下了。還請你們打道回府。",
				answer01:"請認真的工作吧，不然家人會難過的。",
				answer02:"讓我們用雙胞胎的牽絆勇敢宣戰！",
				answer:1
			}
		},
		'06':{
			title:"墓場城",
			read:"亡者安詳地長眠於此...<br>盡量保持安靜小心翼翼地通過吧，不要被守墓者發現了",
			fail:"被守墓者逮到了...<br>沒辦法，從頭來過吧",
			1:{
				charaName:"班長",
				txt:"大家好！<br>我們是班級樂團『文化祭鎮魂歌』！<br>這裡不會有任何人接近，現在就開始練習吧！",
				answer01:"悄悄通過",
				answer02:"炒熱氣氛",
				answer:1
			},
			2:{
				charaName:"理世的父親",
				txt:"這裡是亡者安眠之地…<br>但偶爾也讓死者們嗨起來也不錯！？<br>各位聽到了嗎，屬於我的歌曲！「無能老爸的飄泊之跡！」",
				answer01:"把麥克風沒收",
				answer02:"請認真的工作吧，不然家人會哭泣的。",
				answer:1
			}
		},
	},
	clear:{
		'01':{
			name:'心愛',
			comment:'我可是天生的姐姐哦！<br>全都包在姐姐我身上！',
			dialogue:[
				'哇，這孩子身上有麵包的香味！',
				'不過，已經過度攝取麵包和幸福了，肚子好飽...'
			],
			result:'帶回家中的並不是青鳥的蛋<br>※可以在家中確認心愛的樣子了',
		},
		'02':{
			name:'惠',
			comment:'哇、這個好像是感冒的樣子耶~。<br>這個心臟不移植不行！開始手術！',
			dialogue:[
				'夏明的心臟如果出了什麼意外我的會捐給他！',
				'映月會變得怎麼樣呢？'
			],
			result:'帶回家中的並不是青鳥的蛋<br>※可以在家中確認惠的樣子了',
		},
		'03':{
			name:'千夜',
			comment:'紅豆粒派？紅豆泥派？<br>我的話是甘兔庵派―♪',
			dialogue:[
				'我是混搭派！',
				'總覺得突然想吃羊羹麵包了...'
			],
			result:'帶回家中的並不是青鳥的蛋<br>※可以在家中確認千夜的樣子了',
		},
		'04':{
			name:'紗路',
			comment:'是想要把我拿去烤了對吧…！<br>好可怕…！',
			dialogue:[
				'放心！只是稍微綁架一下而已！',
				'映月，注意措辭！只是單純帶他回家而已！'
			],
			result:'帶回家中的並不是青鳥的蛋<br>※可以在家中確認紗路的樣子了',
		},
		'05':{
			name:'麻耶',
			comment:'你那是什麼眼神啊！<br>企鵝可是很優秀的鳥類喔！',
			dialogue:[
				'明明是企鵝，背後卻還有翅膀ー♪',
				'好厲害，是水陸空三用的。'
			],
			result:'帶回家中的並不是青鳥的蛋<br>※可以在家中確認麻耶的樣子了',
		},
		'06':{
			name:'理世',
			comment:'留下來的都是壞孩子啊。<br>理世我…是壞孩子…偷偷的把蛋糕吃掉了。',
			dialogue:[
				'果然為了苟活...唯有罪惡...',
				'是什麼電影的台詞嗎？'
			],
			result:'帶回家中的並不是青鳥的蛋<br>※可以在家中確認理世的樣子了',
		},
		'07':{
			name:'智乃',
			comment:'這個白色蓬蓬軟軟的是我的好友提比。<br>爺爺說過睫毛是它的魅力所在。',
			dialogue:[
				'這香味，是我一直想喝的咖啡的味道。',
				'將來，要不要來做我專屬的咖啡師呢？'
			],
			result:'帶回家中的並不是青鳥的蛋<br>※可以在家中確認智乃的樣子了',
		},
		'08':{
			name:'冬優',
			comment:'......問我喜歡...鳥嗎？<br>「嘛，我喜歡的還是貓就是了」',
			dialogue:[
				'欸，用衣服上的貓表演腹語？好厲害！',
				'再來一個再來一個！'
			],
			result:'帶回家中的並不是青鳥的蛋<br>※可以在家中確認冬優的樣子了',
		},
	},
	ending:[
		{
			elu:"是青鳥！青鳥！",
			natsume:"趕快抓起來！",
		},{
			saki:"謝謝妳們。身邊有各色的鳥兒環繞著<br>女孩們才意識到自己原來就是青鳥。"
		},{
			natsume:"我們也覺得能瞭解這個世界真的太好了。<br>所見所感都有所改變。",
			elu:"「幸福的青鳥」<br>其實就近在咫尺呢",
		},{
			natsume:"也就是說、宅在家中是最棒的了！<br>房間中滿溢著快樂！",
			elu:"賴在床上玩遊戲最棒了！<br>點心也很美味！",
		},{
			saki:"但是、遊戲也將迎來尾聲。<br>也該是夢醒的時候了。<br>然而、青鳥的單翼也會在妳們身後..."
		}
	],
}
