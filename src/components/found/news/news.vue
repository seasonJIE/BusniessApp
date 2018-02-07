<template>
	<div class="news">
		<div class="top_tab">
			<div class="tabcontent">
				<a class="item"><span>新闻</span></a>
				<a class="item"><span>公告</span></a>
				<a class="item"><span>领导讲话</span></a>
				<a class="item"><span>政策/法规</span></a>
				<a class="item"><span>烟叶报表</span></a>
				<a class="item"><span>活动</span></a>
			</div>
		</div>
		<div class="wrapper" ref="wrapper">
			<div class="newscontent">
				<div class="one_news">
					<img src="../../../assets/1.jpg">
					<p class="title">沪连烟草“双培”合作交流干部座谈会召开</p>
					<p class="tip"><span class="left">热点</span><span class="right">1小时前</span></p>
				</div>

				<div class="item">
					<div class="textcontent">
						<div>
							<p class="title">上海烟草再次向市慈善基金会捐赠1000万元</p>
							<p class="tip"><span class="left">集团新闻</span><span class="right">2小时前</span></p>
						</div>
					</div>
					<img class="right" src="../../../assets/2.jpg" />
				</div>
				<div class="item">
					<div class="textcontent">
						<div>
							<p class="title">沪连烟草"双培"合作交流干部座谈会在大连召开</p>
							<p class="tip"><span class="left">热点</span><span class="right">1小时前</span></p>
						</div>
					</div>
					<img class="right" src="../../../assets/3.jpg" />
				</div>
				<div class="simple">
					<p class="title">集团公司新版外部门户网站正式上线</p>
					<p class="tip">
						<span class="gonggao">公告</span>
						<span class="left">企业</span>
						<span class="right">3小时前</span>
					</p>
				</div>
				<div class="simple">
					<p class="title">上海烟草浦东科技创新园区建设项目（北地块）绿化景观工程中标公示 </p>
					<p class="tip">
						<span class="gonggao">公告</span>
						<span class="left">招投标</span>
						<span class="right">3小时前</span>
					</p>
				</div>
				<div class="one_news">
					<img src="../../../assets/5.jpg">
					<p class="title">沪连烟草“双培”合作交流干部座谈会召开</p>
					<p class="tip"><span class="left">集团新闻</span><span class="right">3小时前</span></p>
				</div>
				<div class="item">
					<div class="textcontent">
						<div>
							<p class="title">上海烟草组织开展时尚创意青年头脑风暴活动 </p>
							<p class="tip"><span class="left">集团新闻</span><span class="right">4小时前</span></p>
						</div>
					</div>
					<img class="right" src="../../../assets/6.jpg" />
				</div>
				<div class="simple">
					<p class="title">上海烟草集团有限责任公司2018年博士后招聘信息</p>
					<p class="tip">
						<span class="gonggao">公告</span>
						<span class="left">人事招聘</span>
						<span class="right">5小时前</span>
					</p>
				</div>
				<div class="item">
					<div class="textcontent">
						<div>
							<p class="title">京津沪三地员工同升一面旗、共唱一首歌、共筑“中华梦”</p>
							<p class="tip"><span class="left">集团</span><span class="right">1小时前</span></p>
						</div>
					</div>
					<img class="right" src="../../../assets/0.jpg" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'News',
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {
					click: true
				})
			})
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.wrapper {
		z-index: 1;
		position: absolute;
		top: 5.7rem;
		bottom: 50px;
		width: 100%;
	}
	
	.news {
		margin-top: 1.9rem;
		.top_tab {
			position: relative;
			z-index: 2;
			overflow: hidden;
			height: 3.8rem;
			width: 100%;
			background: #fff;
			box-shadow: 0px 2px 5px #ddd;
			p {
				margin: 0.2rem 0 0 0;
				font-size: $min-textsize;
				color: $black-textcolor;
				text-align: left;
				text-indent: 0.5rem;
			}
			.tabcontent {
				padding: 0.55rem 0.2rem 0.8rem 0.2rem;
				width: auto;
				overflow: scroll;
				white-space: nowrap;
				font-size: 0;
				.item {
					position: relative;
					margin: 0.2rem 0.25rem;
					overflow: hidden;
					display: inline-block;
					width: 3.2rem;
					height: 2.3rem;
					line-height: 2.3rem;
					text-align: center;
					background: url(../../../assets/news/news_bg1.png) no-repeat center;
					border-radius: 0.3rem;
					color: #fff;
					font-size: $small-textsize;
					span {
						position: relative;
						z-index: 2;
					}
					&:nth-child(2) {
						background: url(../../../assets/news/news_bg2.png) no-repeat center;
						background-size: 100%;
					}
					&:nth-child(3) {
						background: url(../../../assets/news/news_bg3.png) no-repeat center;
						background-size: 10rem;
					}
					&:nth-child(4) {
						background: url(../../../assets/news/news_bg4.png) no-repeat center;
						background-size: 10rem;
					}
					&:nth-child(5) {
						background: url(../../../assets/news/news_bg5.png) no-repeat center;
						background-size: 10rem;
					}
				}
				
			}
		}
		.newscontent {
			overflow: hidden;
			p {
				margin: 0;
				padding: 0 0.75rem;
				overflow: hidden;
				text-align: left;
				font-size: $min-textsize;
				color: $black-textcolor;
			}
			.tip {
				margin-top: 0.3rem;
				color: $grey-textcolor;
				font-size: $min-textsize;
			}
			.title {
				margin: 0;
				line-height: 1.3;
				font-size: $large-textsize;
				color: $black-textcolor;
			}
			.one_news {
				overflow: hidden;
				padding-bottom: 0.6rem;
				background: #fff;
				border-bottom: 1px solid #ddd;
				img {
					width: 100%;
					height: 7.5rem;
				}
				.title {
					margin-top: 0.2rem;
					text-align: justify;
				}
			}
			.item {
				position: relative;
				margin: 0;
				padding: 0.6rem 0.75rem;
				overflow: hidden;
				background: #fff;
				border-bottom: 1px solid #ddd;
				p {
					padding: 0;
					text-align: justify;
				}
				.textcontent {
					position: absolute;
					display: flex;
					align-items: center;
					left: 0.75rem;
					top: 0.5rem;
					bottom: 0.45rem;
					right: 7rem;
					text-align: justify;
					>div {
						overflow: hidden;
						width: 100%;
					}
					.title {
						display: -webkit-box !important;
						overflow: hidden;
						text-overflow: ellipsis;
						word-break: break-all;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
					}
				}
				img {
					height: 4rem;
					width: 5.8rem;
				}
			}
			.simple {
				padding: 0.5rem 0.75rem;
				background: #fff;
				border-bottom: 1px solid #ddd;
				p {
					padding: 0;
				}
				.gonggao {
					margin-top: 0.1rem;
					float: left;
					margin-right: 0.3rem;
					/*display: inline-block;*/
					padding: 0 0.2rem;
					height: 0.7rem;
					line-height: 0.7rem;
					float: left;
					color: red;
					font-size: 0.45rem;
					border: 1px solid red;
					border-radius: 0.2rem;
				}
			}
		}
	}
</style>