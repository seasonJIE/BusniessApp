<template>
	<div class="message">
		<div class="one_memssage">
			<img src="../../../assets/icon/home-icon.png">
			<div class="right">
				<p>MES系统通知</p>
				<p>关于中心代码库更新的通知</p>
				<span>10:00</span>
			</div>
		</div>
		<div class="one_memssage">
			<img src="../../../assets/logo.png">
			<div class="right">
				<p>MES系统通知</p>
				<p>关于中心代码库更新的通知</p>
				<span>10:00</span>
			</div>
		</div>
		<div class="one_memssage">
			<img src="../../../assets/logo.png">
			<div class="right">
				<p>MES系统通知</p>
				<p>关于中心代码库更新的通知</p>
				<span>10:00</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Message',
		components: {}
	}
</script>

<style scoped lang="scss">
@import "~common/scss/baseColorSize";
	.message {
		position:absolute;
		left:0;
		right:0;
		top:38px;
		bottom:50px;
		background:#fff;
		.one_memssage {
			position:relative;
			overflow: hidden;
			height:2.2rem;
			border-bottom: 1px solid #ddd;
			background:#fff;
			img {
				margin: 0.45rem 0.4rem 0.45rem 0.8rem;
				float: left;
				height: 1.3rem;
				width: 1.3rem;
				border-radius: 0.3rem;
			}
			.right {
				position: absolute;
				padding: 0.1rem 0;
				padding-right: 2.1rem;
				left: 2.4rem;
				right: 0;
				height: 100%;
				p {
					margin: 0.2rem 0;
					line-height: 1.2;
					text-align: left;
					font-size: $normal-textsize;
					color: $black-textcolor;
					&:nth-child(2) {
						font-size: $small-textsize;
						color: $grey-textcolor;
					}
				}
				span {
					position: absolute;
					right: 0.5rem;
					top: 50%;
					margin-top: -0.5rem;
					font-size: $min-textsize;
					color: $grey-textcolor;
				}
			}
		}
	}
</style>