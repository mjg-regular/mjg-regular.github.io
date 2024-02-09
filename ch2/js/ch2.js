monogatari.script ({
    'ch2':[
        'centered Regular Tourney 3',
		'play sound quietPark with volume 50 loop',
		'centered Chapter 2',
		'wait 1000',
		'show scene park with fadeIn',
		'play music sacred with volume 80 loop fade 20',
		'wait 2000',

        'You find someone sitting on the park bench, blankly staring at the sky.',

        {
        'Choice':{
            'approach ':{
            'Text': 'Approach.',
            'Do': 'You try to get her attention.'
            }
        }
        },

        'show character e avoid_eye with fadeIn',

        'e ...',

        'show character e shocked with bounce',

        'e !!!',

        'show character e unsure',

        'e I-It\'s you.',

        'show character e thinking',

        'e Um... You...',

        'show character e excited',

        'e Right! You! One of the players of the regular tourney!',

        'show character e worried2 with headShake',

        'e Sorry, there are a lot of things on my mind. I\'m a very busy girl.',

        'show character e unsure with shakeY',

        'e But don\'t worry! Everything is going along.',

        'show character e happy',

        'e So, how are you doing in the tourney? Did you qualify?',

        {
        'Choice':{
            'Route nq':{
            'Text': '"I didn\'t qualify..."',
            'Do': 'jump notqualified'
            },
            'Route q':{
            'Text': '"I qualified!"',
            'Do': 'jump qualified'
            }
        }
        }
    ],

    'notqualified':[

        'show character e shocked',

        'e Aww, I didn\'t expect that.',



        'show character e wonder',

        'e You looked so strong, I thought you were going to make it.',



        'show character e happy',

        'e But it\'s alright! It\'s not the end of the world.',



        'show character e happy3',

        'e I\'m sure /mjg/ has a lot of other tourneys for you to try in the future.',



        'show character e relieved',

        'e I\'ve heard it\'s all gimmick tourneys nowadays, but you love those, right?',



        'show character e happy2',

        'e The important thing is that you tried your best.',



        'show character e happy3',

        'e And yes! You\'re still invited to watch the angels at the end!',



        'show character e happy',

        'e Also, you\'ll get a certificate! Isn\'t that neat?',



        'show character e happy2',

        'e So cheer up and watch the festivities.',



        'show character e relieved2',

        'e I\'ll wish for you to have a happy life if that\'s any consolation.',



        'show character e happy',

        'e May you be happy for the rest of your remaining life.',





        'show character e avoid_eye2',

        'e ...',



        'show character e happy',

        'e Um, leave me alone?',



        'show character e shocked',

        'e I\'m not saying this because you lost, no!',



        'show character e relieved',

        'e It\'s just that I\'m busy... thinking.',



        'show character e unsure',

        'e Thinking about many things.',



        {
        'Choice':{
            'Route ':{
            'Text': '"Nyataracts never showed up."',
            'Do': 'show character e avoid_eye'
            }
        }
        },



        'e ...',



        'show character e worried2',

        'e N—Nyatarcts, um...',

        'show character e unsure',

        'e Grinched?',



        {
        'Choice':{
            'Route ':{
            'Text': '"..."',
            'Do': 'show character e shocked'
            }
        }
        },



        'e I mean, I\'m surprised myself!',



        'show character e worried',

        'e I didn\'t think she wouldn\'t show up.',



        'show character e unsure',

        'e But the show must go on!',



        'show character e happy',

        'e It\'s fine, isn\'t it?',

        'e /mjg/ doesn\'t need celebrities.',



        'show character e happy3',

        'e So you should hurry along now.',



        'show character e happy',

        'e Don\'t trip on the way home.',



        'You decide to leave Ishikawa Emi alone.',

        'hide character e with fadeOut',

        '.........',

        '......',

        '...',

        'jump Fin'


    ],

    'qualified':[

        'show character e shocked with bounce',

        'e Wow, you did?',

        'show character e avoid_eye2',

        'e I didn\'t expect that...',

        'show character e unsure with headShake',

        'e ——I mean, congratulations!',

        'show character e relieved',

        'e I\'m sure you worked hard for that.',

        'show character e challenge',

        'e Mahjong is a game of skill after all, and you proved it.',

        'show character e happy',

        'e So that means you\'re now proceeding to the qualifiers.',

        'show character e happy3',

        'e That\'s amazing!',

        'show character e wonder',

        'e ...',

        'show character e avoid_eye2',

        'e ......',

        'show character e worried',

        'e ........... What? What else do you need?',

        {
        'Choice':{
            'Route ':{
            'Text': '"Do you have any more new tournament information?"',
            'Do': 'show character e angry2'
            }
        }
        },

        'e E— Eh?',

        'show character e thinking',

        'e Mmm...',

        'show character e worried',

        'e What do you mean by more information?',

        'show character e worried2',

        'e I already showed the video of what\'s supposed to happen.',

        'show character e avoid_eye2',

        'e <small>I maaaay have made a bit of a mistake by saying there were only two games per stage, not three...</small>',



        'show character e wonder',

        'e But it doesn\'t matter! It\'s all mahjong in the end!',



        'show character e happy',

        'e Isn\'t it?',



        'show character e happy2',

        'e Just show up for your games, and win. It\'s that simple.',



        'show character e happy3',

        'e ...',



        'show character e wonder',

        'e ......',



        'show character e angry',

        'e What else do you need?',



        {
        'Choice':{
            'Route 1':{
            'Text': '"What about more mahjong tips?"',
            'Do': 'show character e angry2'
            },

        'Route 2':{
        'Text': '"I need mahjong knowledge to win!"',
        'Do': 'show character e angry2'
        }
        }
        },



        'e Wha...',



        'show character e thinking',

        'e Fine, let me think...',



        'show character e unsure',

        'e R—Right! Always keep 5 blocks, okay?',

        'show character e happy',

        'e The five block method is good for efficiency.',

        'e Also, it\'s good to limit yourself to at most three pairs, unless you\'re going for chiitoi.',



        'show character e thinking',

        'e Or was that two pairs?',



        'show character e happy',

        'e Doesn\'t matter. The important thing is that you reach tenpai!',

        'show character e happy2',

        'e No matter what it takes.',



        'show character e relieved',

        'e ...',

        'show character e worried',

        'e .........',

        'show character e angry',

        'e .........And what else?',



        {
        'Choice':{
            'Route ':{
            'Text': '"Can you cheer for me more?"',
            'Do': 'show character e angry4'
            }
        }
        },

        'e ...',



        'show character e angry',

        'e Good luck. Good luck. Woooo.',



        'show character e angry2',

        'e There. Are you satisfied?',



        'show character e worried',

        'e Look, I may look like I\'m free and resting in this park, but I\'m not. I\'m busy.',

        'e I\'m not saying you should leave, of course.',

        'show character e unsure',

        'e I\'m saying... maaaybe you should spend your time more wisely?',



        'show character e relieved',

        'e Go reread Riichi Book 1. Or hit that efficiency trainer.',



        'show character e shocked',

        'e I\'m not even asking you to try the weirder mahjong books out there.',



        'show character e happy',

        'e Just the basics.',



        'show character e unsure',

        'e So... yeah?',



        'You decide to finally leave Ishikawa Emi alone to stare at the sky.',



        'hide character e with fadeOut',

        '.........',

        '......',

        '...',

        'jump Fin',


    ],


});