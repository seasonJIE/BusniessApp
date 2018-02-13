<template>
	<div class="mycode">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		</header>
		<div class="code_div">
			<div class="top">
				<img class="left" src="../../assets/head.png" />
				<div class="right">
					<p class="name">卓尉</p>
					<p>上海烟草集团有限责任公司</p>
					<p>信息中心运维科&nbsp;&nbsp;科长</p>
				</div>
			</div>
			<img class="code" src="../../assets/code.jpg" />
			<p class="text">扫一扫获取我的名片信息</p>
			<!--<p class="text">获取我的名片信息</p>-->
		</div>
		<div class="bottom">
			<router-link to="/main/mine/mycode" class="minecode" tag="span">我的名片</router-link>
			<span class="tocode" @click="code">扫一扫</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MyCode',
		methods: {
			code() {
				if(wmf) {
					wmf.scaner(function(result) {
						mui.alert(result, " ");
					});
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	#header {
		background: none;
		box-shadow: none;
		.mui-action-back {
			color: $header-activetextcolor;
		}
	}
	
	.mycode {
		background: url(../../assets/enter_bg.jpg) center;
		background-size: 100%;
		.code_div {
			position: absolute;
			top: 3.2rem;
			left: 1rem;
			right: 1rem;
			padding: 0.8rem;
			height: 18.5rem;
			background: #fff;
			border-radius: 1rem;
			box-shadow: 0px 6px 6px #333;
			.top {
				display: flex;
				overflow: hidden;
				text-align: left;
				.left {
					margin-right: 0.5rem;
					width: 2.5rem;
					height: 2.5rem;
					background: #ddd;
				}
				.right {
					font-size: $small-textsize;
					color: $grey-textcolor;
					.name {
						font-size: $normal-textsize;
						color: $black-textcolor;
					}
				}
				p {
					margin: 0;
					line-height: 1.4;
					font-size: $min-textsize;
					color: $grey-textcolor;
				}
			}
			.code {
				margin: 1.5rem auto;
				height: 7.8rem;
				width: 7.8rem;
			}
			.text {
				margin: 0.2rem;
				font-size: $normal-textsize;
				color: $grey-textcolor;
			}
		}
		.bottom {
			position: absolute;
			bottom: 1.6rem;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			span {
				display: block;
				padding-top: 1.9rem;
				width: 40%;
				height: 3rem;
				color: #fff;
				font-size: 0.75rem;
			}
			span.minecode {
				background: url(../../assets/icon/code.png) no-repeat center 0.7rem;
				background-size: 1.2rem;
			}
			span.tocode {
				background: url(../../assets/icon/tocode.png) no-repeat center 0.8rem;
				background-size: 0.9rem;
			}
		}
	}
</style>