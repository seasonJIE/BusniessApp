<template>
	<div class="party-building">
		<div class="wrapper" ref="wrapper">
			<div>
				<img class="top_img" src="../../../assets/3.jpg">
				<div class="href_list">
					<div>
						<a>
							<img src="../../../assets/allapp/fuli.png">
							<p>支部生活</p>
						</a>
					</div>
					<div>
						<a>
							<img src="../../../assets/allapp/fuli.png">
							<p>党章党规</p>
						</a>
					</div>
					<div>
						<a>
							<img src="../../../assets/allapp/fuli.png">
							<p>微课堂</p>
						</a>
					</div>
					<div>
						<a>
							<img src="../../../assets/allapp/fuli.png">
							<p>党建考核</p>
						</a>
					</div>
					<div>
						<a>
							<img src="../../../assets/allapp/fuli.png">
							<p>讨论交流</p>
						</a>
					</div>
					<div>
						<a>
							<img src="../../../assets/allapp/fuli.png">
							<p>成长档案</p>
						</a>
					</div>
					<div>
						<a>
							<img src="../../../assets/allapp/fuli.png">
							<p>荣誉墙</p>
						</a>
					</div>
				</div>
				<div class="item">
					<img src="../../../assets/0.jpg" />
					<div class="textcontent">以“两学一做”学习教育筑牢思想“压舱石”</div>
				</div>
				<div class="item">
					<img src="../../../assets/0.jpg" />
					<div class="textcontent">坚持党的领导 加强党的建设 切实肩负起行业改革发展的历史使命和重要责任</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {
					click: true,
					preventDefault: true
				})
			})
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.wrapper {
		position: absolute;
		top: 0;
		bottom: 50px;
		left: 0;
		right: 0;
	}
	
	.party-building {
		top: 2.8rem;
	}
	
	.top_img {
		height: 8.6rem;
		width: 100%;
	}
	
	.href_list {
		padding: 0.3rem 0;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		background: #fff;
		border-bottom: 1px solid #ddd;
		div {
			text-align: center;
			width: 25%;
			height: 3rem;
			img {
				margin: 0.3rem auto;
				display: block;
				height: 1.2rem;
				width: 1.2rem;
			}
			p {
				margin: 0;
				color: $black-textcolor;
				font-size: $normal-textsize;
			}
		}
	}
	
	.item {
		position: relative;
		margin: 0;
		padding: 0.6rem 0.75rem;
		overflow: hidden;
		background: #fff;
		border-bottom: 1px solid #ddd;
		img {
			float: left;
			height: 4rem;
			width: 5.8rem;
		}
		.textcontent {
			position: absolute;
			display: flex;
			align-items: center;
			right: 0.75rem;
			top: 0.5rem;
			bottom: 0.45rem;
			left: 7rem;
			text-align: justify;
			font-size: $large-textsize;
		}
	}
</style>