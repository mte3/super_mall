<template>
  <div id="detail">
    <detail-nav-bar class="detail"/>
    <Scroll
      @pullingUp='LoadMore'
      @scroll="contentScroll"
      :probe-type="3"
      :pull-up-load="true"
      id="scroll"
      ref="detail">
      <div class="imageSwipe">
        <image-swiper :image-swipe="topImages" :swipe-time="2000"/>
      </div>
      <good :goods="goods"/>
      <comment-info :rate="commentInfo" :time="time"/>
      <shops :shop="shop"/>

      <detail-info :detailInfo="detailInfo" :img="img" @imageLoad="imageLoad"/>
      <good-params :params="parameter" :rule="rules"/>
      <goods-list :goods="recommend" class="goodsList"/>
    </Scroll>
    <goods-action class="goods-action"/>
    <back-top @click.native="BackTop" v-show="isShowBackTop"/>

  </div>
</template>

<script>
  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "../../network/detail";

  import CommentInfo from "./childComps/CommentInfo";
  import DetailNavBar from "./childComps/DetailNavBar";
  import Good from "./childComps/Good";
  import Shops from './childComps/Shops';
  import DetailInfo from "./childComps/DetailInfo";
  import GoodParams from "./childComps/GoodParams";
  import GoodsAction from "./childComps/GoodsAction";

  import ImageSwiper from "../../components/common/swiper/ImageSwiper";
  import Swipe from "../../components/common/swiper/Swipe";
  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BackTop from "../../components/content/backTop/BackTop";
  export default {
    name: "Detail",
    components: {
      BackTop,
      GoodsList,
      GoodsAction,
      GoodParams,
      DetailInfo,
      Scroll,
      Shops,
      ImageSwiper,
      DetailNavBar,
      Swipe,
      Good,
      CommentInfo
    },
    data() {
      return {
        iid: null,
        topImages: [], //轮播图图片
        goods: {},//商品数据
        shop: {},//店铺数据
        detailInfo: {},//穿着效果数据
        img: {},//穿着效果图片
        parameter: {},//商品参数数据
        rules: {},//商品尺码参数
        commentInfo: {},//评论信息
        time: 0,//评论时间
        recommend: [],//推荐数据
        isShowBackTop: false,//是否显示返回顶部按钮
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2.根据iid请求详细数据
      getDetail(this.iid).then(data => {
        const res = data.result;
        //1.获取轮播图图片
        this.topImages = res.itemInfo.topImages

        //2.获取商品信息
        this.goods = new Goods(res.itemInfo, res.columns, res.shopInfo.services)
        //3.获取店铺信息
        this.shop = new Shop(res.shopInfo)
        //4.获取商品详细信息
        this.detailInfo = res.detailInfo.desc
        this.img = res.detailInfo.detailImage[0]
        //5.获取参数信息
        this.parameter = res.itemParams.info
        this.rules = new GoodsParam(res.itemParams.rule)
        //6.获取评论信息
        if (data.result.rate.cRate > 0) {
          this.commentInfo = res.rate
          this.time = res.rate.list[0].created
        }

      })

      //获取推荐数据
      getRecommend().then(data => {
        this.recommend = data.data.list
      })
    },
    methods: {
      BackTop() {
        //点击回到顶部
        this.$refs.detail.scrollTo()
      },
      contentScroll(position) {
        //是否显示返回顶部按钮
        this.isShowBackTop = (-position.y) > 1000;
      },
      imageLoad() {
        // 图片加载完
        this.$refs.detail.refresh();
      },
      LoadMore() {
        //下拉重新计数可滑动高度
        this.$refs.detail.refresh()
      },
    }
  }
</script>

<style scoped>
  #detail {
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }

  .detail {
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .goods-action {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
  }

  #scroll {
    width: 100%;
    position: absolute;
    height: calc(100% - 93px);
    overflow: hidden;
    /*overflow: hidden;*/
    /*width: 100%;*/
    /*position: absolute;*/
    /*top: 44px;*/
    /*left: 0;*/
    /*right: 0;*/
  }
</style>
