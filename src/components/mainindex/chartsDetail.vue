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
				option: {
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'horizontal',
						itemGap:16,
						itemWidth:10,
						itemHeight:10,
						left: 0,
						bottom:0,
						data: ['硬盒', '条盒', '纸箱', '内装纸', '内衬纸','薄膜','滤棒'],
						textStyle:{
							fontSize:14
						}
					},
					series: [{
						name: '辅料库存情况',
						type: 'pie',
						radius: '60%',
						center: ['50%', '40%'],
						data: [{
								value: 335,
								name: '硬盒'
							},
							{
								value: 310,
								name: '条盒'
							},
							{
								value: 234,
								name: '纸箱'
							},
							{
								value: 135,
								name: '内装纸'
							},
							{
								value: 154,
								name: '内衬纸'
							},
							{
								value: 482,
								name: '薄膜'
							},
							{
								value: 548,
								name: '滤棒'
							}
						]
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
				this.chart.setOption(this.option);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.charts-detail {
		
		background: #fff;
	}
	.echarts_div {
		overflow: hidden;
		margin-top: 2.2rem;
		padding: 0.6rem 0.8rem;
		width: 100%;
		height: 17rem;
		background: #e8f6ff !important;
		p {
			margin-bottom: 0.2rem;
			text-align: left;
			font-size: $normal-textsize;
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
				font-size: $normal-textsize;
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
			height: 13.4rem;
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
					font-size: $small-textsize;
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