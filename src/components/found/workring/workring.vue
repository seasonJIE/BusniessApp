<template>
	<div class="workring">
		<div class="hasMessage">
			<div>
				<img src="../../../assets/head.png">
				<span>您有一条消息</span>
			</div>
		</div>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="item">
					<div class="top">
						<img class="headimg" src="../../../assets/head.png" />
						<div class="right">
							<p>
								<span class="name">卓蔚</span><span class="time">14:20</span>
							</p>
							<p>今天下午会议室1:00部门会议，请大家务必准时出席。</p>
						</div>
					</div>
					<div class="controll_div">
						<span><i class="iconfont icon-pinglun"></i>1</span>
						<span><i class="iconfont icon-zan"></i>2</span>
						<span><i class="iconfont icon-fenxiang"></i>3</span>
					</div>
				</div>
				<div class="item">
					<div class="top">
						<img class="headimg" src="../../../assets/head2.png" />
						<div class="right">
							<p>
								<span class="name">王玮</span><span class="time">10:37</span>
							</p>
							<p>坚守在第一战线。</p>
							<div class="img_div">
								<img src="../../../assets/01.jpg">
								<img src="../../../assets/02.jpg">
								<img src="../../../assets/03.jpg">
							</div>
						</div>
					</div>
					<div class="controll_div">
						<span><i class="iconfont icon-pinglun"></i>1</span>
						<span><i class="iconfont icon-zan active"></i>2</span>
						<span><i class="iconfont icon-fenxiang"></i>3</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'Workring',
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {click: true})
			})
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.workring {
		padding-bottom: 50px;
		.wrapper {
			position: absolute;
			top: 2.3rem;
			bottom: 50px;
			width: 100%;
		}
		.hasMessage {
			position:relative;
			z-index:2;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 2.3rem;
			background: #fff;
			border-bottom: 1px solid #ddd;
			>div {
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				height: 1.3rem;
				width: 6.3rem;
				background: $maincolor;
				border-radius: 0.2rem;
				img {
					margin-right: 0.2rem;
					height: 1rem;
					width: 1rem;
					background: #ddd;
					border-radius: 0.2rem;
				}
				span {
					font-size: $small-textsize;
					color: #fff;
				}
			}
		}
		.content {
			overflow: hidden;
			.item {
				margin-bottom: 0.5rem;
				background: #fff;
				.top {
					position: relative;
					padding: 0.6rem 0.8rem;
					overflow: hidden;
					/*display: flex;*/
					.headimg {
						position: absolute;
						left: 0.8rem;
						height: 1.5rem;
						width: 1.5rem;
						background: #ddd;
						border-radius: 0.2rem;
					}
					.right {
						padding-left: 2.2rem;
						height: 100%;
						overflow:hidden;
						width: auto;
					}
					.img_div {
						margin: 0.4rem 0;
						overflow: hidden;
						img {
							width: 30%;
							height: 2.8rem;
						}
					}
				}
				p {
					margin: 0;
					text-align: left;
					font-size: $normal-textsize;
					color: $black-textcolor;
					.name {
						font-size: $normal-textsize;
						color: $maincolor;
					}
					.time {
						float: right;
						font-size: $min-textsize;
						color: $grey-textcolor;
					}
				}
				.controll_div {
					display: flex;
					align-items: center;
					overflow: hidden;
					border-top: 1px solid #ddd;
					span {
						display: inline-block;
						width: 33.33%;
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
		}
	}
</style>