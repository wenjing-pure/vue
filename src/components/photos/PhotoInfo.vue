<template>
  <div class="photoinfo-container">
    <h1>{{ photoinfo.title }}</h1>
    <p class="subtitle">
      <span>添加时间: {{ photoinfo.add_time | dataFormat }}</span>
      <span>点击次数：{{ photoinfo.click }}次</span>
    </p>
    <hr />

    <!-- 缩略图 -->

    <vue-preview :slides="list" class="imgPrev"></vue-preview>

    <!-- 图片内容 -->

    <div class="content">{{ photoinfo.content }}</div>

    <!-- 评论子组件 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import comment from "../subcomponents/comments.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {}, //图片详情
      list: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.geyThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    geyThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.src = item.src;
            item.msrc = item.src;
          });
          this.list = result.body.message;
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>
<style lang="scss">
.photoinfo-container {
  padding: 10px 5px;
  h1 {
    color: #226cff;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
  .subtitle {
    padding-top: 10px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
    clear: both;
  }

  .imgPrev {
  .my-gallery {
    figure {
      float: left;
      margin: 0 10px;
      img {
        width: 100px;
        height: 100px;
        box-shadow: 0 0 8px #999;
      }
    }
  }
}
}


</style>