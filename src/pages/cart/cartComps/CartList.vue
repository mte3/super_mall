<template>
  <div id="cartList">
    <scroll class="cartList">
      <cart-list-item v-for="(i,index) in list" :good="i" :key="index"/>
    </scroll>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import CartListItem from "./CartListItem";

  import Scroll from "../../../components/common/scroll/Scroll";

  export default {
    name: "CartList",
    computed: {
      ...mapGetters({
        list: 'cartList'
      })
    }, components: {
      Scroll,
      CartListItem
    }
  }
</script>

<style scoped>
  .cartList {
    overflow: hidden;
    width: 100%;
    position: absolute;
    height: calc(100% - 93px);
  }
</style>
