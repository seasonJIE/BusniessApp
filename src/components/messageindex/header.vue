<template>
	<div class="header">
		<a class="btn left_btn search"></a>
		<div class="tab">
			<router-link to="/main/messageindex/message">
				消息<span class="mui-badge" v-if="false">9</span>
			</router-link>
			<router-link to="/main/messageindex/mail">
				邮箱<span class="mui-badge" v-if="true">9</span>
			</router-link>
			<router-link to="/messageindex/message">
				任务<span class="mui-badge" v-if="false">9</span>
			</router-link>
			<router-link to="/messageindex/message">
				通讯录<span class="mui-badge" v-if="false">9</span>
			</router-link>
		</div>
		<a class="btn right_btn plus"></a>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.header {
		position: fixed;
		z-index:99;
		overflow: hidden;
		top: 0;
		left: 0;
		padding:0 10px;
		height: 38px;
		width: 100%;
		background: $maincolor;
		.tab {
			position: absolute;
			left: 40px;
			right: 40px;
			height: 100%;
			list-style: none;
			display: flex;
			justify-content: center;
			align-items: center;
			a {
				position: relative;
				display:inline-block;
				margin: 0 0.5rem;
				height: 100%;
				line-height: 38px;
				/*width: 20%;*/
				font-size: $normal-textsize;
				color: #fff;
				.mui-badge {
					position: absolute;
					top: 5px;
					right: -0.3rem;
					padding: 0;
					width: 14px;
					height: 14px;
					line-height: 14px;
					color: #fff;
					background: red;
					font-size: 10px;
				}
				&.router-link-active {
					color: #05c3f9;
				}
				&.router-link-active:after {
					content: '';
					position: absolute;
					bottom: 0;
					left:0;
					width: 100%;
					height: 2px;
					background: #05c3f9;
				}
			}
		}
		.btn {
			margin-top: 9px;
			padding: 10px;
			font-size: 24px;
			position: relative;
			z-index: 20;
			&.left_btn {
				float: left;
			}
			&.right_btn {
				float: right;
			}
			&.plus {
				background: url(../../assets/icon/plus-icon.png) no-repeat center;
				background-size: 100%;
			}
			&.search {
				background: url(../../assets/icon/message-search.png) no-repeat center;
				background-size: 100%;
			}
		}
	}
</style>