import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引动API文件
import api from './api/http.js'
Vue.use(ElmentUI)
//将API方法绑定到全局
Vue.prototype.$api=api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
