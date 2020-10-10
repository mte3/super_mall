<template>
  <div id="app1">
    <van-tab-bar class="nav-bar"/>

<!--    <keep-alive>-->

<!--      <router-view class="router-view"/>-->

<!--    </keep-alive>-->

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

  </div>

</template>

<script>


  import VanTabBar from "./components/content/tabbar/VanTabBar";

  export default {
    name: 'app1',
    components: {
      VanTabBar
    }

  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
