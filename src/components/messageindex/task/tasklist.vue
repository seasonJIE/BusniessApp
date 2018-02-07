<template>
	<div class="tasklist">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>任务</span></a>
			<h1 class="mui-title">MES</h1>
			<a class="right text">已办</a>
		</header>
		<div class="list">
			<div class="item" v-for="item in itemlist" :class="{active:item.isSelected}">
				<p><span class="left">卓蔚</span><span class="right">10:00</span></p>
				<p>关于中心代码库更新的通知</p>
				<p>信息中心运维科</p>
				<i class="mui-icon mui-icon-checkmarkempty" @click="itemselected(item)"></i>
			</div>
		</div>
		<div class="bottom" v-if="hasSelected">
			<span>同意</span>
			<span>退回</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TaskList',
		data() {
			return {
				hasSelected:false,
				itemlist: [{name:'1'}, {name:'1'}]
			}
		},
		methods: {
			itemselected(item) {
				if(typeof item.isSelected == 'undefined') {
					this.$set(item, 'isSelected',false);
				}
				item.isSelected = !item.isSelected;
				this.showController();
			},
			showController(){
				this.hasSelected = false;
				this.itemlist.forEach((item)=>{
					item.isSelected==true?this.hasSelected=true:'';
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.tasklist {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		.list {
			margin-top: 44px;
			.item {
				position: relative;
				padding: 0.6rem 2rem 0.6rem 0.8rem;
				background: #fff;
				border-bottom: 1px solid #ddd;
				text-align: left;
				line-height: 1.5;
				p {
					margin:0.1rem 0;
					overflow: hidden;
					font-size: $normal-textsize;
					color: $black-textcolor;
				}
				.left {
					float: left;
					font-size: $normal-textsize;
					color: $black-textcolor;
				}
				.right {
					float: right;
					font-size: $min-textsize;
					color: $grey-textcolor;
				}
				p:nth-child(3) {
					color: $grey-textcolor;
				}
				i {
					position: absolute;
					top: 50%;
					right: 0.6rem;
					margin-top: -0.4rem;
					height: 0.8rem;
					line-height: 0.8rem;
					text-align: center;
					width: 0.8rem;
					border: 1px solid #ddd;
					border-radius: 1rem;
					font-size: 1rem;
					color: #fff;
				}
				i:before {
					position: absolute;
					left: 50%;
					margin-left: -0.5rem;
				}
				&.active i {
					background: $light-color;
					border-color: $light-color;
				}
			}
		}
		.bottom {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 2.2rem;
			line-height: 2.2rem;
			background: $maincolor;
			color: #fff;
			span {
				display: block;
				width: 40%;
				height: 100%;
				font-size: $normal-textsize;
			}
		}
	}
</style>