<template>
  <div id="detail">
    <detail-nav-bar ref="nav" class="detail" @titleClick="titleClick"/>
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
      <comment-info ref="commentTop" :rate="commentInfo" :time="time"/>
      <shops :shop="shop"/>

      <detail-info ref="detailTop" :detailInfo="detailInfo" :img="img" @imageLoad="imageLoad"/>
      <good-params :params="parameter" :rule="rules"/>
      <goods-list ref="recommendTop" :goods="recommend" class="goodsList"/>
    </Scroll>
    <goods-action class="goods-action" @addCart="addCart" @Buy="Buy"/>
    <back-top @click.native="BackTop" v-show="isShowBackTop"/>

    <style-choice :cart="cart"
                  :styleChoiceKey="styleChoiceKey"
                  :choiceShow="choiceShow"
                  class="styleChoice"
                  v-show="styleChoice"
                  @back="back"
                  @Buy="placeOrder"
                  @addCart="addCartSure"/>

  </div>
</template>

<script>
  import {getDetail, Goods, Shop, GoodsParam, getRecommend, addCart} from "../../network/detail";

  import CommentInfo from "./childComps/CommentInfo";
  import DetailNavBar from "./childComps/DetailNavBar";
  import Good from "./childComps/Good";
  import Shops from './childComps/Shops';
  import DetailInfo from "./childComps/DetailInfo";
  import GoodParams from "./childComps/GoodParams";
  import GoodsAction from "./childComps/GoodsAction";
  import styleChoice from "./childComps/styleChoice/styleChoice";
  import ImageSwiper from "../../components/common/swiper/ImageSwiper";
  import Swipe from "../../components/common/swiper/Swipe";
  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BackTop from "../../components/content/backTop/BackTop";

  import {mapActions} from 'vuex'
  export default {
    name: "Detail",
    components: {
      styleChoice,
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
        shopName:'',//店铺名
        detailInfo: {},//穿着效果数据
        img: {},//穿着效果图片
        parameter: {},//商品参数数据
        rules: {},//商品尺码参数
        commentInfo: {},//评论信息
        time: 0,//评论时间
        recommend: [],//推荐数据
        isShowBackTop: false,//是否显示返回顶部按钮
        detailTopYs: [],//标题对应的高度
        titleIndex: 0,
        styleChoice: false,
        styleChoiceKey: 'cart',
        cart: {},
        choiceShow: {}
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
        this.shopName = res.shopInfo.name
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
        //7.获取加入购物车数据
        this.cart = new addCart(res.skuInfo)
        this.choiceShow = res.skuInfo.skus[0]

      })

      //3.获取推荐数据
      getRecommend().then(data => {
        this.recommend = data.data.list
      })
    },
    methods: {
      ...mapActions({
        add:'addCart'
      }),
      addCartSure(num, Show,) {
        //1.获取购物车所需要展示的信息
        const orderGoods = {}
        orderGoods.iid = this.iid;
        orderGoods.num = num;
        orderGoods.title = this.goods.title
        orderGoods.Show = Show;
        //2.将商品添加到购物车
        // this.$store.commit('addCart',orderGoods)
        this.add(orderGoods,this.shopName).then(res => {
          //提示加入购物车成功
          this.$toast({
            message:res,
            icon:'success'
          })
          this.styleChoice = false
        })

      },
      placeOrder(num,Show){
        //确认提交订单
        this.$toast({
          message:'页面还没有做好哦, 亲~',
          icon:'smile-o'
        })
        this.styleChoice = false
      },

      addCart() {
        this.styleChoice = true
        this.styleChoiceKey = 'cart'
      },
      Buy() {
        this.styleChoice = true
        this.styleChoiceKey = 'buy'
        console.log(this.styleChoiceKey)
      },
      // handelBack(){
      //   this.styleChoice = false
      // },
      back() {
        this.styleChoice = false
      },
      titleClick(index) {
        //标题点击事件
        this.$refs.detail.scrollTo(0, -this.detailTopYs[index], 100)
      },
      BackTop() {
        //点击回到顶部
        this.$refs.detail.scrollTo()
      },

      //监听滑动位置
      contentScroll(position) {
        //是否显示返回顶部按钮
        this.isShowBackTop = (-position.y) > 1000;

        //1.获取Y值
        const Y = -position.y
        const length = this.detailTopYs.length
        //2.Y与标题对于的高度进行对比
        for (let i = 0; i < length; i++) {
          if (this.titleIndex !== i && (
            Y >= this.detailTopYs[i] &&
            Y < this.detailTopYs[i + 1])) {
            this.titleIndex = i
            this.$refs.nav.currentIndex = this.titleIndex
          }
          //普通方法，比较复杂
          // if(this.titleIndex !== i &&
          //   ((i < length - 1 &&
          //     Y>= this.detailTopYs[i] &&
          //     Y <=this.detailTopYs[i+1] ||
          //     (i ===length -1 && Y >=this.detailTopYs[i])))){
          //   this.titleIndex = i
          //   this.$refs.nav.currentIndex = this.titleIndex
          // }
        }
      },

      imageLoad() {
        // 监听详情页穿着效果图片是否加载完
        this.$refs.detail.refresh();
        //标题点击事件所需要的高度
        setTimeout(() => {
          this.detailTopYs.push(0)
          this.detailTopYs.push(this.$refs.commentTop.$el.offsetTop)
          this.detailTopYs.push(this.$refs.detailTop.$el.offsetTop)
          this.detailTopYs.push(this.$refs.recommendTop.$el.offsetTop)
          this.detailTopYs.push(Number.MAX_VALUE)
        }, 100)
      },
      LoadMore() {
        //上拉重新计数可滑动高度
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

  .goodsList {
    border-top: 6px solid #d4ccc6;
    padding-top: 8px;
  }

  .goods-action {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
  }

  .styleChoice {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
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
