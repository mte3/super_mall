<template>
  <div id="app1">
    <van-tab-bar class="nav-bar"/>
    <router-view class="router-view" />
  </div>

</template>

<script>


import VanTabBar from "./components/content/tabbar/VanTabBar";

  export default {
    name: 'app1',
    components:{
      VanTabBar
    }

  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
