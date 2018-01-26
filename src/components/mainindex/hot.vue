<template>
	<div class="bg_fixed hide">
		<div class="hotpoint">
			<a class="close"></a>
			<img src="../../assets/logo.png">
			<p>上海烟草开展基层单位党组织书记党性锻炼专题培训班</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Hotpoint'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	
	.bg_fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		background: rgba(0,0,0,0.5);
		.hotpoint {
			position:relative;
			width: 96%;
			background: #fff;
			border-radius: 0.4rem;
			img {
				height: 9rem;
				width: 100%;
			}
			p {
				margin: 0;
				padding: 0.45rem;
				font-size:$large-textsize;
				text-align: left;
				color: $maincolor;
			}
			.close {
				position: absolute;
				right: 0;
				top: -2.4rem;
				display: block;
				height: 1.8rem;
				width: 1.8rem;
				color: #fff;
				background: url(../../assets/icon/close.png) no-repeat center;
				background-size: 100%;
			}
		}
		&.hide {
		display: none;
		}
	}
</style>