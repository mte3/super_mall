<template>
  <div id="shop">

      <div class="shop">

        <img :src="shop.logo" alt="">

        <div class="shopT">
          <div class="shopMid">
            <h4>{{shop.name}}</h4>
            <div class="shop-item goods">在架商品 {{shop.goods}}</div>

          </div>

        </div>

      </div>

    <div class="shopUnder">

      <div class="underLeft">
        <div class="shop-item fans">{{shop.fans}}
          <div class="text">关注</div>
        </div>
        <div class="shop-item sells">{{shop.sells}}
          <div class="text">总销量</div>
        </div>
      </div>

      <div class="underRight">
        <div v-for="i in shop.score" class="score">
          <div class="scoreTitle">{{i.name}}</div>
          <div class="scoreN" :class="{isBetter:i.isBetter}">{{i.score}}</div>
          <div v-if="i.isBetter" class="gao">高</div>
          <div v-else="i.isBetter" class="di">低</div>
        </div>
      </div>


    </div>
    <a :href="shop.url"> <div class="come">进店逛逛</div></a>

  </div>
</template>

<script>
  export default {
    name: "Shops",
    props: {
      shop: {}
    }
  }
</script>

<style scoped>

  #shop {
    padding: 0 12px 12px 12px;
  }
  .shopT {
    display: flex;
  }

  .shopMid {
    flex: 1;
    padding: 12px 0 12px 6px;

  }
  .come {
    padding-top: 6px;
    font-size: 15px;
    flex: 1;
  }

  /*//*/
  .shopUnder {
    display: flex;
    padding-bottom: 12px;
    /*border-bottom: 6px solid #d4ccc6;*/
  }

  .text {
    color: black;
    font-weight: 600;
    padding-top: 6px;
    font-size: 14px;
  }

  .underLeft {
    text-align: center;
    padding: 24px 12px 0 0 ;
    border-right: solid 2px #d4ccc6;
    flex: 2;
    display: flex;
  }

  .score {
    display: flex;
    padding: 6px 0 6px 0;
    font-size: 14px;
  }

  .scoreN {
    width: 40px;
    margin: 0 12px 0 12px;
    color: green;
  }
.isBetter{
  color: #ff5777;
}
  .sells {
    flex: 1;
  }

  .fans {
    flex: 1;
  }

  .underRight {
    margin: auto;
    padding-left: 24px;
    flex: 3;
  }

  .gao {
    background-color: #ff5777;
    color: white;
    padding: 3px;
    border-radius: 3px;
  }

  .di {
    border-radius: 3px;
    background-color: darkgreen;
    color: white;
    padding: 3px;
  }
.come{
  width: 136px;
  text-align: center;
  padding: 8px 0 8px 0;
  background-color: #d4ccc6;
  position: relative;
  left: calc(50% - 68px);
  border-radius: 12px;
}
  .goods {
    font-size: 12px;
    padding-top: 12px;
  }

  .shop img {
    width: 18%;
    float: left;
  }


</style>
