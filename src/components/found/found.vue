<template>
	<div class="found">
		<my-header></my-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import MyHeader from 'components/found/header'
	export default {
		name:'Messageindex',
		components:{
			MyHeader
		}
	}
</script>

<style scoped lang="scss">
	.found {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>