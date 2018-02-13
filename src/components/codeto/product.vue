<template>
	<div class="product">
		<div class="header">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<router-link to="/main/mine/mycode" class="code"></router-link>
			<div class="top">
				<img src="../../assets/product.png" />
				<p>中华（硬盒）</p>
				<p class="job">类型：烤烟型　条盒硬盒</p>
			</div>
			<div class="btn_div">
				<div>
					<img src="../../assets/mine/yanzheng.png" />
					<p>烟叶验收信息</p>
				</div>
				<div>
					<img src="../../assets/mine/rfid.png" />
					<p>RFID标签管理</p>
				</div>
				<div>
					<img src="../../assets/mine/zhenweijiandian.png" />
					<p>真伪鉴定</p>
				</div>
			</div>
		</div>
		<div class="wrapper" ref="wrapper">
			<div>
				<div class="block">
					<p class="title">销售量和毛利</p>
					<div id="echarts_div" ref="mychart"></div>
				</div>
				<div class="block">
					<p class="title">农业种植</p>
					<p>烤烟产地：河南许昌***</p>
					<p>土地面积：1000亩</p>
					<p>烟叶收购：上海烟草集团有限责任公司</p>
					<p>物流运输：上海海烟物流发展有限公司</p>
				</div>
				<div class="block">
					<p class="title">工业生产</p>
					<p>生产工单：170222-003</p>
					<p>生产机台：JD650</p>
					<p>机长：钱**</p>
					<p>生产托板：TB23</p>
					<p>生产批次：第一批</p>
					<p>生产日期：2016年12月01日</p>
				</div>
				<div class="block">
					<p class="title">商业配送</p>
					<p>配送单位：上海海烟物流发展有限公司</p>
					<p>配送日期：2017年01月01日</p>
					<p>配送车辆：沪A***</p>
					<p>配送司机：赵**</p>
				</div>
				<div class="block">
					<p class="title">经营销售</p>
					<p>销售网点：上海烟草集团烟酒专卖店(四平路店)虹口区四平路757号(近密云路</p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import echarts from 'static/echarts.min.js'
	export default {
		name: 'Product',
		data() {
			return {
				option: {
					legend: {
						data: ['销售额', '毛利'],
						bottom:'0'
					},
					grid: {
						top:'4%',
						left: '0%',
						right: '8%',
						bottom: '13%',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						splitNumber:3,
//						boundaryGap: [0, 0.01]
					},
					yAxis: {
						type: 'category',
						data: ['中南', '西南', '西北', '上海', '华中', '华北','东北']
					},
					series: [{
							name: '销售额',
							type: 'bar',
							data: [18203, 23489, 29034, 10490, 31744, 6330,11223]
						},
						{
							name: '毛利',
							type: 'bar',
							data: [9325, 13438, 11000, 2154, 10141, 4807,2299]
						}
					]
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
	.product {
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
		#echarts_div {
			height: 16rem;
			width: 100%;
		}
	}
</style>