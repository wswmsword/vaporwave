const styles = [
	{
		"name": "愈漸升溫",
		"shiftX": 6,
		"shiftY": 4,
		"shiftU": -15,
		"shiftV": 19,
		"level": 4,
		"vividU": 0.92,
		"vividV": 0.74,
		"light": 0.89,
		interlaced: 1,
	},
	{
		"name": "灼熱苦夏",
		"shiftX": 4,
		"shiftY": 4,
		"shiftU": -15,
		"shiftV": 40,
		"level": 4,
		"vividU": 1.2,
		"vividV": 1,
		"light": 0.9,

		watermark:true,
	},
	{
		"name": "褪色老膠",
		"zoom": 1.05,
		"shiftX": 4,
		"shiftY": 4,
		"shiftU": 0,
		"shiftV": 0,
		"level": 4,
		"vividU": 0.15,
		"vividV": 0.1,
		"light": 2.26,
		lightNoise:20,
		darkNoise: 40,
	},
	{
		"name": "隔行掃描",
		"zoom": 2.4,
		"light": 1,
		"darkFade": 55,
		"brightFade": 0,
		"shiftX": 4,
		"shiftY": 0,
		"shiftU": 0,
		"shiftV": 1,
		"level": 12,
		"interlaced": 2,
		"interlacedStrong": 1,
		"vividU": 1,
		"vividV": 1,
		"quality": 0.6,
		ratio:1.2,
		border:3,
	},
	{
		"name": "數字信號",
		"zoom": 1,
		"shiftX": 4,
		"shiftY": 0,
		"shiftU": 0,
		"shiftV": 1,
		"level": 4,
		"vividU": 1,
		"vividV": 1,
		"light": 1,
		fit:'contain'
	},
	// {
	// 	name:'原始影像',
	// 	none:true
	// },
	{
		"name": "同步失敗",
		"zoom": 3.15,
		"shiftX": 20,
		"shiftY": 14,
		"shiftU": 2,
		"shiftV": -10,
		"level": 4,
		"vividU": 0.59,
		"vividV": 0.48,
		"light": 1,
		quality:.3,
		lightNoise: 20,
		border:4,
	},
	{
		"name": "信號沈默",
		"zoom": 2,
		"light": 1,
		"shiftX": 4,
		"shiftY": 0,
		"shiftU": 1,
		"shiftV": 1,
		"level": 4,
		"vividU": 0.41,
		"vividV": 0.41,
		"snow": true,
		"quality": 1,
	},
	{
		"zoom": 1,
		"light": 1.1,
		"shiftX": 13,
		"shiftY": 0,
		"shiftU": -2,
		"shiftV": 0,
		"level": 255,
		"vividU": 0.98,
		"vividV": 0.97,
		"quality": 0.4,
		"name": "霓虹泛濫"
	},
	{
		"name": "壹九零零",
		"zoom": 1.1,
		"light": 2.2,
		"contrast": 0.5,
		"darkFade": 46,
		"brightFade": 27,
		"shiftX": 0,
		"shiftY": 4,
		"shiftU": -17,
		"shiftV": 24,
		"level": 55,
		"vividU": 0.1,
		"vividV": 0.1,
		"quality": 0.7,
		lightNoise: 40,
		border:1,
	},
	{
		"name": "顏色極端",
		"zoom": 1,
		"light": 1.06,
		"contrast": 0,
		"darkFade": 14,
		"brightFade": 0,
		"shiftX": 647,
		"shiftY": 1000,
		"shiftU": 100,
		"shiftV": -26,
		"level": 255,
		"vividU": 0.96,
		"vividV": 1.56,
		"ratio": 0.9,
		"quality": 0.8,
	},
	{
		"zoom": 1.6,
		"light": 1.52,
		"contrast": 2.32,
		"shiftX": 4,
		"shiftY": 4,
		"shiftU": 0,
		"shiftV": 0,
		"level": 1,
		"interlaced": 1,
		"interlacedStrong": 1,
		"vividU": 0.15,
		"vividV": 0.1,
		"invertLight": true,
		"quality": 0.35,
		"ratio": 1.8,
		"name": "顛倒黑白",
		darkNoise: 250,
		fit:'contain',
	},
	{
		"zoom": 2.54,
		"light": 1.52,
		"contrast": 2.32,
		"shiftX": 4,
		"shiftY": 611,
		"shiftU": 0,
		"shiftV": 0,
		"level": 1,
		"interlaced": 1,
		"interlacedStrong": 1,
		"vividU": 0.15,
		"vividV": 2,
		"invertLight": true,
		"quality": 0.35,
		"ratio": 2,
		"lightNoise": 123,
		"darkNoise": 500,
		"fit": "fill",
		"name": "兩極色溫"
	},
	{
		"zoom": 1.2,
		"light": 1.1,
		"contrast": 1.17,
		"darkFade": 38,
		"brightFade": 12,
		"shiftX": 4,
		"shiftY": 0,
		"shiftU": 0,
		"shiftV": 1,
		"level": 1,
		"interlaced": 1,
		"interlacedStrong": 1,
		"vividU": 0.73,
		"vividV": 0.67,
		"quality": 0.9,
		"ratio": 1,
		"lightNoise": 9,
		"darkNoise": 16,
		"fit": "contain",
		border:8,
		"name": "影片光碟"
	},
	{
		"zoom": 1.83,
		"light": 1,
		"darkFade": 54,
		"brightFade": 32,
		"shiftX": 0,
		"shiftY": 0,
		"shiftU": 80,
		"shiftV": 80,
		"interlaced": 1,
		"interlacedStrong": 1,
		"vividU": 0.61,
		"vividV": 0.59,
		"sharpen": false,
		"yuv420Noise": 8,
		"quality": 0.8,
		"ratio":0.9,
		"lightNoise": 0,
		"darkNoise": 0,
		"border": 3,
		"name": "情迷東京"
	},
	{
		"zoom": 1.1,
		"light": 1.09,
		"contrast": 0.5,
		"darkFade": 100,
		"brightFade": 11,
		"shiftX": 0,
		"shiftY": 4,
		"shiftU": -100,
		"shiftV": 100,
		"level": 55,
		"interlaced": 1,
		"interlacedStrong": 1,
		"vividU": 0.1,
		"vividV": 0.1,
		"yuv420Noise": 8,
		"quality": 0.35,
		"ratio": 1,
		"lightNoise": 0,
		"darkNoise": 42,
		"fit": "fill",
		"border": 2.5,
		"name": "鮮橙空氣"
	},
	{
		"name": "核爆夕陽",
		"zoom": 1.58,
		"light": 4,
		"shiftX": 1,
		"shiftY": 6,
		"shiftU": -15,
		"shiftV": 40,
		"level": 84,
		"interlaced": 0,
		"interlacedStrong": 1,
		"vividU": 1.2,
		"vividV": 1,
		"sharpen": false,
		"yuv420Noise": 8,
		"quality": 0.6,
		"ratio": 1,
		"lightNoise": 0,
		"darkNoise": 179,
	},
	{
		"name": "夜行生物",
		"zoom": 1,
		"light": 1,
		"contrast": 1.02,
		"darkFade": 0,
		"brightFade": 39,
		"shiftX": 7,
		"shiftY": 10,
		"shiftU": 0,
		"shiftV": 1,
		"level": 4,
		"interlaced": 0,
		"interlacedStrong": 1,
		"vividU": 1.13,
		"vividV": 0.97,
		"sharpen": false,
		"invertLight": true,
		"quality": 0.85,
		"ratio": 1,
		"lightNoise": 0,
		"darkNoise": 0,
		"border": 10,
	},
	{
		"name": "藍調空氣",
		"zoom": 1.44,
		"light": 0.89,
		"shiftX": 6,
		"shiftY": 4,
		"shiftU": 200,
		"shiftV": -200,
		"level": 4,
		"interlaced": 1,
		"interlacedStrong": 1,
		"vividU": 0.92,
		"vividV": 0.74,
		"quality": 0.6,
		"ratio": 1,
		"lightNoise": 0,
		"darkNoise": 0,
		"border": 1.4,
	},
	{
		"name": "嬷嬷糜糜",
		"zoom": 1.57,
		"light": 0.89,
		"shiftX": 55,
		"shiftY": 19,
		"shiftU": -32,
		"shiftV": 105,
		"interlaced": 1,
		"interlacedStrong": 1,
		"vividU": 0.98,
		"vividV": 0.96,
		"quality": 0.3,
		"ratio": 1,
		"lightNoise": 0,
		"darkNoise": 300,
		"watermark": true,
		"watermarkSize": 0.7,
		"styleName": true,
	}
];