<template>
  <div id="addCart">
    <div @click="back">
      <img class="back" src="../../../assets/img/detail/close.png" alt="">
    </div>

    <div class="Selected">
      <img :src="Show.img??choiceShow.img" alt="">
      <div class="Selecteds">
        <div class="price">{{Show.currency ??'￥'}}{{((Show.nowprice ??choiceShow.nowprice)/100).toFixed(2)}}</div>
        <p>库存充足</p>
        <!--        <div class="choices">已选：“ {{cart.size[sizeIndex].name}} ” “ {{cart.color[colorIndex].name}} ”</div>-->
        <div class="choiced">
          <div class="choiceSize" v-show="sizeIndex===index" v-for="(i,index) in cart.size">已选：{{i.name}}</div>
          <div v-show="colorIndex===index" v-for="(i,index) in cart.color">{{i.name}}</div>
        </div>
      </div>
    </div>

    <h5>{{cart.sizeTitle}}</h5>
    <div class=" choice size">
      <div
        :class="{activeSize:sizeIndex ===indexS}"
        class="list sizeLis"
        @click="choiceSize(s.sizeId,indexS)"

        v-for="(s,indexS) in cart.size">
        {{s.name}}
      </div>
    </div>

    <h5>{{cart.colorTitle}}</h5>
    <div class="choice color">
      <div class="list colorLis"
           :class="{activeColor:colorIndex === indexC}"
           @click="choiceColor(c.styleId,indexC)"
           v-for="(c,indexC) in cart.color">
        {{c.name}}
      </div>
    </div>
    <div id="num">
      <h5>购买数量</h5>
      <div class="num">
        <div @click="numSub">-</div>
        <div>{{num}}</div>
        <div @click="numAdd">+</div>
      </div>
    </div>
    <div id="sure">确定</div>
  </div>
</template>

<script>
  export default {
    name: "styleChoice",
    props: {
      cart: {
        type: Object
      },
      choiceShow: {
        //默认选择（要传）
        type: Object
      }
    },

    data() {
      return {
        showIndex: 0,
        sizeIndex: 0,
        colorIndex: 0,
        sizeId: 100,
        style: 1,
        l: 0,
        isSize: true,
        show: {},
        Show: {},//已选（要传）
        num: 1,//购买数量（要传）
      }
    },
    updated() {
      this.getShow()
    },
    methods: {
      numSub(){
      if(this.num>1){
        this.num--
      }
      },
      numAdd(){
        this.num++
      },

      choiceSize(s, indexS) {
        // 尺寸选择
        this.sizeIndex = indexS
        this.sizeId = s
      },

      choiceColor(c, indexC) {
        // 颜色选择
        this.colorIndex = indexC
        this.styleId = c
      },

      getShow() {
        for (let i = 0; i < this.cart.show.length - 1; i++) {
          if (this.cart.show[i].sizeId === this.sizeId) {
            this.show = this.cart.show[i]
            if (this.show.styleId === this.styleId) {
              this.Show = this.show
              break;
            }

          }
        }
      },

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

  #sure {
    background-color: #ff5777;
    height: 36px;
    line-height: 36px;
    text-align: center;
    position: absolute;
    bottom: 4px;
    color: white;
    letter-spacing: 6px;
    width: calc(100% - 24px);
    border-radius: 12px;
  }

  #addCart h5 {
    margin-top: 12px;
  }

  #num {
    display: flex;
  }

  #num p {
    flex: 1;
    width: 50%;
  }

  .num {
    flex: 1;
    width: 50%;
    text-align: right;
  }
  .num div{
    display: inline;
    margin: 0 2px 0 2px;
    background-color: #e0dad5;
    padding:6px 12px 6px 12px;

  }
  .num span{
    display: inline;
  }

  .Selected {
    font-size: 14px;
    display: flex;
    padding-top: 12px;
  }

  .choice {
    word-wrap: break-word;
    word-break: normal;
    display: flex;
    flex-wrap: wrap;
  }

  .price {
    color: #ff5777;
    padding-bottom: 8px;
  }

  .Selecteds {
    text-align: center;
    padding-top: 8px;
  }

  .Selecteds p {
    padding-bottom: 8px;
  }

  .list {
    font-size: 12px;
    border-radius: 4px;
    padding: 4px 12px 4px 12px;
    background-color: #ded6d0;
    margin: 12px 12px 0 12px;
  }

  .activeSize {
    background-color: #ff8198;
    color: white;
  }

  .activeColor {
    background-color: #ff8198;
    color: white;
  }

  .choiceSize {
    margin-bottom: 6px;

  }

  .choiced {
    font-size: 12px;
  }

  .Selected img {
    margin-right: 12px;
    width: 20%;
  }

  .back {
    float: right;
    width: 16px;
  }
</style>
