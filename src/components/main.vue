<template>
	<div id="main">
		<router-view></router-view>
		<b-tabbar></b-tabbar>
	</div>
</template>

<script>
	import BTabbar from 'common/base/bottomTabbar'
	export default {
		name:'Main',
		components:{
			BTabbar
		}
	}
</script>

<style scoped>
	
</style>