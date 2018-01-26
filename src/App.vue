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
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}
	
	.router {
		position: absolute;
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
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(100%, 0);
		transform: translate(100%, 0);
	}
</style>