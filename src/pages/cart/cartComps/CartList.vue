<template>
  <div id="cartList">
    <scroll class="cartList"
            :pull-up-load="true"
            :probe-type="3"
            ref="scroll"
            @pullingUp='LoadMore'>
      <cart-list-item v-for="(i,index) in list" :good="i" :index="index" :key="index"/>

      <cart-recommend ref="recommend"/>
    </scroll>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import CartListItem from "./CartListItem";

  import Scroll from "../../../components/common/scroll/Scroll";

  import CartRecommend from "./CartRecommend";

  export default {
    name: "CartList",
    components: {
      CartRecommend,
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters({
        list: 'cartList'
      })
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    methods:{
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
  .cartList {
    background-color: #e6e6e6;
    padding: 12px;
    overflow: hidden;
    width: 100%;
    position: absolute;
    height: calc(100% - 138px);
  }

</style>
