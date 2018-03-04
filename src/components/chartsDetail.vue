<template>
	<div class="charts-detail">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>首页</span></a>
			<h1 class="mui-title">辅料库存情况</h1>
		</header>
		<div class="echarts_div">
			<p>材料库存占比</p>
			<div class="select_div">
				<select class="left">
					<option>2017年8月</option>
				</select>
				<select class="right">
					<option>15薪厂房四楼库存</option>
				</select>
			</div>
			<div id="echart_div" ref='mychart'></div>
		</div>

		<div class="data_div">
			<div>
				<p>
					<span>月初</span>
					<span>20</span>
				</p>
			</div>
			<div>
				<p>
					<span>月末</span>
					<span>22</span>
				</p>
			</div>
			<div>
				<p>
					<span>最高</span>
					<span>12</span>
				</p>

			</div>
			<div>
				<p>
					<span>最低</span>
					<span>2</span>
				</p>
			</div>
			<div>
				<p>
					<span>吞吐量</span>
					<span>50</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import echarts from 'static/echarts.min.js'
	export default {
		name: 'ChartsDetail',
		data() {
			return {
				option:{
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
	@import "~common/scss/resetMui";
	.charts-detail {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
	}
	.echarts_div {
		overflow: hidden;
		margin-top: 44px;
		padding: 0 1rem;
		width: 100%;
		height: 17rem;
		background: #e8f6ff !important;
		p {
			margin: 0.2rem 0;
			text-align: left;
			font-size: $small-textsize;
		}
		.select_div {
			overflow: hidden;
			select {
				display: block;
				margin: 0;
				padding: 0;
				width: 6rem;
				height: 1rem;
				color: $black-textcolor;
				background: none;
				&.left {
					float: left;
				}
				&.right {
					float: right;
				}
			}
		}
		#echart_div {
			width: 100%;
			height: 14rem;
		}
	}
	
	.data_div {
		padding: 0.5rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		min-height: 9rem;
		background: #fff;
		>div {
			width: 50%;
			p {
				margin: 0 auto;
				padding: 0.5rem 0.5rem 0.5rem 0.5rem;
				overflow: hidden;
				width: 78%;
				height: 100%;
				border-bottom: 1px solid #ecf6fc;
				span:nth-child(1) {
					margin-left: 0.2rem;
					float: left;
					font-size: $min-textsize;
					color: #687b87;
				}
				span:nth-child(2) {
					margin-right: 1rem;
					margin-top: 0.5rem;
					margin-bottom:0.1rem;
					float: right;
					font-size: 1.2rem;
					color: #3378a2;
				}
			}
		}
	}
</style>