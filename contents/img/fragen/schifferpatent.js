function getBoat () {

	return ['g', {id: 'boat'},
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
	return ['g', {id: 'largeBoat'},
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

	return ['g#rowingBoat',
		['path#boat-outline', {
			d:
			'M0.5,0' +
			'q22,-14.5 43.5,0' +
			'q-22,14.5 -43.5,0' +
			'z'
		}],
		['polygon',{
			transform: 'translate(12 0)',
			points:
			'0,0 4,-4 14,-4 18,0 ' +
			'14,4 4,4'
		}],
		['use', {
			transform: 'translate(18 0) rotate(60) translate(2 0)',
			'xlink:href': '#paddle'
		}],
		['use',{
			transform: 'translate(18 0) rotate(-60) translate(2 0)',
			'xlink:href': '#paddle'
		}]
	]
}

module.exports.shaven = function (conf, tools) {

	var defaults = {
		width: 150,
		height: 100,
		fill: 'orange',
		stroke: 'black',
		scale: 5,
		number: 310
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
			['g#flag',
				{
					transform: 'translate(26 20)'
				},
				['line', {
					y2: -20
				}],
				['path', {
					transform: 'translate(0 -2)',
					d:
					'M0,0' +
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
				['circle',{
					style: {
						fill: 'black'
					},
					cx: 16,
					r: 2
				}]
			],
			getBoat(),
			getLargeBoat(),
			getRowingBoat()
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
					style: {
						fill: 'white'
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
					style: {
						fill: 'white'
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
			['g',
				{
					transform: 'translate(60.5, 40.5)' +
					'rotate(180)'
				},
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
			],
			['g',
				{
					transform: 'translate(90, 50) rotate(30)'
				},
				['use', {
					style: {
						fill: 'white'
					},
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
					'xlink:href': '#largeBoat'
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
				style: {
					fill: 'white'
				},
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
					style: {
						fill: 'white'
					},
					'xlink:href': '#boat'
				}],
				['g',
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
				]
			],
			['use', {
				transform: 'translate(50, 40) rotate(135)',
				style: {
					fill: 'white'
				},
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
					style: {
						fill: 'white'
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
					transform: 'translate(90, 20)'
				},
				['use', {
					style: {
						fill: 'white'
					},
					'xlink:href': '#boat-outline'
				}],
				['g',
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
						d: 'M0,0 h20 A 18,18 0 0 0 0,0'
					}]
				],
				['g',
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
						d: 'M0,0 h25 A 22,22 0 0 0 0,0'
					}],
					['circle', {
						r: 1
					}]
				],
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
					style: {
						fill: 'white'
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
					transform: 'translate(100, 50)'
				},
				['use', {
					style: {
						fill: 'white'
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
					style: {
						fill: 'white'
					},
					'xlink:href': '#boat'
				}]
			],
			['g',
				{
					transform: 'translate(100, 60) rotate(-45)',
					style: {
						fill: 'white'
					}
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
						}],
					style: {
						fill: 'white'
					}
				},
				['use', {
					'xlink:href': '#largeBoat'
				}],
				['use', {
					'xlink:href': '#light-ball'
				}]
			],
			['use', {
				transform: 'translate(90, 60)',
				style: {
					fill: 'white'
				},
				'xlink:href': '#boat'
			}]
		],
		['g.exerciseImage', conf.number === 314,
			['use', {'xlink:href': '#water'}],
			['use', {
				transform: 'translate(60, 20) rotate(180)',
				style: {
					fill: 'white'
				},
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
						}],
					style: {
						fill: 'white'
					}
				},
				['use', {
					'xlink:href': '#largeBoat'
				}],
				['use', {
					'xlink:href': '#flag'
				}]
			]
		]
	]
}
