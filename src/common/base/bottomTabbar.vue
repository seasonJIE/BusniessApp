<template>
	<nav class="bottomTabbar">
		<router-link to="/main/mainindex">
			<div class="notactive">
				<span class="iconfont icon-shouye"></span>
				<span class="text">首页</span>
			</div>
			<div class="active">
				<span class=" home-icon"></span>
			</div>
		</router-link>
		<router-link to="/main/messageindex">
			<span class="iconfont icon-xiaoxi">
				<span class="mui-badge">9</span>
			</span>
			<span class="text">消息</span>
		</router-link>
		<a class=" saoma">
			<span class="iconfont icon-saoma"></span>
		</a>
		<router-link to="/main/messageindex">
			<span class=" iconfont icon-pengyouquan"></span>
			<span class="text">发现</span>
		</router-link>
		<router-link to="/main/messageindex">
			<span class=" iconfont icon-wode"></span>
			<span class="text">我的</span>
		</router-link>
	</nav>
</template>

<script>
	export default {
		name: 'BottomTabbar'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize.scss";
	.bottomTabbar {
		z-index: 10;
		position: fixed;
		table-layout: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		display: table;
		padding: 0;
		width: 100%;
		height: 50px;
		background: $maincolor;
		a {
			display: table-cell;
			overflow: hidden;
			width: 1%;
			height: 50px;
			text-align: center;
			vertical-align: middle;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: #99bcd1;
			&.router-link-active {
				color: #05c3f9;
			}
			.text {
				font-size: 11px;
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.iconfont {
				top: 3px;
				width: 24px;
				height: 24px;
				padding-top: 0;
				padding-bottom: 0;
				font-size: 24px;
				position: relative;
				z-index: 20;
				line-height: 1;
				display: inline-block;
				text-decoration: none;
				.mui-badge {
					display: inline-block;
					font-size: 10px;
					line-height: 1.4;
					position: absolute;
					top: -2px;
					left: 100%;
					margin-left: -10px;
					padding: 1px 5px;
					color: #fff;
					background: red;
				}
			}
		}
		a:nth-child(1) {
			.active {
				display: none;
			}
		}
		a:nth-child(1).router-link-active {
			.notactive {
				display: none;
			}
			.active {
				display: flex;
				overflow: initial;
				position: relative;
				justify-content: center;
				align-items: center;
				height: 100%;
				width: 100%;
				.home-icon {
					height: 40px;
					width: 40px;
					background: url(../../assets/icon/home-icon.png) no-repeat center;
					background-size: 100%;
				}
			}
		}
		.saoma {
			.icon-saoma {
				margin-top: -10px;
				font-size: 28px;
			}
		}
	}
</style>