<template>
	<div class="header">
		<a class="btn left_btn" v-if="typeobj.leftShow" :class="typeobj.leftclassobj"></a>
		<div class="tab">
			<router-link to="/main/messageindex/message" @click.native="btnchange">
				消息<span class="mui-badge" v-if="false">9</span>
			</router-link>
			<router-link to="/main/messageindex/mail" @click.native="btnchange">
				邮箱<span class="mui-badge" v-if="true">9</span>
			</router-link>
			<router-link to="/main/messageindex/task" @click.native="btnchange">
				任务<span class="point" v-if="true"></span>
			</router-link>
			<router-link to="/main/messageindex/addresslist" @click.native="btnchange">
				通讯录<span class="mui-badge" v-if="false">9</span>
			</router-link>
		</div>
		<a class="btn right_btn" v-if="typeobj.rightShow" :class="typeobj.rightclassobj" @click="routerto(typeobj.righturl)"></a>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				typeobj: {},
				message: {
					leftShow: true,
					leftclassobj: {
						search: true
					},
					rightShow: true,
					rightclassobj: {
						plus: true
					}
				},
				mail: {
					leftShow: true,
					leftclassobj: {
						search: true
					},
					rightShow: true,
					rightclassobj: {
						write: true
					},
					righturl:'/main/messageindex/mail/inbox/newmail'
				},
				task: {
					leftShow: false,
					rightShow: false
				},
				addresslist: {
					leftShow: true,
					leftclassobj: {
						search: true
					},
					rightShow: true,
					rightclassobj: {
						addfriend: true
					},
					righturl:'/main/messageindex/addresslist/newfriend'
				},

			}
		},
		mounted(){
			this.btnchange()
		},
		methods: {
			btnchange() {
				switch(this.$route.name) {
					case 'Message':
						this.typeobj = this.message;
						break;
					case 'Task':
						this.typeobj = this.task;
						break;
					case 'Mail':
						this.typeobj = this.mail;
						break;
					case 'AddressList':
						this.typeobj = this.addresslist;
						break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	.header {
		position: absolute;
		z-index: 99;
		overflow: hidden;
		top: 0;
		left: 0;
		padding: 0 0.8rem;
		padding-top:0.9rem;
		height: 2.8rem;
		width: 100%;
		background: $maincolor;
		.tab {
			position: absolute;
			left: 2rem;
			right: 2rem;
			height: 100%;
			list-style: none;
			display: flex;
			justify-content: center;
			align-items: center;
			a {
				position: relative;
				display: inline-block;
				margin: 0 0.5rem;
				height: 100%;
				line-height: 1.9rem;
				/*width: 20%;*/
				font-size: $normal-textsize;
				color: $header-textcolor;
				.mui-badge {
					position: absolute;
					top: 0.25rem;
					right: -0.3rem;
					padding: 0;
					width: 0.7rem;
					height: 0.7rem;
					line-height: 0.7rem;
					color: #fff;
					background: red;
					font-size: 0.5rem;
				}
				.point {
					position: absolute;
					top: 0.5rem;
					right: -0.25rem;
					display: block;
					height: 0.25rem;
					width: 0.25rem;
					background: red;
					border-radius: 0.25rem;
				}
				&.router-link-active {
					color: $header-activetextcolor;
				}
				&.router-link-active:after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 0.1rem;
					background: $header-activetextcolor;
				}
			}
		}
		.btn {
			margin-top: 0.45rem;
			padding: 0.5rem;
			font-size: 1.2rem;
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
			&.write {
				background: url(../../assets/icon/write.png) no-repeat center;
				background-size: 100%;
			}
			&.addfriend {
				background: url(../../assets/icon/addPeople.png) no-repeat center;
				background-size: 100%;
			}
		}
	}
</style>