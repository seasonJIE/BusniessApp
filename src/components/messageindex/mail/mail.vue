<template>
	<div class="mail">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<router-link to="/main/messageindex/mail/inbox" class="mui-navigate-right">
					<img src="../../../assets/message/mail1.png" />
					<span class="left">收件箱</span>
					<span class="right cricle-icon">2</span>
				</router-link>
			</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<router-link to="/main/messageindex/mail" class="mui-navigate-right">
					<img src="../../../assets/message/mail2.png" />
					<span class="left">收藏夹</span>
				</router-link>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/message/mail3.png" />
					<span class="left">草稿箱</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/message/mail4.png" />
					<span class="left">已发送邮件</span>
				</a>
			</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/message/mail5.png" />
					<span class="left">已删除邮件</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/message/mail6.png" />
					<span class="left">垃圾邮件</span>
				</a>
			</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/message/mail7.png" />
					<span class="left">设置</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Mail'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.mail {
		margin-top: 1.9rem;
		.cricle-icon {
			margin-top: 0.2rem;
			display: inline-block;
			height: 0.6rem;
			line-height: 0.6rem;
			width: 0.6rem;
			background: red;
			color: #fff !important;
			border-radius: 1rem;
			text-align: center;
			font-size: $min-textsize;
		}
	}
</style>