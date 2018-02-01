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
		height:4.3rem;
		padding-right: 0.5rem;
		padding-left: 0.5rem;
		background: url(~assets/headerbg.png) no-repeat center;
		background-size:100%;
		.topbar {
			overflow:hidden;
			height:1.9rem;
			.icon_btn {
				margin-top:0.45rem;
				padding-right: 0.5rem;
				padding-left: 0.5rem;
				font-size: 1.2rem;
				position: relative;
				z-index: 20;
				padding-top: 0.5rem;
				padding-bottom: 0.5rem;
				
				&.hot {
					float: left;
					background: url(../../assets/icon/hot-icon.png) no-repeat center;
					background-size: 100%;
				}
				
				&.plus {
					float: right;
					background: url(../../assets/icon/plus-icon.png) no-repeat center;
					background-size: 100%;
				}
			}
			.search_btn {
				position: absolute;
				display: flex;
				align-items: center;
				padding: 0;
				margin: 0;
				right:2rem;
				left: 2rem;
				width: auto;
				height: 1.9rem;
				span{
					position: relative;
					margin: auto;
					display: block;
					height: 1.1rem;
					line-height: 1.1rem;
					width: 70%;
					background: rgba(255,255,255,0.3);
					background-size: 0.8rem;
					color: #fff;
					opacity: 0.8;
					font-size: 0.6rem;
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
			height: 2.4rem;
			line-height: 2.4rem;
			color: #fff;
			font-size: 0.9rem;
		}
	}
</style>