const gameStart = {
	0:'旅は楽しんでおるかの？',
	1:'さて　そろそろ一つ目の停車駅じゃ。<br>降りる客が何人かおる。',
	2:'乗務員と一緒に声をかけてきてもらえんかの？',
	3:'ヒントは降りる「右上の」駅名と乗客の誕生日じゃ。',
	4:'駅の順番を覚えておけば、いいことがあるかもしれん。<br>がんばれよ。',
}
const trainPassenger = {
	tippy:{
		correct:'',
		incorrect:['来てくれて、ほんとうにありがとう。','わしもみんなに会いたかったぞ！','また元気に木組みの街へ、ラビットハウスへ、あの子たちに会いに来てやってくれ！'],
		name:'Tippy',
		second: 'ラビットハウスマスター',
		birthday:'???'
	},
	maya:{
		correct:'この駅からお宝の匂いがする…私の頭のお宝センサーも反応してるよ！<br>はぁ！？アホ毛じゃないし！',
		incorrect:'うーん　残念だけど、この駅からはお宝の匂いがしないね。',
		name:'Maya',
		second: '星間トレジャーハンター',
		birthday:'8/8'
	},
	aoyama:{
		correct:'いい小説のアイディア思いついちゃいました。<br>思い切って乗り込んでみるものですね。<br>うふふ　また来ま～す。',
		incorrect:'うふふ　この駅じゃないですよ。<br>それにまだ何も小説のアイディアが思いついてません。　',
		name:'Aoyama',
		second: '銀河小説家',
		birthday:'10/27'
	},
	megu:{
		correct:'ありがとう。<br>なんか木組みの街で過ごす夢を見た気がする…。<br>あれ　それともこれが夢？',
		incorrect:'なんかここじゃない気がする…。<br>あれ　そもそも何でこんな電車に乗ってるんだっけ？',
		name:'Megu',
		second: '記憶喪失の天使',
		birthday:'11/2'
	},
	mocha:{
		correct:'ありがとう。<br>そうそう食堂車のパンに一つだけ言わせて。<br>………もちもちだったよ腕を上げたね。',
		incorrect:'うぅーん？お姉ちゃんこの駅じゃないぞー？',
		name:'Mocha',
		second: 'コスモベーカリークイーン',
		birthday:'3/13'
	},
	fuyu:{
		correct:'ありがとう…また遊びに来るね。<br>今度はお弁当を作ってくるから一緒に食べよ。',
		incorrect:'あ…この駅じゃない…。<br>もしかしてラビハ通いすぎ罪で強制退場…？',
		name:'Fuyu',
		second: '星間グランドマスター',
		birthday:'1/24'
	},
	yura:{
		correct:'みんな～仲良くしすぎ～。<br>私は退散するね～。',
		incorrect:'狙い外したね～<br>この駅じゃないよ～',
		name:'Yura',
		second: '「何でも」掃除係',
		birthday:'1/12'
	},
	elu_natsume:{
		correct:[
			"わ～見てナツメちゃん。<br>ホームの駅員さんや飛んでる鳥まで双子っぽいよ。面白い駅だね。",
			"って幸せの青い鳥じゃん！エル早く！捕まえなきゃ！"
		],
		incorrect:[
			"この駅だっけ？",
			"この駅じゃないよ"
		],
		name:'Elu & Natsume',
		second: '旅する双子',
		birthday:'6/15'
	},
	rin:{
		correct:'あっ…もう着いたんですか。<br>くっ…結局青山先生を見つけられなかった…！',
		incorrect:'',
		name:'Rin',
		second: '銀河編集者',
		birthday:'5/4'
	},
}
const gameStation = {
	taurus:{
		station:"おうし座駅",
		conductor:'chiya',
		dialogue:[{"千夜":"はーい！拝見拝見　切符をはーいけん！<br>ついでに当車両をイメージした特製最中はいかがかしらー？"}],
		passenger:'rin',
	},
	gemini:{
		station:"ふたご座駅",
		conductor:'syaro',
		dialogue:[{シャロ:"食堂車にてハーブティーご注文のお客様に<br>パフォーマンスとスマイルをサービス中でーす！"}],
		passenger:'elu_natsume',
	},
	capricorn:{
		station:"やぎ座駅",
		conductor:'rize',
		dialogue:[{リゼ:"救護室暇だぞ！<br>だれか具合の悪い人はいないのか！"}],
		passenger:'yura',
	},
	aquarius:{
		station:"みずがめ座駅",
		conductor:'chino',
		dialogue:[{チノ:"こちらサービスの当車両オリジナルブレンドです。<br>お…お口に合えばいいのですが…"}],
		passenger:'fuyu',
	},
	pisces:{
		station:"うお座駅",
		conductor:'cocoa',
		dialogue:[{ココア:"降車記念のお土産に銀河シュトーレンをどうぞ！<br>あとモフモフさせてくれたら嬉しいなー。"}],
		passenger:'mocha',
	},
	scorpio:{
		station:"さそり座駅",
		conductor:'syaro_chiya',
		dialogue:[{千夜:'お降りのお客様は二人よ。'},{シャロ:'わかってる。そっちの車両は任せたわよ。'}],
		passenger:['megu','aoyama'],
	},
	leo:{
		station:"しし座駅",
		conductor:'rize',
		dialogue:[{リゼ:"救護室に子供の乗客たちが遊びに来て、<br>託児所みたいになってたぞ。<br>まぁ　いいんだけどな。"}],
		passenger:'maya',
	},
	kigumi:{
		station:"木組みの街駅",
		conductor:'cocoa_chino',
		dialogue:[{ココア:'懐かしのわが家だよ！'},{チノ:'みなさん忘れ物ありませんか？'}],
		passenger:'tippy',
	},
}
const gameEnding = {
	0:'なんじゃ、ここはワシの降りる駅ではないぞ。',
	1:'だが停車したということは、降りる客がいるはずじゃな。',
	2:'自分の切符は確認したか？<br>そろそろ夢から覚める時じゃな。',
	3:'そう、ここで降りるのはお前…そしてあの子たちじゃ。',
	4:'ほら、あの子たちはすでに降りたようじゃ。<br>お前を呼んでおる。',
	5:'はっはっは、夢の中まで騒がしい子達じゃ。',
	6:'気を付けて降りるんじゃぞ。<br>この車両の事はワシに任せておけ。',
	7:'…店とあの子たちのことは頼んだぞ。',
	8:'タカヒロよ。',	
}
const stampAnswer = {
	stamp1:"taurus",
	stamp2:"gemini",
	stamp3:"capricorn",
	stamp4:"aquarius",
	stamp5:"pisces",
	stamp6:"scorpio",
	stamp7:"leo",
}