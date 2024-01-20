monogatari.script ({
	'prologue': [

		'centered /mjg/ productions presents',
		'play sound quietCity with volume 100 loop',
		'centered Regular Tourney 3',
		'centered Prologue',
		'wait 1000',
		'show scene city with fadeIn',
		'play music mysterious with volume 80 loop fade 20',
		'wait 2000',
		'? Um, hello! Excuse me!',
		'show character e happy at center with fadeInRight',
		'? Hello! Can I have a bit of your time?',
		'show character e happy3',
		'e I\'m Ishikawa Emi!',
		'show character e happy2',
		'e I\'m from the Department of Cultural Anthropology.',
		{
			'Choice':{
				'dotfdfddot':{
					'Text': '...',
					'Do': 'jump prologue_cont'
				}
			}
		}
	],

	'prologue_cont': [
		'show character e shocked',
		'e Wait! P-Please don\'t leave!',
		'show character e unsure',
		'e I promise you that this will be worth your time!',
		'show character e thinking',
		'e ...',
		'show character e happy',
		'e I\'m looking for volunteers for my thesis, and you look like someone who\'d be perfect for it.',
		'show character e excited2',
		'e Say, do you know about a game called Riichi Mahjong?',
		{
			'Choice':{
				'Route R1':{
					'Text': 'No, I don\'t, please stop bothering me',
					'Do': 'jump r1_route'
				},
				'Route R2':{
					'Text': 'I know Riichi Mahjong! In fact, I\'m one of /mjg/\'s top players!',
					'Do': 'jump r2_route'
				},
				'Route R3':{
					'Text': 'Stay away from me, creep!',
					'Do': 'jump r3_route'
				},
			}
		}
	],

	// ############################ ROUTE 1 #############################

	'r1_route':[
		'show character e shocked',
		'e My, truly?',
		'show character e worried',
		'e You\'re from /mjg/, and you don\'t know how to play mahjong?',
		{
			'Choice':{
				'how?':{
					'Text': 'How did you know I\'m from /mjg/?',
					'Do': 'jump r1.1'
				},
				'dowwtdot':{
					'Text': 'I don\'t come to /mjg/ for mahjong.',
					'Do': 'jump r1.2'
				}
			}
		}
	],

	'r1.2':[
		'show character e shocked',
		'e Huh?',

		'show character e thinking',
		'e Wait wait wait, let me get this right.',

		'show character e worried2',
		'e According to one of /mjg/\'s top celebrities, AnimeLover99, famous nurse, four time League MVP, /mjg/ means Mahjong JKs General.',

		'show character e worried',
		'e And you... don\'t come for the mahjong?',

		'show character e thinking',
		'e That\'s weird. That\'s very weird.',

		'show character e worried',
		'e I... I\'m sorry to bother you.',

		'show character e shocked',
		'e You can go on your way now.',

		'show character e worried',
		'e Sorry, please don\'t mug me!',
		'hide character e with fadeOutRight',

		// Don't forget to add a running animation here
		'*runs away*',

		'.........',
		'......',
		'...',

		'jump Fin'
	],

	'r1.1':[

		'show character e happy2',

		'e How? I\'ve been told all about it by a friend.',

		'e She\'s famous in /mjg/, she said. A real celebrity, perhaps you\'ve heard of her.',
		'show character e happy',
		'e She said to just say her name, and anyone from /mjg/ will listen to me out of respect.',

		'show character e happy3',
		'e Do you know her, AnimeLover99? The famous nurse?',

		{
			'Choice':{
				'I know':{
					'Text': 'The Famous Nurse! AnimeLover99! I know her.',
					'Do': 'jump r1.1.1'
				},
				'I don\'t know':{
					'Text': 'Literally who?',
					'Do': 'jump r1.1.2'
				}
			}
		}

	],

	'r1.1.2':[

		'show character e shocked',
		'e AnimeLover99! The famous nurse! /mjg/\'s premiere celebrity!',

		'show character e thinking',
		'e How could you not know her?',

		'show character e wonder',
		'e She\'s been in every tournament and league in /mjg/\'s history!',

		'show character e worried',
		'e Legends have been told about her legendary mahjong, a mahjong so legendary that mortal bots are unable to comprehend it!',

		'show character e worried2',
		'e ...Or at least, that\'s what she says.',

		'show character e avoid_eye2',
		'e AnimeLover99 told me to go to /mjg/ to find people willing to volunteer for my thesis.',

		'show character e angry3',
		'e A place abundant with mahjong players with little to no care for their mental health...',

		'show character e happy',
		'e Not that low mental health is a requirement for my research.',

		'jump r1.1_cont'
	],

	'r1.1.1':[
		'show character e relieved',
		'e Oh good, you know her. That saves me the embarrassment.',

		'show character e happy2',
		'e Yes, she told me /mjg/ is the best place to find mahjong players who don\'t care about their lives too much.',

		'show character e unsure',
		'e ...Not that your state of being alive or not depends on my thesis.',

		'jump r1.1_cont'
	],

	'r1.1_cont':[
		'show character e shocked',
		'e ...',

		'show character e worried2',
		'e Ahem.',

		'show character e worried',
		'e You truly do not know how to play mahjong?',

		'e That\'s weird, isn\'t it? Being in a mahjong community and not knowing anything about mahjong.',

		{
			'Choice':{
				'dotdudsfxot':{
					'Text': 'I\'m just here to observe these mahjong freaks. It\'s like going to the zoo, but free.',
					'Do': 'jump r1.1.1.1'
				},
				'dotfzdoddt':{
					'Text': 'Sorry, talking to cute girls make me nervous.',
					'Do': 'jump r1.1.1.2'
				},
				'dotdghghgotwewrwr':{
					'Text': 'My mom taught me not to talk to strangers.',
					'Do': 'jump r1.1.1.3'
				}
			},
		}

	],

	'r1.1.1.1':[
		'show character e excited2',
		'e Oh, I see we have the same hobbies.',
		'show character e happy2',
		'e I also like watching insects going about in their everyday lives.',

		'show character e unsure',
		'e I wish insects could play mahjong, but it\'s just not meant to be.',

		'show character e thinking',
		'e ...',

		'show character e wonder',
		'e So you really don\'t know anything about mahjong? That\'s a shame.',

		'show character e happy2',
		'e But you should! Mahjong is fun!',

		'show character e happy',
		'e I\'m still Novice 2 myself, but I\'ve been finding this game really fun.',

		'show character e happy3',
		'e Aren\'t you lonely just watching people have fun? You should join in.',

		'show character e happy',
		'e I\'d love to have more people help me in my thesis.',

		{
			'Choice':{
				'dotdotqqchv':{
					'Text': '...Thesis?',
					'Do': 'jump r1.1.1.1.1'
				},
				'dotdotkkuig':{
					'Text': 'Sucks to be you.',
					'Do': 'jump r1.1.1.1.2'
				}
			}
	
		}
	],

	'r1.1.1.1.2':[
		'show character e worried',
		'e Please, you don\'t have any bit of pity in your heart?',

		'show character e angry',
		'e Ahh, let me see.',

		'show character e angry3',
		'Emi makes a circle with her thumb and index finger, and peers to your heart',

		'show character e angry2',
		'e It\'s black...',

		'show character e angry',
		'e I guess this is expected from someone who\'s in /mjg/ while not playing mahjong.',

		'show character e shocked',
		'e Err... no! I must not be prejudiced!',

		'show character e thinking',
		'e ...',

		'show character e worried',
		'e Sorry for ignoring you.',

		'show character e worried',
		'e At least look at this.',

		'show image flyer.png center with fadeInUpBig',

		'e It\'s a tournament for mahjong players. A Regular Mahjong Tournament, 3.',

		{
			'Choice':{
				'dotdotshonb':{
					'Text': 'Three?',
					'Do': 'jump r1.1.1.1.2_cont'
				}
			}
		}

	],

	'r1.1.1.1.2_cont':[

		'show character e worried2',
		'e Yes, the third. It\'s complicated, and it\'s part of my research.',

		'show character e normal',
		'e Just take it and maybe show it to someone who\'s more interested in mahjong than you.',

		'hide image flyer.png with fadeOutDownBig',

		'show message Flyer',

		'show character e worried',
		'e I\'m trying to find participants for it, it\'s part of my research a partner and I are working on for a year now.',

		'show character e normal',
		'e Well, I\'ve got to go. There\'s still a lot of people to talk to, a lot of burdens to carry.',

		'show character e worried2',
		'e All on my own.',

		'show character e angry',
		'e I\'m not really hoping to see you again, but I hope you can manage to fish someone willing to participate in this tourney.',

		'show character e avoid_eye',
		'e Bye!',
		'hide character e with fadeOutRight',

		'.........',
		'......',
		'...',
		'jump Fin'
	],

	'r1.1.1.1.1':[

		'show character e excited',
		'e Ehh? What\'s this? Are you curious?',

		'show character e happy3',
		'e You\'re curious, aren\'t you?',

		'show character e happy2',
		'e But... it\'s only for people who know about mahjong.',

		'show character e happy',
		'e I don\'t want outsiders to pollute my research.',

		'show character e excited2',
		'e Unless you want to learn mahjong?',

		{
			'Choice':{
				'dotdotgsef':{
					'Text': 'Fine, I\'ll learn mahjong.',
					'Do': 'jump r1.1.1.1.1.1'
				},
				'dotdoteeccv':{
					'Text': 'Nevermind. I wasn\'t curious about your stupid LARP.',
					'Do': 'jump r1.1.1.1.1.2'
				},
				'dotdoterrbxx':{
					'Text': '*Give in to the inner voices and suddenly scream at her*',
					'Do': 'jump r1.1.1.1.1.3'
				}
			},
		}
	],

	'r1.1.1.1.1.3':[

		// Make Ishikawa Emi jump
		'show character e shocked with bounce',
		'e Uwah!',

		'show character e angry2',
		'e What\'s wrong with you!?',

		'show character e angry',
		'e What are you, a dog!?',

		'show character e worried',
		'e A-AnimeLover99 was right, there really are a lot of unmedicated people hanging around /mjg/.',

		'show character e thinking',
		'e ...',

		'show character e wonder',
		'e Maybe I can teach a dog some mahjong?',

		'show character e worried',
		'e Can I?',

		'show character e avoid_eye2',
		'e Insects are no good, but maybe dogs?',

		'show character e thinking',
		'e ...',

		'show character e worried2',
		'e No no, a proper student of the Department of Cultural Anthropology wouldn\'t use undiagnosed schizophrenics for her research.',

		'show character e happy',
		'e Ethics are important.',

		'show character e worried',
		'e Err... sorry for bothering you.',

		'show character e relieved',
		'e I hope you get better soon.',

		'show character e unsure',
		'e Take your meds, okay?',

		'show character e worried2',
		'e Bye...',
		'hide character e with fadeOutRight',

		'.........',
		'......',
		'...',
		'jump Fin'

	],

	'r1.1.1.1.1.2':[

		'show character e angry2',
		'e L-LARP?',

		'show character e angry',
		'e Excuse me, but I am a proper student of the Department of Cultural Anthropology!',

		'show character e angry3',
		'e Hmmp!',

		'show character e angry',
		'e And my thesis is formal and proper, adhering to the proper standards of ethical research!',

		'show character e angry2',
		'e And what\'s with you anyways? I\'m thinking you\'re the more suspicious person here.',

		'show character e worried',
		'e Someone who hangs around in /mjg/, but doesn\'t play mahjong...',

		'show character e shocked',
		'e There\'s nothing else to call you but a creep!',

		'show character e angry',
		'e I should\'ve brought AnimeLover99 with me to filter out you weirdos.',

		'show character e angry3',
		'e I have no need for you in my research.',

		'show character e angry2',
		'e Shoo! Shoo! Go away!',

		'show character e angry',
		'e Don\'t touch me and my precious research subjects!',
		'hide character e with fadeOutRight',
		'.........',
		'......',
		'...',

		'jump Fin'

	],

	'r1.1.1.1.1.1':[
		'show character e happy3',
		'e That\'s great! Learning mahjong is the first step for a long and fulfilling life!',

		'show character e happy2',
		'e You\'ll finally be part of the people playing mahjong, instead of just watching.',

		'show character e challenge',
		'e And as your mahjong sensei, it\'s my duty to guide you to how wonderful this game is.',

		'show character e worried2',
		'e ...I said that proudly, but I\'m still at Novice 2 myself.',

		'show character e happy',
		'e All I can really do is give you stuff to quickstart your mahjong journey.',

		'show character e avoid_eye2',
		'e Hmm, let\'s see...',

		'Ishikawa Emi ruffles through her bag.',

		'show character e excited2',
		'e Okay. In order to learn mahjong, all you need are to keep note of three things: types of tiles, yaku and mentality.',

		'show character e happy2',

		'e I\'d recommend video game mahjong instead of the real life version for now, since it lets you skip the harder parts of mahjong.',

		'show character e happy',
		'e Try doing a tutorial from any of the Riichi Mahjong video games right now!',


		'e There\'s... [<a href="https://mahjongsoul.game.yo-star.com/" target="_blank"><span style="color: #5bcaff">Mahjong Soul</span></a>] and [<a href="https://www.mahjong-jp.com/home" target="_blank"><span style="color: #5bcaff">Riichi City</span></a>].',

		'show character e happy3',
		'e Just try any of them and familiarize yourself with the tiles and yaku.',
		{
			'Choice':{
				'dotdotopoppo':{
					'Text': 'Which one should I start with, Mahjong Soul or Riichi City?',
					'Do': 'jump r1.1.1.1.1.1.1'
				},
				'dotdotqqx b':{
					'Text': 'I understand that Mahjong Soul and Riichi City are both free to play and I, as an individual with free will, can try them both and form my opinion on which one is better.',
					'Do': 'jump r1.1.1.1.1.1.2'
				}
			}
		}
	],

	'r1.1.1.1.1.1.1':[
		'show character e normal',
		'e Which one? You can choose on whether which one has the girl that strikes your fancy the most.',

		'show character e unsure',
		'e It\'s still all going to teach you the same game.',

		'jump r1.1.1.1.1.1_cont'

	],
	'r1.1.1.1.1.1.2':[
		'show character e unsure',
		'e ...Okay?',

		'show character e relieved',
		'e I don\'t know why you said that weirdly, but I\'m glad you\'ve got strong individuality.',

		'show character e happy2',

		'e And besides, it doesn\'t matter what you choose, what matters is that you can familiarize yourself with the game.',

		'jump r1.1.1.1.1.1_cont'
	],

	'r1.1.1.1.1.1_cont':[

		'show character e relieved',

		'e Really. In my opinion, the best way to learn mahjong is not reading long articles listing all the yakus, or learning all the obscure rules, but just putting yourself out there and playing the game.',

		'e As long as you know what the tiles are, and a few yaku under your belt, you\'re golden.',

		'show character e happy3',
		'e It\'s like swimming.',

		'show character e happy2',
		'e You can listen to all the lectures and video lessons all you want, but nothing beats dipping your head in the waters.',

		'show character e happy',
		'e You can also read this [<a href="https://repo.riichi.moe/guides/how-to-play-video-game-mahjong.html" target="_blank"><span style="color: #5bcaff">Quick Video Game Mahjong Guide</span></a>], if you want.',

		'e But if you\'re really insistent on learning more on the in-depth rules, you can also check this [<a href="https://repo.riichi.moe/" target="_blank"><span style="color: #5bcaff">Mahjong Repository</span></a>]. I\'m sure it has guides, but I\'ve never visited it myself.',

		'show character e worried',
		'e AnimeLover99 said I shouldn\'t visit it unless I reach Master 1, because it has images that are quite stimulating to the brain. ',

		'show character e happy2',
		'e I\'m bad at puzzles, so I\'ll wait.',

		'show character e relieved',
		'e But I\'m sure you\'ll reach that rank in no time.',

		'show character e unsure',
		'e ... ',
		//*smiles*

		'show character e happy',
		'e Good luck on your mahjong journey. We\'re both going to be fellow Novices, but I\'m still your senpai, okay?',

		'show character e happy3',
		'e I\'ll be seeing you!',

		{
			'Choice':{
				'dotdotfgdsvmm':{
					'Text': 'Wait! What about your thesis?',
					'Do': 'jump r1.1.1.1.1.1.1.1'
				}
				,'dotdotdccccvxz':{
					'Text': 'Alright, let\'s meet each other again, at the Throne Room!',
					'Do': 'jump r1.1.1.1.1.1.1.2'
				},
				'dotdotxxbmdsfs':{
					'Text': 'Alright, let\'s meet each other again, at the /mjg/ friendlies!',
					'Do': 'jump r1.1.1.1.1.1.1.3'
				}
			}
		}

	],

	'r1.1.1.1.1.1.1.1':[

		'show character e shocked',
		'e ...Ah! I almost forgot!',

		'show character e happy2',
		'e The reason why I wanted you to learn mahjong!',

		'show character e happy',
		'e Yes, my thesis. ',

		'show character e normal',
		'e Have you heard of it?',

		'show character e relieved2',
		'e Rituals to summon angels, and ask them for knowledge and guidance.',

		
		'show character e relieved',
		'e The Abramelin Operation. it\'s quite famous.',
		'show character e happy2',
		'e In truth, my research was simply trying to trace another similar ritual mentioned in the library records.',

		'show character e relieved2',
		'e According to the records, it\'s been performed twice in history, but any traces of it were erased after something went wrong in the second time.',

		'show character e challenge',
		'e But I didn\'t give up. My research partner and I kept searching.',

		'show character e happy2',
		'e That led us to Antarctica, where lo and behold! I found a copy of the grimoire detailing how to perform it.',

		'show character e wonder',
		'e Strangely enough, it requires a sacrifice of a mahjong, pure and true. A mahjong without gimmicks.',

		'show character e happy3',
		'e A mahjong tournament!',

		'show character e happy',
		'e It\'s amazing, you know? Not only will this ritual show us an angel, but said angel will also give us one wish!',

		{
			'Choice':{
				'dfgvdg':{
					'Text': 'One wish? Who\'s going to get the wish?',
					'Do': 'jump r1.1.1.1.1.1.1.1.1'
				},
			'dotdfdfdfot':{
					'Text': 'You are schizophrenic.',
					'Do': 'jump r1.1.1.1.1.1.1.1.2'
				}
			}
		}

	],

	'r1.1.1.1.1.1.1.1.1':[

		'show character e wonder',
		'e ...',

		'show character e thinking',
		'e ... ...',

		'show character e happy3',
		'e Erh, the winner of the tournament, of course!',

		'show character e happy',
		'e I\'m only really interested in seeing the angel, and to prove the ritual works.',

		'show character e relieved',
		'e It\'s heavy work.',

		'e Which is why I had to reach out to /mjg/ like this.',

		'show character e wonder',
		'e I need players, and a lot. At least 50, or it won\'t work.',

		'show character e unsure',
		'e So... please?',

		'show image flyer.png center with fadeInUpBig',

		'show character e worried',
		'e Come on, join! I\'ll take beginners as well. As long as you know the basics of the game.',

		'hide image flyer.png with fadeOutDownBig',

		'show message Flyer',

		'show character e unsure',
		'e And who knows? Maybe you can get a wish as well?',

		'show character e happy2',
		'e Here, the application form.',

		'show message Application',

		{
			'Choice':{
				'dotdoffdfaaxx t':{
					'Text': 'Fine, I\'ll join.',
					'Do': 'jump r1.1.1.1.1.1.1.1.1.1'
				},
		'dostfghhdot':{
					'Text': 'No thanks, this all sounds dangerous.',
					'Do': 'jump r1.1.1.1.1.1.1.1.1.2'
				}
			}
		}

	],

	'r1.1.1.1.1.1.1.1.1.1':[
		'show character e excited2',
		'e Really? Thanks!',

		'show character e happy3',
		'e I\'ll be posting updates about the tournament soon.',

		'show character e happy2',
		'e I think the tournament qualifiers should start at February 2, if all goes well. I\'m still trying to find a venue.',

		'show character e happy',
		'e I\'ve been so busy preparing for this ritual.',

		'show character e happy3',
		'e Thank you for joining! And tell your friends as well!',

		'show character e relieved',
		'e ...I\'m rooting for you, okay? As fellow novices, haha.',

		'show character e challenge',
		'e Everyone else might be skilled at mahjong, but what is years of experience against the sheer force of luck?',

		'show character e happy2',
		'e I\'ll be seeing you, okay?',

		'show character e happy3',
		'e And I\'ll be posting updates!',

		'e See you at the tournament!',

		'hide character e with fadeOutRight',
		'.........',
		'......',
		'...',
		'jump Fin'
	],

	'r1.1.1.1.1.1.1.1.1.2':[
		'show character e shock',
		'e Ehhhh?',

		'show character e relieved',
		'e I swear it\'s not dangerous! It\'s just a little mahjong~',

		'show character e unsure',
		'e Mahjong has been proven to be completely safe for you.',

		'show character e happy',
		'e And we are summoning an angel! Not some infernal demon of trickery and deceit.',

		'show character e challenge',
		'e You have to trust me on this!',

		'show character e worried',
		'e Come on, you don\'t have to think about the ritual at all.',

		'show character e relieved',
		'e It\'s fine if you completely play it like a normal tournament. In fact, that\'s what I want.',

		'show character e happy2',
		'e Leave the complicated things to me and play a regular game of mahjong.',

		{
			'Choice':{
				'dasadaotdot':{
					'Text': 'Get lost, cultist schizo freak!',
					'Do': 'jump r1.1.1.1.1.1.1.1.1.2.1'
				}
				,'dotdothfddcc':{
					'Text': '...Fine. I\'m not scared of mahjong at all.',
					'Do': 'jump r1.1.1.1.1.1.1.1.1.2.2'
				}
			,'dsdfbnvvzotdot':{
					'Text': '*Immediately run away*',
					'Do': 'jump r1.1.1.1.1.1.1.1.1.2.3'
				}
			}
		}
	],

	'r1.1.1.1.1.1.1.1.1.2.1':[
		'show character e angry2',
		'e C-Cultist schizo freak!?',

		'show character e angry',
		'e I\'m not! I am a proper student from the Department of Cultural Anthropology!',
		
		'show character e angry3',
		'e Hmmph!',
		
		'show character e angry',
		'e If you don\'t want to be part of this mahjong tournament, then don\'t!',
		
		'e This research is completely voluntary only. I\'m not allowed to force people anymore.',
		
		'show character e angry2',
		'e And the only loser here is you! The idiot who doesn\'t know mahjong and still hangs out in /mjg/!',
		
		'e What kind of retard are you?',
		
		'show character e angry',
		'e I\'m gonna tell AnimeLover99 on you!',
		
		'e She\'s super famous and everyone on /mjg/ loves her and her witty posts! Once everyone learns of you, you\'re going to be completely shunned by everyone!',
		
		'show character e angry2',
		'e You deserve it, idiot!',
		
		'show character e angry3',
		'e Goodbye! I\'ll be looking for someone else then. ',
		'hide character e with fadeOutRight',
		
		'.........',
		'......',
		'...',

		'jump Fin'

	],

	'r1.1.1.1.1.1.1.1.1.2.2':[
		'show character e happy2',
		'e Yeah, mahjong\'s not scary at all.',
		
		'show character e relieved',
		'e I swear you won\'t regret it. And I won\'t let it end up like what the records say about the second tournament.',

		{
			'Choice':{
				'dotdotdfd':{
					'Text': 'The second tournament?',
					'Do': 'jump r1.1.1.1.1.1.1.1.1.2.2_cont'
				}
			}
		}
	],
	'r1.1.1.1.1.1.1.1.1.2.2_cont':[
		'show character e wonder',
		
		'e Don\'t worry about it.',
		
		'show character e happy',
		'e So don\'t forget to sign the form, okay? ',
		
		'show character e thinking',
		'e I think the qualifiers should start at February 2, but I\'ll be posting updates.',
		
		'show character e happy3',
		'e A safe and humane mahjong is what\'s waiting for you, aren\'t you excited?',
		
		'show character e happy2',
		'e Y-You can ignore all the stuff I said about rituals. It\'s all on my side.',
		
		'show character e happy',
		'e Enjoy playing, okay? That\'s from one novice, to another.',
		
		'show character e happy3',
		'e I\'ll be seeing you then! And thanks again for giving this tournament a chance!',
		'hide character e with fadeOutRight',
		'.........',
		'......',
		'...',
		'jump Fin'
	],

	'r1.1.1.1.1.1.1.1.1.2.3':[
		'show character e shocked',
		'e H-Hey wait!',

		'show character e wonder',
		'e ...',
		
		'show character e worried2',
		'e Aww, someone ran away again.',
		
		'show character e worried',
		'e I should really stop scaring people with all the ritual talk.',
		
		'show character e thinking',
		'e But it\'s only ethical to tell everyone what your tournament is about, right?',
		
		'show character e worried2',
		'e *sigh*',
		
		'show character e worried',
		'e Off to the next volunteer...',
		'hide character e with fadeOutRight',
		
		'.........',
		'......',
		'...',
		'jump Fin'
	],

	'r1.1.1.1.1.1.1.1.2':[
		'show character e worried',
		'e ...',

		'show character e relieved',
		'e I-I\'ll admit this all sounds crazy, rituals and whatnot.',
		
		'show character e happy2',
		'e But it\'s my duty as a researcher, and a student of the Department of Cultural Anthropology, to inform people on the actual intent of my research.',
		
		'show character e happy',
		'e However, you can completely ignore it, all the weird stuff I just said.',
		
		'show character e happy2',
		'e The gist of everything is that I need mahjong players to play in my mahjong tournament.',
		
		'show character e happy3',
		'e Wouldn\'t you like that?',
		
		'show character e excited',
		'e You just learned mahjong, so now you get to use what you learned with your /mjg/ friends!',
		
		'show character e happy3',
		'e You never play mahjong with /mjg/, so now\'s the chance?',

		{
			'Choice':{
				'dotqqwexxzdot':{
					'Text': 'Yeah, I\'ll be a Tourney Only Chad.',
					'Do': 'jump r1.1.1.1.1.1.1.1.2.1'
				}
			,'dotdxxxxot':{
					'Text': 'I\'d rather join friendlies than mess with schizos.',
					'Do': 'jump r1.1.1.1.1.1.1.1.2.2'
				}
			,'dotdasadaot':{
					'Text': 'I\'d rather kill myself in ranked than mess with schizos',
					'Do': 'jump r1.1.1.1.1.1.1.1.2.3'
				}
			},
		}
	],
	
	'r1.1.1.1.1.1.1.1.2.1':[
		'show character e worried',
		'e Tourney Only Chad? Is that an /mjg/ term?',
		{
			'Choice':{
				'dotdosasdavvt':{
					'Text': 'It means I will only show up in tournaments and leagues.',
					'Do': 'jump 1.1.1.1.1.1.1.1.2.1_cont'
				}
			}
		}
	],

	'1.1.1.1.1.1.1.1.2.1_cont':[
		'show character e happy2',
		'e I see. That\'s completely fine by me.',

		'e As long as you join my tournament.',
		
		'show character e happy',
		'e Here, take this flyer. Please consider joining?',
		
		'show message Flyer',

		'show character e happy3',
		
		'e And here\'s the application form.',
		
		'show message Application',
		
		'show character e excited',
		'e I swear it will be lots of fun!',
		
		'show character e happy2',
		'e And... right!',
		
		'show character e happy',
		'e As incentive, if you win the tournament, I\'ll give the wish to you!',
		
		'show character e unsure',
		'e I only really care about seeing the angel and proving the ritual works anyways...',
		
		'show character e relieved',
		'e And, if at the end, you still don\'t believe, I\'ll be the one to deal with the wish. So no worries.',
		
		'show character e happy2',
		'e Feel free to ignore all the technical stuff happening behind, and enjoy the mahjong!',
		
		'show character e worried',
		'e Okay?',
		
		'show character e happy2',
		'e Thank you very much for listening to me! ',
		
		'show character e unsure',
		'e I know it must be a pain, but it\'s my duty as a researcher to inform every participant of this ritual on the details.',
		
		'show character e challenge',
		'e I\'m a first class student of the Department of Cultural Anthropology, after all.',
		
		'show character e happy2',
		'e I\'ll be going ahead then, I still have a lot of people to recruit.',
		
		'show character e happy3',
		'e Thanks again for listening, and do give the tournament a try, okay?',
		
		'show character e happy2',
		'e We\'ll be starting the qualifiers on February 2, but I\'ll be posting news before then.',
		
		'show character e happy',
		'e See you then!',
		'hide character e with fadeOutRight',
		
		'.........',
		'......',
		'...',
		'jump Fin'
	],

	'r1.1.1.1.1.1.1.1.2.2':[
		'show character e angry2',
		'e I\'m not schizophrenic!',

		'show character e angry',
		'e Angels are real, and this ritual will prove it!',
		
		'show character e angry3',
		'e ...',
		
		'show character e wonder',
		'e Let\'s agree to disagree then.',
		
		'show character e worried',
		'e But my offer still stands, okay?',
		
		'show character e happy2',
		'e A regular game of mahjong, with no strings attached. You can always treat it as such.',
		
		'show character e unsure',
		'e ...In case you change your mind, here.',
		
		'show message Flyer',

		'show character e happy2',
		
		'e Save it, it\'s all yours, my friend.',
		
		'show character e happy',
		'e And here, the application form.',

		'show message Application',
		
		'show character e normal',
		'e And if you\'re not going to apply, at least tell someone else.',
		
		'show character e angry',
		'e Someone braver than you.',
		
		'show character e normal',
		'e I\'ll stop bothering you. I\'m busy, there\'s a lot more people I have to invite.',
		
		'e Goodbye.',
		'hide character e with fadeOutRight',
		
		'.........',
		'......',
		'...',
		'jump Fin'
	],


	'r1.1.1.1.1.1.1.1.2.3':[
		'show character e shocked',
		'e Kill yourself!? If you\'re going to do that, join my tournament instead!',

		'show character e worried',
		'e ...I mean, that\'s bad, don\'t do it!',
		
		'show character e relieved2',
		'e Oh! You ranked, like, in game ranking system. Right.',
		
		'show character e worried2',
		'e Look, I may sound crazy, but everything I\'m saying right now is the truth.',
		
		'show character e relieved',
		'e Still, if you\'re that keen in wasting your life in ranked, then you should be brave enough to try a little tournament, right?',
		
		'show character e happy2',
		'e No strings attached, just you, your /mjg/ friends, and a regular game of mahjong.',
		
		'show character e happy',
		'e Oh, what fun!',
		
		'show character e unsure',
		'e Please?',
		
		'show character e relieved',
		'e Here, take this flyer.',
		
		'show message Flyer',
		
		'show character e happy2',
		'e Save it, it\'s all yours. And this one as well:',
		
		'show message Application',
		
		'show character e relieved',
		'e Maybe you\'ll change your mind...?',
		
		'show character e happy2',
		'e The qualifier rounds are still on February 2, so think hard!',
		
		'show character e happy',
		'e I swear your won\'t regret it.',
		
		'show character e happy2',
		'e Thanks for listening to me ramble. But you really should try considering it.',
		
		'show character e happy3',
		'e Who knows? Maybe meeting an angel will change your life?',
		
		'show character e happy2',
		'e I\'ll be heading out now, there\'s still a lot of people I have to talk to.',
		
		'e And thank you once again for listening.',
		
		'show character e happy',
		'e I hope to see you!',
		'hide character e with fadeOutRight',
		
		'.........',
		'......',
		'... ',
		'jump Fin'
	],

	'r1.1.1.1.1.1.1.2':[
		'show character e challenge',
		'e Oh! See you there, partner!',

		'e Until we meet each other again... on that stage!',
		
		'You share a fist bump, smiles on your faces.',

		'hide character e with fadeOutRight',
		
		'Emi walks away with confident steps...',

		
		'...completely forgetting what she was actually supposed to talk about.',
		
		'Good luck Emi!',
		
		'Become a researcher who won\'t be distracted by her own side topic!',
		
		'.........',
		'......',
		'...',
		'jump Fin'
	],

	'r1.1.1.1.1.1.1.3':[
		'show character e relieved',
		'e /mjg/ friendlies?',

		'show character e thinking',
		'e I don\'t know... AnimeLover99 said that, what was the term? Right, Friendly Only Cretins.',
		
		'show character e angry3',
		'e Yes. She said that Friendly Only Cretins are dangerous and hungry to win, wanting to take revenge from their losing streaks in ranked. ',
		
		'e They hold no honor, both literally and metaphorically, only wishing the swiftest death to any poor soul who would join their friendlies.',
		
		'show character e wonder',
		'e Scary, right?',
		
		'show character e angry',
		'e I would never be a Friendly Only Cretin.',
		
		'e No matter how much I might lose in ranked, I\'d never be a coward run away from Ranked. I\'d face the danger head on.',
		
		'show character e relieved',
		'e You too, okay?',
		
		'show character e angry',
		'e Don\'t become a Friendly Only Cretin.',
		
		'show character e happy2',
		'e You have to be brave!',
		{
			'Choice':{
				'zzxxc':{
					'Text': 'On my honor, I will never be a FOC.',
					'Do': 'jump r1.1.1.1.1.1.1.3_cont'
				}
			}
		}

	],

	'r1.1.1.1.1.1.1.3_cont':[
		'show character e happy3',
		'e I knew we\'d be on the same wavelength.',

		'show character e unsure',
		'e This means we\'re... friends, right?',
		
		'show character e relieved2',
		'e Yes, friend.',
		
		'show character e happy2',
		'e You and I are friends starting from now on.',
		
		'show character e relieved',
		'e ...and, as my friend, you have to help me, right?',

		'show character e happy3',
		'e Tadah!',

		'show image flyer.png center with fadeInUpBig',
		
		'show character e happy',
		'e A mahjong tournament! This is why I wanted you to learn mahjong.',

		'hide image flyer.png with fadeOutDownBig',
		'show message Flyer',
		
		'show character e happy2',
		'e I\'m hosting a mahjong tournament as part of my thesis.',
		
		'e Right, I should tell you more about it. Which is my duty as an ethical researcher.',
		
		'show character e happy',
		'e I\'m a student of the Department of Cultural Anthropology, and I\'ve been researching local rituals.',
		
		'show character e wonder',
		'e Have you heard of it?',
		
		'show character e relieved2',
		'e A ritual to summon an angel and get a wish.',
		
		'show character e happy2',
		'e I\'ll spare you all the boring stuff, but my research partner and I went around the world looking for the ritual, and we found it.',
		
		'show character e shocked',
		'e And what we found was a ritual involving people, and mahjong.',

		{
			'Choice':{
				'dffdfdaaav':{
					'Text': 'Mahjong?',
					'Do': 'jump r1.1.1.1.1.1.1.3_cont_cont'
				}
			}
		}
	],

	'r1.1.1.1.1.1.1.3_cont_cont':[	
		
		'show character e happy2',
		'e Yes, mahjong.',
		
		'show character e relieved',
		'e Sounds crazy, right?',
		
		'show character e unsure',
		'e What does mahjong have to do with angels?',
		
		'show character e happy2',
		'e But it is what\'s written, and this ritual has been performed twice in history already.',
		
		'show character e happy',
		'e Which is why this is the third regular mahjong tournament.',
		
		'show character e worried',
		'e ...Well, I\'m the one who has to organize everything because my research partner stopped showing up after we got the ritual.',
		
		'show character e worried2',
		'e I wonder why she won\'t leave her house anymore.',
		
		'show character e unsure',
		'e But it\'s fine, I can handle organizing and preparing everything to make sure the ritual is a success.',

		'show character e happy',
		'e You\'re my friend, right? So of course you\'ll help me.',
		
		'show message Application',
		
		'show character e happy3',
		'e Here\'s the application form! Please join! I really need people to make sure the ritual\'s a success.',
		
		'show character e happy2',
		'e And I promise it\'s all safe! You can ignore the ritual part and leave it all to me! All you have to do is play mahjong!',
		
		'show character e relieved',
		'e Okay?',
		
		'show character e happy2',
		'e The qualifiers will be on February 2, and I\'ll give everyone more details in the days to come.',
		
		'show character e unsure',
		'e Sign up, okay?',
		
		'show character e happy2',
		'e I\'ll be going now, there\'s still a lot I have to invite and to prepare.',
		
		'show character e worried',
		'e Why did my partner leave me...',
		'hide character e with fadeOutRight',
		
		'.........',
		'......',
		'...',
		'jump Fin'
	],

	// ############################ ROUTE 2 #############################

	'r2_route':[

		'show character e happy3',
		'e Amazing! Yes, you do look the part, indeed.',

		'show character e wonder',
		'e I can sense it. A dangerous mahjong aura around you...',
		
		'show character e happy',
		'e You\'re perfect! You\'re perfect for my thesis!',
		
		'show character e happy2',
		'e Right, I shouldn\'t waste the time of someone as important as you.',
		
		'e Here, please read this!',
		
		'show message Flyer',
		
		'show character e happy',
		'e I\'m hosting a Mahjong Tournament for my thesis, and I\'m looking for players.',

		{
			'Choice':{
				'dothjdot':{
					'Text': 'Why is a student of Cultural Anthropology hosting a mahjong tournament?',
					'Do': 'jump r2.1'
				},
				'sst':{
					'Text': 'Mahjong Tournament? That sounds suspicious...',
					'Do': 'jump r2.2'
				},
				'dsstdot':{
					'Text': 'I\'ll take on any mahjong challenge. I\'m in.',
					'Do': 'jump r2.3'
				},
			}
		}
		
	],

	'r2.1':[
		'show character e relieved',
		'e Why indeed?',

		'show character e unsure',
		'e Mahjong is part of Japanese culture, so maybe it makes sense for a Cultural Anthropology student to study it?',
		
		'show character e happy3',
		'e Haha, just kidding, I\'ll explain my intentions properly.',
		
		'show character e happy2',
		'e The bulk of my research is actually performing an ancient ritual, and to do that, I need to host a mahjong tournament.',
		
		{
			'Choice':{
				'dotdhgot':{
					'Text': '...',
					'Do': 'jump r2.1_cont'
				}
			}
		}
	],

	'r2.1_cont':[
		
		'show character e shocked',
		'e What\'s with that look? It\'s nothing suspicious, really!',
		
		'show character e relieved',
		'e I promise!',
		
		'show character e happy2',
		'e You won\'t have to do anything at all, just play a regular game of Riichi Mahjong.',

		'jump r2_cont'
	],

	'r2.2':[
		'show character e happy2',
		'e Suspicious? No, everything\'s above the board.',

		'e I\'m going to record everything, so I can give a proper report at the end.',
		
		'show character e happy',
		'e My main focus is actually performing a ritual, but for some crazy reason, it involves mahjong.',
		
		'show character e relieved',
		'e Weird, right? Why would mahjong be the key of this ritual?',
		
		'show character e relieved2',
		'e Hmm... explaining that would require going in depth about the ritual\'s history, which is a very long topic to discuss...',
		
		'show character e happy3',
		'e So to sum it up, mahjong is just a fun game, so maybe the makers of the ritual really loved mahjong?',
		
		'show character e relieved',
		'e Even I\'m not sure.',
		'jump r2_cont'
	],

	'r2.3':[
		'show character e shocked',
		'e As expected of a master-class mahjong player...', 
		'jump r2_cont'
	],

	'r2_cont':[
		'show character e happy2',
		'e So, here\'s the application form,',

		'show message Application',
		
		'show character e happy3',
		'e Aren\'t you excited? It\'s more fun mahjong! Mahjong with your friends from /mjg/!',
		
		'show character e happy2',
		'e AnimeLover99 was right to show me this place.',
		
		'show character e happy',
		'e Right! If you have any other questions, feel free to ask!',
		'jump Questions'
	],

	'Questions':[
		{
			'Choice':{
				'dfotdghot':{
					'Text': 'What are the rules of this mahjong tournament?',
					'Do': 'jump q1'
				},
				'dotgkhdot':{
					'Text': 'Where will it be held?',
					'Do': 'jump q2'
				},
				'doghtdot':{
					'Text': 'When will the qualifiers start, and what will be its format?',
					'Do': 'jump q3'
				},
				'dokgtdot':{
					'Text': 'Is there an actual schedule for the tournament?',
					'Do': 'jump q4'
				},
				'dotdwwot':{
					'Text': 'Is there an entry fee?',
					'Do': 'jump q5'
				},
				'doqqtdot':{
					'Text': 'Is there a prize for winning the tournament?',
					'Do': 'jump q6'
				},
				'dotshsdot':{
					'Text': 'Nope, I\'m good.',
					'Do': 'jump q8'
				},
			}
		}
	],

	'q1':[
		'show character e happy2',
		'e Right, the rules.',

		'show character e happy',
		'e It\'s a regular tourney, and a regular tourney only accepts a mahjong pure and divine.',
		
		'show character e challenge',
		'e Which means, no tricks, no gimmicks!',
		
		'show character e happy2',
		'e The tournament will be using standard Mahjong Soul ruleset.',
		
		'show character e thinking',
		'e Wait, let me try to find the actual ruleset.',
		
		'e *shuffle* *shuffle* *shuffle*',
		
		'show character e happy',
		'e Here it is!',
		
		'show character e happy2',
		'e [<a href="https://riichi.wiki/Majsoul#Rules" target="_blank"><span style="color: #5bcaff">The Mahjong Soul Rules.</span></a>] ',
		
		'e It\'s all standard ranked rules stuff. 3 akadora, atozuke, rules like that.',
		
		'e Standard uma as well. 1st +15, 2nd +5, 3rd -5, and 4th -15',
		
		'show character e happy3',
		'e It\'s the same as a Mahjong Soul ranked game, but in tournament form! Now with your friends.',
		
		'show character e happy2',
		'e Any other questions?',
		'jump Questions'
	],

	'q2':[
		'show character e relieved',
		'e I\'ll be hosting the tournament on Mahjong Soul.',

		'e As for the lobby code... I\'ll keep you posted.',
		
		'show character e unsure',
		'e Everything is under control, this thesis is well funded by the department!',	
		{
			'Choice':{
				'dotdoweqt':{
					'Text': 'Got it, I\'ll wait for updates.',
					'Do': 'jump q2.1'
				},
				'dokkhtdot':{
					'Text': 'Why not host it on Riichi City?',
					'Do': 'jump q2.2'
				}
			}
		}
	],
	'q2.1':[
		'show character e happy',
		'e That\'s good. Don\'t worry, I\'ll make a website with all the new updates soon, so you can check that out.',

		'show character e worried',
		'e I\'m suddenly the only one managing the research right now, so time isn\'t on my side.',

		'jump q2_cont'
	],
	'q2.2':[
		'show character e worried',
		'e Riichi City?',

		'e I\'ve heard of it, and I know the tournaments there are free, but...',
		
		'e I already made an account in Mahjong Soul.',
		
		'show character e happy2',
		'e I\'m Novice 2!',
		
		'show character e unsure',
		'e And I have never tried Riichi City before, so I\'m uncertain about it.',
		
		'show character e relieved',
		'e I need this ritual to be perfect, so it\'s best to use the tools familiar to you, right?',

		'jump q2_cont'
	],
	'q2_cont':[
		'show character e happy2',
		'e So, any other questions?',
		'jump Questions'
	],

	'q3':[
		'show character e happy2',
		'e Assuming all things go well, qualifiers should start at February 2, 2024.',

		'show character e happy',
		'e According to the notes left behind by the previous regular tournaments, we\'ll have four days of qualifiers.',
		
		
		'e That means February 2, 3 4 and 5 will be the perfect time.',
		
		'show character e thinking',
		'e As for the format...',
		
		'show character e happy2',
		'e There are two methods written down, but we\'ll go with the second one.',
		
		'show character e happy',
		'e 5 to 7 games. And all the games will be added, which will total your final score.',
		
		'show character e happy3',
		'e You can play only 5 games if you wish. 6, if you\'re feeling devilish.',
		
		'show character e challenge',
		'e And 7— 7 is for those who love mahjong.',
		
		'show character e angry',
		'e Strictly no games more than 7, okay? This is important!',
		{
			'Choice':{
				'fuckyoubros':{
					'Text': 'Fuck you, use the "5 most recent games" format!',
					'Do': 'jump q3.1'
				},
				'you WILL comply':{
					'Text': 'Understood and will comply.',
					'Do': 'jump q3.2'
				}
			}
		}
	],

	'q3.1':[
		'show character e shocked with bounce',
		'e Woah! No need to get rude.',

		'show character e relieved',
		'e I\'m sure people have their own preferences. And maybe one format is better than the other.',
		
		'show character e thinking',
		'e In fact, maybe it\'s more beneficial to use the format in the tournament that worked...',
		
		'show character e worried',
		'e Or maybe, the "consider all points" would be a better reflection of skill...',
		
		'show character e angry',
		'e However! However, however, however!',
		
		'show character e shocked',
		'e I\'d spend all day trying to decide which format to use!',
		
		'show character e happy2',
		'e So I\'m going to go with what my heart tells me, and it tells me to use the total all scores format.',
		
		'show character e unsure',
		'e Even if you do not want this format, please still join the tournament!',
		
		'show character e happy',
		'e I really need a lot of players for this to work.',
		
		'show character e relieved',
		'e Maybe... you\'ll find that the grass is greener on the other side?',
		
		'show character e happy',
		'e Please play, and test yourselves!',
		'jump Questions'
	],
	'q3.2':[
		'show character e happy3',
		'e Very good!',

		'show character e happy2',
		'e So, any other questions?',
		'jump Questions'
	],

	'q4':[
		'show character e happy2',
		'e Hmm, I\'ll give you a tentative schedule I\'ve written on a tissue paper.',

		'show character e happy',
		'e Qualifiers will start at February 2 to 5. That\'s four days to complete your qualifier games, which will consist of 5 to 7 games.',
		
		'e The top 32 players will pass and move on to the Quarterfinals stage. ',
		
		'show character e happy2',
		'e This stage will take two days, Saturday and Sunday, February 10 and 11.',
		
		'e The tables will be arranged based on the passers\' timezone preferences.',
		
		'show character e happy',
		'e 8 Tables for day 1. Top 2 of each table will move on to the second stage, at Day 2.',
		
		'show character e happy3',
		'e 4 Tables for day 2, and again, Top 2 of each table will move on to the semifinals!',
		
		'show character e happy2',
		'e Then, we wait for a week.',
		
		'e Semifinals will be held on February 17. Two table, and top two of each will move on to the finals!',
		
		'show character e happy',
		'e And the finals will be held on February 18.',
		
		'show character e relieved',
		'e I will try to accommodate everyone\'s time zone as much as possible.',
		
		'show character e happy2',
		'e But for now, that\'s the tentative schedule of the Third Regular Mahjong Tournament.',
		
		'show character e happy',
		'e I\'ll post a more detailed version of this in the future website I\'m building.',
		
		'show character e happy3',
		'e So stay tuned!',
		
		{
			'Choice':{
				'grinchgods':{
					'Text': 'But what about grinches?',
					'Do': 'jump q4_cont'
				},

			}
		}
	],
	'q4_cont':[
		
		'show character e angry',
		'e Grinches will...',
		
		'show character e worried',
		'e ...make me very sad. But in case of grinches, we\'ll just pull from those who failed.',
		
		'show character e relieved',
		'e We\'ll prioritize the qualifier passers, and if we run out of those, then we\'ll just get the fellows with the highest scores.',
		
		'show character e happy2',
		'e Any more questions?',
		'jump Questions'

	],

	'q5':[
		'show character e shocked',
		'e An entry fee?',

		'show character e worried',
		'e Nothing is truly ever free.',
		
		'show character e happy3',
		'e ...The entry fee is your time, and your passion of mahjong!',
		
		'show character e happy2',
		'e As long as you have those, the gates of the regular tournament are always open for you.',
		'jump Questions'
	],

	'q6':[
		'show character e shocked',
		'e A prize?',

		'show character e thinking',
		'e ...',
		
		'show character e unsure',
		'e Is my happiness not enough?',
		
		'show character e happy',
		'e Haha, just kidding!',
		
		'show character e relieved',
		'e Of course there\'s a prize! What kind of tournament would this be without an incentive to win?',
		
		'show character e happy3',
		'e The grand winner will have three prizes waiting for them.',
		
		'show character e relieved2',
		'e First, a wish.',
		
		'show character e happy2',
		'e You get to wish on an angel, isn\'t that neat?',
		
		{
			'Choice':{
				'q6cont1':{
					'Text': '...',
					'Do': 'jump q6_cont1'
				},

			}
		}
	],
	'q6_cont1':[
		
		'show character e shocked',
		'e What, you don\'t believe me?',
		
		'show character e happy2',
		'e Fine. Just remember that a wish will always be one of the prizes of a regular tournament.',
		
		'show character e happy',
		'e The second prize is you get to see an angel!',
		
		'show character e happy3',
		'e Amazing, right? It\'s a rare privilege.',
		
		'show character e happy2',
		'e You should do your best to win.',
		
		{
			'Choice':{
				'q6cont2':{
					'Text': '...',
					'Do': 'jump q6_cont2'
				},

			}
		}
	],
	'q6_cont2':[

		'show character e angry2',
		'e ...Can you stop looking at me like that?',
		
		'show character e angry',
		'e Fine. The third prize.',
		
		'show character e happy3',
		'e The third prize... is reputation points!',
		
		'show character e happy',
		'e That\'s right!',
		
		'show character e happy2',
		'e AnimeLover99 has graciously donated 40 reputation points for this tournament!',
		
		'show character e challenge',
		'e I don\'t know what reputation points are, but she said it\'s a big deal for /mjg/ players.',
		

		'e Ohh, aren\'t you excited?',
		
		'show character e happy',
		'e This is your chance to be a big celebrity yourself!',
		
		'show character e relieved',
		'e More questions, perhaps?',

		'jump Questions'

	],

	'q8':[
		'show character e happy',
		'e Good!',

		'show character e happy2',
		'e If you have any other questions, feel free to ask them in the /mjg/ thread.',
		
		'e I\'ll ask AnimeLover99 to compile any questions that you have, and answer them all in further announcements.',
		
		'show character e happy',
		'e I\'ll be seeing you in the tournament, okay?',
		
		'show character e happy3',
		'e Thanks for taking the time to listen to me.',
		
		'e I\'m rooting for you!',
		'hide character e with fadeOutRight',
		
		'.........',
		'......',
		'...',
		'jump Fin'
	],

	// ############################ ROUTE 3 #############################

	'r3_route':[
		'show character e angry',
		'e Creep? I\'m not a creep. I\'m just your normal regular college student.',

		'show character e worried',
		'e Please, no need to look at me like that.',

		{
			'Choice':{
				'hecker':{
					'Text': 'I\'m busy, I don\'t have time to talk to hecklers',
					'Do': 'jump r3_cont'
				}
			}
		}
	],

	'r3_cont':[
		
		'show character e relieved',
		'e Here, take this at least, and I\'ll stop bothering you.',
		
		'show message Flyer',
		
		'show character e happy2',
		'e It\'s a regular mahjong tournament that I\'m hosting.',
		
		'e You\'re from /mjg/, right?',
		
		'show character e relieved',
		'e I\'ve heard that /mjg/ is the best place to find volunteers for an unconventional mahjong tournament.',
		
		'show character e unsure',
		'e —Unconventional circumstances around tournament itself, but the rules are completely regular.',
		
		'show character e happy2',
		'e No tricks, no gimmicks.',
		
		'show character e challenge',
		'e You look strong. Sharp eyes. Resolute.',
		
		'show character e happy2',
		'e Prime qualities for a mahjong player, and a tournament winner.',
		
		'show character e worried',
		'e ...And maybe, just maybe, your eyes tell me that you\'re a little lost.',
		
		'show character e wonder',
		'e The eyes are the window to your soul.',
		
		'show character e relieved',
		'e Are you lonely?',

		{
			'Choice':{
				'lonely':{
					'Text': 'Yes',
					'Do': 'jump r3.2'
				},
				'not lonely':{
					'Text': 'No',
					'Do': 'jump r3.1'
				}
			}
		}
	],

	'r3.1':[
		'show character e wonder',
		'e ...No? You\'re not lonely?',

		'show character e normal',
		'e I don\'t think you understand mahjong then.',
		
		'e Or maybe you haven\'t truly played it?',

		{
			'Choice':{
				'mahjwithfriends':{
					'Text': 'Mahjong is not a lonely game. Mahjong is a game you play with your friends.',
					'Do': 'jump r3.1_cont1'
				}
			}
		}
	],
	'r3.1_cont1':[
	
		'e ...',

		'stop music with fade 5',
		'stop sound with fade 12',
		
		'e Do you know what dying inside a machine sounds like?',
		
		'e It sounds like nothing.',
		
		'e Nothing, nothing, nothing.',
		
		'e You don\'t hear a thing at all.',
		
		'e But, funnily enough, you actually see something.',
		
		'e A whitescreen.',
		
		'e And you, at that moment, you will realize that you are lonely.',
		
		'e When playing mahjong, do you not see it? That whitescreen?',
		
		'e When the noise disappears, when the buzzing of the noise around you blanks.',
		
		'e And when you draw your tiles, and when you discard your tiles...',
		
		'e Draw... discard... draw... discard...',
		
		'e Nothing, nothing, nothing.',
		
		'e So if you want to know what dying inside a machine sounds like, just play mahjong.',
		
		'e Because mahjong is a lonely game.',

		{
			'Choice':{
				'nyagger':{
					'Text': 'Then I will call. I will call like a nyagger.',
					'Do': 'jump r3.1_cont2'
				}
			}
		}
	],

	'r3.1_cont2':[
		'show character e angry',
		{
			'Choice':{
				'irclmao':{
					'Text': 'Because I love cats.',
					'Do': 'jump r3.1_cont3'
				}
			}
		}
	],

	'r3.1_cont3':[

		'play sound quietCity with volume 100 loop',
		'play music mysterious with volume 80 loop fade 20',

		'show character e happy3',
		'e Hahahahahaha!',
		
		'show character e relieved',
		'e I swear, you really look funny, taking my words seriously!',
		
		'show character e happy2',
		'e I\'m kidding, you silly goose.',
		
		'show character e relieved2',
		'e I tried going for a mysterious vibe so you\'d be more curious about my tournament, but you went all serious with me.',
		
		'show character e happy3',
		'e Oh right! Yes! Take this application form!',
		
		'show message Application',
		
		'show character e happy2',
		'e You said you\'re not lonely right? Hahaha.',
		
		'show character e happy',
		'e Then you should play with your /mjg/ friends! A tournament is a perfect way to have fun.',
		
		'show character e happy3',
		'e Mahjong is fun, after all!',
		
		'show character e normal',
		'e Join, okay? Prove your words and win!',
		
		'show character e happy2',
		'e I\'ll send the details over the coming days, but the qualifiers should start around February 2.',
		
		'show character e happy3',
		'e Be there!',
		
		'show character e happy2',
		'e I\'ll be going now, I\'ve taken too much time messing around. So many things to do, so many things to prepare.',
		
		'show character e worried',
		'e And my research partner left me too, a bummer.',
		
		'show character e happy2',
		'e Alright, goodbye! I\'ll see you during the tourney! And hopefully, the finals.',
		'hide character e with fadeOutRight',
		'.........',
		'......',
		'...',
		'jump Fin'

	],

	'r3.2':[
		'show character e happy2',
		'e Oh, it\'s fine. I\'m lonely too.',

		'show character e relieved',
		'e I went to a trip with my research partner, and after that, she won\'t leave her house anymore.',
		
		'show character e relieved',
		'e So now I\'m stuck organizing this tourney and preparing the ritual all by my self.',

		{
			'Choice':{
				'spooky ritual':{
					'Text': 'Ritual...?',
					'Do': 'jump 3.2_cont1'
				}
			}
		}
	],
	'3.2_cont1':[
		
		'show character e unsure',
		'e L-Let me explain, don\'t look at me like that.',
		
		'show character e happy2',
		'e I\'m a student of the Department of Cultural Anthropology, right?',
		
		'show character e happy',
		'e My thesis is actually researching about an ancient ritual I\'ve found in the university library.',
		
		'show character e wonder',
		'e My partner and I went everywhere trying to find clues about it—',
		
		'show character e shocked',
		'e and instead, what we found was detailed instructions for the ritual itself, in a very unlikely place!',
		
		'show character e happy2',
		'e Yes, so when I said unconventional circumstances, I meant that the tournament is actually part of a ritual.',
		
		'show character e thinking',
		'e It takes almost a month, and requires a sacrifice...',
		
		'show character e normal',
		'e a pure and unblemished...',
		
		'show character e happy2',
		'e Mahjong.',
		
		'show character e relieved',
		'e Yes, I know. It\'s a weird ritual. Why would mahjong be a key to a ritual, right?',
		
		'show character e happy',
		'e But it\'s real, and there are records of people performing this in the past.',
		
		'show character e happy2',
		'e And now, it\'s my turn.',
		
		{
			'Choice':{
				'cant believe it':{
					'Text': '...',
					'Do': 'jump 3.2_cont2'
				}
			}
		}
	],
	'3.2_cont2':[
		
		'show character e happy',
		'e What, scared? ',
		
		'show character e happy3',
		'e Hahaha, don\'t be! We\'re not summoning anything dangerous at all.',
		
		'show character e happy2',
		'e The ritual is really just to summon an angel and make it give us a wish.',
		
		'show character e happy',
		'e Cool, isn\'t it?',
		
		'show character e happy2',
		'e I\'m excited. I really want to finish and perform this ritual right, which is why I\'m doing my best, organizing this tournament.',
		
		'show character e relieved',
		'e So you should join too and help me, okay?',
		
		'show character e happy2',
		'e Here, an application form!',
		
		'show message Application',
		
		'show character e relieved',
		'e Help me here, friend in the loneliness.',
		
		'show character e happy3',
		'e Let\'s be lonely together, and play mahjong!',
		
		'show character e happy2',
		'e I want to see you in the tourney, and I want you to win.',
		
		'show character e challenge',
		'e We\'re comrades, after all.',
		
		'show character e happy',
		'e I\'ll be seeing you. Qualifiers should start on February 2, but I\'m sure you can handle it.',
		
		'show character e relieved',
		'e Ah, I\'m so busy, so busy.',
		
		'show character e happy2',
		'e I have to go now. Bye!',
		'hide character e with fadeOutRight',
		
		'.........',
		'......',
		'...',
		'jump Fin'
	],
	

});