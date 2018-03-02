<template>
	<div class="mainindex">
		<my-header></my-header>

		<div class="wrapper" ref="wrapper">
			<div>
				<linklist></linklist>
				<linkcard></linkcard>
			</div>

		</div>
		<hot></hot>
		<transition name="slide">
			<router-view class="childe-router"></router-view>
		</transition>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import MyHeader from 'components/mainindex/header'
	import Linklist from 'components/mainindex/linklist'
	import Linkcard from 'components/mainindex/linkcard'
	import Hot from 'components/mainindex/hot'
	export default {
		name: 'Mainindex',
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {
					click: true,
					preventDefault:true
				})
			})
		},
		components: {
			MyHeader,
			Linklist,
			Linkcard,
			Hot
		}
	}
</script>

<style scoped lang="scss">
	.wrapper {
		position: absolute;
		top: 5rem;
		bottom: 50px;
		width: 100%;
	}
	.childe-router {
		z-index: 999;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #efeff4;
	}
	.slide-enter-active,.slide-leave-active {
		transition: all 0.5s;
	}
	.slide-enter,.slide-leave-to{
		transform: translate3d(100%,0,0);
	}
</style>