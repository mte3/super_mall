<template>
  <div id="cartNull">
    <scroll class="scroll"
            :pull-up-load="true"
            :probe-type="3"
            ref="scroll"
            @pullingUp='LoadMore'>
      <div class="center">
        <van-icon name="cart-o" size="120" color="#ff5777"/>

      </div>
      <div class="center">
        购物车竟然是空的
      </div>
      <div class="center span">在忙也要记得，买点什么犒劳自己呀~</div>
      <div class="center btn" @click="Go">去逛逛</div>
      <cart-recommend ref="recommend"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";
  import CartRecommend from "./CartRecommend";
  export default {
    name: "CartNull",
    components: {
      CartRecommend,
      Scroll,
    },
    data(){
      return {
      }
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    methods: {
      LoadMore() {
        //上拉加载更多
        // this.$refs.recommend.getHomeGoods('sell')

        //重新计数可滑动高度
        this.$refs.scroll.refresh()
      },
      Go() {
        //点击去逛逛跳到首页
        this.$router.replace('/home')
      }
    }
  }
</script>

<style scoped>
  #cartNull {
    width: 100%;
    background-color: #e6e6e6;
  }

  .scroll {
    background-color: #e6e6e6;
    padding: 12px;
    overflow: hidden;
    width: 100%;
    position: absolute;
    height: calc(100% - 138px);
  }

  .center {
    padding-top: 16px;
    width: 100%;
    color: black;
    text-align: center;
  }

  .span {
    font-size: 14px;
    color: grey;
  }

  .btn {
    margin: 16px 0 24px calc(50% - 40px);
    width: 80px;
    text-align: center;
    padding: 8px 12px;
    border: 1px grey solid;
  }
</style>
