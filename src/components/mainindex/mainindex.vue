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
					click: true
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
</style>