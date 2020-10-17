<template>
  <div id="recommend">
    <div class="title">
      <div class="like">
        <van-icon name="like" color="white"/>
      </div>
      <div class="text">你可能喜欢</div>
    </div>
    <goods-list :goods="recommend"/>
  </div>
</template>

<script>
  import GoodsList from "../../../components/content/goods/GoodsList";
  import {getHomeGoods} from "../../../network/home";

  export default {
    name: "CartRecommend",
    components:{
      GoodsList
    },
    data(){
      return {
        goods:{
          'sell':{page:0,list:[]}
        }
      }
    },
    computed:{
      recommend(){
        return this.goods['sell'].list
      }
    },
    created() {
      this.getHomeGoods('sell')
    },
    methods:{
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1

          //多次上拉加载更多
          // this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>

  .title {
    margin: 24px  0 12px 0;
    width: 100%;
    text-align: center;
    display: flex;
  }

  .like {
    margin-left: calc(50% - 58px);
    width: 24px;
    height: 24px;
    padding-top: 4px;
    border-radius: 12px;
    text-align: center;
    background-color: #ff5777;
  }

  .text {
    color: #ff5777;
    padding-left: 6px;
    letter-spacing: 1px;
    height: 24px;
    line-height: 24px;
  }

</style>
