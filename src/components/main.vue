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
	#main {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>