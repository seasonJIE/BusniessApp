import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'  
import VueLazyload from 'vue-lazyload'  
fastclick.attach(document.body);
Vue.config.productionTip = false
Vue.use(VueLazyload,{
	loading:require('assets/wait.png')
});
Vue.prototype.routerto = function (path){
	this.$router.push(path);
}
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
