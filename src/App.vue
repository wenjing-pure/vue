<template>
  <div class="app-container">

    <!-- header -->
    <mt-header fixed title="黑马程序员.Vue项目"></mt-header>

    <!-- 路由区域 -->1
		<transition>
			<router-view></router-view>
		</transition>

    // wj-test1
    // wj-test3
    <!-- footer 区域 -->
    // test2
    //1
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>



  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
 .app-container{
   padding-top: 40px;
   padding-bottom: 50px;
	 overflow: hidden;
 }

 .v-enter{
	 opacity: 0;
	 transform: translateX(100%);
 }
 .v-leave-to{
	 opacity: 0;
	 transform: translateX(-100%);
	 position: absolute;
 }
 .v-enter-active,
 .v-leave-active{
	 transition: all 0.4s ease;
 }

.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mint-header{
  z-index: 999;
}
</style>