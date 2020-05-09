import VueRouter from 'vue-router'

import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shopcar from './components/tabbar/ShopcarContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/Newslist.vue'
import NewsInfo from './components/news/NewsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes:[
   { path:'/',redirect:'/home' },
   { path:'/home',component:home},
   { path:'/member',component:member},
   { path:'/shopcar',component:shopcar},
   { path:'/search',component:search},
   { path:'/home/newslist',component:NewsList},
   { path:'/home/newslist/:id',component:NewsInfo }
  ],
  linkActiveClass:'mui-active'
})

export default router