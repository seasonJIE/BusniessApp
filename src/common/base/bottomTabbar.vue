<template>
	<nav class="bottomTabbar">
		<router-link to="/main/mainindex">
			<div class="notactive">
				<span class="iconfont home"></span>
				<span class="text">首页</span>
			</div>
			<div class="active">
				<span class=" home-icon"></span>
			</div>
		</router-link>
		<router-link to="/main/messageindex">
			<span class="iconfont message">
				<span class="mui-badge">9</span>
			</span>
			<span class="text">消息</span>
		</router-link>
		<a class="saoma" @click="code">
			<span class="iconfont icon-saoma"></span>
		</a>
		<router-link to="/main/found">
			<!--<span class=" iconfont icon-pengyouquan"></span>-->
			<span class=" iconfont penyouquan"></span>
			<span class="text">发现</span>
		</router-link>
		<router-link to="/main/mine">
			<span class=" iconfont mine"></span>
			<span class="text">我的</span>
		</router-link>
	</nav>
</template>

<script>
	export default {
		name: 'BottomTabbar',
		methods: {
			code() {
				if(wmf) {
					wmf.scaner((result)=> {
						if(result=='face'){  //	扫脸
							this.$router.push('/main/codeto/people')
						}else if(result=='F_HYZG_2017000057'){  //扫文件
							this.$router.push('/main/codeto/textfile')
						}else if(result=='6901028076067'){  //香烟产品条形码
							this.$router.push('/main/codeto/product')
						}else if(result=='DE_PCZW00001'){  //设备
							this.$router.push('/main/codeto/equipment')
						}else if(result=='YY_RFID11KY22024B50081110901105154'){  //物料
							this.$router.push('/main/codeto/materiel')
						}else {
							alert(result);
						}
					});
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize.scss";
	.bottomTabbar {
		z-index: 999;
		position: absolute;
		table-layout: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		display: table;
		padding: 0;
		width: 100%;
		height: 50px;
		background: #fff;
		border-top: 1px solid #ddd;
		a {
			display: table-cell;
			overflow: hidden;
			width: 1%;
			height: 50px;
			text-align: center;
			vertical-align: middle;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: #535456;
			&.router-link-active {
				color: #4788b0;
				.penyouquan {
					background: url(../../assets/bottomicon/found_a.png) no-repeat center;
					background-size: 1rem;
				}
				.mine {
					background: url(../../assets/bottomicon/mine_a.png) no-repeat center;
					background-size: 1rem;
				}
				.message {
					background: url(../../assets/bottomicon/message_a.png) no-repeat center;
					background-size: 1rem;
				}
			}
			.text {
				font-size: 11px;
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.iconfont {
				top: 5px;
				width: 24px;
				height: 24px;
				padding-top: 0;
				padding-bottom: 0;
				font-size: 24px;
				position: relative;
				z-index: 20;
				line-height: 1;
				display: inline-block;
				text-decoration: none;
				.mui-badge {
					display: inline-block;
					font-size: 10px;
					line-height: 1.4;
					position: absolute;
					top: -2px;
					left: 100%;
					margin-left: -10px;
					padding: 1px 5px;
					color: #fff;
					background: red;
				}
			}
		}
		a:nth-child(1) {
			.active {
				display: none;
			}
		}
		a:nth-child(1).router-link-active {
			.notactive {
				display: none;
			}
			.active {
				display: flex;
				overflow: initial;
				position: relative;
				justify-content: center;
				align-items: center;
				height: 100%;
				width: 100%;
				.home-icon {
					height: 2rem;
					width: 2rem;
					background: url(../../assets/icon/home-icon.png) no-repeat center;
					background-size: 100%;
				}
			}
		}
		.saoma {
			.icon-saoma {
				margin-top: -10px;
				font-size: 28px;
			}
		}
		.home {
			background: url(../../assets/bottomicon/home.png) no-repeat center;
			background-size: 1rem;
		}
		.penyouquan {
			background: url(../../assets/bottomicon/found.png) no-repeat center;
			background-size: 1rem;
		}
		.mine {
			background: url(../../assets/bottomicon/mine.png) no-repeat center;
			background-size: 1rem;
		}
		.message {
			background: url(../../assets/bottomicon/message.png) no-repeat center;
			background-size: 1rem;
		}
	}
</style>