<template>
	<div class="message">
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="one_memssage">
					<img src="../../../assets/head.png" v-if="false">
					<span class="headimg">MES</span>
					<div class="right">
						<p>MES系统通知</p>
						<p>关于中心代码库更新的通知</p>
						<span>10:00</span>
					</div>
				</div>
				<div class="one_memssage">
					<img src="../../../assets/head.png">
					<div class="right">
						<p>MES系统通知</p>
						<p>关于中心代码库更新的通知</p>
						<span>10:00</span>
					</div>
				</div>
				<div class="one_memssage">
					<img src="../../../assets/head.png">
					<div class="right">
						<p>MES系统通知</p>
						<p>关于中心代码库更新的通知</p>
						<span>10:00</span>
					</div>
				</div>
				<div class="one_memssage">
					<img src="../../../assets/head.png" v-if="false">
					<span class="headimg">HR</span>
					<div class="right">
						<p>MES系统通知</p>
						<p>关于中心代码库更新的通知</p>
						<span>10:00</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'Message',
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {})
			})
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.message {
		.wrapper {
			position: absolute;
			top: 1.9rem;
			bottom: 50px;
			width: 100%;
		}
		.one_memssage {
			position: relative;
			overflow: hidden;
			height: 2.2rem;
			border-bottom: 1px solid #ddd;
			background: #fff;
			img {
				margin: 0.45rem 0.4rem 0.45rem 0.8rem;
				float: left;
				height: 1.3rem;
				width: 1.3rem;
				border-radius: 0.1rem;
				background: #ddd;
			}
			.headimg {
				margin: 0.45rem 0.4rem 0.45rem 0.8rem;
				float: left;
				height: 1.3rem;
				line-height: 1.3rem;
				width: 1.3rem;
				text-align: center;
				font-size: $min-textsize;
				background: #F27847;
				color: #fff;
				border-radius: 0.1rem;
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