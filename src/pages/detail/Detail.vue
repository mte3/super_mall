<template>
  <div id="detail">
    <detail-nav-bar class="detail"/>
    <Scroll
      @pullingUp='LoadMore'
      id="scroll"
      ref="detail" >
      <div class="imageSwipe">
        <image-swiper :image-swipe="topImages" :swipe-time="2000"/>
      </div>
      <good :goods="goods"/>
      <shops :shop="shop"/>
      <detail-info :detailInfo="detailInfo" :img="img" @imageLoad="imageLoad"/>
      <good-params :params="parameter" :rule="rules"/>
    </Scroll>
    <goods-action class="goods-action"/>
  </div>
</template>

<script>
  import ImageSwiper from "../../components/common/swiper/ImageSwiper";
  import DetailNavBar from "./childComps/DetailNavBar";
  import {getDetail, Goods, Shop,GoodsParam} from "../../network/detail";
  import Swipe from "../../components/common/swiper/Swipe";
  import Good from "./childComps/Good";
  import Shops from './childComps/Shops';
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailInfo from "./childComps/DetailInfo";
  import GoodParams from "./childComps/GoodParams";
  import GoodsAction from "./childComps/GoodsAction";

  export default {
    name: "Detail",
    components: {
      GoodsAction,
      GoodParams,
      DetailInfo,
      Scroll,
      Shops,
      ImageSwiper,
      DetailNavBar,
      Swipe,
      Good
    },
    data() {
      return {
        iid: null,
        topImages: [], //轮播图图片
        goods: {},//商品数据
        shop: {},//店铺数据
        detailInfo:{},//穿着效果数据
        img:{},//穿着效果图片
        parameter:{},//商品参数数据
        rules:{},//商品尺码参数
      }
    },
    created() {
      //1.保持传入的iid
      this.iid = this.$route.params.iid

      //2.根据iid请求详细数据
      getDetail(this.iid).then(data => {
        const res = data.result;
        //1.获取轮播图图片
        this.topImages = res.itemInfo.topImages

        //2.获取商品信息
        this.goods = new Goods(res.itemInfo, res.columns, res.shopInfo.services)
        console.log(res);
        //3.获取店铺信息
        this.shop = new Shop(res.shopInfo)
        //4.获取商品详细信息
        this.detailInfo = res.detailInfo.desc
        this.img = res.detailInfo.detailImage[0]
        //4.获取参数信息
        this.parameter = res.itemParams.info
        this.rules = new GoodsParam(res.itemParams.rule)

      })
    },
    methods: {
      imageLoad(){
        this.$refs.detail.refresh();
      },
      LoadMore() {
        //重新计数可滑动高度
        this.$refs.detail.refresh()
      },
    }
  }
</script>

<style scoped>
#detail{
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #ffffff;
}
.detail{
  position: relative;
  z-index: 9;
  background-color: white;
}
.goods-action{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
  #scroll{
    position: absolute;
    height: calc(100% - 44px);
    /*overflow: hidden;*/
    /*width: 100%;*/
    /*position: absolute;*/
    /*top: 44px;*/
    /*left: 0;*/
    /*right: 0;*/
  }
</style>
