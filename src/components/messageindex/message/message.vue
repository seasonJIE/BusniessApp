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
					<span class="headimg" style="background: #6D6D72;">HR</span>
					<div class="right">
						<p>HR系统通知</p>
						<p>关于社保基数调整的通知</p>
						<span>12:00</span>
					</div>
				</div>
				<div class="one_memssage">
					<img src="../../../assets/head.png">
					<div class="right">
						<p>卓蔚</p>
						<p>下午一点开会</p>
						<span>11:43</span>
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
				this.scroll = new BScroll(this.$refs.wrapper, {click: true})
			})
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.message {
		.wrapper {
			position: absolute;
			top: 0;
			bottom: 50px;
			width: 100%;
		}
		.one_memssage {
			position: relative;
			overflow: hidden;
			padding:0.4rem 0.8rem;
			border-bottom: 1px solid #ddd;
			background: #fff;
			img {
				margin: 0.2rem 0.4rem 0.3rem 0;
				float: left;
				height: 1.5rem;
				width: 1.5rem;
				border-radius: 0.1rem;
				background: #ddd;
			}
			.headimg {
				margin: 0.2rem 0.4rem 0.3rem 0;
				float: left;
				height: 1.5rem;
				line-height: 1.5rem;
				width: 1.5rem;
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
				left: 2.9rem;
				right: 0;
				p {
					margin: 0;
					line-height: 1.2;
					text-align: left;
					font-size: $normal-textsize;
					color: $black-textcolor;
					&:nth-child(2) {
						margin-top: 0.2rem;
						color: $grey-textcolor;
					}
				}
				span {
					position: absolute;
					right: 0.8rem;
					top: 50%;
					margin-top: -0.5rem;
					font-size: $min-textsize;
					color: $grey-textcolor;
				}
			}
		}
	}
</style>