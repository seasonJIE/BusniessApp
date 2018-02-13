<template>
	<div class="materiel">
		<div class="header">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<router-link to="/main/mine/mycode" class="code"></router-link>
			<div class="top">
				<img src="../../assets/materiel.png" />
				<p>2011四川烤烟 混打片烟 X21 纸箱</p>
				<p class="job">上海烟草集团有限责任公司</p>
				<p class="job">烟叶烟箱RFID标签</p>
			</div>
			<div class="btn_div">
				<div>
					<img src="../../assets/mine/caiji.png" />
					<p>数据采集</p>
				</div>
				<div>
					<img src="../../assets/mine/tongji.png" />
					<p>统计分析</p>
				</div>
				<div>
					<img src="../../assets/mine/check.png" />
					<p>安全检查</p>
				</div>
			</div>
		</div>
		<div class="wrapper" ref="wrapper">
			<div>
				<div class="block">
					<p class="title">基本信息</p>
					<p>加工单位：四川三益会东复烤厂</p>
					<p>批次：第1批</p>
					<p>箱号：5154</p>
				</div>
				<div class="block">
					<p class="title">毛重与净重</p>
					<div id="echarts_div" ref="mychart"></div>
				</div>
				<div class="block">
					<p class="title">条形码</p>
					<img class="barcode" src="../../assets/barcode.png" />
					<p class="barcode_num">11ky22024b50081110901105154</p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import echarts from 'static/echarts.min.js'
	export default {
		name: 'Materiel',
		data() {
			return {
				option: {
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['40%', '65%'],
						label: {
							normal: {
								formatter: '{b}:{c}KG'
							}
						},
						data: [

							{
								value: 147,
								name: '必应'
							},
							{
								value: 102,
								name: '其他'
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
				this.chart = echarts.init(this.$refs.mychart);
				this.chart.setOption(this.option);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.materiel {
		.wrapper {
			z-index:1;
			position:absolute;
			top:12.1rem;
			left:0;
			right:0;
			bottom:0;
			>div {
				overflow: hidden;
			}
		}
		.header {
			z-index:2;
			position: relative;
			margin-bottom: 0.6rem;
			background: #fff;
			box-shadow:0px 2px 3px #ddd;
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
		#echarts_div {
			height: 8rem;
			width: 100%;
		}
	}
</style>