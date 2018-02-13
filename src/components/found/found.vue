<template>
	<div class="found">
		<my-header></my-header>
		<router-view class="router"></router-view>
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
@import "~common/scss/baseColorSize";
	.news,.workring,.activity {
		top: $totop;
	}
</style>