<template>
  <div class="category">
    <nav-bar class="title">
      <template v-slot:center>
        <div id="cartTitle">分类
        </div>
      </template>
    </nav-bar>
    <title-list @handelTitle='handelTitle' :titleList='titleList'/>
    <div class="cTitle">{{title}}</div>
    <scroll class="scroll"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp='LoadMore'>
      <goods-list class="rightList" :goods="showGoods"/>
    </scroll>
  </div>
</template>

<script>
  import {getCategory,} from "../../network/category";

  import NavBar from "../../components/common/navbar/NavBar";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";

  import TitleList from "./cComps/TitleList";
  import {getHomeGoods} from "../../network/home";

  export default {
    name: "Category",
    components: {
      Scroll,
      NavBar,
      TitleList,
      GoodsList
    },
    data() {
      return {
        goods: {
          'pop': {page: 0, list: []},
        },
        titleList: [],
        keyList: [],
        title: '正在流行',
        key: '3627',
        miniKey: '10062603',
      }
    },
    computed: {
      showGoods() {
        //父传子--goods
        return this.goods['pop'].list
      },
    },
    created() {
      this.getCategory()
      this.getHomeGoods('pop')
      console.log(this.goods)
    },
    methods: {
      //
      handelTitle(K, T, M) {
        this.title = T;//获取点击的类标题
        this.key = K;//获取maitKey
        this.miniKey = M;//获取miniKey
      },
      LoadMore() {
        //上拉加载更多
        this.getHomeGoods('pop')
        //重新计数可滑动高度
        this.$refs.scroll.refresh()
      },

      //网络请求
      getCategory() {
        // 请求分类标题
        getCategory().then(res => {
          console.log(res)
          this.titleList = res.data.category.list
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
  .scroll{
    position: absolute;
    top: 86px;
    left: 30%;
    width: 70%;
    height: calc(100% - 135px);
  }
  .category {
    height: 100vh;
    width: 100%;
  }

  .title {
    width: 100%;
    position: absolute;
    z-index: 99;
    background-color: #ff5777;
    color: white;
  }

  .cTitle {
    background-color: white;
    z-index: 99;
    width: 70%;
    text-align: center;
    position: absolute;
    line-height: 42px;
    top: 44px;
    left: 30%;
  }

  /*.rightList {*/
  /*  margin-top: 42px;*/
  /*  width: 70%;*/
  /*  left: 30%;*/
  /*  position: absolute;*/
  /*}*/

</style>
