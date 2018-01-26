<template>
	<div class="mainindex">
		<my-header></my-header>
		<linklist></linklist>
		<linkcard></linkcard>
		<hot></hot>
	</div>
</template>

<script>
	import MyHeader from 'components/mainindex/header'
	import Linklist from 'components/mainindex/linklist'
	import Linkcard from 'components/mainindex/linkcard'
	import Hot from 'components/mainindex/hot'
	export default {
		name:'Mainindex',
		components:{
			MyHeader,
			Linklist,
			Linkcard,
			Hot
		}
	}
</script>

<style scoped lang="scss">
	
</style>