// 监控
(function () {
	var choseTab = document.getElementsByClassName('aun');

	var showTab = document.getElementsByClassName('showTab');

	for (var i = 0; i < choseTab.length; i++) {
		choseTab[i].setAttribute('index', i);

		choseTab[i].onclick = function () {
			var index_ = this.getAttribute('index');

			for (var j = 0; j < choseTab.length; j++) {
				choseTab[j].classList.remove('active');
				choseTab[index_].classList.add('active');
			}

			for (var k = 0; k < showTab.length; k++) {
				showTab[k].style.display = 'none';
				showTab[index_].style.display = 'block';
			}
		}
	}

})();
// 点位
(function () {
	var myChart = echarts.init(document.getElementsByClassName('location')[0]);
	var option = {
		color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		series: [
			{
				name: '老陈学员分布',
				type: 'pie',
				radius: ['10%', '65%'],
				center: ['50%', '50%'],
				roseType: 'radius',
				itemStyle: {
					borderRadius: 5
				},
				label: {
					fontSize: 10
				},
				labelLine: {
					length: 4,
					length2: 8
				},
				data: [
					{ value: 20, name: '云南' },
					{ value: 26, name: '北京' },
					{ value: 24, name: '山东' },
					{ value: 25, name: '河北' },
					{ value: 20, name: '江苏' },
					{ value: 25, name: '浙江' },
					{ value: 30, name: '四川' },
					{ value: 42, name: '河南' }
				]
			}
		]
	};
	myChart.setOption(option);
	window.addEventListener('load', function () {
		myChart.resize();
	});
	window.addEventListener('resize', function () {
		myChart.resize();
	})
})();
// 用户统计
(function () {
	var item = {
		name: '',
		value: 1200,
		itemStyle: {
			color: '#254065'
		},
		emphasis: {
			itemStyle: {
				color: '#254065'
			}
		},
		tooltip: {
			extraCssText: 'opacity:0'
		}

	}
	var myChart = echarts.init(document.querySelector('.bar'));
	var option = {
		color: {
			type: 'linear',
			x: 0,
			y: 0,
			x2: 0,
			y2: 1,
			colorStops: [{
				offset: 0, color: '#00fffb'
			}, {
				offset: 1, color: '#0061ce'
			}],
			global: false
		},
		tooltip: {
			trigger: 'item',
			axisPointer: {
				type: 'none'
			}
		},
		grid: {
			left: '0%',
			right: '3%',
			bottom: '3%',
			top: '3%',
			containLabel: true,
			show: true,
			borderColor: 'rgba(0, 240, 255, 0.3)'
		},
		xAxis: [
			{
				type: 'category',
				data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'], axisTick: {
					alignWithLabel: false,
					show: false
				},
				axisLabel: {
					color: "#71f2fb"
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(0, 240, 255, 0.3)',
					}
				}

			}
		],
		yAxis: [
			{
				type: 'value',
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#71f2fb"
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(0, 240, 255, 0.3)'
					}
				}
			}
		],
		series: [
			{
				name: 'Direct',
				type: 'bar',
				barWidth: '60%',
				data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
			}
		]
	};

	myChart.setOption(option);

	window.addEventListener('load', function () {
		myChart.resize()
	});
	window.addEventListener('resize', function () {
		myChart.resize()
	})
})();
// 订单
(function () {
	var timeTab = document.getElementsByClassName('filter')[0].children;
	var orderData = document.getElementsByClassName('orderData');
	var index_ = 0;
	var timer = null;
	for (var i = 0; i < timeTab.length; i++) {
		timeTab[i].setAttribute('index', i);
		timeTab[i].onclick = function () {
			index_ = this.getAttribute("index");
			for (var j = 0; j < timeTab.length; j++) {
				timeTab[j].classList.remove('active');
				timeTab[index_].classList.add('active');
			}
			for (var k = 0; k < orderData.length; k++) {
				orderData[k].classList.add('orderDataHidden');
				orderData[index_].classList.remove('orderDataHidden');
			}
		}
	}
	function autoCheck() {
		timer = setInterval(function () {
			index_++;
			if (index_ >= timeTab.length) {
				index_ = 0;
			}
			timeTab[index_].click();
		}, 1500);
	}
	autoCheck();
	var order = document.getElementsByClassName('order')[0];
	order.onmouseenter = function () {
		clearInterval(timer);
	}
	order.onmouseleave = function () {
		autoCheck(), 1500;
	}
})();
// <!-- 销售额 -->
(function () {
	var data = {
		year: [
			[24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
			[40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
		],
		quarter: [
			[23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
			[43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
		],
		month: [
			[34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
			[56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
		],
		week: [
			[43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
			[32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
		]
	}
	var myChart = echarts.init(document.querySelector('.sline'));

	var option = {
		color: ['#00f2f1', '#ed3f35'],
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['预期销售额', '实际销售额'],
			textStyle: {
				color: '#4c9bfd'
			},
			right: '10%'
		},
		grid: {
			top: '20%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			show: true,
			borderColor: '#012f4a',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], axisTick: {
				show: false
			},
			axisLabel: {
				color: '#4c9bfd'
			},
			axisLine: {
				show: false
			},
			boundaryGap: false
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false
			},
			axisLabel: {
				color: '#4c9bfd'
			},
			splitLine: {
				lineStyle: {
					color: '#012f4a'
				}
			}
		},
		series: [
			{
				name: '预期销售额',
				type: 'line',
				stack: 'Total',
				data: data.year[0],
				smooth: true
			},
			{
				name: '实际销售额',
				type: 'line',
				stack: 'Total',
				data: data.year[1],
				smooth: true
			}
		]
	};
	myChart.setOption(option);
	var timeTab = document.getElementsByClassName('timeTab');
	var index_ = 0;
	var timer = null;
	for (var i = 0; i < timeTab.length; i++) {
		timeTab[i].setAttribute('index', i);
		timeTab[i].onclick = function () {
			index_ = this.getAttribute('index');
			for (var j = 0; j < timeTab.length; j++) {
				timeTab[j].classList.remove('active');
				timeTab[index_].classList.add('active');
			}
			var dataTime = this.getAttribute('data-time');
			option.series[0].data = data[dataTime][0];
			option.series[1].data = data[dataTime][1];
			myChart.setOption(option);

		}
	}
	function auto() {
		timer = setInterval(function () {
			index_++;
			if (index_ >= timeTab.length) {
				index_ = 0;
			}

			timeTab[index_].click();
		}, 1000);
	}
	auto();
	var sales = document.querySelector('.sales');
	sales.onmouseenter = function () {
		clearInterval(timer);
	}
	sales.onmouseleave = function () {
		auto();
	}
	window.addEventListener('load', function () {
		myChart.resize();
	})
	window.addEventListener('resize', function () {
		myChart.resize();
	})
})();
//渠道雷达图
(function () {
	var myChart = echarts.init(document.querySelector('.radar'));
	var option = {
		radar: {
			radius: '60%',
			indicator: [
				{ name: '机场', max: 100 },
				{ name: '商场', max: 100 },
				{ name: '火车站', max: 100 },
				{ name: '汽车站', max: 100 },
				{ name: '地铁', max: 100 }
			],
			shape: 'circle',
			splitNumber: 4,
			axisName: {
				color: '#4c9bfd'
			},
			splitLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.5)'
				}
			},
			splitArea: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.5)'
				}
			}
		},
		tooltip: {
			show: true,
			position: ['60%', '0%'],
			backgroundColor: 'rgba(255, 255, 255, 0.3)'
		},
		series: [
			{
				name: 'Beijing',
				type: 'radar',
				lineStyle: {
					normal: {
						color: '#fff',
					}
				},
				data: [[90, 100, 56, 11, 34]],
				symbol: 'circle',
				symbolSize: 5,
				itemStyle: {
					color: '#fff'
				},
				label: {
					show: true,
					color: '#fff',
					fontSize: 10
				},
				areaStyle: {
					color: 'rgba(238, 197, 102, 0.6)',
				},
			}
		]
	};
	myChart.setOption(option);
	window.addEventListener('load', function () {
		myChart.resize();
	})
	window.addEventListener('resize', function () {
		myChart.resize();
	})
})();