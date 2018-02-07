<template>
	<div class="allapp">
		<header id="header" class="mui-bar mui-bar-nav" ref="header">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>首页</span></a>
			<input type="text" placeholder="全部应用" />
		</header>
		<div class="alter_div" :class="{altering:isAlter,watching:!isAlter}" ref="alter_div">
			<div id="alter_block" class="typeblock">
				<p class="title">我的应用
					<span class="right" @click="finish">完成</span>
				</p>
				<div class="itemblock">
					<div class="item">
						<img src="../../assets/allapp/zuoyeguanli.png" />
						<p>日程管理</p>
						<i class="cut_icon"></i>
					</div>
					<div class="item">
						<img src="../../assets/allapp/anquanjiancha.png" />
						<p>会议室预定</p>
						<i class="cut_icon"></i>
					</div>
					<div class="item">
						<img src="../../assets/allapp/yujing.png" />
						<p>用车申请</p>
						<i class="cut_icon"></i>
					</div>
					<div class="item">
						<img src="../../assets/allapp/chanqu.png" />
						<p>客饭预定</p>
						<i class="cut_icon"></i>
					</div>
					<div class="item">
						<img src="../../assets/allapp/jiagongjihua.png" />
						<p>产量上报</p>
						<i class="cut_icon"></i>
					</div>
					<div class="item">
						<img src="../../assets/allapp/gongzi.png" />
						<p>成本费用</p>
						<i class="cut_icon"></i>
					</div>
					<div class="item">
						<img src="../../assets/allapp/huodong.png" />
						<p>产区基地</p>
						<i class="cut_icon"></i>
					</div>
				</div>
			</div>
		</div>
		<div id="wrapper" :class="{altering:isAlter,watching:!isAlter}" :style="{top:wrappertop}" ref="wrapper">
			<div>
				<div class="myapp">
					<p class="title">
						我的应用
						<span class="right" @click="alter">编辑</span>
					</p>
					<div>
						<img src="../../assets/allapp/chanqu.png" />
						<img src="../../assets/allapp/anquanjiancha.png" />
						<img src="../../assets/allapp/jiagongjihua.png" />
						<img src="../../assets/allapp/gongzi.png" />
						<img src="../../assets/allapp/shenpi.png" />
						<img src="../../assets/allapp/peixun.png" />
						<img src="../../assets/allapp/yujing.png" />
					</div>
				</div>
				<div class="appdiv">
					<div class="typeblock">
						<p class="title">行政管理</p>
						<div class="itemblock">
							<div class="item">
								<img src="../../assets/allapp/zuoyeguanli.png" />
								<p>日程管理</p>
								<i class="cut_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/anquanjiancha.png" />
								<p>会议室预定</p>
								<i class="cut_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/shenpi.png" />
								<p>审批管理</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/yujing.png" />
								<p>用车申请</p>
								<i class="cut_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/chanqu.png" />
								<p>客饭预定</p>
								<i class="cut_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/fuli.png" />
								<p>办公用品</p>
								<i class="add_icon"></i>
							</div>
						</div>
					</div>
					<div class="typeblock">
						<p class="title">生产管理</p>
						<div class="itemblock">
							<div class="item">
								<img src="../../assets/allapp/jiagongjihua.png" />
								<p>产量上报</p>
								<i class="cut_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/zuoyeguanli.png" />
								<p>工艺标准</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/ribao.png" />
								<p>生产工单</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/report.png" />
								<p>原料库存</p>
								<i class="add_icon"></i>
							</div>
						</div>
					</div>
					<div class="typeblock">
						<p class="title">财务管理</p>
						<div class="itemblock">
							<div class="item">
								<img src="../../assets/allapp/chanqu.png" />
								<p>销售收入</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/gongzi.png" />
								<p>成本费用</p>
								<i class="cut_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/yujing.png" />
								<p>薪金水平</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/jixiaoguanli.png" />
								<p>数据报表</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/report.png" />
								<p>盈亏分析</p>
								<i class="add_icon"></i>
							</div>
						</div>
					</div>
					<div class="typeblock">
						<p class="title">投资采购</p>
						<div class="itemblock">
							<div class="item">
								<img src="../../assets/allapp/jiagongjihua.png" />
								<p>调拨计划</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/yujing.png" />
								<p>加工计划</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/huodong.png" />
								<p>产区基地</p>
								<i class="cut_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/anquanjiancha.png" />
								<p>烟叶质量</p>
								<i class="add_icon"></i>
							</div>
						</div>
					</div>
					<div class="typeblock">
						<p class="title">安保系统</p>
						<div class="itemblock">
							<div class="item">
								<img src="../../assets/allapp/zuoyeguanli.png" />
								<p>作业管理</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/anquanjiancha.png" />
								<p>安全检查</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/yujing.png" />
								<p>预警预报</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/ribao.png" />
								<p>隐患上报</p>
								<i class="add_icon"></i>
							</div>
						</div>
					</div>
					<div class="typeblock">
						<p class="title">人力资源</p>
						<div class="itemblock">
							<div class="item">
								<img src="../../assets/allapp/gongzi.png" />
								<p>薪资信息</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/jixiaoguanli.png" />
								<p>绩效考核</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/peixun.png" />
								<p>教育培训</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/shenpi.png" />
								<p>考勤信息</p>
								<i class="add_icon"></i>
							</div>
							<div class="item">
								<img src="../../assets/allapp/jiagongjihua.png" />
								<p>人岗匹配</p>
								<i class="add_icon"></i>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default {
		name: 'AllApp',
		data() {
			return {
				isAlter: false,
				alrering_top:0,
				watching_top:0
			}
		},
		computed: {
			wrappertop() {
				if(this.isAlter == true) {
					return this.alrering_top;
				} else {
					return this.watching_top;
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.watching_top = this.$refs.header.offsetHeight+'px';
				this.alrering_top = this.$refs.header.offsetHeight + this.$refs.alter_div.offsetHeight + 'px';
				this.top = this.watching_top;
				this.scroll = new BScroll(this.$refs.wrapper, {click: true});
				this.scroll.on('beforeScrollStart',()=>{
					this.scroll.refresh();
				});
			});
		},
		methods: {
			alter() {
				this.isAlter = true;
			},
			finish() {
				this.isAlter = false;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	#header {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		.mui-action-back {
			padding-right: 2rem;
			color: $maincolor;
			span {
				position: absolute;
			}
		}
		input {
			padding: 0;
			padding-left: 1.4rem;
			margin: 0;
			margin-left: 0.5rem;
			height: 1.2rem;
			line-height: 1.2rem;
			font-size: 0.6rem;
			border: 1px solid #d0d4d5;
			border-radius: 0.8rem;
			color: #676767;
			background: url(../../assets/icon/search.png) no-repeat 0.3rem center #fff;
			background-size: 1rem;
		}
	}
	
	.alter_div {
		z-index: 3;
		position: absolute;
		margin-bottom: 0.2rem;
		top: 2.1rem;
		left: 0;
		width: 100%;
		transform: translateY(-3rem);
		overflow: hidden;
		background: #fff;
		box-shadow: 0px 3px 3px #ddd;
		transition: all 400ms;
		.typeblock {
			margin: 0;
		}
	}
	
	.alter_div.altering {
		transform: translateY(0);
		.typeblock .itemblock .item {
			background-color: #eee;
			transition: background-color 600ms;
			transition-delay: 400ms;
			.cut_icon {
				display: block !important;
				opacity: 1;
				height: 0.6rem;
				transition: opacity 600ms;
				transition-delay: 400ms;
			}
		}
	}
	
	.alter_div.watching {
		transform: translateY(-10rem);
	}
	
	#wrapper {
		z-index: 1;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 2.1rem;
		transition: all 400ms;
	}
	
	#wrapper.watching {
		top: 2.1rem;
		.myapp {
			height: 3.8rem;
			padding: 0.5rem;
			opacity: 1;
			transition: all 400ms;
		}
	}
	
	#wrapper.altering {
		top: 10.45rem;
		.myapp {
			height: 0;
			opacity: 0;
			padding-top: 0;
			padding-bottom: 0;
			transition: all 400ms;
		}
		.typeblock .itemblock .item {
			background-color: #eee;
			transition: background-color 600ms;
			transition-delay: 400ms;
		}
		.add_icon,.cut_icon {
			display: block !important;
			opacity: 1;
			height: 0.6rem;
			transition: opacity 600ms;
			transition-delay: 400ms;
		}
	}
	
	.myapp {
		position: relative;
		overflow: hidden;
		z-index: 2;
		margin-bottom: 0.2rem;
		padding: 0.5rem;
		height: 3.8rem;
		background: #fff;
		text-align: left;
		>div {
			margin-top: 0.5rem;
			padding:0.2rem 0.8rem;
		}
		img {
			margin-right: 0.5rem;
			height: 1rem;
			width: 1rem;
		}
	}
	
	.title {
		margin: 0;
		overflow: hidden;
		font-size: $normal-textsize;
		color: $black-textcolor;
		text-align: left;
		.right {
			float: right;
			display: inline-block;
			/*height: 0.7rem;
			line-height: 0.7rem;*/
			width: 1.5rem;
			text-align: center;
			font-size: $min-textsize;
			color: $light-color;
			border: 1px solid $light-color;
			border-radius: 0.1rem;
		}
	}
	
	.typeblock {
		margin: 0.2rem 0;
		padding: 0.5rem;
		background: #fff;
		.itemblock {
			margin-top: 0.2rem;
			display: flex;
			flex-wrap: wrap;
			.item {
				margin: 0.1rem 1%;
				position: relative;
				padding-top: 0.6rem;
				padding-bottom: 0.2rem;
				width: 23%;
				img {
					width: 1.2rem;
					height: 1.2rem;
				}
				p {
					margin: 0;
					/*margin-top: 0.1rem;*/
					font-size: $small-textsize;
					color: $black-textcolor;
				}
				.add_icon {
					opacity: 0;
					position: absolute;
					top: 0.2rem;
					right: 0.4rem;
					height: 0;
					width: 0.6rem;
					background: url(../../assets/icon/plus_icon.png) no-repeat center;
					background-size: 100%;
				}
				.cut_icon {
					opacity: 0;
					position: absolute;
					top: 0.2rem;
					right: 0.4rem;
					height: 0;
					width: 0.6rem;
					background: url(../../assets/icon/cut_icon.png) no-repeat center;
					background-size: 100%;
				}
			}
		}
	}
</style>