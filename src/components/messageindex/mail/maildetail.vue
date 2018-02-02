<template>
	<div class="maildetail">
		<header id="header" class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>收件箱</span></a>
		    <a class="right next"></a>
		    <a class="right prev"></a>
		</header>
		<div class="top">
			<p>发件人:<span>卓蔚</span></p>
			<p>收件人:<span>王玮</span></p>
			<span class="headimg">卓</span>
		</div>
		<div>
			<p class="title">卓蔚2018.1.1工作周报</p>
			<p class="time">2018年1月10日  下午15:30</p>
		</div>
		<div class="content">
			<p>本周工作任务主要:1、项目1;1、项目1;1、项目1;1、项目1;自我评估:良好;</p>
			<div class="info">
				<p>上海烟草集团有限公司</p>
				<p>卓蔚</p>
				<p>Tel:<span>13583278378</span></p>
				<p>Mail:<span>XXSDW@shcy.com</span></p>
			</div>
			<div class="download">
				<p>点击下载</p>
				<p>123.rar</p>
				<p>5MB</p>
			</div>
		</div>
		<footer>
			<a></a>
			<a></a>
			<a></a>
			<a></a>
			<a></a>
		</footer>
	</div>
</template>

<script>
	export default {
		name:'MailDetail'
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~~common/scss/resetMui";
	.maildetail {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		>div {
			padding:0.4rem 0.8rem;
			border-bottom: 1px solid #ddd;
		}
		p {
			margin: 0;
			font-size: $normal-textsize;
			color:$black-textcolor;
			text-align: left;
		}
		.next {
			background: url(../../../assets/icon/down.png) no-repeat center;
			background-size: 100%;
		}
		.prev {
			margin-right: 0.2rem;
			background: url(../../../assets/icon/up.png) no-repeat center;
			background-size: 100%;
		}
		.top {
			position: relative;
			margin-top: 2.2rem;
			padding: 0.8rem;
			
			p {
				span {
				margin-left: 0.5rem;
				color: $light-color;
				border-bottom: 1px solid $light-color;
				}
			}
			.headimg {
				position: absolute;
				right: 0.8rem;
				top: 50%;
				margin-top: -0.75rem;
				display: block;
				height: 1.5rem;
				line-height: 1.5rem;
				width: 1.5rem;
				text-align: center;
				font-size: $min-textsize;
				background: #aaa;
				color: #fff;
				border-radius: 0.2rem;
			}
		}
		.time {
			font-size: $small-textsize;
			color: $grey-textcolor;
		}
		.content {
			border: none;
			.info {
				margin: 0.2rem 0;
				padding: 0.2rem 0;
				width: 50%;
				border-top:2px solid #aaa;
				span {
					margin-left: 0.2rem;
					color: $light-color;
					border-bottom: 1px solid $light-color;
				}
			}
			.download {
				padding: 0.8rem;
				width: 6.8rem;
				height: 4.5rem;
				line-height: 1.5;
				border: 1px solid #ddd;
				border-radius: 0.2rem;
				p {
					text-align: center;
				}
				p:nth-child(2),p:nth-child(3) {
					color: $grey-textcolor;
					font-size: $small-textsize;
				}
			}
		}
		
		footer {
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 38px;
			width: 100%;
			background: $maincolor;
			
			a {
				display: block;
				height: 100%;
				width:20%;
				background:url(../../../assets/icon/mail_resend.png) no-repeat center;
				background-size: 1.2rem;
			}
			a:nth-child(1){
				background:url(../../../assets/message/inbox1.png) no-repeat center;
				background-size: 0.8rem;
			}
			a:nth-child(2){
				background:url(../../../assets/message/inbox2.png) no-repeat center;
				background-size: 0.8rem;
			}
			a:nth-child(3){
				background:url(../../../assets/message/inbox3.png) no-repeat center;
				background-size: 0.8rem;
			}
			a:nth-child(5){
				background:url(../../../assets/message/inbox5.png) no-repeat center;
				background-size: 0.8rem;
			}
		}
	}
	
</style>