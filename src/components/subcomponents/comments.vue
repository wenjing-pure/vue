<template>
  <div class="comments-container">
    <h3 class="title">发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容,最多不超过120个字~" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>


    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="item.id">
        <div class="cmt-title">
          第{{ index+1 }}楼&nbsp;&nbsp;用户：{{ item.use_name ==="undefined"?"匿名用户" : item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dataFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === ""?"这家伙很懒，什么都没说":item.content}}
        </div>
      </div>
    </div>

    <mt-button plain type="danger" size="large" @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>

import { Toast } from 'mint-ui';
export default {
  data(){
    return {
      pageindex:1,
      comments:[],
      msg:''
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments(){
      this.$http.get('api/getcomments/'+ this.id + '?pageindex=' + this.pageindex).then(result =>{
        if(result.body.status ===0){
          this.comments = this.comments.concat(result.body.message)
        }else{
          Toast("获取评论失败")
        }
      })
    },
    loadMore(){
      this.pageindex++
      this.getComments()
    },
    postComment(){
      if(this.msg.trim().length == 0){
        return Toast("评论内容不能为空")
      }
      this.$http.post('api/postcomment/'+ this.id,{ content:this.msg.trim()}).then(result =>{
        if(result.body.status === 0){
          var cmt = { user_name:'匿名用户',add_time:Date.now(),content:this.msg.trim() }
          this.comments.unshift(cmt)
          this.msg = ''
        }
      })
    }
  },
  props:["id"]
}
</script>
<style lang="scss" scoped>
.comments-container{
  .title{
    font-size: 16px;
  }
  textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list{
    .cmt-item{
      font-size: 13px;
      margin-top: 10px;
      .cmt-title{
        line-height: 35px;
        background-color: #cccccc;
      }
      .cmt-body{
        height: 30px;
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>