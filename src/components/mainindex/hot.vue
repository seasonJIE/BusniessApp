<template>
	<div class="bg_fixed" v-if="isShow=='true'">
		<div class="hotpoint">
			<a class="close" @click="hidehot"></a>
			<router-link tag="div" to="/main/mainindex/hotdetail">
				<img src="../../assets/1.jpg">
				<p>上海烟草开展基层单位党组织书记党性锻炼专题培训班</p>
			</router-link>
		</div>
		<div class="bg"></div>
	</div>
</template>

<script>
	import Bus from 'components/vmbus.js'
	export default {
		name: 'Hotpoint',
		data(){
			return {
				isShow:'false'
			}
		},
		mounted() {
			Bus.$on('hot', (e) => {
				this.isShow = e
			})
		},
		methods:{
			hidehot() {
				this.isShow = 'false';
			}
		}

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
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		.bg {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			background: rgba(0, 0, 0, 0.5);
		}
		.hotpoint {
			position: relative;
			z-index: 2;
			width: 96%;
			background: #fff;
			border-radius: 0.4rem;
			img {
				height: 8rem;
				width: 100%;
				border-radius: 0.4rem 0.4rem 0 0;
			}
			p {
				line-height: 1.4;
				margin: 0;
				padding:0.3rem 0.8rem;
				padding-top: 0;
				font-size: $large-textsize;
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