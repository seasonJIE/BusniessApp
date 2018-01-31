<template>
	<div class="addresslist">
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
					<div class="mui-indexed-list-empty-alert">没有数据</div>
					<ul class="mui-table-view">
						<li data-group="A" class="mui-table-view-divider mui-indexed-list-group">A</li>
						<li data-value="AKU" data-tags="AKeSu" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">阿斯德</span>
						</li>
						<li data-value="AKU" data-tags="Aliex" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">Aliex</span>
						</li>
						<li data-value="AKU" data-tags="AKeSu" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">阿伏伽德罗</span>
						</li>
						<li data-value="AKU" data-tags="AKeSu" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">阿斯克德</span>
						</li>
						<li data-group="B" class="mui-table-view-divider mui-indexed-list-group">B</li>
						<li data-value="BB" data-tags="BB" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">贝贝</span>
						</li>
						<li data-value="BL" data-tags="Baoluo" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">保罗</span>
						</li>
						<li data-value="BB" data-tags="bb" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">贝贝</span>
						</li>
						<li data-group="G" class="mui-table-view-divider mui-indexed-list-group">G</li>
						<li data-value="GD" data-tags="Goudan" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">古尔丹</span>
						</li>
						<li data-value="GD" data-tags="Goudan" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">古尔丹</span>
						</li>
						<li data-value="GD" data-tags="Goudan" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">古尔丹</span>
						</li>
						<li data-group="X" class="mui-table-view-divider mui-indexed-list-group">X</li>
						<li data-value="XE" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">希尔瓦纳斯</span>
						</li>
						<li data-value="XE" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">希尔瓦纳斯</span>
						</li>
						<li data-value="XE" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">希尔瓦纳斯</span>
						</li>
							<li data-value="XE" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">希尔瓦纳斯</span>
						</li>
						<li data-value="XE" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">希尔瓦纳斯</span>
						</li>
						<li data-value="XE" data-tags="XerWanasi" class="mui-table-view-cell mui-indexed-list-item">
							<img src="../../../assets/head.png">
							<span class="left">希尔瓦纳斯</span>
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
		top: 1.9rem;
		bottom: 50px;
		left: 0;
		right: 0;
		
		.phonelist {
			position: absolute;
			top: 6.6rem;
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
				.mui-indexed-list-bar {
					background: none;
					
					a {
						margin: 0.05rem 0;
						font-size: $min-textsize;
						color: $black-textcolor;
					}
				}
				
			}
		}
	}
</style>