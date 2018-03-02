<template>
	<div class="addresslist">
		
		<div class="phonelist">
			<div id="list" class="mui-indexed-list" ref="list">
				<div class="mui-indexed-list-search mui-input-row mui-search" style="display: none;">
					<input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索机场">
				</div>
				<div class="mui-indexed-list-bar">
					<a>A</a>
					<a>B</a>
					<a>C</a>
					<a>D</a>
					<a>E</a>
					<a>F</a>
					<a>G</a>
					<a>H</a>
					<a>I</a>
					<a>J</a>
					<a>K</a>
					<a>L</a>
					<a>M</a>
					<a>N</a>
					<a>O</a>
					<a>P</a>
					<a>Q</a>
					<a>R</a>
					<a>S</a>
					<a>T</a>
					<a>U</a>
					<a>V</a>
					<a>W</a>
					<a>X</a>
					<a>Y</a>
					<a>Z</a>
				</div>
				<div class="mui-indexed-list-alert"></div>
				<div class="mui-indexed-list-inner">
					<ul class="mui-table-view">
			<router-link to="/main/messageindex/addresslist/newfriend" tag="li" class="mui-table-view-cell">
				<img src="../../../assets/message/address1.png">
				<span class="left">新的朋友</span>
			</router-link>
			<li class="mui-table-view-cell">
				<img src="../../../assets/message/address2.png">
				<span class="left">我的群聊</span>
			</li>
			<li class="mui-table-view-cell">
				<img src="../../../assets/message/addresslist.png">
				<span class="left">集团通讯录</span>
			</li>
		</ul>
					<div class="mui-indexed-list-empty-alert">没有数据</div>
					<ul class="mui-table-view">
						<!--<li data-group="A" class="mui-table-view-divider mui-indexed-list-group">A</li>
						<li data-value="AKU" data-tags="AKeSu" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/h1.jpg">
							<span class="left">阿三</span>
						</li>
						<li data-value="AKU" data-tags="Aliex" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/h4.jpg">
							<span class="left">安石</span>
						</li>
						<li data-value="AKU" data-tags="AKeSu" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/h3.jpg">
							<span class="left">蔼吸</span>
						</li>
						<li data-value="AKU" data-tags="AKeSu" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/h2.jpg">
							<span class="left">岸本</span>
						</li>-->
						<li data-group="F" class="mui-table-view-divider mui-indexed-list-group">F</li>
						<li data-value="F" data-tags="f" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/fbr.png">
							<span class="left">范本荣</span>
						</li>
						<li data-value="F" data-tags="f" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/fj.png">
							<span class="left">范杰</span>
						</li>
						<li data-group="L" class="mui-table-view-divider mui-indexed-list-group">L</li>
						<li data-value="L" data-tags="Goudan" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/lxy.png">
							<span class="left">栾晓宇</span>
						</li>
						<li data-group="R" class="mui-table-view-divider mui-indexed-list-group">R</li>
						<li data-value="R" data-tags="Goudan" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/lkd.png">
							<span class="left">阮可丹</span>
						</li>
						<li data-group="T" class="mui-table-view-divider mui-indexed-list-group">T</li>
						<li data-value="T" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/tcf.png">
							<span class="left">谈春凤</span>
						</li>
						<li data-value="T" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/ts.png">
							<span class="left">谭琛</span>
						</li>
						<li data-group="W" class="mui-table-view-divider mui-indexed-list-group">W</li>
						<li data-value="W" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/ww.png">
							<span class="left">王玮</span>
						</li>
						<li data-value="W" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/wy.png">
							<span class="left">王跃</span>
						</li>
						<li data-group="Z" class="mui-table-view-divider mui-indexed-list-group">Z</li>
						<li data-value="Z" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/zjj.png">
							<span class="left">周佳杰</span>
						</li>
						<li data-value="Z" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/zw.png">
							<span class="left">卓蔚</span>
						</li>
						<li data-value="Z" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/heads/zyf.png">
							<span class="left">朱亦斐</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import IndexedList from 'static/mui/mui.indexedlist'
	export default {
		name: 'AddressList',
		mounted() {
			this.createIndexedlist();
		},
		methods: {
			createIndexedlist() {
				this.indexlist = new mui.IndexedList(this.$refs.list);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~static/mui/mui.indexedlist";
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.addresslist {
		position: absolute;
		top: $totop;
		bottom: 50px;
		left: 0;
		right: 0;
		.mui-table-view {
			margin:0;
		}
		.phonelist {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			#list {
				height: 100%;
				.mui-indexed-list-bar {
					height: 100% !important;
				}
				.mui-indexed-list-inner {
					height: 100% !important;
				}
				
				.mui-indexed-list-group {
					padding: 0;
					height: 1rem;
					line-height: 1rem;
					font-size: $min-textsize;
					text-align: left;
					text-indent: 0.5rem;
					background: #e8ecef;
					border: none;
				}
				.mui-indexed-list-group:before,.mui-indexed-list-group:after {
					height: 0;
				}
				.mui-indexed-list-bar {
					background: none;
					padding: 0.2rem 0;
					a {
						margin: 0.03rem 0;
						font-size: $min-textsize;
						color: $black-textcolor;
					}
				}
				
			}
		}
	}
</style>