function getBoat () {

	return ['g#boat',
		['path#boat-outline', {
			d: 'M0.5,0.5' +
			'c12,-12 22,-12 45,-7' +
			'v14 ' +
			'c-22,4 -33,4 -45,-7' +
			'z'
		}],
		['path', {
			style: {
				fill: 'rgba(255,255,255,0.4)'
			},
			d: 'M20.5,-5.5' +
			'h22' +
			'v12' +
			'h-22' +
			'a6,6 0 0 1 0,-12' +
			'z'
		}],
		['line', {
			x1: 0.5,
			y1: 0.5,
			x2: 14.5,
			y2: 0.5
		}],
		['rect', {
			style: {
				fill: 'black'
			},
			x: 45.5,
			y: -1.5,
			width: 2,
			height: 4
		}]
	]
}

function getLargeBoat () {
	return ['g#large-boat',
		['path', {
			d: 'M0,0' +
			'c5,-10 15,-10 20,-10' +
			'h20' +
			'a1,1, 0,0,1 0,20' +
			'h-20' +
			'c-5,0 -15,0 -20,-10' +
			'z'
		}]
	]
}

function getRowingBoat () {

	return ['g#rowing-boat',
		['path#boat-outline', {
			d: 'M0.5,0' +
			'q22,-14.5 43.5,0' +
			'q-22,14.5 -43.5,0' +
			'z'
		}],
		['polygon', {
			transform: 'translate(12 0)',
			points: '0,0 4,-4 14,-4 18,0 ' +
			'14,4 4,4'
		}],
		['use', {
			transform: 'translate(18 0) rotate(60) translate(2 0)',
			'xlink:href': '#paddle'
		}],
		['use', {
			transform: 'translate(18 0) rotate(-60) translate(2 0)',
			'xlink:href': '#paddle'
		}]
	]
}

function getSailingBoat () {
	return ['g#sailing-boat',
		['use', {
			'xlink:href': '#boat-outline'
		}],
		['use', {
			'xlink:href': '#small-sail'
		}],
		['use', {
			'xlink:href': '#large-sail'
		}]
	]
}

function getLightedBoat (conf, tools) {
	return ['g#lighted-boat',
		['use', {
			style: {
				fill: 'rgb(60,60,60)'
			},
			'xlink:href': '#boat'
		}],
		['g',
			{
				'stroke-linecap': 'round',
				transform: 'translate(46 0)'
			},
			['line', {
				transform: 'rotate(60)',
				x2: 10
			}],
			['line', {
				transform: 'rotate(-60)',
				x2: 10
			}],
			['path', {
				fill: 'gold',
				d: tools.svgKit.circleSection(0, 0, 7, 300, 60)
			}]
		],
		['g',
			{
				'stroke-linecap': 'round',
				transform: 'translate(26 20)'
			},
			['line', {
				y2: -20
			}],
			['circle', {
				style: {
					fill: 'green'
				},
				r: 5
			}]
		],
		['g',
			{
				transform: 'translate(26 0)'
			},
			['line', {
				transform: 'rotate(60)',
				x2: 12
			}],
			['line', {
				transform: 'rotate(-60)',
				x2: 12
			}],
			['path', {
				style: {
					fill: 'gold'
				},
				d: tools.svgKit.circleSection(0, 0, 7, 60, 300)
			}]
		],
		['g.portBowLight',
			{
				transform: 'translate(10 5)'
			},
			['line', {
				transform: 'rotate(60)',
				x2: 12
			}],
			['line', {
				transform: 'rotate(-180)',
				x2: 12
			}],
			['path', {
				style: {
					fill: 'red'
				},
				d: tools.svgKit.circleSection(0, 0, 7, 60, 180)
			}]
		],
		['g.starboardBowLight',
			{
				transform: 'translate(10 -5)'
			},
			['line', {
				transform: 'rotate(-60)',
				x2: 12
			}],
			['line', {
				transform: 'rotate(180)',
				x2: 12
			}],
			['path', {
				style: {
					fill: 'green'
				},
				d: tools.svgKit.circleSection(0, 0, 7, 180, 300)
			}]
		]
	]
}

