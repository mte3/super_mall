<template>
  <div class="good">
    <div class="goodsTitle">{{goods.title}}</div>
    <div class="pay">
      <div class="price">{{goods.price}}</div>
      <div class="oldPrice">￥{{goods.highPrice}}</div>
      <div class="priceSpan">{{goods.span}}</div>
    </div>
    <div class="sells">
      <div class="sell" v-for="i in goods.columns">{{i}}</div>
    </div>
    <div class="services">
      <div v-for="i in goods.services" class="service">
        <img :src="i.icon" alt="">
        <div>{{i.name}}</div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "Good",
    props: {
      goods: {
      }
    }
  }
</script>

<style scoped>
  .good {
    padding: 12px 12px 0 12px;
  }

  .goodsTitle {
    letter-spacing: 0.5px;
    font-weight: 700;
    font-size: 16px;
    color: black;
  }

  .price {
    color: #ff5777;
    font-size: 24px;
    display: inline
  }

  .oldPrice {
    padding-top: 6px;
    letter-spacing: -1px;
    display: inline;
    font-size: 12px;
    text-decoration-line: line-through;
  }

  .priceSpan {
    border-radius: 4px;
    padding: 1px;
    margin-left: 6px;
    display: inline;
    font-size: 12px;
    background-color: #ff5777;
    color: white;
  }

  .pay {
    width: 100%;
    padding-top: 8px;
  }

  .service img {
    width: 12px;
    float: left;
    margin-right: 3px;
  }

  .service {
    flex: 1;
    font-size: 10px;
    float: left;
  }

  .services {
    display: flex;
    margin-top: 12px;
    padding: 16px 0 16px 0;
    border-top: 0.5px solid #d4ccc6;
    color: grey;
  }

  .sells {
    display: flex;
    width: 100%;
    padding-top: 16px;
    font-size: 11px;
  }
  .sell{
    flex: 1;
  }


  .desc {
    padding: 8px;
    text-indent: 2em;
    font-size: 12px;
  }
</style>
