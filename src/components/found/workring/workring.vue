<template>
	<div class="workring">
		<div class="hasMessage">
			<div>
				<img src="../../../assets/icon/home-icon.png">
				<span>您有一条消息</span>
			</div>
		</div>
		<div class="content">
			<div class="item">
				<div class="top">
					<img src="../../../assets/icon/home-icon.png" />
					<div class="right">
						<p>
							<span class="name">王伟</span><span class="time">2017-03-25 11:37</span>
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
					<img src="../../../assets/icon/home-icon.png" />
					<div class="right">
						<p>
							<span class="name">王伟</span><span class="time">2017-03-25 11:37</span>
						</p>
						<p>今天下午会议室1:00部门会议，请大家务必准时出席。</p>
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
</template>

<script>
	export default {
		name: 'Workring'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.workring {
		margin-top: 38px;
		padding-bottom: 50px;
		.hasMessage {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 2.3rem;
			background: #fff;
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
					border: 1px solid #156697;
					border-radius: 1rem;
				}
				span {
					font-size: $small-textsize;
					color: #fff;
				}
			}
		}
		.content {
			.item {
				background: #fff;
				border-bottom: 1px solid #ddd;
				border-top: 1px solid #ddd;
				.top {
					padding: 1rem 1.5rem;
					padding-bottom: 0;
					overflow: hidden;
					display: flex;
					img {
						margin-right: 0.3rem;
						float: left;
						height: 1.9rem;
						width: 1.9rem;
						border-radius: 1rem;
					}
					.right {
						float: right;
					}
				}
				p {
					margin: 0;
					text-align: left;
					font-size: $small-textsize;
					color: $black-textcolor;
					.name {
						font-size: $normal-textsize;
						color: $maincolor;
					}
					.time {
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