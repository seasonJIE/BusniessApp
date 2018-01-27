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
		<div class="newscontent">
			<div class="one_news">
				<p>热点</p>
				<img src="../../../assets/tu.jpg">
			</div>
			<div class="one_news">
				<p>热点</p>
				<img src="../../../assets/tu.jpg">
				<p class="title">走访慰问高温岗位一线职工</p>
				<p class="content">入夏以来，连续高温，为进一步对高温酷暑环境持续下入夏以来，连续高温，为进一步对高温酷暑环境持续下</p>
			</div>
			<div class="one_news">
				<p>热点</p>
				<img src="../../../assets/tu.jpg">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'News'
	}
</script>

<style scoped lang="scss">
@import "~common/scss/baseColorSize";
	.news {
		margin-top: 38px;
		
		.top_tab {
			overflow: hidden;
			height: 4.2rem;
			width: 100%;
			background: #fff;
			
			p {
				margin:0.2rem 0 0 0;
				font-size: $min-textsize;
				color: $black-textcolor;
				text-align: left;
				text-indent: 0.5rem;
			}
			.tabcontent {
				padding:0 0.2rem 0.2rem 0.2rem;
				width: auto;
				overflow: scroll;
				white-space:nowrap;
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
			padding-bottom: 50px;

			
			.one_news {
				margin: 0.2rem 0;
				padding: 0.5rem;
				background: #fff;
				
				p {
					margin: 0;
					margin-bottom: 0.2rem;
					text-align: left;
					font-size: $min-textsize;
					color: $black-textcolor;
				}
				.title {
					margin: 0;
					font-size: $normal-textsize;
					color:$black-textcolor;
				}
				.content {
					margin: 0;
					overflow: hidden;
					white-space: nowrap;
					text-overflow:ellipsis;
					font-size: $small-textsize;
					color:$grey-textcolor;
					
					
				}
				img {
					width: 100%;
					height: 6.2rem;
				}
			}
		}
	}

</style>