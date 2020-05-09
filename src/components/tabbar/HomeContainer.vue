<template>
  <div class="homeContainer">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 9宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589012510300&di=afca592053bbc519a6a5cabe91669785&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F09%2F20160809144416_vGTFm.jpeg" class="tupian">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1344322074,225081873&fm=26&gp=0.jpg" class="tupian">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3950228163,554757739&fm=26&gp=0.jpg" class="tupian">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1829388529,593193244&fm=26&gp=0.jpg" class="tupian">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3942599547,2142139835&fm=26&gp=0.jpg" class="tupian">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1148804569,2536594750&fm=26&gp=0.jpg" class="tupian">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图的方法
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.lunbotuList = result.body.message;
          //console.log(this.lunbotuList);
        } else {
          Toast("没有找到轮播图");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.homeContainer {
  .mint-swipe {
    height: 200px;
  }
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .mui-grid-view.mui-grid-9{
    background-color: #ffffff;
    border: none;
    .mui-media-body{
      font-size: 13px;
    }
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
    .tupian{
      width: 60px;
      height: 60px;
    }
  }
  
}


</style>