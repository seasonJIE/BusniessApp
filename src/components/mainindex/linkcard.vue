<template>
	<div class="linkcard">
		<div class="card">
			<p class="title">审批助手
				<a class="more">更多</a>
			</p>
			<ul class="list">
				<li>
					<i></i>
					<p class="content">您有<span>5件</span>关于中心代码更新的通知</p>
					<p class="time">2018-01-02</p>
				</li>
				<li>
					<i></i>
					<p class="content">您有<span>3件</span>社保基数的通知</p>
					<p class="time">2018-01-02</p>
				</li>
			</ul>
		</div>
		<div class="card" @click="routerto('/main/mainindex/chartsdetail')">
			<p class="title">辅料库存情况</p>
			<div id="echart_div" class="echarts_div" ref='mychart1'></div>
		</div>
		<div class="card">
			<p class="title">烟叶实时库存</p>
			<!--<div id="echart_div" class="echarts_div" ref='mychart2'></div>-->
			<img class="testimg" src="../../assets/s1.jpg" />
		</div>
		<div class="card" >
			<p class="title">供应商年度配额</p>
			<!--<div id="echart_div" class="echarts_div" ref='mychart2'></div>-->
			<img class="testimg" style="height: 10rem;" src="../../assets/s3.jpg" />
		</div>
		<div class="card">
			<p class="title">教育情况</p>
			<!--<div id="echart_div" class="echarts_div" ref='mychart2'></div>-->
			<img class="testimg"style="height: 10rem;" src="../../assets/s2.jpg" />
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
				
				option1: {
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						itemWidth:10,
						itemHeight:10,
						right: '3%',
						data: ['硬盒', '条盒', '纸箱', '内装纸', '内衬纸','薄膜','滤棒']
					},
					series: [{
						name: '辅料库存情况',
						type: 'pie',
						radius: '60%',
						center: ['40%', '50%'],
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
				this.chart1 = echarts.init(this.$refs.mychart1);
				this.chart1.setOption(this.option1);
//				this.chart2 = echarts.init(this.$refs.mychart2);
//				this.chart2.setOption(this.option2);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.linkcard {
		position:relative;
		z-index:1;
		overflow: hidden;
		.card {
			overflow:hidden;
			margin: 0.5rem auto;
			padding:0 0.8rem;
			background: #fff;
			text-align: left;
			.testimg {
				margin-top: 0.3rem;
				box-sizing: content-box;
				padding-bottom: 0.6rem;
				width: 100%;
				height: 8rem;
			}
			
			p {
				margin: 0;
			}
			.title {
				margin-top: 0.3rem;
				overflow: hidden;
				font-size: $normal-textsize;
				color: $grey-textcolor;
				.more {
					float: right;
					color: $grey-textcolor;
				}
			}
			.list {
				margin: auto;
				list-style: none;
				li {
					position: relative;
					padding: 0.6rem 0;
					padding-left: 1rem;
					border-bottom: 1px solid #ddd;
					.content {
						font-size: $normal-textsize;
						color: $black-textcolor;
						span {
							color: $light-color;
						}
					}
					.time {
						font-size: $min-textsize;
						color: $grey-textcolor;
					}
				}
				li:last-child {
					border: none;
				}
				i {
					position: absolute;
					top: 0.95rem;
					left: 0.5rem;
					display: inline-block;
					height: 0.2rem;
					width: 0.2rem;
					background: #000000;
					border-radius: 1rem;
				}
			}
			#echart_div {
				width: 100%;
				height: 8rem;
			}
			.echarts_div {
				z-index: 1;
				box-sizing: content-box;
				padding-bottom: 0.6rem;
			}
		}
		.user-defined {
			margin: 1.5rem auto;
			display: block;
			overflow: hidden;
			min-height: 2rem;
			width: 2rem;
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
				color: $grey-textcolor;
			}
		}
	}
</style>