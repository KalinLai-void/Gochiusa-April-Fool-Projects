let status = function() {};
let bgmOp,bgmGame,bgmEd,soundTrain,voiceOp,voiceEd,voiceGame = [];
function playBgm(audio,fade = false) {
	if (!audio.playing()){
		if(fade){
			audio.fade(0, 0.1, fade);
		}else{
			audio.volume(0.1);
		}
		audio.play();
	}
	switch (audio){
		case bgmOp:
			stop(bgmGame);
			stop(bgmEd);
			stop(soundTrain);
			break;
		case bgmGame:
			stop(bgmOp);
			stop(bgmEd);
			stop(soundTrain);
			break;
		case bgmEd:
			stop(bgmOp);
			stop(bgmGame);
			stop(soundTrain);
			break;
		case soundTrain:
			stop(bgmOp);
			stop(bgmGame);
			stop(bgmEd);
			break;
	}
}
function playVoice(voice) {
	voice.seek(0);
	voice.volume(1);
	voice.play();
	switch (voice){
		case voiceOp:
			stop(voiceEd);
			stop(voiceGame[0]);
			stop(voiceGame[1]);
			stop(voiceGame[2]);
			break;
		case voiceEd:
			stop(voiceOp);
			stop(voiceGame[0]);
			stop(voiceGame[1]);
			stop(voiceGame[2]);
			break;
		case voiceGame[0]:
			stop(voiceOp);
			stop(voiceEd);
			stop(voiceGame[1]);
			stop(voiceGame[2]);
			break;
		case voiceGame[1]:
			stop(voiceOp);
			stop(voiceEd);
			stop(voiceGame[0]);
			stop(voiceGame[2]);
			break;
		case voiceGame[2]:
			stop(voiceOp);
			stop(voiceEd);
			stop(voiceGame[0]);
			stop(voiceGame[1]);
			break;
	}
}

