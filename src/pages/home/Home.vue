<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <tab-control
      ref="tabControlFirst"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick" class="tab-control"
      v-show="isShowTabControl"/>

    <scroll class="wrapper"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp='LoadMore'>

      <swipe :swipe="banner" :swipe-time="1500"
             @swipeImageLoad="swipeImageLoad"/>
      <recommend-view :recommends="recommend"/>
      <feature/>
      <tab-control
        ref="tabControl"
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>

    </scroll>

    <back-top @click.native="isBackTop" v-show="isShowBackTop"/>

  </div>
</template>

<script>
  import {getHomeMultidata, getHomeGoods} from "../../network/home";

  import NavBar from "../../components/common/navbar/NavBar";
  import Swipe from "../../components/common/swiper/Swipe";
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  import RecommendView from "./childComps/RecommendView";
  import Feature from "./childComps/Feature";

  export default {
    name: "Home",
    components: {
      Swipe,
      BackTop,
      Scroll,
      NavBar,
      RecommendView,
      Feature,
      TabControl,
      GoodsList
    },
    data() {
      return {
        saveY: 0,//离开页面时记录页面滚动Y值
        topHeight: 0,
        tabOffsetTop: 0,
        isShowBackTop: false,
        scroll: null,
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowTabControl: false,
        // tabHeight: {
        //   'pop': {height: 0},
        //   'new': {height: 0},
        //   'sell': {height: 0},
        // },
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata();

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    computed: {
      showGoods() {
        //父传子--goods
        return this.goods[this.currentType].list
      },
    },
    activated() {
      // 页面路由活跃时调用
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 页面路由不活跃时调用
      this.saveY = this.$refs.scroll.getScrollY()
    },
    methods: {
      //事件监听相关方法

      isBackTop() {
        //点击回到顶部
        this.$refs.scroll.scrollTo()
      },
      swipeImageLoad() {
        //获取tabControl的offsetTop(距离顶部高度)
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },

      LoadMore() {
        //上拉加载更多
        this.getHomeGoods(this.currentType)
        //重新计数可滑动高度
        this.$refs.scroll.refresh()
      },

      contentScroll(position) {
        // 是否显示返回顶部按钮
        this.isShowBackTop = (-position.y) > 1000;
        //tabControl是否吸顶
        this.isShowTabControl = (-position.y) > this.tabOffsetTop
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
        this.$nextTick(() => {
          this.$refs.tabControlFirst.currentIndex = index;
          this.$refs.tabControl.currentIndex = index;
        })
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

  .tab-control {
    position: relative;
    z-index: 9;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
