<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" :key="item.id">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">{{ item.sell_price }} </span>
          <span class="old">{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{ item.stock_quantity }}</span>
        </p>
      </div>
    </div>
    <mt-button plain size="large" type="danger" @click="addMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      number:1,
      goodslist:[]
    }
  },
  created() {
    this.getGoodslist(1)
  },
  methods: {
    getGoodslist(number){
      this.$http.get("api/getgoods?pageindex=" + number).then(result =>{
        if(result.body.status ===0 ){
          this.goodslist =this.goodslist.concat(result.body.message)
        }
      })
    },
    addMore(){
      this.number++
      this.getGoodslist(this.number)
    }
  },
}
</script>
<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  .goods-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    padding: 2px;
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #999;
    margin: 3px 0;
    .title{
      font-size: 14px;
      font-weight:800;
    }
    img{
      width: 100%;
      vertical-align: middle;
    }
    .info{
      background-color: #eee;
      p{
        margin: 0;
      }
      .price{
        .now{
          color: red;
          font-weight: 700;
          font-size: 16px;
        }
        .old{
          font-size: 12px;
          text-decoration:line-through;
        }
      }
      .sell{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>