function stop(audio,fadetime = 1000) {
	audio.fade(
		0.1,  // 開始時のボリューム
		0.0,  // 終了時のボリューム
		fadetime  // 指定秒数の時間をかけて開始値から終了値に変化(ミリ秒)
	);
	setTimeout(function(){
		audio.stop();
	},fadetime)
}
function removeInner(element,fade = true){
	if(fade){
		element.style.transition = '1s ease';
		element.style.opacity = '0';
		element.style.pointerEvents = 'none';
		setTimeout(function(){
			element.innerHTML = '';
		},1000)
	}else{
		element.innerHTML = '';
	}
}
function fadeout(element,hidden){
	element.style.transition = '1s ease';
	element.style.opacity = '0';
	element.style.pointerEvents = 'none';
	setTimeout(function(){
		element.style.transition = '';
	},1000)
	if(hidden){
		setTimeout(function(){
			element.style.visibility = 'hidden';
		},1000)
	}
}
function fadein(element){
	element.style.transition = '1s ease';
	element.style.visibility = 'visible';
	element.style.opacity = '1';
	setTimeout(function(){
		element.style.pointerEvents = '';
		element.style.transition = '';
	},1000)
}
function getById(idName){
	return document.getElementById(idName);
}
function getByClass(className,parent = document){
	return parent.getElementsByClassName(className)[0];
}
function cElement(tagName,className){
	const newElement = document.createElement(tagName);
	if(tagName == 'button'){
		newElement.type = "button";
	}
	if(className != false && className != ""){
		if(Array.isArray(className)){
			for(let i=0;i<className.length;i++){
				newElement.classList.add(className[i]);
			}
		}else{
			newElement.classList.add(className);
		}
	}
	return newElement;
}
function createTextElement(tagName,className,text){
	const textElement = cElement(tagName,className);
	textElement.innerHTML = text;
	
	return textElement;
}
function createImgElement(tagName,className,src){
	const imgElement = cElement(tagName,className),
		  newImg = new Image;
	newImg.src = imgType(src);
	imgElement.append(newImg);
	
	return imgElement;
}
function imgType(src){
	if(Modernizr.webp) {
	   src = src.replace(/\.png|\.jpg/g, '\.webp')
	}
	return src;
}
function setDialogue(text){
	const dialogueWrap = cElement('div','dialogue-wrap');
	
	if(Array.isArray(text)){
		for(let i=0;i<text.length;i++){
			if(Object.keys(text[i])[0] != 0){
				const dialogueName = cElement('span','dialogue__name');
				dialogueName.setAttribute('name',Object.keys(text[i])[0]);
				createDialogue(text[i][Object.keys(text[i])[0]],dialogueName);
			}else{
				createDialogue(text[i]);
			}
		}
	}else{
		createDialogue(text);
	}
	return dialogueWrap;
	function createDialogue(text,name = false){
		const dialogue = cElement('div','dialogue'),
			  dialogueInn = createTextElement('div','dialogue__inner',text);
		dialogueWrap.append(dialogue)
		dialogue.append(dialogueInn)
		if(name){
			dialogueInn.prepend(name)
		}
	}
}
function pageChange(pagename){
	let pageChangeDelay = 0;
	if(pagename != document.body.getAttribute("id")){
		status.prototype.bgBlock.style.opacity = 0;
		pageChangeDelay = 1000;
	}
	setTimeout(function(){
		status.prototype.page = pagename;
		document.body.setAttribute("id",pagename);
	},pageChangeDelay)
}
function op01(){
	if(status.prototype.page == undefined){
		status.prototype.page = "op";
		firstRead()
		playBgm(bgmOp);
		const opTippy01 = getByClass('op-tippy__01'),
			  opButton02 = getByClass('op-button__02');
		fadein(opTippy01);
		setTimeout(function(){
			fadein(opButton02);
		},1000)
	}
}
function tippy01(){
	const opTippy01 = getByClass('op-tippy__01'),
		  opTippy02 = getByClass('op-tippy__02'),
		  opButton01 = getByClass('op-button__01'),
		  opButton02 = getByClass('op-button__02');
	fadeout(opTippy01,true);
	fadeout(opButton02,true);
	fadein(opTippy02);
	opButton01.classList.add('ticket');
	setTimeout(function(){
		status.prototype.bgBlock.style.opacity = '1';
		fadeout(status.prototype.contents,false);
		playVoice(voiceOp)
		setTimeout(function(){
			document.body.setAttribute('id','home')
			goHome();
		},1000)
	},2000)
}
function goHome(){
	//location.href = './start.php';
	playBgm(bgmGame);
	pageChange("home")
	removeInner(status.prototype.contents);
	const startWrap = cElement('div','start-wrap'),
		  start = cElement('div','start'),
		  startChino = createImgElement('div','start__chino','core_sys/images/main/start/chino.png'),
		  startCocoa = createImgElement('div','start__cocoa','core_sys/images/main/start/cocoa.png'),
		  startText = createImgElement('div','start__text','core_sys/images/main/start/text.png'),
		  startClock = createImgElement('div',['start__clock','animate-fuwa'],'core_sys/images/main/start/clock.png'),
		  startTippy = createImgElement('div',['start__tippy','animate-fuwa'],'core_sys/images/main/start/tippy.png'),
		  startLogo = createImgElement('div','start__logo','core_sys/images/main/start/logo.png'),
		  startMenu = cElement('div','start__menu'),
		  _startMenu = cElement('div','start-menu'),
		  _startMenuTrain = createTextElement('button','start-menu__train','Get on the Train'),
		  _startMenuStamp = createTextElement('button','start-menu__stamp','Go to Stamp Rally');
	setTimeout(function(){
		window.scroll({top: 0});
		bgImgChange()
		_startMenu.append(_startMenuTrain,_startMenuStamp)
		startMenu.append(_startMenu)
		start.append(startChino,startCocoa,startText,startClock,startTippy,startLogo,startMenu)
		startWrap.append(start)
		status.prototype.contents.append(startWrap);
		fadein(status.prototype.contents);
		_startMenuTrain.addEventListener('click', goGameStart);
		_startMenuStamp.addEventListener('click', goStamp);
	},1000)
}
function goGameStart(){
//	location.href = './game-start.php';
	playBgm(bgmGame);

	pageChange("game")
	status.prototype.game = "start";
	status.prototype.tippyDialogue = gameStart;
	status.prototype.tippyDialogueNum = 0;
	tippyPage();
}
function goGameEnding(){
//	location.href = './game-start.php';
	playBgm(bgmEd);
	pageChange("game")
	status.prototype.game = "ending";
	status.prototype.tippyDialogue = gameEnding;
	status.prototype.tippyDialogueNum = 0;
	tippyPage();
}
function tippyPage(){
	removeInner(status.prototype.contents);
	const game = cElement('div','game'),
		  gameTippy = cElement('div','game-tippy'),
		  gameTippyBox = cElement('div','tippy-box'),
		  gameTippyChara = createImgElement('div','tippy-box__chara','core_sys/images/main/game/passenger/tippy.png'),
		  gameTippyText = cElement('div','tippy-box__text'),
		  dialogueText = status.prototype.tippyDialogue[status.prototype.tippyDialogueNum],
		  dialogue = setDialogue(dialogueText);
	setTimeout(function(){
		bgImgChange();
		window.scroll({top: 0});
		game.append(gameTippy)
		gameTippy.append(gameTippyBox)
		gameTippyBox.append(gameTippyChara,gameTippyText)
		gameTippyText.append(dialogue)
		status.prototype.contents.append(game);
		fadein(status.prototype.contents);
		document.addEventListener('click', gameTippyDialogue);
	},1000)
}
function gameTippyDialogue(){
	const gameTippyText = getByClass('tippy-box__text');
	const dialogueNo = status.prototype.tippyDialogueNum;
	const nextDialogueNo = dialogueNo+1,
		  nextDialogueText = status.prototype.tippyDialogue[nextDialogueNo],
		  nextDialogue = setDialogue(nextDialogueText);
	if(nextDialogueText !== undefined){
		removeInner(gameTippyText);
		setTimeout(function(){
			status.prototype.tippyDialogueNum = nextDialogueNo;
			gameTippyText.append(nextDialogue);
			fadein(gameTippyText);
		},1000)
	}else{
		document.removeEventListener('click', gameTippyDialogue);
		fadeout(gameTippyText,false);
		setTimeout(function(){
			if(status.prototype.game == "start"){
				goGameTrain();
			}else if(status.prototype.game == "ending"){
				goEnding();
			}
		},1000)
	}
}
function goGameTrain(){
	//location.href = './game-train.php';
	status.prototype.page = "game";
	status.prototype.game = "train";
	status.prototype.station = "taurus";
	const game = getByClass('game');
	removeInner(game);
	const gameTrain = cElement('div','game-train'),
		  gameTrainBack = cElement('div','game-train__back'),
		  gameTrainBackBtn = createTextElement('button','','Get off the train'),
		  gameTrainStation = cElement('div','game-train__station'),
		  trainStation = cElement('div','train-station'),
		  trainStationLabel = createTextElement('div','train-station__label','NEXT STATION'),
		  trainStationName = cElement('div','train-station__name'),
		  gameTrainConductor = cElement('div','game-train__conductor'),
		  gameTrainText = cElement('div','game-train__text'),
		  dialogue = cElement('div','dialogue'),
		  gameTrainMap = cElement('div','game-train__map'),
		  trainMap = cElement('div','train-map'),
		  trainMapHead = createTextElement('div','train-map__head','▼Click Passenger compartment'),
		  trainMapPassenger = cElement('div','train-map__passenger'),
		  mapPassenger = cElement('div','map-passenger'),
		  gameTrainPassenger = cElement('div','game-train__passenger');
	setTimeout(function(){
		window.scroll({top: 0});
		game.append(gameTrain)
		gameTrain.append(gameTrainBack,gameTrainStation,gameTrainConductor,gameTrainMap,gameTrainPassenger,gameTrainText);
		gameTrainBack.append(gameTrainBackBtn)
		gameTrainStation.append(trainStation);
		trainStation.append(trainStationLabel,trainStationName);
		gameTrainMap.append(trainMap);
		trainMap.append(trainMapHead,trainMapPassenger);
		trainMapPassenger.append(mapPassenger);
		gameTrainSetData();
		fadein(game);
		gameTrainBack.addEventListener('click', goHome);
	},1000)
}
function gameTrainUpdata(){
	document.removeEventListener('click', gameTrainUpdata);
	window.scroll({top: 0,behavior: 'smooth'});
	const gameTrain = getByClass('game-train');
	if(status.prototype.station == undefined || status.prototype.station == ''){
		status.prototype.station = 'taurus';
	}
	const stationList = Object.keys(gameStation),
		  nowStationIndex = stationList.indexOf( status.prototype.station ),
		  nextStation = stationList[nowStationIndex+1];
	status.prototype.station = nextStation;
	gameTrainSetData();
	setTimeout(function(){
		const game = getByClass('game');
		game.style.pointerEvents = '';
	},1000)
}
function gameTrainSetData(){
	const gameTrain = getByClass('game-train'),
		  gameTrainStation = status.prototype.station,
		  gameTrainPassenger = getByClass('game-train__passenger');

	const mapPassenger = getByClass('map-passenger');
	
	const gameStationData = gameStation[gameTrainStation],
		  gameStationDataStation = gameStationData.station,
		  gameStationDataConductor = gameStationData.conductor,
		  gameStationDataDialogue = gameStationData.dialogue;
	
	const trainStationName = getByClass('train-station__name'),
		  gameTrainConductor = getByClass('game-train__conductor'),
		  gameTrainText = getByClass('game-train__text');
	
	const trainConductor = createImgElement('div','train-conductor','core_sys/images/main/game/conductor/'+gameStationDataConductor+'.png'),
		  dialogue = setDialogue(gameStationDataDialogue);
	
	removeInner(trainStationName);
	removeInner(gameTrainConductor);
	removeInner(gameTrainText);
	removeInner(gameTrainPassenger);
	removeInner(mapPassenger,false);
	
	const stationList = Object.keys(gameStation),
		  nowStation = stationList.indexOf( gameTrainStation );
	for(let i=nowStation;i<stationList.length;i++){
		const getStation = stationList[i],
			  getStationData = gameStation[getStation],
			  getStationDataPassenger = getStationData.passenger;
		if(Array.isArray(getStationDataPassenger)){
			for(let i=0;i<getStationDataPassenger.length;i++){
				addPassengerButton(getStationDataPassenger[i])
			}
		}else if(getStationDataPassenger == "elu_natsume"){
			addPassengerButton('elu');
			addPassengerButton('natsume');
		}else{
			addPassengerButton(getStationDataPassenger)
		}
	}
	function addPassengerButton(passengerName){
		const mapPassengerButton = cElement('button','');
		mapPassengerButton.setAttribute('passenger',passengerName);
		mapPassenger.append(mapPassengerButton);
		
		mapPassengerButton.addEventListener('click', gamePassengerDot);
		
	}
	
	setTimeout(function(){
		trainStationName.append(gameStationDataStation);
		gameTrainConductor.append(trainConductor);
		gameTrainText.append(dialogue);
		fadein(trainStationName);
		fadein(gameTrainConductor);
		fadein(gameTrainText);
		fadein(mapPassenger);
	},1000)
}

