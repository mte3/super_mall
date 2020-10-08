<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <tab-control
      ref="tabControl1"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick" class="tab-control"
      v-show="isShowTabControl"/>

    <scroll class="wrapper"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp = 'LoadMore'>

      <home-swiper :banners="banner" @swipeImageLoad = 'swipeImageLoad'/>
      <recommend-view :recommends="recommend"/>
      <feature/>
      <tab-control
        ref="tabControl"
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>

    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop"/>

  </div>
</template>

<script>
  import {getHomeMultidata, getHomeGoods} from "../../network/home";

  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "../../components/common/HomeSwiper";
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  import RecommendView from "./childComps/RecommendView";
  import Feature from "./childComps/Feature";

  export default {
    name: "Home",
    components: {
      BackTop,
      Scroll,
      NavBar,
      HomeSwiper,
      RecommendView,
      Feature,
      TabControl,
      GoodsList
    },
    data() {
      return {
        tabOffsetTop:0,
        isShowBackTop:false,
        scroll: null,
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowTabControl:false
      }
    },
    mounted() {
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata();
      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      //3.监听item图片加载完成
      // this.$bus.$on('itemImageLoad',() => {
      //   console.log('-------')
      // })
    },
    computed: {
      showGoods() {
        //父传子--goods
        return this.goods[this.currentType].list
      }
    },
    methods: {
      //事件监听相关方法
      swipeImageLoad(){
        //获取tabControl的offsetTop
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
        console.log(this.tabOffsetTop)
      },

      LoadMore(){
        //上拉加载更多
        this.getHomeGoods(this.currentType)
        //重新计数可滑动高度
        this.$refs.scroll.refresh()
      },

      contentScroll(position){
        //是否显示返回顶部按钮
        this.isShowBackTop = (-position.y) > 1000;

        //tabControl是否吸顶
        this.isShowTabControl = (position.y) < -this.tabOffsetTop
        console.log( this.isShowTabControl)
        console.log(this.tabOffsetTop)
        console.log(position)
      },
      backTop(){
        //点击回到顶部
        this.$refs.scroll.scrollTo()
      },

      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.cuechange = index;
        this.$refs.tabControl.cuechange = index;
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

          //多次上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    /*padding-top: 44px;*/
    position: relative;
  }
  .wrapper {
    /*方案一*/
    overflow: hidden;
    width: 100%;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    /*!*方案二*!*/
    /*height: calc(100%-93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 9;*/
  }

</style>
