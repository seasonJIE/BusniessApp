<template>
	<div class="textfile">
		<header id="header" ref="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		</header>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<p class="title">两项工作系统移动应用建设项目招标公告</p>
				<p class="tip">2018-2-11</p>
				<p class="text">上海烟草集团有限责任公司委托上海宝华国际招标有限公司对两项工作系统移动应用建设项目进行招标，兹邀请合格投标人就下列服务前来报名参加。</p>
				<p class="text">一、项目名称及编号：</p>
				<p class="text">项目编号：0721-1864105HB539</p>
				<p class="text">项目名称：两项工作系统移动应用建设</p>
				<p class="text">二、项目内容：</p>
				<p class="text">本次招标内容是两项工作系统移动应用建设项目的开发与实施工作。具体内容及要求详见本招标文件。</p>
				<p class="text">三、供应商资格要求：</p>
				<p class="text">本次招标的合格投标人应同时满足下列资格要求，投标人须在投标文件中提供证明文件：</p>
				<p class="text">1、投标人必须为中华人民共和国（不包括香港、澳门及台湾地区）境内（简称“中国境内”）具有独立法人资格的企事业单位。</p>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'TextFile',
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {click: true})
			})
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	#header {
		background: #fff;
		.mui-action-back {
			color: $light-color;
		}
	}
	
	.wrapper {
		position: absolute;
		top: $totop;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
	}
	
	.content {
		padding: 0.8rem;
		background: #fff;
		text-align: left;
		.title {
			margin: 0;
			font-size: 0.9rem;
			color: $black-textcolor;
			font-weight: 700;
			line-height: 1.3;
		}
		.tip {
			margin-top: 0.4rem;
			margin-bottom: 0.5rem;
			font-size: $min-textsize;
			color: $grey-textcolor;
			span {
				font-size: $min-textsize;
			}
		}
		.text {
			margin-top: 0.8rem;
			line-height: 1.6;
			text-align: left;
			font-size: 0.75rem;
			color: #2f3437;
		}
	}
</style>