function gamePassengerDot(e){
	const gameTrain = getByClass('game-train'),
		  _station = status.prototype.station;
	let _passenger = e.target.getAttribute("passenger");
	if(_passenger == "elu" || _passenger == "natsume"){
		_passenger = "elu_natsume";
	}
	const _passengerData = trainPassenger[_passenger],
		  _passengerDataName = _passengerData.name,
		  _passengerDataSecond = _passengerData.second,
		  _passengerDataBirthday = _passengerData.birthday;
	
	const gameTrainPassenger = getByClass('game-train__passenger');
	const passenger = cElement('div','passenger'),
		  passengerImage = createImgElement('div','passenger__image','core_sys/images/main/game/passenger/'+_passenger+'.png'),
		  passengerText = cElement('div','passenger__text'),
		  passengerTextInn = cElement('div','passenger__text-inner'),
		  passengerDialogue = cElement('div','passenger__dialogue'),
		  passengerLine = cElement('div','passenger__line'),
		  passengerName = createTextElement('div','passenger__name',_passengerDataName),
		  passengerSecond = createTextElement('div','passenger__second',_passengerDataSecond),
		  passengerBirthday = createTextElement('div','passenger__birthday','誕生日'+_passengerDataBirthday),
		  passengerAction = cElement('div','passenger__action'),
		  passengerCallBtn = cElement('button','');
	status.prototype.passenger = _passenger;
	status.prototype.station = _station;
	
	const passengerCallBtnTrue = passengerCallBtn.cloneNode(true),
		  passengerCallBtnFalse = passengerCallBtn.cloneNode(true);
	passengerCallBtnTrue.setAttribute('call','true')
	passengerCallBtnTrue.append('声をかける')
	passengerCallBtnFalse.setAttribute('call','false')
	passengerCallBtnFalse.append('声をかけない')
	
	const mapPassenger = getByClass('map-passenger');
	mapPassenger.style.pointerEvents = 'none';
	
	removeInner(passengerDialogue);
	let fadainDelay = 10;
	if(getByClass('passenger')){
		fadainDelay = 1000;
		removeInner(gameTrainPassenger);
	}else{
		gameTrainPassenger.style.opacity = 0;
	}
	setTimeout(function(){
		gameTrainPassenger.append(passenger);
		passenger.append(passengerImage,passengerText,passengerDialogue);
		passengerText.append(passengerTextInn,passengerAction);
		passengerTextInn.append(passengerLine,passengerName,passengerSecond,passengerBirthday);
		passengerAction.append(passengerCallBtnTrue,passengerCallBtnFalse)
		passengerCallBtnTrue.addEventListener('click', gamePassengerCall);
		passengerCallBtnFalse.addEventListener('click', gamePassengerCall);
		fadein(gameTrainPassenger);
		setTimeout(function(){
			mapPassenger.style.pointerEvents = '';
		},1000)
	},fadainDelay)
}
function gamePassengerCall(e){
	const _call = e.target.getAttribute("call"),
		  _station = status.prototype.station,
		  _passenger = status.prototype.passenger;

	if(_call == 'true'){
		const _answer = gameStation[_station],
			  _answerPassenger = _answer.passenger;
		const passenger = getByClass('passenger'),
			  passengerText = getByClass('passenger__text'),
			  passengerDialogue = getByClass('passenger__dialogue');
		
		let result = false,
			resultDialogue = trainPassenger[_passenger].incorrect,
			_passengerArray = false;
		
		if(Array.isArray(_answerPassenger)){
			_passengerArray = true;
			for(let i=0;i<_answerPassenger.length;i++){
				if(_passenger == _answerPassenger[i]){
					result = true;
					resultDialogue = trainPassenger[_passenger].correct;
					if(status.prototype.passengerArray == undefined){
						status.prototype.passengerArray = 0;
					}
					status.prototype.passengerArray++;
					if(status.prototype.passengerArray == _answerPassenger.length){
						_passengerArray = false;
						status.prototype.passengerArray = 0;
					}
					break;
				}
			}
		}else{
			if(_passenger == _answerPassenger){
				result = true;
				resultDialogue = trainPassenger[_passenger].correct;
			}
		}

		removeInner(passengerText);
		if(result){
			if(status.prototype.station == 'kigumi'){
				goGameEnding();
				result = false;
			}else{
				const game = getByClass('game');
				game.style.pointerEvents = 'none';
			}
		}
		setTimeout(function(){
			if(status.prototype.station != 'kigumi' && _passenger == "tippy"){
				const random = Math.floor( Math.random() * 3 ) ;
				resultDialogue = trainPassenger[_passenger].incorrect[random];
				playVoice(voiceGame[random]);
				passengerDialogue.classList.add('thanks');
			}
			addDialogue(resultDialogue)
			
			function addDialogue(resultDialogue){
				const dialogue = setDialogue(resultDialogue);
				passengerDialogue.append(dialogue);
			}
			if(result){
				passengerDialogue.classList.add('correct');
			}
			fadein(passengerDialogue);
			setTimeout(function(){
				if(result){
					if(_passengerArray){
						document.addEventListener('click',gamePassengerArrayAction);
					}else{
						document.addEventListener('click', gameTrainUpdata);
					}
				}else{
					passenger.addEventListener('click',removeGameTrainPassenger);
				}
			},1000)
		},1000)
	}else{
		removeGameTrainPassenger();
	}
}
function removeGameTrainPassenger(){
	const gameTrainPassenger = getByClass('game-train__passenger');
	removeInner(gameTrainPassenger);
}
function gamePassengerArrayAction(){
	document.removeEventListener('click',gamePassengerArrayAction);
	const gameTrainPassenger = getByClass('game-train__passenger'),
		  mapPassenger = getByClass('map-passenger'),
		  mapPassengerBtn = mapPassenger.getElementsByTagName('button');
	for(let i=0;i<mapPassengerBtn.length;i++){
		const btnpassenger = mapPassengerBtn[i].getAttribute('passenger');
		if(btnpassenger == status.prototype.passenger){
			fadeout(mapPassengerBtn[i],true)
		}
	}
	removeInner(gameTrainPassenger);
	setTimeout(function(){
		const game = getByClass('game');
		game.style.pointerEvents = '';
	},1000)
}
function goEnding(){
	pageChange("ending")
	removeInner(status.prototype.contents);
	const endind = cElement('div','ending');
	setTimeout(function(){
		window.scroll({top: 0});
		status.prototype.contents.append(endind);
		fadein(status.prototype.contents);
		setTimeout(function(){
			endingScroll();
		},1000)
	},1000)
}
function endingScroll(){
	document.body.style.overflow = 'hidden';
	playVoice(voiceEd);
	const wH = window.innerHeight,
		  ending = getByClass('ending'),
		  endingH = ending.clientHeight,
		  scrollMax = endingH - wH;
	if(scrollMax>0){
		const scrollH = 1; 
		let scrolltop = 0;
		let scroll = setInterval(function(){
			if((scrolltop + scrollH) >= scrollMax){
				scrolltop = scrollMax;
				clearInterval(scroll);
			}else{
				scrolltop += scrollH;
			}
			window.scroll({top: scrolltop});
		},10)
	}
	setTimeout(function(){
		goEndingCredit();
		//goEndingComics();
	},16000)
}
function goEndingCredit(){
	pageChange("credit")

	removeInner(status.prototype.contents);
	const credit = cElement('div','credit'),
		  creditInner = createTextElement('div','credit__inner','Special Thanks：俳協');
	setTimeout(function(){
		window.scroll({top: 0});
		credit.append(creditInner);
		status.prototype.contents.append(credit);
		setTimeout(function(){
			fadein(status.prototype.contents);
			credit.style.opacity = 1;
			setTimeout(function(){
				credit.style.opacity = 0;
				setTimeout(function(){
					document.body.style.overflow = '';
					goEndingComics();
				},2000)
			},4000)
		},1000)
	},1000)
}
function goEndingComics(){
	pageChange("comics")

	removeInner(status.prototype.contents);
	
	const comics = cElement('div','comics'),
		  comicsInner = cElement('div','comics__inner'),
		  comicsHead = createTextElement('div','comics-head','スペシャルムービー'),
		  comicsSlide = cElement('div','comics-slide'),
		  comicsSkip = cElement('div','comics-skip');
	const slideMax = 13;
		  
	setTimeout(function(){
		window.scroll({top: 0});
		for(let i=0;i<slideMax;i++){
			const comicsImg = createImgElement('div','comics-slide__image','core_sys/images/main/ending/comics/'+String(i+1).padStart(2, '0')+'.png');
			comicsSlide.append(comicsImg);
		}
		comicsSkipBtn = createTextElement('button','','SKIP');
		comicsSkip.append(comicsSkipBtn);
		status.prototype.contents.append(comics);
		comics.append(comicsInner);
		comicsInner.append(comicsHead,comicsSlide,comicsSkip);
		fadein(status.prototype.contents);
		let comicsSlideshow;
		comicsSkipBtn.addEventListener('click',function(){
			goEndingInfo();
			clearInterval(comicsSlideshow);
		})
		comics.style.opacity = 1;
		const comicsSlides = document.getElementsByClassName('comics-slide__image');
		let slideNum = 0;
		comicsSlides[slideNum].style.opacity = 1;
		comicsSlideshow = setInterval(function(){
			comicsSlides[slideNum].style.opacity = 0;
			slideNum++;
			comicsSlides[slideNum].style.opacity = 1;
			if(slideNum+1 == slideMax){
				clearInterval(comicsSlideshow)
				comicsSlide.addEventListener('click',goEndingInfo)
			}
		},4000)
	},1000)
}
function goEndingInfo(){
	pageChange("info")
	playBgm(bgmOp);

	removeInner(status.prototype.contents);
	const info = cElement('div','info'),
		  infoImage = createImgElement('div','info__image','core_sys/images/main/present/thumb/typeA.jpg'),
		  infoText = createTextElement('div','info__text','ご乗車いただきありがとうございました。<br>ただいま、スタンプラリーを開催しております。<br>停車駅順に駅名を入力していただきますと<br>壁紙をプレゼントいたします。<br>ぜひご参加ください。'),
		  infoButton = cElement('div','info__button'),
		  infoButtonStamp = createTextElement('button','info__button-stamp','Go To Stamp Rally'),
		  infoButtonHome = createTextElement('button','info__button-home','Get off the train');
	infoButtonStamp.addEventListener('click',goStamp);
	infoButtonHome.addEventListener('click',goHome);
	setTimeout(function(){
		window.scroll({top: 0});
		bgImgChange();
		infoButton.append(infoButtonStamp,infoButtonHome);
		info.append(infoImage,infoText,infoButton);
		status.prototype.contents.append(info);
		fadein(status.prototype.contents);
	},1000);
}
function goStamp(){
	playBgm(bgmOp);
	pageChange("stamp")
	removeInner(status.prototype.contents);
	const stamp = cElement('div','stamp'),
		  stampHead = cElement('div','stamp__head'),
		  stampHeadH2 = createTextElement('h2','','銀河特急スタンプラリー'),
		  stampList = cElement('div','stamp__list'),
		  stampForm = cElement('div','stamp-form'),
		  stampHome = cElement('div','stamp__home'),
		  stampHomeButton = createTextElement('button','','Back to the Station');
	const stampFormMax = 7,
		  stampFormSeiza = [
			  {key:"aries",val:"おひつじ座"},
			  {key:"taurus",val:"おうし座"},
			  {key:"gemini",val:"ふたご座"},
			  {key:"cancer",val:"かに座"},
			  {key:"leo",val:"しし座"},
			  {key:"virgo",val:"おとめ座"},
			  {key:"libra",val:"てんびん座"},
			  {key:"scorpio",val:"さそり座"},
			  {key:"sagittarius",val:"いて座"},
			  {key:"capricorn",val:"やぎ座"},
			  {key:"aquarius",val:"みずがめ座"},
			  {key:"pisces",val:"うお座"},
		  ];
	for(let i=1;i<=stampFormMax;i++){
		const stampFormSelect = cElement('select','');
		stampFormSelect.name = 'stamp'+i;
		for(let x=0;x<stampFormSeiza.length;x++){
			const stampFormOption = createTextElement('option','',stampFormSeiza[x].val);
			stampFormOption.value = stampFormSeiza[x].key;
			stampFormSelect.append(stampFormOption);
		}
		stampForm.append(stampFormSelect);
		stampFormSelect.addEventListener('change',checkStamp);

	}
	stampHomeButton.addEventListener('click',goHome);
	setTimeout(function(){
		window.scroll({top: 0});
		bgImgChange();
		stampHead.append(stampHeadH2);
		stampList.append(stampForm);
		stampHome.append(stampHomeButton);
		stamp.append(stampHead,stampList,stampHome);
		status.prototype.contents.append(stamp);
		fadein(status.prototype.contents);
	},1000);
}
function checkStamp(){
	const stampForm = getByClass('stamp-form')
	const stampFormSelects = stampForm.getElementsByTagName('select');
	let stampCorrectCnt = 0;
	for(let i=0;i<stampFormSelects.length;i++){
		const stampFormSelect = stampFormSelects[i],
			  stampFormSelectName = stampFormSelect.name;
		if(stampAnswer[stampFormSelectName]==stampFormSelect.value){
			stampCorrectCnt++;
		}
	}
	if(stampCorrectCnt == stampFormSelects.length){
		stampForm.classList.add('correct');
		setTimeout(function(){
			stampForm.addEventListener('click',goPresent);
		},500);
	}
}

