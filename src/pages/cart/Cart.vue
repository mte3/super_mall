<template>
  <div id="cart">
<!--    导航-->
    <nav-bar class="title">
      <template v-slot:center>
        <div id="cartTitle">购物车({{length}})
        </div>
      </template>
    </nav-bar>

<!--    商品列表-->
    <cart-list/>

<!--    底部汇总-->

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./cartComps/CartList";

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList
    },
    computed: {
      ...mapGetters({
        length: 'cartLength'
      })
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  #cart{
    height: 100vh;
    width: 100%;
  }
  .title {
    background-color: #ff5777;
    color: white;
  }
</style>
