<template>
	<div class="news">
		<div class="top_tab">
			<p>分类</p>
			<div class="tabcontent">
				<a class="item"><span>新闻</span></a>
				<a class="item"><span>新闻</span></a>
				<a class="item"><span>新闻</span></a>
				<a class="item"><span>新闻</span></a>
				<a class="item"><span>新闻</span></a>
				<a class="item"><span>新闻</span></a>
			</div>
		</div>
		<div class="wrapper" ref="wrapper">
		<div class="newscontent">
			<div class="one_news">
				<img src="../../../assets/tu.jpg">
				<p class="title">走访慰问高温岗位一线职工</p>
				<p class="tip"><span class="left">热点</span><span class="right">1小时前</span></p>
			</div>

			<div class="item">
				<div class="textcontent">
					<p class="title">走访慰问高温岗位一线职工,上烟向慈善机构捐赠3亿</p>
					<p class="tip"><span class="left">热点</span><span class="right">1小时前</span></p>
				</div>
				<img class="right" src="../../../assets/tu.jpg" />
			</div>
			<div class="item">
				<div class="textcontent">
					<p class="title">走访慰问高温岗位一线职工,上烟向慈善机构捐赠3亿</p>
					<p class="tip"><span class="left">热点</span><span class="right">1小时前</span></p>
				</div>
				<img class="right" src="../../../assets/tu.jpg" />
			</div>
			<div class="one_news">
				<img src="../../../assets/tu.jpg">
				<p class="title">走访慰问高温岗位一线职工</p>
				<p class="tip"><span class="left">热点</span><span class="right">1小时前</span></p>
			</div>
			<div class="simple">
				<p class="title">集团公司新版外部门户网站正式上线</p>
				<p class="tip">
					<span class="gonggao">公告</span>
					<span class="left">企业</span>
					<span class="right">3小时前</span>
				</p>
			</div>
			<div class="item">
				<div class="textcontent">
					<p class="title">走访慰问高温岗位一线职工,上烟向慈善机构捐赠3亿</p>
					<p class="tip"><span class="left">热点</span><span class="right">1小时前</span></p>
				</div>
				<img class="right" src="../../../assets/tu.jpg" />
			</div>
			<div class="simple">
				<p class="title">集团公司新版外部门户网站正式上线</p>
				<p class="tip">
					<span class="gonggao">公告</span>
					<span class="left">企业</span>
					<span class="right">3小时前</span>
				</p>
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
				this.scroll = new BScroll(this.$refs.wrapper, {})
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
		top: 6.2rem;
		bottom: 50px;
		width: 100%;
	}
	.news {
		margin-top: 1.9rem;
		.top_tab {
			position: relative;
			z-index: 2;
			overflow: hidden;
			height: 4.2rem;
			width: 100%;
			background: #fff;
			box-shadow:0px 2px 5px #ddd;
			p {
				margin: 0.2rem 0 0 0;
				font-size: $min-textsize;
				color: $black-textcolor;
				text-align: left;
				text-indent: 0.5rem;
			}
			.tabcontent {
				padding: 0 0.2rem 0.8rem 0.2rem;
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
					background: url(../../../assets/tu.jpg) no-repeat center;
					border-radius: 0.3rem;
					color: #fff;
					font-size: $normal-textsize;
					span {
						position: relative;
						z-index: 2;
					}
				}
				.item:after {
					content: '';
					z-index: 1;
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: #000;
					opacity: 0.4;
					border-radius: 0.3rem;
				}
			}
		}
		.newscontent {
			overflow: hidden;
			p {
				margin: 0;
				padding: 0 0.5rem;
				overflow: hidden;
				text-align: left;
				font-size: $min-textsize;
				color: $black-textcolor;
			}
			.tip {
				margin-top: 0.2rem;
				color: $grey-textcolor;
				font-size: $min-textsize;
			}
			.title {
				margin: 0;
				font-size: $normal-textsize;
				color: $black-textcolor;
			}
			.one_news {
				margin: 0.2rem 0;
				overflow: hidden;
				background: #fff;
				img {
					width: 100%;
					height: 7.5rem;
				}
			}
			.item {
				position: relative;
				margin: 0.2rem 0;
				padding: 0.5rem;
				overflow: hidden;
				height: 4.4rem;
				background: #fff;
				p {
					padding: 0;
				}
				.textcontent {
					position: absolute;
					left: 0.4rem;
					top: 0.4rem;
					bottom: 0.4rem;
					right:7rem ;
				}
				img {
					height: 3.6rem;
					width: 5.8rem;
				}
			}
			.simple {
			    margin: 0.2rem 0;
   			 	padding: 0.4rem;
				background: #fff;
				p {
					padding: 0;
				}
				.gonggao {
					margin-right: 0.3rem;
					display: inline-block;
					padding:0 0.2rem;
					height: 0.8rem;
					line-height: 0.7rem;
					float: left;
					color: red;
					font-size: 0.4rem;
					border: 2px solid red;
					border-radius: 0.2rem;
				}
			}
		}
	}
</style>