<template>
	<div id="app">
		<transition :name="transitionName">
			<router-view class='router' />
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				transitionName: 'slide-left'
			}
		},
		mounted(){
			wmf.ready(function() {
				wmf.setBarSyleWithBackgroundColor(1,'#1f4d66',function(){});
			});
		},
		watch: {
			'$route' (to, from) {	
				let isBack = this.$router.isBack;
				const toDepth = to.path.split('/').length;
				const fromDepth = from.path.split('/').length;
				this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			}
		}
	}
</script>

<style lang="scss">
	@import "~common/scss/style";
	#app {
		font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}
	
	.router {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: hidden;
		width: 100%;
		transition: all .5s ease;
	}
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(100%, 0);
		transform: translate(100%, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-100%, 0);
		transform: translate(-100% 0);
	}
	
	.slide-left-leave-active,.slide-right-leave-active {
		transition-delay: .05s;
	}
</style>