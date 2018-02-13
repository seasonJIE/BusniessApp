<template>
	<div class="newmail">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>返回</span></a>
			<h1 class="mui-title">新建邮件</h1>
			<a class="right text">发送</a>
		</header>
		<ul>
			<li>
				<span>收件人:</span>
				<input type="text"/>
				<a class="add_icon"></a>
			</li>
			<li>
				<span>抄送:</span>
				<input type="text"/>
			</li>
			<li>
				<span>密送:</span>
				<input type="text"/>
			</li>
			<li>
				<span>主题:</span>
				<input type="text"/>
				<a class="fujian">(2)</a>
			</li>
		</ul>
		<textarea placeholder="请输入内容"></textarea>
	</div>
</template>

<script>
	export default {
		name: 'NewMail'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.newmail {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		
		ul {
			margin-top:$totop;
			li {
				position: relative;
				overflow: hidden;
				height: 2.2rem;
				border-bottom: 1px solid #ddd;
				span {
					position: absolute;
					top: 0;
					left: 0.8rem;
					display: block;
					height: 2.2rem;
					line-height: 2.2rem;
					font-size: $normal-textsize;
					color: $black-textcolor;
				}
				
				input {
					margin: 0;
					padding-left: 3rem;
					padding-right: 2.2rem;
					width:100%;
					height: 100%;
					border: none;
					font-size: $normal-textsize;
					color: $black-textcolor;
				}
				a {
					position: absolute;
					display: block;
					height: 0.8rem;
					line-height: 0.8rem;
					width: 0.8rem;
					top:50%;
					right: 0.8rem;
					margin-top: -0.4rem;
					&.add_icon {
						background: url(../../../assets/icon/add.png) no-repeat center;
						background-size: 100%;
					}
					&.fujian {
						box-sizing: content-box;
						padding-left: 0.9rem;
						color: $grey-textcolor;
						font-size: $min-textsize;
						background: url(../../../assets/icon/mail_other.png) no-repeat left center;
						background-size: 1rem;
					}
				}
			}
		}
		textarea {
			font-size: $normal-textsize;
			color: $black-textcolor;
			border: none;
		}
	}
</style>