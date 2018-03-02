<template>
	<div class="mycode">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		</header>
		<div class="code_div">
			<div class="top">
				<img class="left" src="../../assets/head.png" />
				<div class="right">
					<p class="name">卓尉</p>
					<p>上海烟草集团有限责任公司</p>
					<p>信息中心运维科&nbsp;&nbsp;科长</p>
				</div>
			</div>
			<img class="code" src="../../assets/code.jpg" />
			<p class="text">扫一扫获取我的名片信息</p>
			<!--<p class="text">获取我的名片信息</p>-->
		</div>
		<div class="bottom">
			<router-link to="/main/mine/mycode" class="minecode" tag="span">我的名片</router-link>
			<span class="tocode" @click="code">扫一扫</span>
		</div>
		<div class="codewait" v-if="wait">
			<div>
				<p>识别中...</p>
				<span></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MyCode',
		data(){
			return{
				wait:false
			}
		},
		methods: {
			code() {
				if(wmf) {
//					打开等待画面
					this.wait = true;
					wmf.scaner((result) => {
						if(result == 'sys:cancel') {
//							关闭等待画面
							this.wait = false;
							wmf.closeScaner();
						} else {
							wmf.closeScaner();
//							跳转页面
							setTimeout(() => {
								if(result == 'face') { //	扫脸
									this.$router.push('/main/codeto/people')
								} else if(result == 'F_HYZG_2017000057') { //扫文件
									this.$router.push('/main/codeto/textfile')
								} else if(result == '6901028076067') { //香烟产品条形码
									this.$router.push('/main/codeto/product');
								} else if(result == 'DE_PCZW00001') { //设备
									this.$router.push('/main/codeto/equipment')
								} else if(result == 'YY_RFID11KY22024B50081110901105154') { //物料
									this.$router.push('/main/codeto/materiel')
								} else {
									alert(result);
								}
							}, 100);
						}
					});

				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	#header {
		background: none;
		box-shadow: none;
		.mui-action-back {
			color: $header-activetextcolor;
		}
	}
	.mui-pull-left {
		padding: 1rem !important;
		padding-top: 0.3rem !important;
	}
	.mycode {
		background: url(../../assets/enter_bg.jpg) center;
		background-size: 100%;
		.code_div {
			position: absolute;
			top: 3.2rem;
			left: 1rem;
			right: 1rem;
			padding: 0.8rem;
			height: 18.5rem;
			background: #fff;
			border-radius: 1rem;
			box-shadow: 0px 6px 6px #333;
			.top {
				display: flex;
				overflow: hidden;
				text-align: left;
				.left {
					margin-right: 0.5rem;
					width: 2.5rem;
					height: 2.5rem;
					background: #ddd;
				}
				.right {
					font-size: $small-textsize;
					color: $grey-textcolor;
					.name {
						font-size: $normal-textsize;
						color: $black-textcolor;
					}
				}
				p {
					margin: 0;
					line-height: 1.4;
					font-size: $min-textsize;
					color: $grey-textcolor;
				}
			}
			.code {
				margin: 1.5rem auto;
				height: 7.8rem;
				width: 7.8rem;
			}
			.text {
				margin: 0.2rem;
				font-size: $normal-textsize;
				color: $grey-textcolor;
			}
		}
		.bottom {
			position: absolute;
			bottom: 1.6rem;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			span {
				display: block;
				padding-top: 1.9rem;
				width: 40%;
				height: 3rem;
				color: #fff;
				font-size: 0.75rem;
			}
			span.minecode {
				background: url(../../assets/icon/code.png) no-repeat center 0.7rem;
				background-size: 1.2rem;
			}
			span.tocode {
				background: url(../../assets/icon/tocode.png) no-repeat center 0.8rem;
				background-size: 0.9rem;
			}
		}
	}
	.codewait {
		position: absolute;
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		p {
			font-size: $normal-textsize;
			color: $black-textcolor;
		}
		span {
			margin: auto;
			display: block;
			height: 1.6rem;
			width: 1.6rem;
			background: url(../../assets/icon/wait-icon.png) no-repeat center;
			background-size: 100%;
			animation: turnround 1s linear infinite;
		}
	}
	
	@keyframes turnround {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>