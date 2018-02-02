<template>
	<ul class="linklist">
			<li>
				<img class="icon-png" src="../../assets/mainapp/mail.png"></img>
				<span class="text">邮件</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/mainapp/report.png"></img>
				<span class="text">日报</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/mainapp/gongzi.png"></img>
				<span class="text">工资</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/mainapp/peixun.png"></img>
				<span class="text">培训</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/mainapp/shenpi.png"></img>
				<span class="text">审批</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/mainapp/jixiao.png"></img>
				<span class="text">绩效</span>
			</li>
			<li>
				<img class="icon-png" src="../../assets/mainapp/tongji.png"></img>
				<span class="text">统计</span>
			</li>
			<router-link tag="li" to="/main/mainindex/allapp">
				<img class="icon-png" src="../../assets/mainapp/all.png"></img>
				<span class="text">全部</span>
			</router-link>
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