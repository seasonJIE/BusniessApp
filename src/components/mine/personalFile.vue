<template>
	<div class="personalfile">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>我的</span></a>
			<h1 class="mui-title">档案</h1>
		</header>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<span class="left">头像</span>
					<img class="right" src="../../assets/head.png" />
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<span class="left">姓名</span>
					<span class="right">卓蔚</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<span class="left">电话</span>
					<span class="right">13874728828</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<span class="left">二维码名片</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<span class="left">性别</span>
					<span class="right">男</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<span class="left">生日</span>
					<span class="right">未设置</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<span class="left">地区</span>
					<span class="right">上海</span>
				</a>
			</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<span class="left">公司名称</span>
					<span class="right">上海烟草集团有限责任公司</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<span class="left">部门名称</span>
					<span class="right">信息中心运维科</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<span class="left">职位</span>
					<span class="right">科长</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'PersonalFile'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	
	.personalfile {
		.mui-table-view {
			margin-top:2.2rem;
			.left {
				float: left;
				margin: 0;
			}
			.right {
				float: right;
			}
			img.right {
				top: 50%;
				margin-top: -0.75rem;
				left: initial;
				right: 0.5rem;
				height: 1.5rem;
				width: 1.5rem;
				border-radius: 1rem;
			}
		}
	}
</style>