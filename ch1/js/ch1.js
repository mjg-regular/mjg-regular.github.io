monogatari.script ({
    'ch1':[
        'centered Regular Tourney 3',
		'play sound quietCity with volume 100 loop',
		'centered Chapter 1',
		'wait 1000',
		'show scene vending with fadeIn',
		'play music cute with volume 80 loop fade 20',
		'wait 2000',

		'You find Ishikawa Emi crouched on the ground and reaching underneath a vending machine.',

        'e ...',

        'e ...?',

        'e ......!',

        'show character e shocked with bounceInUp',

        'e !!!',

        
        'show character e happy2',
        'e Oh? If it isn\'t you.',

        'show character e happy3',

        'e Do you remember? It\'s me, Ishikawa Emi, from the Department of Cultural Anthropology.',

        'show character e excited with bounce',
        'e I\'m the mahjong tournament girl.',

        'show character e happy',
        'e Do you want another flyer? Here, take one more.',

        'show character e happy3',
        'e It\'s free, so don\'t be shy at all.',

        'show message Flyer',

        'show character e relieved',
        'e ...',

        'show character e worried',
        'e So, did you sign up? I hope you did.',

        {
			'Choice':{
				'Route a1':{
					'Text': 'No, I won\'t join a shady mahjong tournament.',
					'Do': 'jump a1'
				},
				'Route a2':{
					'Text': 'Yes! I\'m excited for more mahjong.',
					'Do': 'jump a2'
				},
				'Route a3':{
					'Text': 'What were you doing down there?',
					'Do': 'jump a3'
				},
			}
		}
    ],

    'a1': [
        'show character e shocked',
        'e My, not again.',

        'show character e angry',
        'e I said it\'s not shady. You can even read it on the flyer.',

        'show character e angry3',
        'e approved by the Department of Cultural Anthropology. The University gave its full recommendations, and it\'s known to be very strict when it comes to ethics.',

        'show character e angry2',
        'e It\'s a ritual of good. It\'s summoning an Angel, not some weird demon from who knows where.',

        'show character e challenge',
        'e Hmmp. But I\'m not in a rush. Do you know why?',

        'show character e happy3 with bounce',
        'e It\'s because I have now more than 50 participants!',

        'show character e wonder',
        'e ...It didn\'t reach 300, but it doesn\'t matter.',

        'show character e happy',
        'e Ehe. That\'s right. I\'ve managed to fulfill the bare minimum of the ritual requirements.',

        'show character e worried',
        'e Still, getting more players would increase the chance that the ritual succeeds...',

        'show character e angry',
        'e but it won\'t justify getting a rude person like you in it.',

        'show character e wonder',
        'e It\'s just a regular mahjong tournament. What\'s the worst that could happen?',

        'show character e unsure',
        'e We\'re not ending the world, we\'re not trying to gouge each player\'s heart out to offer at an altar.',

        'show character e worried',
        'e No! All I\'m asking is for you to play a game of mahjong without gimmicks.',

        'show character e worried2',
        'e *sigh*',

        'show character e worried',
        'e ...AnimeLover99 did tell me that /mjg/ loves their gimmicks and hates normal mahjong tournaments, so maybe that\'s your gripe.',

        'show character e avoid_eye2',
        'e Can\'t you enjoy plain mahjong without adding some weird gimmick full of complicated rules?',

        'show character e thinking',
        'e Do you give angry one-star reviews to vanilla extracts at online stores?',

        'show character e angry3',
        'e Does seeing an empty white canvas make you go mad? ',

        'show character e angry',
        'e Are you the type of person who prefers their tea salty?',

        {
			'Choice':{
				'Route b1':{
					'Text': 'Alright, I\'ll sign up.',
					'Do': 'jump b1'
				},
				'Route b2':{
					'Text': 'I prefer my girls without cat ears.',
					'Do': 'jump b2'
				}
			}
		}

    ],

    'b2':[
        'show character e shocked with shakeX',
        'e ...A deviant. You are a deviant.',

        'show character e angry2',
        'e Nyataracts would have you shot for those words.',

        'show character e avoid_eye2',
        'e I-I have somewhere to go. I\'m busy writing this and that for my thesis.',

        'show character e wonder',
        'e Please stop visiting around these parts. Or I\'ll call the authorities.',

        'hide character e with fadeOutRight',
        '*Runs away.*',

        '.........',
        '......',
        '...',

        `jump Fin`
    ],

    'b1':[
        'show character e normal',
        'e So you\'re the type to root for the main girl in a harem anime, huh.',

        'show character e shocked',
        'e You\'re the special kind of person.',

        'show character e happy',
        'e Here\'s the tournament registration. It\'s for special children like you.',

        'show message Application',

        'show character e happy2',
        'e You should register and have some delicious vanilla mahjong!',

        'show character e happy3',
        'e It will be fun, and I\'ll make sure you\'ll be rewarded handsomely~',

        'jump cr1'
    ],

    'a2':[
        'show character e happy3 with bounce',
        'e Nice! Thank you very much for helping me.',

        'show character e worried',
        'e It\'s been hard, you know? Trying to convince people to join this weird tournament.',

        'show character e worried2',
        'e Weird, in a way that there\'s a ritual involved.',

        'show character e shocked',
        'e But it\'s not like it\'s a part of the actual tournament! It\'s just a little extra, for me and my research partner in our thesis.',

        'show character e happy',
        'e You\'ll reap all of the benefits and none of the harm!',

        'show character e happy2',
        'e You can trust me on this.',

        'show character e worried',
        'e But... I don\'t know how to tell you this...',

        'show character e worried2',
        'e I don\'t even know how to announce it to /mjg/. It\'s making me nervous.',

        'show character e thinking',
        'e ...',

        'show character e shocked',
        'e No! It\'s not about someone dying, no.',

        'show character e worried',
        'e It\'s just...',

        'show character e worried2',
        'e <small>AnimeLover99 might have to drop out...</small>',

        'show character e worried',
        'e I\'m sorry if you were looking forward to her!',

        'show character e thinking',
        'e There\'s just these... circumstances. Yes, circumstances.',

        'show character e normal',
        'e Very important circumstances she has to deal with.',

        'show character e unsure',
        'e So... no AnimeLover99. But Nyataracts should be attending!',

        'show character e relieved',
        'e Everyone likes cats better than nurses, I hope.',

        'show character e happy3',
        'e Don\'t tell /mjg/ yet, okay? Maybe they won\'t notice it.',

        'jump cr1'
    ],

    'a3':[
        'show character e happy3',
        'e Hmm? Are you curious?',

        'show character e happy',
        'e Let\'s play a game!',

        'show character e thinking',
        'e ...',

        'show character e happy',
        'e I took something down there, something that can fit inside my skirt pocket.',

        'show character e happy2',
        'e What is it?',

        'show character e happy3',
        'e Can you guess what it is that I have in my pocket?',

        // One of these answers is the correct one. Can you guess what it is?
        {
			'Choice':{
				'Route c1':{
					'Text': 'A coin',
					'Do': 'jump c1'
				},
				'Route c2':{
					'Text': 'A mahjong tile',
					'Do': 'jump c2'
				},
				'Route c3':{
					'Text': 'A piece of string',
					'Do': 'jump c3'
				},
                'Route c4':{
					'Text': 'A ring',
					'Do': 'jump c4'
				},
                'Route c5':{
					'Text': 'A friendship bracelet',
					'Do': 'jump c5'
				},
                'Route c6':{
					'Text': 'A foil wrapper',
					'Do': 'jump c6'
				},
                'Route c7':{
					'Text': 'A diamond',
					'Do': 'jump c7'
				},
                'Route c8':{
					'Text': 'A regular tourney flyer',
					'Do': 'jump c8'
				},
                'Route c9':{
					'Text': 'A tanyao nomi to end it all',
					'Do': 'jump c9'
				},
			}
		}
    ],

    'c1':[
        'show character e happy3 with bounce',

        'e Good answer!',

        'show character e happy2',
        'e People take out coins all the time in front of vending machines. Statistically, coins have the greatest chance of falling and rolling down under.',

        'show character e angry',
        'e But, you know, just because statistics say you\'re correct, doesn\'t mean you\'re right.',

        'show character e challenge',
        'e Buzz buzz! Wrong answer!',

        'show character e relieved',
        'e But I really think it\'s a nice answer!',

        'show character e happy2',
        'e You must love using bots to analyze your mahjong hands.',

        'show character e wonder',
        'e ...You lost, right?',

        'show character e happy2',
        'e So the loser must have a punishment.',

        'show character e excited',
        'e I wonder~ What should I do?',

        'show character e happy3',
        'e —Just kidding! Ehe.',

        'show character e happy',
        'e The only punishment you\'ll have is never knowing whatever it is I took underneath.',

        'show character e unsure',
        'e Maybe I\'ll tell you if you win the tournament.',

        'jump cr1'
    ],

    'c2':[
        'show character e wonder',
        'e Why a mahjong tile?',

        'show character e worried',
        'e Do you think I\'m a girl who carries around a mahjong tile just because she\'s hosting a mahjong tournament?',

        'show character e thinking',
        'e And even if I did — theoretically, of course — why would I take it out in front of a vending machine?',

        'show character e unsure',
        'e Still, don\'t worry! It\'s not a weird assumption at all. You\'re not weird.',

        'show character e happy2',
        'e Just a little misguided, that\'s all.',

        'show character e happy3',
        'e  And for that, you\'ll be punished~',

        'show character e happy',
        'e What\'s with that face? It\'s a simple punishment.',

        'e You\'ll just never learn what\'s in my pocket. It\'s mine now.',

        'show character e unsure',
        'e Maybe I\'ll give it to you after the tournament? Ehehe.',

        'jump cr1'
    ],

    'c3':[
        'show character e happy2',
        'e Ehe.',

        'show character e relieved2',
        'e A world without string is chaos.',

        'show character e relieved',
        'e Me? Keep a piece of string in my pocket?',

        'show character e happy2',
        'e I\'m a mahjong tournament organizer. Chaos is my business. ',

        'show character e happy',
        'e But it would be funny to catch me with a piece of string.',

        'show character e wonder',
        'e Wrong answer. It\'s not a string.',

        'e It could never be.',

        'show character e happy3',
        'e As punishment, you\'ll never know what I took.',

        'jump cr1'
    ],

    'c4':[
        'show character e happy3 with bounce',
        'e Oh, a shiny ring!',

        'show character e happy',
        'e I\'d love a shiny ring. I\'d watch it sparkle and shine all day.',

        'show character e happy2',
        'e I want to get lost in it. I want to burn my eyes looking at it glitter.',

        'show character e challenge',
        'e That\'s a good idea. I could coat a ring with glitters.',

        'show character e worried',
        'e I wonder if someone has already thought of that.',

        'show character e happy2',
        'e The name, we can call it the Glitter Ring.',

        'show character e thinking',
        'e Is it too generic and on the nose? Then, I\'ll think of another name.',

        'show character e happy3',
        'e Hmm... Ring of Bright Yesterdays. There.',

        'show character e happy',
        'e Yeah, perfect! It sounds both lonely and mysterious at the same time.',

        'show character e wonder',
        'e But we\'ll never sell it. And we\'ll never make another one.',

        'show character e happy',
        'e Just one ring.',
        {
			'Choice':{
				'Route question':{
					'Text': 'Was the answer a ring?',
				}
			}
		},
        'show character e shocked',
        'e Hmm? Oh, no it wasn\'t.',

        'show character e happy2',
        'e I don\'t have a ring in my pocket.',

        'show character e unsure',
        'e Sorry. As punishment for guessing the wrong answer, you\'ll just have to live with the fact that you\'ll never learn what it is.',

        'jump cr1'
    ],

    'c5':[
        'show character e worried',
        'e That sounds like a very specific guess.',

        'e No, it\'s not a friendship bracelet. Why would you think that?',

        'show character e happy2',
        'e Don\'t get me wrong. I love bracelets. Especially the shiny sparkly ones.',

        'show character e thinking',
        'e But friendship bracelets are rarely shiny. They\'re mostly made of string.',

        'show character e worried',
        'e So no, it\'s not a friendship bracelet. So you lost the game.',

        'show character e unsure',
        'e Since you lost, you don\'t get to learn what I took.',

        'show character e happy2',
        'e It\'s a knowledge just for me.',

        'jump cr1'
    ],

    'c6':[
        'show character e happy3 with bounce',
        'e Isn\'t foil amazing?',

        'show character e shocked',
        'e It\'s like paper, but in a premium.',

        'show character e thinking',
        'e How are they able to do that? It\'s crazy.',

        'show character e happy3',
        'e Shiny paper? Wow!',

        'show character e happy2',
        'e —still, wrong.',

        'show character e relieved',
        'e Unfortunately, it\'s not foil wrapper.',

        'show character e happy',
        'e I like your guess though.',

        'show character e unsure',
        'e You know what? If you win the tournament, I\'ll tell you what I\'m hiding in my pocket.',

        'show character e normal',
        'e I\'ll even give it to you as a prize.',

        'show character e happy3',
        'e It\'s pretty cool.',

        'jump cr1'
    ],

    'c7':[
        'show character e thinking',
        'e A diamond? Seriously?',

        'e You think I\'d find a piece of diamond under the vending machine?',

        'show character e shocked',
        'e If that\'s true, then we\'d be seeing a new diamond rush. Prospectors crouched down, reaching towards the darkness of the abyss.',

        'show character e happy2',
        'e —Funny. But wrong. Totally wrong.',

        'show character e relieved2',
        'e It\'s not a diamond.',

        'show character e happy2',
        'e You lost, so you don\'t get to know the answer.',

        'show character e unsure',
        'e But... maybe if you win the tournament, I\'ll tell you?',

        'show character e happy3',
        'e I\'ll make the offer even sweeter. I\'ll give it to you. Whatever I have right now in my pocket.',

        'show character e happy',
        'e That should be fun.',

        'jump cr1'
    ],

    'c8':[
        'show character e happy2',
        'e Yes.',

        'show character e relieved',
        'e If I dropped a flyer, I\'d be forced to crouch down and get it.',

        'show character e worried2',
        'e If someone caught me littering, they\'d report me to the Department and my thesis would be null and void.',

        'show character e worried',
        'e They\'re really insistent on ethical issues.',

        'show character e thinking',
        'e And if the department cuts my funding, I\'d never be able to finish the ritual! We can\'t have, that.',

        'show character e wonder',
        'e But no.',

        'e Think about it logically.',

        'show character e relieved',
        'e Why would I put a flyer in my pocket?',

        'show character e shocked',
        'e Shouldn\'t I just pile it together with the other flyers?',

        'show character e pray',
        'e And, assuming it\'s dirty.',

        'show character e relieved',
        'e I\'d just throw it immediately. I\'d never put something that dirty in my pockets.',

        'show character e shocked',
        'e So you failed. It\'s not a flyer.',

        'show character e happy',
        'e As punishment, I\'m never telling you what I got.',

        'show character e unsure',
        'e —However, I\'m willing to make an exception for the winner of the tournament.',

        'show character e happy3',
        'e Yes! If you win, I\'ll tell you.',

        'show character e happy',
        'e No, even better, I\'ll give it to you. Whatever I have in my pocket.',

        'show character e happy2',
        'e But only if you win.',

        'jump cr1'
    ],

    'c9':[
        'show character e shocked',
        'e ...',

        'show character e wonder',
        'e Is that supposed to be an /mjg/ joke?',

        'show character e thinking',
        'e What does a yaku in mahjong have to do with a physical item inside my pocket?',

        'show character e shocked',
        'e O-Oh, you were just trying to make me laugh.',

        'show character e relieved',
        'e A-Ahahahahaha...',

        'show character e happy2',
        'e It was funny! Genuinely!',

        'show character e thinking',
        'e Although I don\'t know why you chose Tanyao in particular...',

        'show character e unsure',
        'e Right! Ichihime says it during one of Mahjong Soul\'s loading screens! I think?',

        'show character e worried2',
        'e I don\'t really play that much in mahjong soul.',

        'show character e thinking',
        'e I\'m more of a tenhou player myself.',

        'show character e normal',
        'e ...',

        'show character e happy2',
        'e No, I do not have a tanyao nomi inside my pockets.',

        'show character e relieved',
        'e Sorry, you lose.',

        'show character e worried',
        'e So I won\'t tell you what I got. You\'re not interested at all.',

        'show character e angry3',
        'e Hmmp.',

        'jump cr1'
    ],

    'cr1':[
        'show character e happy2',
        'e So, here, another flyer, on the house.',

        'show message Flyer',

        'show character e happy',
        'e In fact, why don\'t you take three? I\'m sure someone like you has a lot of friends you can share it with.',

        'show message Flyerr',

        'show character e happy3',
        'e Ehe.',

        'show character e happy2',
        'e Are you ready to play some regular mahjong?',

        'e I\'m not participating myself, but I\'ll wish every single one of you the best of luck.',

        'show character e relieved',
        'e I believe luck is important to win a game.',

        'show character e happy2',
        'e In fact, I\'ll give you some tips for increasing your odds in the tournament.',

        'show character e relieved2',
        'e First, you need a good environment when playing.',

        'show character e happy',
        'e Why not try playing mahjong other than the place you usually play?',

        'show character e happy3',
        'e If you play lying on the bed on your phone, try playing outside your room instead!',

        'show character e happy2',
        'e Get comfortable on your sofa!',

        'show character e relieved',
        'e And if you play on your computer... well, move your computer outside?',

        'show character e happy',
        'e You look strong enough to carry everything.',

        'show character e happy3',
        'e In fact, you\'re strong enough to get one more flyer!',

        'show message Flyer',

        'show character e happy',
        'e And that\'s it for me. Enjoy the tournament.',

        'show character e relieved',
        'e Don\'t go roaming around alone at night. Be sure to eat your vegetables.',

        'show character e relieved2',
        'e A healthy mind is a healthy mahjong.',

        'show character e happy3',
        'e Make sure you don\'t die on the way home.',

        'show character e happy',
        'e You\'ve got some mahjong to play.',

        {
			'Choice':{
				'Route d1':{
					'Text': 'See you at the tournament!',
					'Do': 'jump d1'
				},
				'Route d2':{
					'Text': 'No, wait. Give me more mahjong tips. I\'m not ready for the tournament!',
					'Do': 'jump d2'
				},
				'Route d3':{
					'Text': 'I want to hang out together.',
					'Do': 'jump d3'
				},
			}
		}
    ],

    'd1':[
        'show character e happy3 with shakeY',
        'e Nn. The best of luck, for you.',

        'show character e happy2',
        'e I\'ll make sure to give you and everyone else on /mjg/ updates.',

        'show character e happy',
        'e Have fun!',

        'hide character e with fadeOutRight',

        '.........',
        '......',
        '...',

        'jump Fin'
    ],

    'd2':[
        'show character e wonder',
        'e Mahjong tips?',

        'show character e worried',
        'e Why are you asking this to me?',

        'show character e relieved',
        'e I may be organizing this tournament, but I\'m only Novice 2 in mahjong soul.',

        'show character e unsure',
        'e I\'m not a mahjong addict.',

        'show character e shocked',
        'e It just so happened that the ritual I\'m researching needs mahjong!',

        'show character e wonder',
        'e ...But, if you really want more tips, I suggest you read Riichi Book 1.',

        'show character e avoid_eye2',
        'e Wait, I\'m sure I have a copy with me...',

        /// shake

        'show character e avoid_eye2 with shakeX',
        'e ...',

        'show character e happy3 with bounce',
        'e Ehe! Here it is!',

        'show message Riichi',

        'show character e happy',
        'e Riichi Book 1. Read it yourself.',
        {
			'Choice':{
				'Route e1':{
					'Text': 'I hate reading!',
					'Do': 'jump e1'
				},
				'Route e2':{
					'Text': 'Thank you! I love reading',
					'Do': 'jump e2'
				},
			}
		}
    ],

    'e1':[

        'stop music',

        'play music america with volume 80 loop',

        'show character e shocked',
        'e ...',

        'show character e relieved',
        'e Aww, do you need me to explain it for you?',

        'show character e unsure',
        'e Do you want me to teach you the lessons personally?',

        'show character e happy',
        'e That\'s cute~',

        'show character e relieved',
        'e Buuuut... I\'m not a mahjong player!',

        'show character e relieved2',
        'e And I might have suggested Riichi Book 1 myself, yes...',

        'show character e happy3',
        'e But at the end of the day, doesn\'t it all come down to luck?',

        'show character e happy2',
        'e If you\'re lucky, you win.',

        'show character e happy',
        'e If you\'re not lucky, you lose.',

        'show character e happy3',
        'e It\'s simple. Mahjong is so simple.',

        'show character e happy2',
        'e So don\'t sweat the small stuff and just play the best mahjong game you can, okay?',

        'show character e relieved',
        'e You don\'t need some weird cope from a strange book.',

        'show character e challenge',
        'e Yeah! Down with reading!',

        'stop music',
        'play music cute with volume 80 loop',

        'jump d2_cont'
    ],

    'e2':[
        'show character e happy3 with bounce',
        'e That\'s great!',

        'show character e happy2',
        'e Reading is good! Isn\'t it great reading the words on the paper?',

        'show character e happy3',
        'e It really fires up those old unused neurons.',

        'show character e challenge',
        'e I\'d even argue that civilization only started when we learned how to read!',

        'show character e happy2',
        'You can trust me on this. I\'m a cultural anthropologist.',

        'jump d2_cont'
    ],

    'd2_cont':[
        'show character e happy3',
        'e So good luck out there!',

        'show character e relieved',
        'e I\'m... may be rooting for you?',

        'show character e unsure',
        'e I\'ll root for you, sure~',

        'show character e happy',
        'e If you win.',

        'show character e happy',
        'e I\'ll be going now, busy busy...',

        'hide character e with fadeOutRight',

        '.........',
        '......',
        '...',
        'jump Fin'
    ],

    'd3':[
        'show character e shocked',
        'e Hang out? With me?',

        'show character e thinking',
        'e ...',

        'show character e happy3',
        'e That\'s perfectly fine!',

        'show character e worried',
        'e It\'s just that... well...',

        'show character e worried2',
        'e I am, perchance, busy.',

        'show character e relieved',
        'e Sure, you caught me hanging around with this vending machine, but don\'t let that fool you!',

        'show character e worried',
        'e There are tons of things to write about.',

        'show character e avoid_eye2',
        'e Plus that celebrity who dropped out...',

        'show character e worried2',
        'e <small>...and I have to dispose of all these flyers I made...</small>',

        'show character e shocked',
        'e 900 flyers!',

        'show character e angry3',
        'e Since you\'re here, I might as well complain.',

        'show character e angry',
        'e I made 900 flyers, you know?',

        'show character e worried',
        'e With that, I was assuming I\'d get at least 300 players worldwide...',

        'show character e unsure',
        'e Not that I\'m not grateful for the participants right now, no!',

        'show character e worried2',
        'e It\'s just that... wouldn\'t it be cool to have a lot of people like that?',

        'show character e worried',
        'e And if only 1 in 3 people decided to join, we\'d still have 300 participants...',

        'show character e shocked',
        'e ...However! The number of participants is not what\'s important!',

        'show character e avoid_eye2',
        'e <small>50 minimum is important, but don\'t think about that</small>',

        'show character e happy',
        'e What\'s important is that you\'re all playing mahjong, pure and true.',

        'show character e happy3',
        'e Right?',

        'show character e relieved',
        'e So stop hanging around with this little old busy bee.',

        'show character e happy2',
        'e Go now. Goodbye.',

        'show character e happy3',
        'e See you in the tourney okay?',

        'hide character e with fadeOutRight',

        '.........',
        '......',
        '...',

        'jump Fin'
    ]




});