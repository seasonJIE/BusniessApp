<template>
	<div class="mine">
		<div class="header">
			<a class="code"></a>
			<div class="top">
				<img src="../../assets/head.png" />
				<p>王伟</p>
				<p class="job">信息中心运维科 科长</p>
				<a class="dowm"></a>
			</div>
			<div class="btn_div">
				<router-link to="/main/mine/personalfile" tag="div">
					<img src="../../assets/mine/档案.png" />
					<p>档案</p>
				</router-link>
				<div>
					<img src="../../assets/mine/福利.png" />
					<p>福利</p>
				</div>
				<div>
					<img src="../../assets/mine/活动.png" />
					<p>活动</p>
				</div>
			</div>
		</div>

		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<router-link to="/main/mine/personalfile" class="mui-navigate-right">
					<img src="../../assets/mine/mine1.png" />
					<span class="left">我的文件</span>
				</router-link>
			</li>
			<li class="mui-table-view-cell">
				<router-link to="/main/mine/personalfile" class="mui-navigate-right">
					<img src="../../assets/mine/mine2.png" />
					<span class="left">我的收藏</span>
				</router-link>
			</li>
			<li class="mui-table-view-cell">
				<router-link to="/main/mine/personalfile" class="mui-navigate-right">
					<img src="../../assets/mine/mine3.png" />
					<span class="left">系统设置</span>
				</router-link>
			</li>
		</ul>
		<b-tabbar></b-tabbar>
	</div>
</template>

<script>
	import BTabbar from 'common/base/bottomTabbar'
	export default {
		name: 'Mine',
		components: {
			BTabbar
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.mine {
		.header {
			position:relative;
			margin-bottom:0.9rem;
			background:#fff;
			.code {
				z-index: 2;
				display: block;
				position: absolute;
				right: 0.8rem;
				top: 0.8rem;
				height: 1.3rem;
				width: 1.3rem;
				background: url(../../assets/icon/code.png) no-repeat center;
				background-size: 100%;
			}
			.top {
				position:relative;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-flow: column;
				height: 8.6rem;
				width: 100%;
				background:url(../../assets/mine_bg.png) no-repeat center -7rem;
				background-size: 100%;
				.dowm {
				position: absolute;
				bottom: 0.5rem;
				left: 50%;
				margin-left: -0.4rem;
				display: block;
				height: 0.8rem;
				width: 0.8rem;
				background: url(../../assets/icon/down.png) no-repeat center;
				background-size: 0.8rem;
			}
				img {
					height:2.5rem;
					width: 2.5rem;	
					border-radius: 2rem;
					background: #fff;
				}
				p {
					margin: 0;
					font-size: $normal-textsize;
					color: #fff;
				}
				.job {
					font-size: $small-textsize;
					
				}
			}
			.btn_div {
				display: flex;
				justify-content: center;
				> div {
					padding: 0.5rem;
					width: 33.33%;
					
					span,img {
						margin: auto;
						display: block;
						height: 1rem;
						width: 1rem;
					}
					p {
						margin: 0;
						color: $black-textcolor;
						font-size: $normal-textsize;
					}
				}
			}
		}
	}
</style>