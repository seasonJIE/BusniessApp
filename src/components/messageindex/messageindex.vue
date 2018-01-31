<template>
	<div class="messageindex">
		<my-header></my-header>
		<router-view class="router"></router-view>
	</div>
</template>

<script>
	import MyHeader from 'components/messageindex/header'
	export default {
		name:'Messageindex',
		components:{
			MyHeader
		}
	}
</script>

<style scoped lang="scss">
</style>