<template>
	<div class="enter">
		<img src="../assets/logo.png" />
		<input type="text" />
		<input class="password" type="password" />
		<a>忘记密码</a>
		<button @click="enter">登录</button>
		<a class="renew" @click="renew">强制更新</a>
	</div>
</template>

<script>
	export default {
		name: 'Enter',
		mounted(){
			
			this.$nextTick(() => {});
		},
		methods:{
			enter() {
				this.$router.push('/main');
			},
			renew(){
				wmf.localAppUpdate();
			}
		}
	}
</script>

<style scoped lang="scss">
.renew {
	position: absolute;
	bottom: 1rem;
	right: 0.8rem;
	color: #fff;
	font-size: 0.6rem;
}
	.enter {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0 1.5rem;
		padding-top: 0.9rem;
		background: url(../assets/enter_bg.jpg) top center;
		background-size: 100%;
		img {
			margin: 1.5rem auto;
			height: 2rem;
			width: 6rem;
		}
		input {
			margin-bottom: 0.8rem;
			padding-left: 1.8rem;
			width: 100%;
			height: 1.6rem;
			border-radius: 0.2rem;
			background: url(../assets/icon/usename.png) no-repeat 3% center #fff;
			background-size: 0.9rem;
		}
		.password {
			margin-bottom: 0.2rem;
			background: url(../assets/icon/password.png) no-repeat 3% center #fff;
			background-size: 0.9rem;
		}
		a {
			margin-bottom: 1.4rem;
			display: block;
			font-size: 0.6rem;
			text-align: right;
			color: #869ba7;
			text-decoration: underline;
		}
		button {
			width: 100%;
			height: 1.6rem;
			background: none;
			color: #fff;
			font-size: 0.7rem;
			border: 2px solid #3b98ad;
			border-radius: 1rem;
		}
	}
</style>