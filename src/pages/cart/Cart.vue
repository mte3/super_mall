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

    <cart-list v-show="length !==0"/>

    <cart-null v-show="length ===0"/>


    <!--    底部汇总-->
    <settlement v-show="length !==0"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./cartComps/CartList";
  import Settlement from "./cartComps/Settlement";
  import CartNull from "./cartComps/CartNull";

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartNull,
      CartList,
      Settlement
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
  #cart {
    height: 100vh;
    width: 100%;
  }

  .title {
    background-color: #ff5777;
    color: white;
  }
</style>
