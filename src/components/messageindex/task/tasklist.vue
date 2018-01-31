<template>
	<div class="tasklist">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>任务</span></a>
			<h1 class="mui-title">中心代码库</h1>
			<a class="right text">已办</a>
		</header>
		<div class="list">
			<div class="item active">
				<p><span class="left">卓威</span><span class="right">10:00</span></p>
				<p>关于中心代码库更新的通知</p>
				<p>信息中心运维科</p>
				<i class="mui-icon mui-icon-checkmarkempty"></i>
			</div>
			<div class="item">
				<p><span class="left">卓威</span><span class="right">10:00</span></p>
				<p>关于中心代码库更新的通知</p>
				<p>信息中心运维科</p>
				<i class="mui-icon mui-icon-checkmarkempty"></i>
			</div>
			<div class="item">
				<p><span class="left">卓威</span><span class="right">10:00</span></p>
				<p>关于中心代码库更新的通知</p>
				<p>信息中心运维科</p>
				<i class="mui-icon mui-icon-checkmarkempty"></i>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'TaskList'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.tasklist {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		.list {
			margin-top: 44px;
			.item {
				position: relative;
				padding: 0.5rem 2rem 0.5rem 0.5rem;
				background: #fff;
				border-bottom: 1px solid #ddd;
				text-align: left;
				line-height: 1.5;
				p {
					margin: 0;
					overflow: hidden;
					font-size: $small-textsize;
					color: $grey-textcolor;
				}
				.left {
					float: left;
					font-size: $normal-textsize;
					color: $black-textcolor;
				}
				.right {
					float: right;
					font-size: $min-textsize;
					color: $grey-textcolor;
				}
				p:nth-child(2) {
					color: $black-textcolor;
				}
				i {
					position: absolute;
					top: 50%;
					right: 0.6rem;
					margin-top: -0.4rem;
					height: 0.8rem;
					line-height: 0.8rem;
					text-align: center;
					width: 0.8rem;
					border: 1px solid #ddd;
					border-radius: 1rem;
					font-size: 1rem;
					color: #fff;
				}
				i:before {
					position: absolute;
					left: 50%;
					margin-left: -0.5rem;
				}
				&.active i {
					background:$light-color;
					border-color:$light-color;
				}
			}
		}
	}
</style>