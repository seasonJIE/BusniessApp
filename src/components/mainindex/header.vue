<template>
	<div class="main-header">
		<div class="topbar">
			<a class="icon_btn hot" @click="hotshow"></a>
			<div class="search_btn" @click="routerto('/main/mainindex/search')">
				<span><a>搜索</a></span>
			</div>
			<a class="icon_btn plus"></a>
		</div>
		<p class="text">2018，幸福是奋斗出来的</p>
	</div>
</template>

<script>
	import Bus from 'components/vmbus.js'
	export default {
		name: 'MainHeader',
		methods:{
			vmbus(msgid,msg) {
				Bus.$emit(msgid,msg)
			},
			hotshow() {
				this.vmbus('hot','true');
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize.scss";
	.main-header {
		position: absolute;
		overflow: hidden;
		top: 0;
		z-index: 10;
		right: 0;
		left: 0;
		height:5rem;
		padding-top:0.9rem;
		padding-right: 0.8rem;
		padding-left: 0.8rem;
		background: url(~assets/headerbg.jpg) no-repeat top center;
		background-size:100%;
		.topbar {
			overflow:hidden;
			height:1.9rem;
			.icon_btn {
				/*margin-top:0.45rem;*/
				padding:1rem;
				font-size: 1.2rem;
				position: relative;
				z-index: 20;
				
				
				&.hot {
					float: left;
					background: url(../../assets/icon/hot-icon.png) no-repeat center 0.45rem;
					background-size: 1rem;
				}
				
				&.plus {
					float: right;
					background: url(../../assets/icon/plus-icon.png) no-repeat center 0.45rem;
					background-size: 1rem;
				}
			}
			.search_btn {
				position: absolute;
				display: flex;
				align-items: center;
				padding: 0;
				margin: 0;
				right:3rem;
				left: 3rem;
				width: auto;
				height: 1.9rem;
				span{
					position: relative;
					margin: auto;
					display: block;
					height: 1.1rem;
					line-height: 1.1rem;
					width: 90%;
					background: rgba(255,255,255,0.3);
					background-size: 0.8rem;
					color: #fff;
					opacity: 0.8;
					font-size: 0.6rem;
					border-radius: 0.1rem;
					a {
						display: inline-block;
						padding-left: 0.9rem;
						background: url(../../assets/icon/search.png) no-repeat left center;
						background-size: 0.9rem;
						color: #ddd;
					}
				}
			}
		}
		.text {
			margin: 0;
			height: 2rem;
			line-height: 2rem;
			color: #fff;
			font-size: 0.9rem;
		}
	}
</style>