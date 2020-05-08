import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'

//1.2 安装路由
Vue.use(VueRouter)

// 导入 APP 根组件
import app from './App.vue'

import './lib/mui/css/mui.css'   
import './lib/mui/css/icons-extra.css'

// 安装并导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


import { Header ,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.http.options.root = 'http://www.liulongbin.top:3005/'

// 1.3 导入自己的 router.js 模块
import router from './router.js'

var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  // 1.4 挂载路由
  router
})