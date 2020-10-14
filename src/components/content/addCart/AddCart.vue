<template>
  <div id="addCart">
    <div @click="back">
      <img class="back" src="../../../assets/img/detail/close.png" alt="">
    </div>
    <div class="choice" v-for="(i,index) in cart.show" v-show="index === showIndex">
      <img :src="i.img" alt="">
      <div class="choiced">
        <div class="price">{{cart.price}}</div>
        <p>库存充足</p>
        <div class="choices">已选：“ {{i.size}} ” “ {{i.style}} ”</div>
      </div>
    </div>
    <h5>{{cart.sizeTitle}}</h5>
    <div class=" choiceSize">
      <div class="list sizeLis" v-for="(s,index) in cart.size">{{s.name}}</div>
    </div>
    <h5>{{cart.colorTitle}}</h5>
    <div class="choiceTitle color">
      <div class="list colorLis" v-for="(c,index) in cart.color">{{c.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddCart",
    props: {
      cart: {
        type: Object
      },
    },

    data() {
      return {
        showIndex: 5

      }
    },
    methods: {
      back() {
        this.$emit('back')
      }
    }
  }
</script>

<style scoped>
  #addCart {
    padding: 12px;
    height: 80%;
    background-color: white;
  }

  .choice {
    font-size: 14px;
    display: flex;
    padding-top: 22px;
  }

  .price {
    color: #ff5777;
    padding-bottom: 8px;
  }

  .choiced {
    text-align: center;
    padding-top: 8px;
  }

  .choiced p {
    padding-bottom: 8px;
  }

  .choiceSize {
    display: flex;
  }
  .list {
    font-size: 12px;
    border-radius: 4px;
    padding: 4px 12px 4px 12px;
   background-color: #c8c8c8;
    margin: 12px;
  }

  .choice img {
    margin-right: 12px;
    width: 20%;
  }



  .back {
    float: right;
    width: 16px;
  }
</style>
