<template>
	<div class="newsdetail">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>首页</span></a>
		</header>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<p class="title">上海烟草开展基层单位党组织书记党性锻炼专题培训班</p>
				<p class="tip">最新热点 <span>刚刚</span></p>
				<img src="../../../assets/tu.jpg" />
				<p class="text">据中国驻莫桑比克使馆微信公众号消息，自2017年末以来，莫桑比克进入雨季，霍乱、疟疾等传染病多发，北部地区爆发小规模霍乱疫情。霍乱是由霍乱弧菌引起的烈性肠道传染病，潜伏期为5天，该病发病急、传播快，主要症状为剧烈腹泻和呕吐，严重者可出现循环衰竭和肾功能衰竭，治疗不及时可导致死亡。驻莫桑比克使馆提醒在莫中国公民提高防护意识，注意饮用水和食品安全，特别是要饮用烧开的水。如出现呕吐、腹泻等症状应尽快就医。同时提醒即将赴莫中国公民提前做好预防措施，口服霍乱疫苗，抵莫后注意防范。根据国家质检总局近期公告，自莫赴华人员，应配合出入境检验检疫机构的医学巡查和体温监测等工作，如有呕吐、腹泻等症状，入境时应向出入境检验检疫机构申报。申报或现场查验发现有上述症状的人员，应接受出入境检验检疫机构的医学检查和采样检测。对发现的染疫人或染疫嫌疑人，出入境检验检疫机构将按规定程序采取医学措施。入境后5天内出现上述症状者，应当立即就医，并向医生说明近期的旅行史。来自莫的交通工具、集装箱等，出入境检验检疫机构将监督实施消毒等卫生处理。</p>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'newsDetail',
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {})
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
		top: 2.2rem;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
	}
	
	.content {
		padding: 0.5rem;
		background: #fff;
		text-align: left;
		.title {
			font-size: $large-textsize;
			color: $black-textcolor;
			font-weight: 700;
			
		}
		.tip {
			font-size: $normal-textsize;
			color: $grey-textcolor;
			span {
				font-size: $small-textsize;
			}
		}
		img {
			width: 100%;
		}
		.text {
			font-size: $normal-textsize;
			color: $black-textcolor;
		}
	}
</style>