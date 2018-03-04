<template>
	<div class="pre-warning">
		<header id="header" ref="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>首页</span></a>
		</header>
		<div class="wrapper" ref="wrapper">
			<div>
				<div class="block">
					<ul class="top_ul">
						<li class="active">隐患来源</li>
						<li>现场管理</li>
						<li>基础管理</li>
					</ul>
					<div class="">
						<p class="title">隐患分布情况</p>
						<div id="echart_div" ref="mychart"></div>
					</div>
				</div>
				<div class="block">
					<p class="title">2017年隐患明细信息</p>
					<table>
						<thead>
							<tr>
								<th>组织</th>
								<th>一般隐患<br>/整改率</th>
								<th>重大隐患/整改率</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>上海烟草储运公司</td>
								<td>137/99.2%</td>
								<td>0/0.0%</td>
							</tr>
							<tr>
								<td>上海高扬国际烟草有限公司</td>
								<td>9/88.8%</td>
								<td>0/0.0%</td>
							</tr>
							<tr>
								<td>北京卷烟厂</td>
								<td>87/100%</td>
								<td>0/0.0%</td>
							</tr>
							<tr>
								<td>天津卷烟厂</td>
								<td>8/87.5%</td>
								<td>0/0.0%</td>
							</tr>
							<tr>
								<td>单位合计</td>
								<td>241/93.9%</td>
								<td>0/0.0%</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div>

		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import echarts from 'static/echarts.min.js'
	export default {
		data() {
			return {
				option: {
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'horizontal',
						itemGap: 8,
						itemWidth: 10,
						itemHeight: 10,
						left: 0,
						bottom: 0,
						data: ['安全生产管理机构及人员', '个体防护管理', '隐患排查治理', '安全培训教育', '应急管理', '相关方管理', '安全规章制度'],
						textStyle: {
							fontSize: 12
						}
					},
					animation: false,
					series: [{
						name: '辅料库存情况',
						type: 'pie',
						radius: '55%',
						center: ['50%', '38%'],
						calculable: false,
						clickable: false,
						selectedMode: false,
						hoverAnimation: false,
						label: { //饼图图形上的文本标签
							normal: {
								show: true,
								textStyle: {
									fontWeight: 300,
									fontSize: 12 //文字的字体大小
								},
								formatter: '{d}%'
							}
						},
						data: [{
								value: 335,
								name: '安全生产管理机构及人员'
							},
							{
								value: 310,
								name: '个体防护管理'
							},
							{
								value: 234,
								name: '隐患排查治理'
							},
							{
								value: 135,
								name: '安全培训教育'
							},
							{
								value: 154,
								name: '应急管理'
							},
							{
								value: 482,
								name: '相关方管理'
							},
							{
								value: 548,
								name: '安全规章制度'
							}
						]
					}]
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.makeEchartCard()
				this.scroll = new BScroll(this.$refs.wrapper, {
					click: true
				})
			})
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
	#header {
		background: #fff;
		a {
			color: $light-color !important;
			span {
				color: $light-color;
			}
		}
	}
	
	.wrapper {
		position: absolute;
		top: 2.8rem;
		bottom: 50px;
		left: 0;
		right: 0;
	}
	
	.title {
		margin: 0;
		margin-top: 0.3rem;
		overflow: hidden;
		text-align: left;
		font-size: $normal-textsize;
		color: $grey-textcolor;
	}
	
	.top_ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		li {
			position: relative;
			padding-bottom: 0.4rem;
			margin: 0 4%;
			color: $grey-textcolor;
			font-size: $normal-textsize;
			&.active {
				color: $light-color;
			}
			&.active:after {
				content: '';
				position: absolute;
				bottom: 3px;
				left: 0;
				width: 100%;
				height: 2px;
				background: $light-color;
			}
		}
	}
	
	.block {
		margin-bottom: 0.5rem;
		padding: 0.6rem 0.8rem;
		overflow: hidden;
		background: #fff;
		#echart_div {
			width: 100%;
			height: 12rem;
		}
		table {
			font-size: $small-textsize;
			thead {
				color: #fff;
				background: #3090c4;
				th {
					font-weight: 500;
				}
				th:nth-child(2),
				th:nth-child(3) {
					text-align: center;
					width: 20%;
				}
			}
			tbody {
				td {
					text-align: center;
					font-size: $small-textsize;
					padding: 0.3rem 0;
				}
				td:nth-child(1) {
					padding-left: 0.5rem;
					text-align: left;
				}
				tr:nth-child(even) {
					background: #eaf4f9;
				}
			}
		}
	}
</style>