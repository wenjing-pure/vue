<template>
  <div class="newsInfo-container">
    <div class="header">
      <h3>{{ newsInfo.title }}</h3>
      <p>
        <span>发表时间：{{ newsInfo.add_time | dataFormat }}</span>
        <span>点击{{ newsInfo.click }}次</span>
      </p>
    </div>
    
    <div class="content" v-html="newsInfo.content">

    </div>

    <!-- 评论子组件 -->
    <comment-box :id="this.id"></comment-box>

  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import comment from '../subcomponents/comments.vue'

export default {
  data(){
    return {
      id:this.$route.params.id,
      newsInfo:{}
    }
  },
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo(){
      this.$http.get("api/getnew/"+ this.id).then(result =>{
        if(result.body.status === 0){
          this.newsInfo = result.body.message[0]
        }else{
          Toast("获取新闻咨询列表失败")
        }
      })
    }
  },
  components:{
    'comment-box':comment
  }
}
</script>
<style lang="scss" scoped>
  .newsInfo-container{
    padding:0 5px;
    .header{
      font-size:16px;
      h3{
        text-align: center;
        color: red;
        font-weight: 700;
        margin: 15px 0;
      }
      p{
        font-size: 13px;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        color: #226aff;
        border-bottom: 1px solid #ccc;
      }     
    }
    .content{
      img{
        width: 100%;
      }
    }
  }
</style>