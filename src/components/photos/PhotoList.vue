<template>
  <div class="phoptolist-container">
    <!-- 导航条 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id==0 ? 'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in category" :key="item.id" @click="getPhotoListByCateId(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>
		</div>

    <!-- 懒加载 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+ item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>

  </div>
</template>
<script>
// 1.导入 mui 文件
import mui from '../../lib/mui/js/mui.min.js'


export default {
  data(){
    return {
      category:{},
      list:[] // 图片列表
    }
  },
  mounted() {
    // 2.初始化滑动控件
    mui('.mui-scroll-wrapper').scroll({
    	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getAllCategory()
    this.getPhotoListByCateId(0)
  },
  methods: {
    getAllCategory(){
      this.$http.get("api/getimgcategory").then(result =>{
        if(result.body.status === 0){
          this.category = result.body.message
          this.category.unshift({ title:"全部", id:0  })
        }
      })
    },
    getPhotoListByCateId(cateId){
      this.$http.get("api/getimages/" + cateId ).then(result =>{
        if(result.body.status === 0){
          this.list = result.body.message
        }
      })
    }
  },
}
</script>


<style lang="scss" scoped>
.phoptolist-container{
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  overflow-x: scroll;
  *{ 
    touch-action: none; 
  }
  .photo-list{
    padding:10px;
    padding-bottom: 0;
    margin: 0;
    li{
      position: relative;
      margin-bottom: 10px;
      list-style: none;
      background-color: #ccc;
      text-align: center;
      box-shadow: 0 0 6px #999;
      img{
        width: 100%;
        vertical-align: middle;
      }
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .info{
        color: white;
        padding: 0 5px;
        max-height: 85px;
        overflow: hidden;
        position: absolute;
        bottom:0;
        background-color: rgba(0,0,0,.4);
        text-align: left;
        .info-title{
          margin: 0;
          font-size:14px;
        }
        .info-body{
          font-size: 12px;
        }
      }
    } 
  }
}
 

</style>