<template>
	<div class="linkcard">
		<div class="card">
			<p class="title">审查注释
				<a class="more">更多</a>
			</p>
			<ul class="list">
				<li>
					<p class="content">上烟集团张先生张小姐什么什么审批示例</p>
					<p class="time">2018-01-02</p>
				</li>
				<li>
					<p class="content">上烟集团张先生张小姐什么什么审批示例</p>
					<p class="time">2018-01-02</p>
				</li>
			</ul>
		</div>
		<div class="card"  @click="routerto('/main/mainindex/chartsdetail')">
			<p class="title">审查注释</p>
			<div id="echart_div" ref='mychart'></div>
		</div>
		<a class="user-defined">
			<span></span>
			<p>自定义</p>
		</a>
	</div>
</template>

<script>
	import echarts from 'static/echarts.min.js'
	export default {
		name: 'Linkcard',
		data() {
			return {
				option: {
					title: {
						text: 'ECharts 入门示例'
					},
					tooltip: {},
					legend: {
						data: ['销量']
					},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]
				}
			}
		},
		mounted() {
			this.makeEchartCard()
		},
		methods: {
			makeEchartCard() {
				this.chart = echarts.init(this.$refs.mychart);
				var option = {
					legend: {
						data: ['销量']
					},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]
				};
				this.chart.setOption(option);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.linkcard {
		overflow: hidden;
		padding-bottom: 2.5rem;
		.card {
			margin: 0.3rem auto;
			width: 96%;
			border-radius: 0.3rem;
			background: #fff;
			text-align: left;
			p {
				margin: 0;
			}
			.title {
				text-indent: 0.2rem;
				font-size: $small-textsize;
				color: $grey-textcolor;
			}
			.list {
				margin: auto;
				width: 94%;
				list-style: none;
				li {
					padding: 0.2rem;
					padding-left: 1rem;
					border-bottom: 1px solid #ddd;
					.content {
						font-size: $normal-textsize;
						color: $black-textcolor;
					}
					.time {
						font-size: $min-textsize;
						color: grey-textcolor;
					}
				}
				li:last-child {
					border: none;
				}
			}
			#echart_div {
				width: 100%;
				height: 8rem;
			}
		}
		.user-defined {
			margin: 1.5rem auto;
			display: block;
			overflow: hidden;
			min-height:2rem;
			width:2rem;
			span {
				margin: auto;
				display: block;
				min-height: 28px;
				width: 28px;
				background: url(../../assets/icon/user-defined.png) no-repeat center;
				background-size: 100%;
			}
			p {
				margin: 0;
				font-size: 11px;
				color:$grey-textcolor;
			}
		}
	}
</style>