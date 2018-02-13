<template>
	<div class="equipment">
		<div class="header">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<router-link to="/main/mine/mycode" class="code"></router-link>
			<div class="top">
				<img src="../../assets/equipment.png" />
				<p>笔记本</p>
				<p class="job">上海威士顿信息技术股份有限公司</p>
			</div>
			<div class="btn_div">
				<div>
					<img src="../../assets/mine/weihu.png" />
					<p>设备维护</p>
				</div>
				<div>
					<img src="../../assets/mine/baoxiu.png" />
					<p>设备保修</p>
				</div>
				<div>
					<img src="../../assets/mine/baofei.png" />
					<p>设备报废</p>
				</div>
			</div>
		</div>
		<div class="wrapper" ref="wrapper">
			<div>
				<div class="block">
					<p class="title">基本信息</p>
					<p>版本：Windows10</p>
					<p>处理器：Intel(R)Core i5-3337U@1.80GHz 1.80GHz</p>
					<p>系统类型：64位操作系统</p>
					<p>笔和触摸：为2触摸点提供触控支持</p>
				</div>
				<div class="block">
					<p class="title">内存与硬盘</p>
					<div class="echarts_div" ref="mychart1"></div>
					<div class="echarts_div" ref="mychart2"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import echarts from 'static/echarts.min.js'
	export default {
		name: 'Equipment',
		data() {
			return {
				option1: {
					series: [{
						name: "内存",
						type: "gauge",
						center: ["50%", "50%"], // 默认全局居中
						radius: "80%",
						axisLine: {
							show: false,
							lineStyle: { // 属性lineStyle控制线条样式
								color: [
									[0.57, "#77da92"],
									[1, "#ddd"]
								],
								width: 10
							}
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: false
						},
						pointer: {
							show: false
						},
						detail: {
							formatter: "{score|{value}GB}\n{name|内存}",
							offsetCenter: [0, "5%"],
							rich: {
								score: {
									color: "#77da92",
									fontSize: 16
								},
								name: {
									height: 25,
									color: "#526680",
									fontSize: 14
								}
							}
						},
						data: [{
							value: 8,
							label: {
								textStyle: {
									fontSize: 12
								}
							}
						}]
					}]
				},
				option2: {
					series: [{
						name: "硬盘",
						type: "gauge",
						center: ["50%", "50%"], // 默认全局居中
						radius: "80%",
						axisLine: {
							show: false,
							lineStyle: { // 属性lineStyle控制线条样式
								color: [
									[0.93, "#f8cb7e"],
									[1, "#ddd"]
								],
								width: 10
							}
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: false
						},
						pointer: {
							show: false
						},
						detail: {
							formatter: "{score|{value}TB}\n{name|硬盘}",
							offsetCenter: [0, "5%"],
							rich: {
								score: {
									color: "#f8cb7e",
									fontSize: 16
								},
								name: {
									height: 25,
									color: "#526680",
									fontSize: 14
								}
							}
						},
						data: [{
							value: 1,
							label: {
								textStyle: {
									fontSize: 12
								}
							}
						}]
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
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.equipment {
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
					padding: 0.5rem;
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
			float: left;
			height: 8rem;
			width: 50%;
		}
	}
</style>