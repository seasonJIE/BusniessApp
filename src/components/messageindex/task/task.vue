<template>
	<div class="task">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/message/task.png" />
					<span class="left">已办任务</span>
				</a>
			</li>
		</ul>
		<ul class="mui-table-view">
			<router-link class="mui-table-view-cell" to="/main/messageindex/task/tasklist" tag="li">
				<img src="../../../assets/icon/home-icon.png" v-if="false">
				<span class="headimg">MES</span>
				<span class="left">您有<span class="light">3件</span>关于中心代码库更新的通知</span>
				<span class="right">10:00</span>
			</router-link>
			<li class="mui-table-view-cell">
				<span class="headimg" style="background: #2AC845;">HR</span>
				<span class="left">您有<span class="light">3件</span>社保基数的调整的通知</span>
				<span class="right">10:00</span>
			</li>
			<li class="mui-table-view-cell">
				<span class="headimg" style="background: #2AC845;">培</span>
				<span class="left">您有<span class="light">3件</span>待处理的培训班申请</span>
				<span class="right">12:00</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Task'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.task {
		margin-top: 1.9rem;
		.light {
			color:$light-color;
		}
	}
</style>