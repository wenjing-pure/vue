import Vue from 'vue'

// 导入 APP 根组件
import app from './App.vue'

import './lib/mui/css/mui.css'


import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

var vm = new Vue({
  el:'#app',
  render:c=>c(app)
})