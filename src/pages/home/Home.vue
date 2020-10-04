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
    <tab-control class="tab-ctrl"
                 :titles="['流行','新款','精选']"
                 @tabClick="tabClick"/>
    <goods-list :goods=showGoods />
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

    </ul>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata, getHomeGoods} from "../../network/home";
  import HomeSwiper from "../../components/common/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import Feature from "./childComps/Feature";
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      Feature,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType:'pop'
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()
      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    computed:{
      showGoods(){
        //父传子--goods
        return this.goods[this.currentType].list
      }
    },
    methods: {
      //事件监听相关方法
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
                break;
          case 1:
            this.currentType = 'new';
                break;
          case 2:
            this.currentType = 'sell';
                break;
        }
      },
      // 网络请求相关方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home {
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

  .tab-ctrl {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
