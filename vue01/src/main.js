// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue框架
import Vue from 'vue'
//引入根组件
import App from './App'
//引入路由配置
import router from './router'
//引入axios
import axios from 'axios'
//引入 qs
import qs from 'qs'
//引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入 store
import store from './store'
//引入mock(进行数据模拟  模拟后台)
import './mock/index'
// 关闭生产模式下给出的提示
Vue.config.productionTip = false
// Vue.prototype.$http = axios
//把axios挂载到vue上
Vue.prototype.$axios = axios
//全局注册qs  将qs挂载到VUE上
Vue.prototype.$qs = qs
// 声明基础访问地址
axios.defaults.baseURL = '/apis'
//全局引入elementUI
Vue.use(ElementUI)

/* eslint-disable no-new */
//定义实例
new Vue({
  el: '#app',
  store,//注入到框架中
  router, //注入框架中
  components: { App },
  template: '<App/>'
})
