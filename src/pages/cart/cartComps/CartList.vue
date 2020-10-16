<template>
  <div id="cartList">
    <scroll class="cartList" ref="scroll">
      <cart-list-item v-for="(i,index) in list" :good="i" :index="index" :key="index"/>
    </scroll>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import CartListItem from "./CartListItem";

  import Scroll from "../../../components/common/scroll/Scroll";

  export default {
    name: "CartList",
    components: {
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
