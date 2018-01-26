<template>
	<div class="messageindex">
		<my-header></my-header>
		<router-view></router-view>
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
	.messageindex {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>