<template>
  <div id="app">
    <van-tab-bar/>
    <router-view />
  </div>

</template>

<script>


import VanTabBar from "./components/content/tabbar/VanTabBar";

  export default {
    name: 'app',
    components:{
      VanTabBar
    }

  }
</script>

<style>
  @import "./assets/css/base.css";

</style>
