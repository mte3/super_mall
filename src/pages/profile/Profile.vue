<template>
  <div id="profile">
    <nav-bar class="myTitle">
      <template v-slot:center>
        我的
      </template>
    </nav-bar>
    <scroll class="scroll"
            :pull-up-load="true"
            :probe-type="3"
            ref="scroll"
            @pullingUp='LoadMore'>
      <pro-mes/>
      <pro-mid/>
      <Cart-recommend/>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";

  import CartRecommend from "../cart/cartComps/CartRecommend";

  import ProMes from "./proComps/ProMes";
  import ProMid from "./proComps/ProMid";

  export default {
    name: "Profile",
    components: {
      NavBar, ProMes, ProMid,Scroll,CartRecommend
    },
    data() {
      return {
        isLogin: true
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
    }
  }
</script>

<style scoped>
#profile{
  height: 100vh;
  width: 100%;
  background-color: #e6e6e6;
}
  .myTitle {
    background-color: #ff5777;
    color: white;
  }
  .scroll{
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: calc(100% - 93px);
  }


</style>
