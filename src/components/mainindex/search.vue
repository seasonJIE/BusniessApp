<template>
	<div class="search_div">
		<div class="top_search">
			<input type="text" placeholder="搜索"/>
			<a class="clear"></a>
			<a class="clear"></a>
			<router-link class="cancel" to="/main">取消</router-link>
		</div>
		<div class="search_content">
			<div class="notSearch">
				<p>搜索指定内容</p>
				<ul>
					<li>新闻</li>
					<li>新闻</li>
					<li>新闻</li>
					<li>新闻</li>
					<li>新闻</li>
					<li>新闻</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name:'search'
	}
</script>

<style scoped lang="scss">
@import "~common/scss/baseColorSize";
	.search_div {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		
		.top_search {
			position:fixed;
			display: flex;
			padding:10px;
			overflow: hidden;
			height: 44px;
			width: 100%;
			background: #f1f4f5;
			border-bottom: 1px solid #e3e6e6;
			
			input {
				padding: 0;
				padding-left: 1.4rem;
				margin: 0;
				margin-right: 0.5rem;
				height: 22px;
				line-height: 22px;
				font-size: 10px;
				border: 1px solid #d0d4d5;
				border-radius: 0.8rem;
				color: $grey-textcolor;
				background: url(../../assets/icon/search.png) no-repeat 0.3rem center #fff;
				background-size: 20px;
			}
			.cancel {
				display: block;
				width: 1.5rem;
				height: 22px;
				line-height: 22px;
				font-size: $small-textsize;
				color: #05c3f9;
			}
			.clear {
				position: absolute;
				display: block;
				top: 14px;
				right: 2.6rem;
				height: 14px;
				width: 14px;
				background: url(../../assets/icon/del.png) no-repeat center;
				background-size: 100%;
			}
		}
		.search_content {
			margin-top: 44px;
			overflow: hidden;
			background: #fff;
			
			.notSearch {
				p {
					margin: 2rem;
					font-size: $normal-textsize;
					color:$grey-textcolor;
				}
				ul {
					margin: auto;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					width: 70%;
					list-style: none;
					
					li {
						margin-bottom: 1rem;
						width: 33.33%;
						font-size: $normal-textsize;
						color: #05c3f9;
						
						&:nth-child(3n+2) {
							border: 1px solid #ddd;
							border-bottom: none;
							border-top: none;
						}
					}
				}
			}
		}
	}
</style>