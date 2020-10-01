<template>
    <div>
      <van-tabbar route v-model="active" active-color="#ff5777" inactive-color="#000">
        <van-tabbar-item  icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item  icon="apps-o" to="/category">分类</van-tabbar-item>
        <van-tabbar-item  icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item  icon="manager-o" to="/profile">我的
        </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vant';
  import {Button} from 'vant';

    export default {
        name: "VanTabBar",
      data() {
        return {
          active: 'home',
        };
      },
      methods:{

      },
      components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Button.name]: Button
      }
    }
</script>

<style scoped>

</style>