function goPresent(){
	pageChange("present")
	
	document.body.style.background = "#fff";
	removeInner(status.prototype.contents);
	const present = cElement('div','present'),
		  presentInner = cElement('div','present__inner'),
		  presentHeadPc = createTextElement('div','present__head','For PC'),
		  presentHeadSp = createTextElement('div','present__head','For SmartPhone'),
		  presentList1 = cElement('div','present__list'),
		  presentList2 = cElement('div','present__list'),
		  presentListPc = cElement('ul','present-pc'),
		  presentListSp = cElement('ul','present-sp'),
		  presentHome = cElement('div','present__home'),
		  presentHomeButton = createTextElement('button','','Back to the Station');
	
	const presentImgsPc = ['typeA','typeB'],
		  presentImgsSp = ['cocoa','chino','rize','chiya','syaro'];
	for(let i=0;i<presentImgsPc.length;i++){
		const presentListPcLi = cElement('li',''),
			  presentListFileName = 'GalaxyTrain_RabbitHouse_'+presentImgsPc[i]+'.png',
			  presentListPcLiA = createImgElement('a','','core_sys/images/main/present/thumb/'+presentImgsPc[i]+'.jpg');
		presentListPcLiA.href = 'core_sys/images/main/present/'+presentListFileName;
		presentListPcLiA.target = "_blank";
		presentListPcLiA.setAttribute('download',presentListFileName);
		presentListPcLi.append(presentListPcLiA);
		presentListPc.append(presentListPcLi);
	}
	for(let i=0;i<presentImgsSp.length;i++){
		const presentListSpLi = cElement('li',''),
			  presentListFileName = 'GalaxyTrain_RabbitHouse_'+presentImgsSp[i]+'.png',
			  presentListSpLiA = createImgElement('a','','core_sys/images/main/present/thumb/'+presentImgsSp[i]+'.jpg');
		presentListSpLiA.href = 'core_sys/images/main/present/'+presentListFileName;
		presentListSpLiA.target = "_blank";
		presentListSpLiA.setAttribute('download',presentListFileName);
		presentListSpLi.append(presentListSpLiA);
		presentListSp.append(presentListSpLi);
	}
	presentHomeButton.addEventListener('click',goHome);
	presentList1.append(presentListPc);
	presentList2.append(presentListSp);
	presentHome.append(presentHomeButton);
	presentInner.append(presentHeadPc,presentList1,presentHeadSp,presentList2,presentHome);
	present.append(presentInner);
	setTimeout(function(){
		window.scroll({top: 0});
		bgImgChange();
		status.prototype.contents.append(present);
		fadein(status.prototype.contents);
		setTimeout(function(){
			document.body.style.background = "";
		},1000);
	},1000);
}
function createBg(){
	const bg = cElement('div','bgBlock'),
		  bgImg = cElement('div','bgBlock__image'),
		  bgBlur = cElement('div','bgBlock__blur');
	bg.append(bgBlur,bgImg);
	document.body.prepend(bg);
}
function bgImgChange(src = false){
	if(src){
		status.prototype.bgBlockBlur.style.backgroundImage = 'url('+imgType(src)+')';
		status.prototype.bgBlockImage.style.backgroundImage = 'url('+imgType(src)+')';
	}
	status.prototype.bgBlockBlur.style.opacity = '1';
	status.prototype.bgBlockImage.style.opacity = '1';
	status.prototype.bgBlock.style.opacity = '1';
}
function firstRead(){
	bgmOp = new Howl({
		src: ['core_sys/images/others/bgm/op_bgm.mp3'],
		volume: 0.1,
		loop  : true,
	});
	bgmGame = new Howl({
		src: ['core_sys/images/others/bgm/game_bgm.mp3'],
		volume: 0.1,
		loop  : true,
	});
	bgmEd = new Howl({
		src: ['core_sys/images/others/bgm/ed_bgm.mp3'],
		volume: 0.1,
		loop  : true,
	});
	soundTrain = new Howl({
		src: ['core_sys/images/others/bgm/train_sound.mp3'],
		volume: 0.1,
		loop  : true,
	});
	voiceOp = new Howl({
		src: ['core_sys/images/others/voice/op_voice.mp3'],
		volume: 1.0,
	});
	voiceEd = new Howl({
		src: ['core_sys/images/others/voice/ed_voice.mp3'],
		volume: 1.0,
	});
	voiceGame[0] = new Howl({
		src: ['core_sys/images/others/voice/game01_voice.mp3'],
		volume: 1.0,
	});
	voiceGame[1] = new Howl({
		src: ['core_sys/images/others/voice/game02_voice.mp3'],
		volume: 1.0,
	});
	voiceGame[2] = new Howl({
		src: ['core_sys/images/others/voice/game03_voice.mp3'],
		volume: 1.0,
	});
	createBg();
	status.prototype.contents = getById('contents');
	status.prototype.bgBlock = getByClass('bgBlock');
	status.prototype.bgBlockBlur = getByClass('bgBlock__blur');
	status.prototype.bgBlockImage = getByClass('bgBlock__image');
}