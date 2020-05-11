import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'

//1.2 安装路由
Vue.use(VueRouter)

import moment from 'moment'

// 定义全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})



// 导入 APP 根组件
import app from './App.vue'

import './lib/mui/css/mui.css'   
import './lib/mui/css/icons-extra.css'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'

// 安装并导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


// 缩略图
import VuePreview from'vue-preview'
Vue.use(VuePreview)

Vue.http.options.root = 'http://www.liulongbin.top:3005/'
Vue.http.options.emulateJSON = true

// 1.3 导入自己的 router.js 模块
import router from './router.js'

var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  // 1.4 挂载路由
  router
})