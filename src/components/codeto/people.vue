<template>
	<div class="people">
		<div class="header">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<!--<router-link to="/main/mine/mycode" class="code"></router-link>-->
			<div class="top">
				<img src="../../assets/head_code.jpg" />
				<p>冯志欣</p>
				<p class="job">烟草软件部</p>
			</div>
			<div class="btn_div">
				<div>
					<img src="../../assets/mine/fasong.png" />
					<p>发送消息</p>
				</div>
				<div>
					<img src="../../assets/mine/lianxidianhua.png" />
					<p>联系电话</p>
				</div>
				<div>
					<img src="../../assets/mine/jianding.png" />
					<p>加为好友</p>
				</div>
			</div>
		</div>
		<div class="wrapper" ref="wrapper">
			<div>
				<div class="block">
					<p class="title">个人能力分析</p>
					<div class="echarts_div" ref="mychart1"></div>
				</div>
				<div class="block">
					<p class="title">个人绩效分析</p>
					<div class="echarts_div" ref="mychart2"></div>
				</div>
				<div class="block">
					<p class="title">个人发展管理</p>
					<div class="echarts_div" ref="mychart3"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import echarts from 'static/echarts.min.js'
	export default {
		name: 'People',
		data() {
			return {
				option1: {
					radar: {
						shape: 'circle',
						center: ['50%','50%'],
						radius: '70%',
						indicator: [{
								name: '个人修养',
								max: 100
							},
							{
								name: '创新能力',
								max: 100
							},
							{
								name: '工作态度',
								max: 100
							},
							{
								name: '工作压力',
								max: 100
							},
							{
								name: '自我管理能力',
								max: 100
							},
							{
								name: '沟通能力',
								max: 100
							},
							{
								name: '工作效率',
								max: 100
							},
							{
								name: '问题解决能力',
								max: 100
							}
						]
					},
					series: [{
						name: '个人能力分析',
						type: 'radar',
						data: [{
							value: [90, 89, 99, 92, 100, 90, 88, 93],
						}]
					}]
				},
				option2: {
					grid: {
						top: '10%',
						bottom: '10%',
						left: '16%',
						right: '4%'
					},
					xAxis: {
						type: 'category',
						data: ['2014', '2015', '2016', '2017']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [520, 532, 601, 834, 1190, 1330, 1420],
						type: 'line',
						smooth: true
					}]
				},
				option3: {
					series: [{
						name: '个人发展管理',
						type: 'pie',
						radius: '65%',
						center: ['50%', '50%'],
						data: [{
								value: 335,
								name: '企业培训'
							},
							{
								value: 310,
								name: '其他'
							},
							{
								value: 234,
								name: '个人学习'
							}
						]
					}]
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {
					click: true
				})
			});
			this.makeEchartCard();
		},
		methods: {
			makeEchartCard() {
				this.chart1 = echarts.init(this.$refs.mychart1);
				this.chart1.setOption(this.option1);
				this.chart2 = echarts.init(this.$refs.mychart2);
				this.chart2.setOption(this.option2);
				this.chart3 = echarts.init(this.$refs.mychart3);
				this.chart3.setOption(this.option3);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.people {
		.wrapper {
			z-index: 1;
			position: absolute;
			top: 12.1rem;
			left: 0;
			right: 0;
			bottom: 0;
			>div {
				overflow: hidden;
			}
		}
		.header {
			z-index: 2;
			position: relative;
			margin-bottom: 0.6rem;
			background: #fff;
			box-shadow: 0px 2px 3px #ddd;
			.mui-action-back {
				position: absolute;
				z-index: 99;
				left: 0.8rem;
				top: 1.2rem;
				color: #fff;
			}
			.code {
				z-index: 2;
				display: block;
				position: absolute;
				right: 0.8rem;
				top: 1.2rem;
				height: 1.3rem;
				width: 1.3rem;
				background: url(../../assets/icon/code.png) no-repeat center;
				background-size: 100%;
			}
			.top {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-flow: column;
				padding-top: 0.9rem;
				height: 8.6rem;
				width: 100%;
				background: url(../../assets/mine_bg.png) no-repeat center -7rem;
				background-size: 100%;
				img {
					margin-bottom: 0.3rem;
					height: 2.5rem;
					width: 2.5rem;
					border-radius: 2rem;
					background: #fff;
				}
				p {
					margin: 0;
					line-height: 1.3;
					font-size: $normal-textsize;
					color: #fff;
				}
				.job {
					font-size: $min-textsize;
				}
			}
			.btn_div {
				display: flex;
				justify-content: center;
				height: 3.5rem;
				>div {
					padding: 0.5rem 0.2rem;
					width: 33.33%;
					span,
					img {
						margin: 0 auto 0.3rem auto;
						display: block;
						height: 1rem;
						width: 1rem;
					}
					p {
						margin: 0;
						color: $black-textcolor;
						font-size: $normal-textsize;
					}
				}
			}
		}
	}
	
	.block {
		overflow: hidden;
		padding: 0.6rem 0.8rem;
		margin-top: 0.5rem;
		background: #fff;
		text-align: left;
		.title {
			margin-bottom: 0.3rem;
			padding: 0;
			font-size: $normal-textsize;
			color: $grey-textcolor;
		}
		p {
			margin: 0;
			padding-left: 0.8rem;
			font-size: $small-textsize;
			color: $black-textcolor;
		}
		.barcode {
			display: block;
			margin: auto;
			height: 1.2rem;
			width: 90%;
		}
		.barcode_num {
			text-align: center;
			font-size: $min-textsize;
		}
		.echarts_div {
			height: 10rem;
			width: 100%;
		}
	}
</style>