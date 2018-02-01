<template>
	<div class="scan">
		<header id="header" class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="closeCode"></a>
		</header>
		<div id="bcid">
			<div style="height:40%"></div>
			<p class="tip">...载入中...</p>
		</div>
		<span>123</span>
		<!--<div class="bottom">
			<router-link to="/main/mine/mycode" class="minecode" tag="span">我的名片</router-link>
			<router-link to="/main/code/code/code" tag="span" class="tocode">扫一扫</router-link>
		</div>-->
	</div>
</template>

<script type='text/ecmascript-6'>
	var scan = null;

	export default {
		data() {
			return {
				groupId: '',
				cdId: '',
				cdName: '',

				codeUrl: '',
			}
		},

		mounted: function() {
			this.startRecognize();
			this.startScan();
		},
		methods: {
			//创建扫描控件
			startRecognize() {
				let that = this;
				if(!window.plus) return;
				scan = new plus.barcode.Barcode('bcid');
				scan.onmarked = onmarked;

				function onmarked(type, result, file) {
					switch(type) {
						case plus.barcode.QR:
							type = 'QR';
							break;
						case plus.barcode.EAN13:
							type = 'EAN13';
							break;
						case plus.barcode.EAN8:
							type = 'EAN8';
							break;
						default:
							type = '其它' + type;
							break;
					}
					result = result.replace(/\n/g, '');
					that.codeUrl = result;
					that.closeScan();
					that.$router.push({
						path: '/serviceDesk',
						query: {
							id: that.groupId,
							cdId: that.cdId,
							codeUrl: that.codeUrl
						}
					});
				}
			},
			//开始扫描
			startScan() {
				if(!window.plus) return;
				scan.start();
			},
			//关闭扫描
			cancelScan() {
				if(!window.plus) return;
				scan.cancel();
			},
			//关闭条码识别控件
			closeScan() {
				if(!window.plus) return;
				scan.close();
			},
			closeCode() {
				this.closeScan();
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~common/scss/baseColorSize";
	@import "~common/scss/resetMui";
	.scan {
		height: 100%;
		background: #000;
		#header {
			box-shadow:none;
		}
		#bcid {
			width: 100%;
			position: absolute;
			top: 2.2rem;
			bottom: 0;
			text-align: center;
			color: #fff;
		}
		/*.bottom {
			position: absolute;
			bottom: 1.6rem;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			
			span {
				display: block;
				padding-top:1.9rem;
				width: 40%;
				height: 3rem;
				color: #fff;
				font-size: 0.75rem;
			}
			span.minecode {
				background: url(../assets/icon/code.png) no-repeat center 0.7rem;
				background-size: 1.2rem;
			}
			span.tocode {
				background: url(../assets/icon/tocode.png) no-repeat center 0.8rem;
				background-size: 0.9rem;
			}
		}*/
	}
</style>