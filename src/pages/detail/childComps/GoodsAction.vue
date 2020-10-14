<template>
  <div id="goodsAction">
    <div class="left"
         :class="{mid:index ===1}"
         @click="Handel(index)"
         v-for="(i,index) in actionLeft">
      <img :src="i.icon">
      <div>{{i.title}}</div>
    </div>
    <div class="box addCart" @click="addCart">加入购物车</div>
    <div class="box buy" @click="Buy">立即购买</div>
  </div>
</template>

<script>
  import shop from '../../../assets/img/detail/shop.png'
  import customer from '../../../assets/img/detail/customer.png'
  import collection from '../../../assets/img/detail/collection.png'
  import isHandel from '../../../assets/img/detail/ishandel.png'

  export default {
    name: "GoodsAction",
    components: {},
    data() {
      return {
        actionLeft: [
          {icon: shop, title: '店铺',},
          {icon: customer, title: '客服',},
          {icon: collection, title: '收藏',},
        ],
        isCollection: false
      }
    },
    methods: {
      Handel(index) {
        switch (index) {
          case 0:
            //点击店铺
            console.log(this.actionLeft[index].title + "被点击");
            break
          case 1:
            //点击客服
            console.log(this.actionLeft[index].title + "被点击");
            break
          case 2:
            //点击收藏
            console.log(this.actionLeft[index].title + "被点击");
            this.isCollection = !this.isCollection;
            break
        }
        if (this.isCollection) {
          this.actionLeft[2].icon = isHandel;
          this.actionLeft[2].title = '已收藏'
        } else {
          this.actionLeft[2].icon = collection;
          this.actionLeft[2].title = '收藏'
        }
      },

      addCart() {
        //点击购物车
        this.$emit('addCart')
      },
      Buy() {
        //点击立即购买
        console.log('立即购买')
      },
    }
  }
</script>

<style scoped>
  #goodsAction {
    background-color: white;
    height: 49px;
    display: flex;
  }

  .mid {
    border-left: 1px solid #d4ccc6;
    border-right: 1px solid #d4ccc6;
  }

  .left {
    padding-top: 8px;
    font-size: 12px;
    text-align: center;
    flex: 1;
  }

  .left img {
    margin-bottom: 2px;
    width: 18px;
    height: 18px;
  }

  .box {
    flex: 2;
    line-height: 49px;
    font-size: 16px;
    text-align: center;
  }

  .addCart {
    color: red;
    background-color: #ff8198;

  }

  .buy {
    background-color: #ff5777;
    color: white;

  }

</style>