function getConvoy () {

	return ['g#convoy',
		['title', 'Schleppverband'],
		['line', {
			x1: 45,
			x2: 60,
			y2: 12

		}],
		['line', {
			x1: 45,
			x2: 60,
			y2: -12

		}],
		['use', {
			'xlink:href': '#boat-outline'
		}],
		['use', {
			transform: 'translate(60, -12)',
			'xlink:href': '#boat-outline'
		}],
		['use', {
			transform: 'translate(60, 12)',
			'xlink:href': '#boat-outline'
		}]
	]
}


module.exports.shaven = function (conf, tools) {

	var defaults = {
		width: 150,
		height: 100,
		fill: 'white',
		stroke: 'black',
		scale: 5,
		number: 315
	}

	conf = tools.svgKit.applyDefaults(conf, defaults)


	return [
		'svg', {
			width: conf.scaledWidth,
			height: conf.scaledHeight,
			viewBox: [0, 0, conf.width, conf.height].join()
		},
		['style', //conf.number === 303,
			'g.exerciseImage {\
				fill:' + conf.fill + ';\
				stroke:' + conf.stroke + ';\
				stroke-linecap: round;\
				stroke-linejoin: round;\
				stroke-width: 1\
			}\
			\
			g.exerciseImage text{\
				font-family: Arial, sans-serif;\
				fill: black;\
				stroke: none;\
			}'

		],
		['defs',
			['rect#water', {
				style: {
					fill: 'PowderBlue',
					stroke: 'none'
				},
				width: '100%',
				height: '100%'
			}],
			['marker#endMarkerArrow',
				{
					markerWidth: 4,
					markerHeight: 4,
					refX: 2,
					refY: 2,
					orient: 'auto'
				},
				['path', {
					d: 'M0,0 L4,2 L0,4 z'
				}]
			],
			['marker#startMarkerArrow',
				{
					markerWidth: 4,
					markerHeight: 4,
					refX: 2,
					refY: 2,
					orient: 'auto'
				},
				['path', {
					d: 'M4,0 L0,2 L4,4 z'
				}]
			],
			['g#light-ball',
				{
					transform: 'translate(26 20)'
				},
				['line', {
					y2: -20
				}],
				['circle', {
					r: 5
				}]
			],
			['g#flashing-light-ball',
				{
					transform: 'translate(20, -20)'
				},
				['line', {
					y2: 20
				}],
				['circle',
					{
						style: {
							fill: 'royalBlue'
						},
						r: 5
					},
					['animate', {
						attributeName: 'fill',
						values: 'black; royalBlue; black',
						dur: '0.8s',
						repeatCount: 'indefinite'
					}]
				]
			],
			['g#flag',
				{
					transform: 'translate(26 20)'
				},
				['line', {
					y2: -20
				}],
				['path', {
					transform: 'translate(0 -2)',
					d: 'M0,0' +
					'q2,-1 4,0' +
					't4,0' +
					'v4' +
					'q-2,1 -4,0' +
					't-4,0' +
					'z'
				}]
			],
			['g#paddle',
				['line', {
					x2: 16
				}],
				['circle', {
					style: {
						fill: 'black'
					},
					cx: 16,
					r: 2
				}]
			],
			['polygon#ski', {
				transform: 'translate(-18 0)',
				points: '0,0 2,-2 30,-2 30,2 2,2'
			}],
			['g#small-sail',
				{
					transform: [
						{
							type: 'translate',
							x: 4
						},
						{
							type: 'rotate',
							degrees: -35
						}
					]
				},
				['title', 'Small sail'],
				['path', {
					style: {
						fill: 'white'
					},
					d: 'M0,0 h20 A 18,18 0 0 0 0,0'
				}]
			],
			['g#large-sail',
				{
					transform: [
						{
							type: 'translate',
							x: 20
						},
						{
							type: 'rotate',
							degrees: -25
						}
					]
				},
				['title', 'Large sail'],
				['path', {
					style: {
						fill: 'white'
					},
					d: 'M0,0 h25 A 22,22 0 0 0 0,0'
				}],
				['circle', {
					r: 1
				}]
			],
			getBoat(),
			getLargeBoat(),
			getRowingBoat(),
			getSailingBoat(),
			getLightedBoat(null, tools),
			getConvoy()
		],
		['g.exerciseImage', conf.number === 303,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(50, 50) rotate(120)'
				},
				['use', {
					style: {
						fill: 'rgb(60,60,60)'
					},
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -15,
					y1: 0.5,
					y2: 0.5
				}]
			],
			['g',
				{
					transform: 'translate(100, 50) rotate(60)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -15,
					y1: 0.5,
					y2: 0.5
				}]
			],
			['text', 'Hafeneinfahrt', {
				style: {
					'font-size': 7.5
				},
				y: 12,
				x: 52
			}],
			['g',
				{
					style: {
						fill: 'SlateGray'
					}
				},
				['rect', {
					x: -0.5,
					y: -0.5,
					width: 40,
					height: 20
				}],
				['rect', {
					x: 110.5,
					y: -0.5,
					width: 40,
					height: 20
				}]
			]
		],
		['g.exerciseImage', conf.number === 304,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(35, 50) rotate(120)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -15,
					y1: 0.5,
					y2: 0.5
				}]
			],
			['g',
				{
					transform: 'translate(90,20)'
				},
				['use', {
					style: {
						fill: 'rgb(60,60,60)'
					},
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -15,
					y1: 0.5,
					y2: 0.5
				}]
			]
		],
		['g.exerciseImage', conf.number === 307,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(60.5, 40.5) rotate(180)',
				'xlink:href': '#lighted-boat'
			}],
			['g',
				{
					transform: 'translate(90, 50) rotate(30)'
				},
				['use', {
					'xlink:href': '#boat'
				}]
			]
		],
		['g.exerciseImage', conf.number === 308,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(60.5, 65.5) ' +
					'rotate(180)'
				},
				['use', {
					style: {
						fill: 'rgb(60,60,60)'
					},
					'xlink:href': '#large-boat'
				}],
				['use', {
					'xlink:href': '#light-ball',
					style: {
						fill: 'green'
					}
				}]
			],
			['use', {
				transform: 'translate(90, 50) rotate(-30)',
				'xlink:href': '#boat'
			}]
		],
		['g.exerciseImage', conf.number === 309,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(90, 40) ' +
					'rotate(45)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['use', {'xlink:href': '#flashing-light-ball'}]
			],
			['use', {
				transform: 'translate(50, 40) rotate(135)',
				'xlink:href': '#boat'
			}]
		],
		['g.exerciseImage', conf.number === 310,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(50, 40) rotate(135)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -15,
					y1: 0.5,
					y2: 0.5
				}]
			],
			['g',
				{
					transform: 'translate(90, 20)'
				},
				['use', {
					'xlink:href': '#boat-outline'
				}],
				['use', {
					'xlink:href': '#small-sail'
				}],
				['use', {
					'xlink:href': '#large-sail'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -15,
					y1: 0.5,
					y2: 0.5
				}]
			]
		],
		['g.exerciseImage', conf.number === 311,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: [{
						type: 'translate',
						x: 20,
						y: conf.height / 2
					}]
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -15,
					y1: 0.5,
					y2: 0.5
				}]
			],
			['g',
				{
					transform: 'translate(100, 50)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -15,
					y1: 0.5,
					y2: 0.5
				}]
			]
		],
		['g.exerciseImage', conf.number === 312,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: [
						{
							type: 'translate',
							x: 50,
							y: 60
						},
						{
							type: 'rotate',
							degrees: 225
						}
					]
				},
				['use', {
					'xlink:href': '#boat'
				}]
			],
			['g',
				{
					transform: 'translate(100, 60) rotate(-45)'
				},
				['use', {
					'xlink:href': '#boat-outline'
				}],
				['use', {
					'xlink:href': '#light-ball'
				}]
			]
		],
		['g.exerciseImage', conf.number === 313,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: [
						{
							type: 'translate',
							x: 60.5,
							y: conf.height / 2
						},
						{
							type: 'rotate',
							degrees: 180
						}]
				},
				['use', {
					'xlink:href': '#large-boat'
				}],
				['use', {
					'xlink:href': '#light-ball'
				}]
			],
			['use', {
				transform: 'translate(90, 60)',
				'xlink:href': '#boat'
			}]
		],
		['g.exerciseImage', conf.number === 314,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(60, 20) rotate(180)',
				'xlink:href': '#boat'
			}],
			['g',
				{
					transform: [
						{
							type: 'translate',
							x: 100,
							y: 40
						},
						{
							type: 'rotate',
							degrees: 60
						}]
				},
				['use', {
					'xlink:href': '#large-boat'
				}],
				['use', {
					'xlink:href': '#flag'
				}]
			]
		],
		['g.exerciseImage', conf.number === 315,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(70, 20) rotate(180)',
				'xlink:href': '#boat'
			}],
			['g',
				{
					transform: [
						{
							type: 'translate',
							x: 110,
							y: 40
						},
						{
							type: 'rotate',
							degrees: 90
						}
					]
				},
				['use', {
					'xlink:href': '#rowing-boat'
				}]
			]
		],
		['g.exerciseImage', conf.number === 425,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'rotate(35) translate(15 0)'
				},
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x2: 50
				}],
				['text', 'Wind', {
					style: {
						'font-size': 11
					},
					x: 8,
					y: -4
				}]
			],
			['g',
				{
					transform: 'translate(80, 30) rotate(-20) scale(1 -1)'
				},
				['use', {
					style: {
						fill: 'black'
					},
					'xlink:href': '#boat-outline'
				}],
				['use', {
					'xlink:href': '#small-sail'
				}],
				['use', {
					'xlink:href': '#large-sail'
				}]
			],
			['g',
				{
					transform: 'translate(50, 70) scale(1 -1)'
				},
				['use', {
					'xlink:href': '#boat-outline'
				}],
				['use', {
					'xlink:href': '#small-sail'
				}],
				['use', {
					'xlink:href': '#large-sail'
				}]
			]
		],
		['g.exerciseImage', conf.number === 426,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(10 50)'
				},
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x2: 50
				}],
				['text', 'Wind', {
					style: {
						'font-size': 11
					},
					x: 8,
					y: -4
				}]
			],
			['use', {
				transform: 'translate(80, 35) rotate(-20) scale(1 -1)',
				style: {
					fill: 'black'
				},
				'xlink:href': '#sailing-boat'
			}],
			['use', {
				transform: 'translate(80, 65) rotate(20)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 427,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(15 55)'
				},
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x2: 50
				}],
				['text', 'Wind', {
					style: {
						'font-size': 11
					},
					x: 8,
					y: -4
				}]
			],
			['use', {
				transform: 'translate(75 35) rotate(30) scale(-1 1)',
				style: {
					fill: 'black'
				},
				'xlink:href': '#sailing-boat'
			}],
			['use', {
				transform: 'translate(85, 60) rotate(40)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 428,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(10 55)'
				},
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x2: 50
				}],
				['text', 'Wind', {
					style: {
						'font-size': 11
					},
					x: 8,
					y: -4
				}]
			],
			['use', {
				transform: 'translate(120 30) rotate(10) scale(-1 1)',
				style: {
					fill: 'black'
				},
				'xlink:href': '#sailing-boat'
			}],
			['use', {
				transform: 'translate(100, 60) rotate(150)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 429,
			{
				style: {
					'font-size': 11
				}
			},
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(110 10)'
				},
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					y2: 30
				}],
				['text', 'Wind', {
					x: 8,
					y: 20
				}]
			],
			['g',
				['use', {
					transform: 'translate(80 50) rotate(-90)',
					'xlink:href': '#sailing-boat'
				}],
				['text', 3, {
					x: 78,
					y: 18
				}]
			],
			['g',
				['use', {
					transform: 'translate(50, 60) rotate(200)',
					'xlink:href': '#sailing-boat'
				}],
				['text', 2, {
					x: 12,
					y: 50
				}]
			],
			['g',
				['use', {
					transform: 'translate(80, 65) rotate(-150) scale(-1 1)',
					'xlink:href': '#sailing-boat'
				}],
				['text', 1, {
					x: 108,
					y: 86
				}]
			]
		],
		['g.exerciseImage', conf.number === 430,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(60, 30) rotate(180)',
				'xlink:href': '#lighted-boat'
			}],
			['use', {
				transform: 'translate(110, 50) rotate(120)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 431,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(60, 70) rotate(180)'
				},
				['use', {
					'xlink:href': '#boat-outline'
				}],
				['use', {
					'xlink:href': '#light-ball',
					style: {fill: 'green'}
				}]
			],
			['use', {
				transform: 'translate(100, 50) rotate(135) scale(-1 1)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 432,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(100, 60) rotate(-60)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['use', {
					'xlink:href': '#flashing-light-ball'
				}]
			],
			['use', {
				transform: 'translate(60, 70) rotate(-160)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 433,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(60, 60) rotate(180)'
				},
				['use', {
					'xlink:href': '#boat-outline'
				}],
				['use', {
					'xlink:href': '#light-ball'
				}]
			],
			['use', {
				transform: 'translate(90, 50) rotate(150) scale(-1 1)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 434,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(60, 30) rotate(150)'
				},
				['use', {
					'xlink:href': '#boat-outline'
				}],
				['use', {
					'xlink:href': '#flag'
				}]
			],
			['use', {
				transform: 'translate(100, 50) rotate(-135) scale(-1 1)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 435,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(30, 45) rotate(90)',
				'xlink:href': '#rowing-boat'
			}],
			['use', {
				transform: 'translate(80, 25)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 436,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(60, 55) rotate(180)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -2,
					x2: -10
				}]
			],
			['g',
				{
					transform: 'translate(90, 45)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -2,
					x2: -10
				}]
			]
		],
		['g.exerciseImage', conf.number === 437,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(45, 50) rotate(130)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -2,
					x2: -10
				}]
			],
			['g',
				{
					transform: 'translate(90, 25)'
				},
				['use', {
					style: {
						fill: 'black'
					},
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -2,
					x2: -10
				}]
			]
		],
		['g.exerciseImage', conf.number === 439,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(20, 40) rotate(-20)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					x1: 48,
					x2: 78
				}],
				['g#water-skier',
					{
						transform: 'translate(78 0)'
					},
					['title', 'Water skier'],
					['use', {
						transform: 'translate(0 -4)',
						'xlink:href': '#ski'
					}],
					['use', {
						transform: 'translate(0 4)',
						'xlink:href': '#ski'
					}],
					['ellipse#water-skier-body', {
						rx: 4,
						ry: 8
					}],
					['circle#water-skier-head', {
						r: 3
					}]
				]
			],
			['use', {
				transform: 'translate(60, 65) rotate(30)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 440,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(110, 55) rotate(45)',
				'xlink:href': '#boat'
			}],
			['text', 'Schleppverband', {
				style: {
					'font-size': 8
				},
				x: 20,
				y: 70
			}],
			['use', {
				transform: 'translate(110, 35) rotate(180)',
				'xlink:href': '#convoy'
			}]
		],
		['g.exerciseImage', conf.number === 441,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(85, 85) rotate(180)',
				'xlink:href': '#boat'
			}],
			['line', {
				transform: 'translate(55 55)',
				style: {
					'marker-end': 'url(#endMarkerArrow)',
					'marker-start': 'url(#startMarkerArrow)'
				},
				y2: 15
			}],
			['use', {
				transform: 'translate(135, 28) rotate(180)',
				'xlink:href': '#convoy'
			}]
		],
		['g.exerciseImage', conf.number === 442,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(70, 20) rotate(180)',
				'xlink:href': '#boat'
			}],
			['use', {
				transform: 'translate(110, 50) rotate(90)',
				'xlink:href': '#rowing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 443,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(45, 50) rotate(135)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -15
				}]
			],
			['g',
				{
					transform: 'translate(95, 20)'
				},
				['use', {
					'xlink:href': '#sailing-boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -15
				}]
			]
		],
		['g.exerciseImage', conf.number === 444,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(55, 30) rotate(150)'
				},
				['use', {
					'xlink:href': '#boat-outline'
				}],
				['use', {
					'xlink:href': '#flag'
				}]
			],
			['use', {
				transform: 'translate(100, 40) rotate(40)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 445,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(55, 55) rotate(180)'
				},
				['use', {
					'xlink:href': '#boat-outline'
				}],
				['use', {
					'xlink:href': '#light-ball'
				}]
			],
			['use', {
				transform: 'translate(95, 45) rotate(-30) scale(1 -1)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 446,
			['use', {'xlink:href': '#water'}],
			['g',
				['rect', {
					x: 70,
					y: -1,
					height: 30,
					width: 10
				}],
				['rect', {
					x: -1,
					y: 80,
					height: 10,
					width: 70
				}],
				['text', 'Hafeneinfahrt', {
					style: {'font-size': 8},
					x: 4,
					y: 74
				}]
			],
			['g',
				{
					transform: 'translate(50, 40) rotate(-140)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x1: -5,
					x2: -60
				}]
			],
			['use', {
				transform: 'translate(95, 45) rotate(-30) scale(1 -1)',
				'xlink:href': '#boat'
			}]
		],
		['g.exerciseImage', conf.number === 447,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(50, 45) rotate(-150)',
				'xlink:href': '#boat'
			}],
			['use', {
				transform: 'translate(90, 60)',
				'xlink:href': '#lighted-boat'
			}]
		],
		['g.exerciseImage', conf.number === 448,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(95, 45) rotate(-30)',
				'xlink:href': '#boat'
			}],
			['g',
				{
					transform: 'translate(55, 60) rotate(180)'
				},
				['use', {
					style: {
						fill: 'black'
					}
					,
					'xlink:href': '#large-boat'
				}],
				['use', {
					style: {fill: 'green'},
					'xlink:href': '#light-ball'
				}]
			]
		],
		['g.exerciseImage', conf.number === 449,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(50, 35) rotate(30)'
				},
				['use', {
					'xlink:href': '#boat'
				}],
				['use', {
					'xlink:href': '#flashing-light-ball'
				}]
			]
		],
		['g.exerciseImage', conf.number === 450,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(50, 60) rotate(-145)',
				'xlink:href': '#boat'
			}],
			['g',
				{
					transform: 'translate(100, 60) rotate(-45) scale(1 -1)'
				},
				['use', {
					'xlink:href': '#boat-outline'
				}],
				['use', {
					'xlink:href': '#light-ball'
				}]
			]
		],
		['g.exerciseImage', conf.number === 451,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(90, 55)',
				'xlink:href': '#boat'
			}],
			['g',
				{
					transform: 'translate(60, 45) rotate(180)'
				},
				['use', {
					'xlink:href': '#large-boat'
				}],
				['use', {
					'xlink:href': '#light-ball'
				}]
			]
		],
		['g.exerciseImage', conf.number === 452,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(60, 20) rotate(180)',
				'xlink:href': '#boat'
			}],
			['g',
				{
					transform: 'translate(100, 45) rotate(60) scale(1 -1)'
				},
				['use', {
					'xlink:href': '#large-boat'
				}],
				['use', {
					'xlink:href': '#flag'
				}]
			]
		],
		['g.exerciseImage', conf.number === 455,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(10 55)'
				},
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x2: 50
				}],
				['text', 'Wind', {
					style: {
						'font-size': 11
					},
					x: 8,
					y: -4
				}]
			],
			['use', {
				transform: 'translate(120 30) rotate(10) scale(-1 1)',
				style: {
					fill: 'black'
				},
				'xlink:href': '#sailing-boat'
			}],
			['use', {
				transform: 'translate(100, 60) rotate(150)',
				'xlink:href': '#sailing-boat'
			}]
		],
		['g.exerciseImage', conf.number === 456,
			{
				style: {
					'font-size': 11
				}
			},
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(8 18) rotate(30)'
				},
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x2: 50
				}],
				['text', 'Wind', {
					style: {'font-size': 9},
					x: 8,
					y: -5
				}]
			],
			['g',
				['use', {
					transform: 'translate(75 45) rotate(-55) scale(1 -1)',
					'xlink:href': '#sailing-boat'
				}],
				['text', 1, {
					x: 92,
					y: 18
				}]
			],
			['g',
				['use', {
					transform: 'translate(50, 55) rotate(130)',
					'xlink:href': '#sailing-boat'
				}],
				['text', 3, {
					x: 22,
					y: 86
				}]
			],
			['g',
				['use', {
					transform: 'translate(85, 80) rotate(-15) scale(1 -1)',
					'xlink:href': '#sailing-boat'
				}],
				['text', 2, {
					x: 118,
					y: 73
				}]
			]
		],
		['g.exerciseImage', conf.number === 457,
			['use', {'xlink:href': '#water'}],
			['g',
				{
					transform: 'translate(10 55)'
				},
				['line', {
					style: {
						'marker-end': 'url(#endMarkerArrow)'
					},
					x2: 60
				}],
				['text', 'Wind', {
					style: {
						'font-size': 10
					},
					x: 15,
					y: -4
				}]
			],
			['use', {
				transform: 'translate(85 35) rotate(30) scale(-1 1)',
				'xlink:href': '#sailing-boat'
			}],
			['use', {
				transform: 'translate(95, 55) rotate(45)',
				style: {
					fill: 'black'
				},
				'xlink:href': '#sailing-boat'
			}]
		]
	]
}
