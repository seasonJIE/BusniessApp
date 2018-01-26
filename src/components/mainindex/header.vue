<template>
	<div class="main-header">
		<div class="topbar">
			<a class="icon_btn hot"></a>
			<div class="search_btn" @click="routerto('/main/mainindex/search')">
				<span></span>
			</div>
			<a class="icon_btn plus"></a>
		</div>
		<p class="text">2018，幸福是奋斗出来的</p>
	</div>
</template>

<script>
	export default {
		name: 'MainHeader'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize.scss";
	.main-header {
		position: fixed;
		overflow: hidden;
		top: 0;
		z-index: 10;
		right: 0;
		left: 0;
		padding-right: 10px;
		padding-left: 10px;
		background: $maincolor;
		.topbar {
			overflow:hidden;
			height:38px;
			.icon_btn {
				margin-top:9px;
				padding-right: 10px;
				padding-left: 10px;
				font-size: 24px;
				position: relative;
				z-index: 20;
				padding-top: 10px;
				padding-bottom: 10px;
				
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
				right: 40px;
				left: 40px;
				width: auto;
				height: 38px;
				span{
					margin: auto;
					display: block;
					height: 22px;
					width: 74%;
					border-radius: 10px;
					background: url(../../assets/icon/search.png) no-repeat 6px center  #296082;
					background-size: 16px;
				}
			}
		}
		.text {
			margin: 0;
			height: 48px;
			line-height: 48px;
			color: #05c3f9;
			font-size: 0.9rem;
		}
	}
</style>