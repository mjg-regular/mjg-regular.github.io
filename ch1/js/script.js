/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'Flyer':{
		title: 'Flyer',
		subtitle: 'Please take one',
		body:`
			<p><a href='assets/images/flyer.png' target='_blank'>flyer.png</a></p>
		`
	},
	'Flyerr':{
		title: 'Flyer',
		subtitle: 'Please take one',
		body:`
			<p><a href='assets/images/flyer_.png' target='_blank'>flyer.png</a></p>
		`
	},
	'Application':{
		title: 'Regular Mahjong Tournament 3 Application Form',
		subtitle: 'Register Here!',
		body:`
			<p><a href='https://forms.gle/REYLixmsuTdTPaDC9' target='_blank'>Google Form</a></p>
		`
	},
	'Riichi':{
		title: 'Riichi Book 1',
		subtitle: 'Improve your mahjong skills here!',
		body:`
			<p><a href='https://dainachiba.github.io/RiichiBooks/' target='_blank'>Download Online</a></p>
			<p><a href='https://repo.riichi.moe/books/rb1.html' target='_blank'>Read Online</a></p>
		`
	}
});




// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
	'snow': {
		'particles': {
			'number': {
				'value': 400,
				'density': {
					'enable': true,
					'value_area': 800
				}
			},
			'color': {
				'value': '#fff'
			},
			'shape': {
				'type': 'circle',
				'stroke': {
					'width': 0,
					'color': '#000000'
				},
				'polygon': {
					'nb_sides': 5
				},
				'image': {
					'src': 'img\/github.svg',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.5,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 1,
					'opacity_min': 0.1,
					'sync': false
				}
			},
			'size': {
				'value': 10,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 40,
					'size_min': 0.1,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 500,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 2
			},
			'move': {
				'enable': true,
				'speed': 6,
				'direction': 'bottom',
				'random': false,
				'straight': false,
				'out_mode': 'out',
				'bounce': false,
				'attract': {
					'enable': false,
					'rotateX': 600,
					'rotateY': 1200
				}
			}
		},
		'interactivity': {
			'detect_on': 'canvas',
			'events': {
				'onhover': {
					'enable': true,
					'mode': 'bubble'
				},
				'onclick': {
					'enable': true,
					'mode': 'repulse'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 0.5
					}
				},
				'bubble': {
					'distance': 400,
					'size': 4,
					'duration': 0.3,
					'opacity': 1,
					'speed': 3
				},
				'repulse': {
					'distance': 200,
					'duration': 0.4
				},
				'push': {
					'particles_nb': 4
				},
				'remove': {
					'particles_nb': 2
				}
			}
		},
		'retina_detect': true
	}
});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'mysterious': '悪役令嬢のワルツ.mp3',
	'cute': 'kawaii_piano.mp3',
	'witch': 'Lethargic Witch.mp3',
	'simple': 'simple_001_piano.mp3',
	'america':'america.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'quietCity': 'quiet city.mp3'
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'city': 'city.png',
	'black': 'black.png',
	'vending': 'vending.png'
});


// Define the Characters
monogatari.characters ({
	'a': {
		name: 'Anonymous',
		color: '#5bcaff'
	},
	'e': {
		name: 'Emi',
		color: '#5bcaff',
		directory: 'emi',
		sprites: {
			normal:'normal.png',
			angry: 'angry.png',
			angry2: 'angry 2.png',
			angry3: 'angry 3.png',
			angry4: 'angry 4.png',
			avoid_eye: 'avoid eye.png',
			avoid_eye2: 'avoid eye 2.png',
			challenge: 'challenge.png',
			excited: 'excited.png',
			excited2: 'excited 2.png',
			happy: 'happy.png',
			happy2: 'happy 2.png',
			happy3: 'happy 3.png',
			pray: 'pray.png',
			relieved: 'relieved.png',
			relieved2: 'relieved 2.png',
			shocked: 'shocked.png',
			thinking: 'thinking.png',
			unsure: 'unsure.png',
			wonder: 'wonder.png',
			worried: 'worried.png',
			worried2: 'worried 2.png'
		},
	},
	'?':{
		name: '???',
		color: '#5bcaff'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'jump ch1'
	],

	'Fin':[
		'stop music with fade 5',
		'stop sound with fade 12',
		'show scene black with fadeIn',
		function () {
			window.location.href = "https://mjg-regular.github.io/";
			return true; // Will make the engine execute the next statement when the function finishes.
		},
		]

});