<template>
	<div class="activity">
		<div class="one_activity">
			<div class="top">
				<img src="../../../assets/tu.jpg">
				<div class="tip">进行中</div>
				<div class="content">
					<p><span class="title left">十八大精神竞赛</span>
						<a class="apart_btn right">参加</a>
					</p>
					<p><span class="left">内容内容开赛</span><span class="right">已参赛23人</span></p>
				</div>
			</div>
			<div class="controll_div">
				<span><i class="iconfont icon-shoucang"></i>1</span>
				<span><i class="iconfont icon-pinglun"></i>2</span>
				<span><i class="iconfont icon-zan"></i>3</span>
				<span><i class="iconfont icon-fenxiang"></i>4</span>
			</div>
		</div>
		<div class="one_activity">
			<div class="top">
				<img src="../../../assets/tu.jpg">
				<div class="tip">进行中</div>
				<div class="content">
					<p><span class="title left">十八大精神竞赛</span>
						<a class="apart_btn right">参加</a>
					</p>
					<p><span class="left">内容内容开赛</span><span class="right">已参赛23人</span></p>
				</div>
			</div>
			<div class="controll_div">
				<span><i class="iconfont icon-shoucang"></i>1</span>
				<span><i class="iconfont icon-pinglun"></i>2</span>
				<span><i class="iconfont icon-zan active"></i>3</span>
				<span><i class="iconfont icon-fenxiang"></i>4</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Activity'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.activity {
		margin-top: 38px;
		padding-bottom: 50px;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.one_activity {
		margin-bottom: 0.2rem;
		background: #fff;
		.top {
			position: relative;
			padding: 0.7rem 0.5rem 0 0.5rem;
			img {
				width: 100%;
				height: 8.9rem;
			}
			.tip {
				position: absolute;
				top: 1rem;
				right: 0.5rem;
				height: 1rem;
				line-height: 1rem;
				min-width: 3.2rem;
				color: #fff;
				background: #ff9000;
				font-size: $normal-textsize;
			}
			.tip:before {
				content: '';
				position: absolute;
				bottom: 0;
				left: -0.5rem;
				width: 0;
				height: 0;
				font-size: 0;
				border-right: 0.5rem solid #ff9000;
				border-top: 0.5rem solid transparent;
			}
			.tip:after {
				content: '';
				position: absolute;
				top: 0;
				left: -0.5rem;
				width: 0;
				height: 0;
				font-size: 0;
				border-right: 0.5rem solid #ff9000;
				border-bottom: 0.5rem solid transparent;
			}
			.content {
				padding: 0.2rem 0.5rem;
				p {
					margin: 0;
					overflow: hidden;
					font-size: $small-textsize;
					color: $grey-textcolor;
				}
				.title {
					font-size: $normal-textsize;
					color: $black-textcolor;
				}
				.apart_btn {
					display: inline-block;
					height: 0.8rem;
					line-height: 0.8rem;
					width: 2rem;
					text-align: center;
					background: #ff9000;
					color: #fff;
					font-size: $small-textsize;
					border-radius: 0.8rem;
				}
			}
		}
		.controll_div {
			display: flex;
			align-items: center;
			overflow: hidden;
			border-top: 1px solid #ddd;
			span {
				display: inline-block;
				width: 25%;
				height: 1.6rem;
				line-height: 1.6rem;
				text-align: center;
				font-size: $min-textsize;
				color: $grey-textcolor;
			}
			.iconfont {
				margin-right: 0.3rem;
				font-size: 0.6rem;
			}
			.iconfont.active {
				color: #ff9600;
			}
		}
	}
</style>