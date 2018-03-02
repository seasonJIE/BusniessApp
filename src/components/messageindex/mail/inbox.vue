<template>
	<div class="inbox">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span v-text="fromPage"></span></a>
			<h1 class="mui-title">收件箱</h1>
			<router-link to="/main/messageindex/mail/inbox/newmail" class="right write"></router-link>
		</header>
		
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="search_div">
					<input type="text" />
				</div>
				<router-link to="/main/messageindex/mail/inbox/maildetail" tag="div" class="item">
					<i class="tips circle"></i>
					<p>
						<span class="name">卓蔚</span>
						<span class="icon light"></span>
						<span class="time">下午13:30</span>

					</p>
					<p class="texttitle"><i class="resend"></i>卓蔚2018.01.03工作周报</p>
					<p>本周工作任务主要为:1、项目1;2、项目2;2、项目2;自我评估:良好;</p>
				</router-link>
				<div class="item">
					<i class="tips others"></i>
					<p>
						<span class="name">王玮</span>
						<span class="icon"></span>
						<span class="time">下午15:30</span>
					</p>
					<p class="texttitle"><i class="resend"></i>王玮2018.01.03工作周报</p>
					<p>本周工作任务主要为:1、项目1;2、项目2;2、项目2;自我评估:良好;</p>
				</div>
				<div class="item">
					<i class="tips others"></i>
					<p>
						<span class="name">卓蔚</span>
						<span class="icon"></span>
						<span class="time">下午15:30</span>
					</p>
					<p class="texttitle"><i class="resend"></i>卓蔚2018.01.03工作周报</p>
					<p>本周工作任务主要为:1、项目1;2、项目2;2、项目2;自我评估:良好;</p>
				</div>
				<div class="item">
					<i class="tips others"></i>
					<p>
						<span class="name">总经办</span>
						<span class="icon"></span>
						<span class="time">下午16:30</span>
					</p>
					<p class="texttitle"><i class="resend"></i>体检通知</p>
					<p>各位：总经办下发《2017年体检通知》，请各位查收。</p>
				</div>
			</div>
		</div>

		<div class="bottom">
			<a>编辑</a>
			<p>刚刚更新</p>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'Inbox',
		data(){
			return {
				fromPage:'邮箱'
			}
		},
		mounted() {
			this.whichfromPage();
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {click: true})
			})
		},
		methods:{
			whichfromPage() {
				this.$route.params.fromPage?this.fromPage='首页':'';
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.inbox {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		.wrapper {
			position: absolute;
			top: $totop;
			bottom: 40px;
			width: 100%;
		}
		.write {
			background: url(../../../assets/icon/write.png) no-repeat center;
			background-size: 100%;
		}
		.search_div {
			padding: 0 0.8rem;
			overflow: hidden;
			display:flex;
			align-items: center;
			justify-content: center;
			background: #e8ecef;
			height: 2.1rem;
			input {
				margin: 0;
				padding: 0;
				padding-left: 1.3rem;
				height: 1.3rem;
				line-height: 1.3rem;
				width:100%;
				border: 1px solid #dce1e4;
				background: url(../../../assets/icon/search.png) no-repeat 0.3rem center #fff;
				background-size: 0.8rem;
				font-size: $min-textsize;
			}
		}
		.content {
			.item {
				position: relative;
				padding: 0.5rem 0.8rem 0.5rem 1.8rem;
				line-height: 1.4;
				text-align: left;
				background: #fff;
				border-bottom: 1px solid #ddd;
				.tips {
					position: absolute;
					top: 0.8rem;
					left: 1.2rem;
					height: 0.3rem;
					width: 0.3rem;
					&.circle {
						background: red;
						border-radius: 1rem;
					}
					&.others {
						top: 0.6rem;
						left: 1rem;
						height: 0.8rem;
						width: 0.8rem;
						background: url(../../../assets/icon/mail_other.png) no-repeat center;
						background-size: 100%;
					}
				}
				p {
					margin: 0;
					overflow: hidden;
					font-size: $small-textsize;
					color: $grey-textcolor;
				}
				.name {
					float: left;
					font-size: $normal-textsize;
					color: $black-textcolor;
				}
				.time {
					float: right;
					font-size: $min-textsize;
				}
				.icon {
					margin-left: 0.4rem;
					float: right;
					display: inline-block;
					height: 0.8rem;
					width: 0.8rem;
					background: url(../../../assets/icon/jumpto.png) no-repeat center;
					background-size: 100%;
				}
				.icon.light {
					background: url(../../../assets/icon/mail-lighticon.png) no-repeat center;
					background-size: 0.6rem;
				}
				.texttitle {
					position: relative;
					overflow: initial;
					font-size: $normal-textsize;
					color: $black-textcolor;
					.resend {
						position: absolute;
						left: -0.7rem;
						top: 50%;
						margin-top: -0.3rem;
						height: 0.6rem;
						width: 0.6rem;
						background: url(../../../assets/icon/mail_resend.png) no-repeat center;
						background-size: 100%;
					}
				}
			}
		}
		.bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: 40px;
			line-height: 40px;
			border-top: 1px solid #ddd;
			background: #fff;
			a {
				position: absolute;
				left: 0;
				width: 60px;
				top: 0;
				bottom: 0;
				color: #535456;
				text-align: center;
				font-size: 12px;
			}
			p {
				color: #535456;
				font-size: 12px;
			}
		}
	}
</style>