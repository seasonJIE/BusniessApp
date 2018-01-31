<template>
	<div class="allapp">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>首页</span></a>
			<input type="text" placeholder="全部应用" />
		</header>
		<div class="myapp">
			<p class="title">
				我的应用
				<span class="right">编辑</span>
			</p>
			<div>
				<img src="../../assets/allapp/产区.png" />
				<img src="../../assets/allapp/安全检查.png" />
				<img src="../../assets/allapp/加工计划.png" />
				<img src="../../assets/allapp/工资.png" />
				<img src="../../assets/allapp/审批.png" />
				<img src="../../assets/allapp/培训.png" />
				<img src="../../assets/allapp/预警预测.png" />
			</div>
		</div>
		<div id="wrapper" ref="wrapper">
			<div class="appdiv">
				<div class="typeblock">
					<p class="title">行政管理</p>
					<div class="itemblock">
						<div class="item">
							<img src="../../assets/allapp/作业管理.png" />
							<p>日程管理</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/安全检查.png" />
							<p>会议室预定</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/预警预测.png" />
							<p>用车申请</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/产区.png" />
							<p>客饭预定</p>
						</div>
					</div>
				</div>
				<div class="typeblock">
					<p class="title">生产管理</p>
					<div class="itemblock">
						<div class="item">
							<img src="../../assets/allapp/加工计划.png" />
							<p>产量上报</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/作业管理.png" />
							<p>工艺标准</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/日报.png" />
							<p>生产工单</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/报表.png" />
							<p>原料库存</p>
						</div>
					</div>
				</div>
				<div class="typeblock">
					<p class="title">财务管理</p>
					<div class="itemblock">
						<div class="item">
							<img src="../../assets/allapp/产区.png" />
							<p>销售收入</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/工资.png" />
							<p>成本费用</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/预警预测.png" />
							<p>薪金水平</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/报表.png" />
							<p>盈亏分析</p>
						</div>
					</div>
				</div>
				<div class="typeblock">
					<p class="title">投资采购</p>
					<div class="itemblock">
						<div class="item">
							<img src="../../assets/allapp/加工计划.png" />
							<p>调拨计划</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/预警预测.png" />
							<p>加工计划</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/活动.png" />
							<p>产区基地</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/安全检查.png" />
							<p>烟叶质量</p>
						</div>
					</div>
				</div>
				<div class="typeblock">
					<p class="title">安保系统</p>
					<div class="itemblock">
						<div class="item">
							<img src="../../assets/allapp/作业管理.png" />
							<p>作业管理</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/安全检查.png" />
							<p>安全检查</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/预警预测.png" />
							<p>预警预测</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/日报.png" />
							<p>隐患上报</p>
						</div>
					</div>
				</div>
				<div class="typeblock">
					<p class="title">人力资源</p>
					<div class="itemblock">
						<div class="item">
							<img src="../../assets/allapp/工资.png" />
							<p>薪资信息</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/绩效管理.png" />
							<p>绩效考核</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/培训.png" />
							<p>教育培训</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/审批.png" />
							<p>考勤信息</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/加工计划.png" />
							<p>人岗匹配</p>
						</div>
					</div>
				</div>
				<div class="typeblock">
					<p class="title">安保系统</p>
					<div class="itemblock">
						<div class="item">
							<img src="../../assets/allapp/作业管理.png" />
							<p>作业管理</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/安全检查.png" />
							<p>安全检查</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/预警预测.png" />
							<p>预警预测</p>
						</div>
					</div>
				</div>
				<div class="typeblock">
					<p class="title">HR系统</p>
					<div class="itemblock">
						<div class="item">
							<img src="../../assets/allapp/工资.png" />
							<p>薪资信息</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/绩效管理.png" />
							<p>绩效考核</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/培训.png" />
							<p>教育培训</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/审批.png" />
							<p>考勤信息</p>
						</div>
						<div class="item">
							<img src="../../assets/allapp/加工计划.png" />
							<p>人岗匹配</p>
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
		mounted() {
			
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {})
			});
			
			
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
				font-size: 0.6rem;
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
	#wrapper {
		z-index: 1;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 6rem;
	}
	.myapp {
		position: relative;
		z-index: 2;
		margin-top: 2.2rem;
		margin-bottom: 0.2rem;
		padding: 0.5rem;
		height: 3.8rem;
		background: #fff;
		text-align: left;
		box-shadow: 0px 3px 5px #ddd;
		>div {
			margin-top: 0.5rem;
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
			height: 0.7rem;
			line-height: 0.7rem;
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
			display: flex;
			flex-wrap: wrap;
			.item {
				margin-top: 0.6rem;
				width: 25%;
				img {
					width: 1.3rem;
					height: 1.3rem;
				}
				p {
					margin: 0;
					font-size: $normal-textsize;
					color: $black-textcolor;
				}
			}
		}
	}
</style>