<template>
	<div id="main">
		<router-view class='router'></router-view>
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