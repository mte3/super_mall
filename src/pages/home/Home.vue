<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banner"/>
    <recommend-view :recommends="recommend"/>
    <feature/>
    <tab-control class="tab-ctrl" :titles="['流行','新款','精选']"/>
    <ul>
      <li>1111</li>
      <li>2111</li>
      <li>3111</li>
      <li>4111</li>
      <li>5111</li>
      <li>6111</li>
      <li>7111</li>
      <li>8111</li>
      <li>9111</li>
      <li>10111</li>
      <li>11111</li>
      <li>12111</li>
      <li>13111</li>
      <li>14111</li>
      <li>15111</li>
      <li>16111</li>
      <li>17111</li>
      <li>18111</li>
      <li>19111</li>
      <li>20111</li>
      <li>21111</li>
      <li>22111</li>
      <li>23111</li>
      <li>24111</li>
      <li>25111</li>
      <li>26111</li>
      <li>27111</li>
      <li>28111</li>
      <li>29111</li>
      <li>30111</li>
      <li>31111</li>
      <li>32111</li>
      <li>33111</li>
      <li>34111</li>
      <li>35111</li>
      <li>36111</li>
      <li>37111</li>
      <li>38111</li>
      <li>39111</li>
      <li>40111</li>
      <li>41111</li>
      <li>42111</li>
      <li>43111</li>
      <li>44111</li>
      <li>45111</li>
      <li>46111</li>
      <li>47111</li>
      <li>48111</li>
      <li>49111</li>
      <li>50111</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import HomeSwiper from "../../components/common/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import Feature from "./childComps/Feature";
  import TabControl from "../../components/content/tabcontrol/TabControl";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      Feature,
      TabControl
    },
    data() {
      return {
        banner: [],
        dKeyword: [],
        keywords: [],
        recommend: [],
      }
    },
    created() {
      //请求多个数据
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        console.log(res.data.banner.list);
        this.dKeyword = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-ctrl{
    position: sticky;
    top: 44px;
  }
</style>
