<template>
	<div class="newfriend">
		<header id="header" class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>通讯录</span></a>
		    <h1 class="mui-title">新的朋友</h1>
		    <a class="right write"></a>
		</header>
		<div class="search_div">
			<input type="text"/>
		</div>
		<div class="jituan">
			<div>
				<span class="icon"></span>
				<p>集团通讯录</p>
			</div>
		</div>
		<p class="title">新的朋友</p>
		<div class="newfriends">
			<div class="item">
				<img src="../../../assets/icon/home-icon.png"/>
				<div class="text">
					<p>王伟</p>
					<p>您好，我是王伟</p>
				</div>
				<span class="right btn">添加</span>
			</div>
			<div class="item">
				<img src="../../../assets/icon/home-icon.png"/>
				<div class="text">
					<p>王伟</p>
					<p>您好，我是王伟</p>
				</div>
				<span class="right">已添加</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'NewFriend'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.newfriend {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		.search_div {
			margin-top:44px;
			overflow:hidden;
			background:#e8ecef;
			height:1.9rem;
			line-height:1.7rem;
			input {
				margin: 0;
				padding: 0;
				padding-left: 1.3rem;
				height: 1rem;
				line-height: 1rem;
				width: 92%;
				border: 1px solid #dce1e4;
				border-radius: 1rem;
				background: url(../../../assets/icon/search.png) no-repeat 0.3rem center #fff;
				background-size: 0.8rem;
				font-size: $min-textsize;
			}
		}
		.jituan {
			display: flex;
			box-sizing: content-box;
			justify-content: center;
			align-items: center;
			height: 3.2rem;
			background: #fff;
			border-bottom: 0.7rem solid #e8ecef;
			
			> div {
				width: 3.2rem;
				.icon {
					display: block;
					margin: auto;
					height: 1.3rem;
					width: 1.3rem;
					background: url(../../../assets/首页应用图标/日报.png) no-repeat center;
					background-size: 100%;
				}
				p {
					margin: 0;
					font-size: $normal-textsize;
					color: $black-textcolor;
				}
			}
		}
		.title {
			margin: 0;
			padding: 0.2rem 0;
			padding-left: 0.8rem;
			font-size: $normal-textsize;
			color: $black-textcolor;
			text-align: left;
			border-bottom: 1px solid #ddd;
		}
		.newfriends {
			.item {
				position: relative;
				overflow: hidden;
				padding: 0.8rem;
				height: 3rem;
				line-height: 1.3;
				border-bottom: 1px solid #ddd;
				p {
					margin: 0;
					font-size: $normal-textsize;
					color: $black-textcolor;
				}
				img {
					float: left;
					height: 1.3rem;
					width: 1.3rem;
				}
				.text {
					margin-left: 0.5rem;
					float: left;
					text-align: left;
					
					p:nth-child(2) {
						font-size: $small-textsize;
						color: $grey-textcolor;
					}
				}
				.right {
					position: absolute;
					top: 50%;
					margin-top: -0.55rem;
					right: 0.8rem;
					height: 1.1rem;
					line-height: 1.1rem;
					width: 2rem;
					text-align: center;
					font-size: $small-textsize;
					color: $grey-textcolor;
				}
				.right.btn {
					background: #f27847;
					color: #fff;
					border-radius: 0.2rem;
				}
			}
		}
	}
</style>