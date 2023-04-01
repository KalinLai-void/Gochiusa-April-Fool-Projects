const gameStart = {

	0:'Are you enjoying your trip？',

	1:'Now,arrival the first stop station.<br>Some passengers are getting off.',

	2:'Can you please go talk to them with the crew?',

	3:'The clue is the name of the "upper right" station where you got off and the passenger´s birthday.',

	4:'Might be a good thing to remember the order of the stations.<br>fine',

}

const trainPassenger = {

	tippy:{

		correct:'',

		incorrect:['Thank you so much for coming.','I missed you all too！','Please come back to the Rabbit House and see them again!'],

		name:'Tippy',

		second: 'Rabbit house´s master',

		birthday:'???'

	},

	maya:{

		correct:'I can smell the treasure from this station... my head treasure sensor is reacting too!<br>Huh! And it´s not stupid hair!',

		incorrect:'Hmmm, too bad, but I don´t smell any treasures coming from this station...',

		name:'Maya',

		second: 'Interstellar Treasure Hunter',

		birthday:'8/8'

	},

	aoyama:{

		correct:'I came up with a good novel idea.<br>It was a good thing I took the plunge and stepped on board.<br>I´ll be back again.',

		incorrect:'haha...not this station.<br>And I haven´t come up with any novel ideas yet.',

		name:'Aoyama',

		second: 'galactic novelist',

		birthday:'10/27'

	},

	megu:{

		correct:'thx<br>I think I had some kind of dream about spending time in Half-timber town....<br>Is this or is this a dream？',

		incorrect:'Something tells me this is not the place....<br>Oh, why am I on this train in the first place？',

		name:'Megu',

		second: 'Angel with amnesia',

		birthday:'11/2'

	},

	mocha:{

		correct:'thx.<br>Oh yeah, I just want to say one thing about the bread in the dining car.<br>Your bread was sticky.You´ve improved your skills………',

		incorrect:'Hm? That´s not a station here!',

		name:'Mocha',

		second: 'Cosmo Bakery Queen',

		birthday:'3/13'

	},

	fuyu:{

		correct:'Thanks...I´ll come back to visit you.<br>I´ll make lunch this time and we´ll eat together.',

		incorrect:'Ah...not this station...<br>Maybe I forced out for the crime of going to the Rabbit House too often.…？',

		name:'Fuyu',

		second: 'Interstellar Grand Master',

		birthday:'1/24'

	},

	yura:{

		correct:'Everyone - too friendly!<br>I´m leaving.',

		incorrect:'Wrong target.<br>Not this station!',

		name:'Yura',

		second: 'Cleaner of "everything"',

		birthday:'1/12'

	},

	elu_natsume:{

		correct:[

			"Wow - look at you, Natsume.<br>Even the station staff on the platform and the birds flying around look like twins. It's an interesting station.",

			"That's a blue bird of happiness! Elle, come on! We have to catch it!"

		],

		incorrect:[

			"Was it this station?",

			"Not this station."

		],

		name:'Elu & Natsume',

		second: 'Traveling Twins',

		birthday:'6/15'

	},

	rin:{

		correct:'Oh...has the train arrived at the station already?<br>Damn...I couldn´t find Aoyama Sensei after all...！',

		incorrect:'Galaxy Editor',

		name:'Rin',

		second: '',

		birthday:'5/4'

	},

}

const gameStation = {

	taurus:{

		station:"Taurus station",

		conductor:'chiya',

		dialogue:[{"chiya":"Hai! Let's see, let's I see your ticket!<br>And while you're at it, how about a special monaka with the image of this vehicle on it？"}],

		passenger:'rin',

	},

	gemini:{

		station:"Gemini station",

		conductor:'syaro',

		dialogue:[{syaro:"Performance and smiley faces are being served to customers who order herbal tea in the dining car!"}],

		passenger:'elu_natsume',

	},

	capricorn:{

		station:"Capricorn station",

		conductor:'rize',

		dialogue:[{rize:"I'm not busy in the first aid room!<br>Is anyone not feeling well!"}],

		passenger:'yura',

	},

	aquarius:{

		station:"Aquarius Station",

		conductor:'chino',

		dialogue:[{chino:"This is our vehicle's original blend of service.<br>Oh...I hope it suits your palate."}],

		passenger:'fuyu',

	},

	pisces:{

		station:"pisces station",

		conductor:'cocoa',

		dialogue:[{cocoa:"Take a Gallery Stollen as a souvenir of your disembarkation!<br>Also, I'd be happy if you let me mooch around."}],

		passenger:'mocha',

	},

	scorpio:{

		station:"Scorpius Station",

		conductor:'syaro_chiya',

		dialogue:[{chiya:'There are two guests getting off.'},{syaro:'I know. I´ll take care of that vehicle.'}],

		passenger:['megu','aoyama'],

	},

	leo:{

		station:"Leo station",

		conductor:'rize',

		dialogue:[{rize:"Child passengers came to play in the relief room,<br>it was like a day care center.<br>Well, that's okay."}],

		passenger:'maya',

	},

	kigumi:{

		station:"Half-timber Twon",

		conductor:'cocoa_chino',

		dialogue:[{cocoa:'It´s our home from the past!'},{chino:'Has everyone forgotten anything?'}],

		passenger:'tippy',

	},

}

const gameEnding = {

	0:'What? This is not the station where I get off.',

	1:'But if the train has stopped, there must be passengers getting off.',

	2:'Did you check your own ticket?<br>It´s time to wake up from this dream.',

	3:'Yes, it´s you who gets off here...and those children.',
	4:'Look, I think they´re already down.<br>They are calling for you.',

	5:'Haha, they are noisy children even in their dreams.',

	6:'Be careful getting off.<br>I´ll take care of this train.',

	7:'…Please take care of the store and those children.',

	8:'Takahiro.',	

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
