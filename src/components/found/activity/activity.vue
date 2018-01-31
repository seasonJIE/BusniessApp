<template>
	<div class="wrapper" ref="wrapper">

		<div class="activity">
			<div class="one_activity">
				<div class="top">
					<img src="../../../assets/tu.jpg">
					<div class="tip">进行中 <i></i>15天</div>
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
					<img src="../../../assets/img.png">
					<div class="tip">进行中 <i></i>15天</div>
					<div class="content">
						<p><span class="title left">十八大精神竞赛</span>
							<a class="apart_btn right">参加</a>
						</p>
						<p><span class="left">内容内容开赛</span><span class="right">已参赛23人</span></p>
					</div>
				</div>
				<div class="controll_div">
					<span class="active"><i class="iconfont icon-shoucang"></i>1</span>
					<span><i class="iconfont icon-pinglun"></i>2</span>
					<span><i class="iconfont icon-zan"></i>3</span>
					<span><i class="iconfont icon-fenxiang"></i>4</span>
				</div>
			</div>
			<div class="one_activity over">
				<div class="top">
					<img src="../../../assets/tu.jpg">
					<div class="tip">已结束</div>
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
					<span class="active"><i class="iconfont icon-zan"></i>3</span>
					<span><i class="iconfont icon-fenxiang"></i>4</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'Activity',
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {})
			})
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.activity {
		overflow: hidden;
	}
	.wrapper {
		position: absolute;
		top: 1.9rem;
		bottom: 50px;
		width: 100%;
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
				display: flex;
				justify-content: center;
				align-items: center;
				top: 1rem;
				right: 0.5rem;
				height: 1rem;
				line-height: 1rem;
				min-width: 3.2rem;
				color: #fff;
				background: #ff9000;
				font-size: $normal-textsize;
				i {
					margin-left: 0.2rem;
					display: inline-block;
					height: 0.6rem;
					width: 0.6rem;
					background: url(../../../assets/icon/time.png) no-repeat center;
					background-size: 100%;
				}
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
			span.active {
				color:#ff9600;
			}
			.iconfont {
				margin-right: 0.3rem;
				font-size: 0.6rem;
			}
		}
		&.over .tip,
		&.over .top .content .apart_btn {
			background: #aaa;
		}
		&.over .tip:before,
		&.over .tip:after {
			border-right-color: #aaa;
		}
	}
</style>