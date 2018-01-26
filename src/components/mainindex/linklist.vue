<template>
	<ul class="linklist">
			<li>
				<img class="icon-png" src="../../assets/首页应用图标/邮件.png"></img>
				<span class="text">邮件</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/首页应用图标/培训.png"></img>
				<span class="text">邮件</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/首页应用图标/日报.png"></img>
				<span class="text">邮件</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/首页应用图标/绩效.png"></img>
				<span class="text">邮件</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/首页应用图标/审批.png"></img>
				<span class="text">邮件</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/首页应用图标/统计分析.png"></img>
				<span class="text">邮件</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/首页应用图标/工资.png"></img>
				<span class="text">邮件</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/首页应用图标/全部.png"></img>
				<span class="text">邮件</span>
			</li>
		</ul>
</template>

<script>
	export default {
		name:'Linklist'
	}
</script>

<style scoped lang="scss">
@import "~common/scss/baseColorSize";
	.linklist {
		margin-top: 86px;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
		flex-wrap:wrap;
		list-style: none;
		height: 6.7rem;
		width: 100%;
		background: #fff;
		li {
			display: flex;
			flex-direction:column;
			align-items: center;
			justify-content: center;
			width: 25%;
			height: 3.35rem;
			.icon-png {
				display: block;
				height: 1.4rem;
				width: 1.4rem;
			}
			.text{
				font-size:$small-textsize;
				color:$black-textcolor;
			}
			
		}
	}
</style>