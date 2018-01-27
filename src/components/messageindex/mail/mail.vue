<template>
	<div class="mail">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<router-link to="/main/messageindex/mail/inbox" class="mui-navigate-right">
					<img src="../../../assets/首页应用图标/日报.png"/>
					<span class="left">收件箱</span>
					<span class="right cricle-icon">2</span>
				</router-link>
			</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<router-link to="/main/messageindex/mail/newmail" class="mui-navigate-right">
					<img src="../../../assets/首页应用图标/日报.png"/>
					<span class="left">收藏夹</span>
				</router-link>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/首页应用图标/日报.png"/>
					<span class="left">草稿箱</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/首页应用图标/日报.png"/>
					<span class="left">已发送邮件</span>
				</a>
			</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/首页应用图标/日报.png"/>
					<span class="left">已删除邮件</span>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/首页应用图标/日报.png"/>
					<span class="left">垃圾邮件</span>
				</a>
			</li>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					<img src="../../../assets/首页应用图标/日报.png"/>
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
	.mail {
		margin-top: 38px;
		.mui-table-view {
			margin-bottom: 0.6rem;
			.mui-table-view-cell {
				padding: 0.55rem 0.75rem;
				height: 2.2rem;
				.mui-navigate-right {
					position:relative;
					margin: -0.55rem -0.75rem;
					font-size:$normal-textsize;
					img {
						position: absolute;
						top: 50%;
						left: 0.8rem;
						margin-top: -0.65rem;
						height: 1.3rem;
						width: 1.3rem;
						border-radius: 0.2rem;
					}
					.left {
						margin-left: 1.7rem;
						float: left;
						color:$black-textcolor;
					}
					.right {
						float: right;
						margin-right:1.2rem;
					}
					.cricle-icon {
						margin-top: 0.3rem;
						display: inline-block;
						height: 0.6rem;
						line-height: 0.6rem;
						width: 0.6rem;
						background: red;
						color: #fff;
						border-radius: 1rem;
						text-align: center;
						font-size: $min-textsize;
					}
				}
				&:after {
					left: 0;
				}
			}
		}
	}
</style>