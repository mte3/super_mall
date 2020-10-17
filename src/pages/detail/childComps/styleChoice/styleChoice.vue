<template>

  <div id="styleChoice">
    <div class="Selected">
      <img :src="Show.img" alt="" @load="imageLoad">
      <div class="Selecteds">
        <div class="price">{{Show.currency}}{{((Show.nowprice)/100).toFixed(2)}}</div>
        <p>库存充足</p>
        <!--        <div class="choices">已选：“ {{cart.size[sizeIndex].name}} ” “ {{cart.color[colorIndex].name}} ”</div>-->
        <div class="choiced">
          <div class="choiceSize" v-show="sizeIndex===index" v-for="(i,index) in cart.size">已选：{{i.name}}</div>
          <div v-show="colorIndex===index" v-for="(i,index) in cart.color">{{i.name}}</div>
        </div>
      </div>
      <div @click="back" class="back">
        <img src="../../../../assets/img/detail/close.png" style="width: 16px;height: 16px" alt="">
      </div>
    </div>
    <scroll ref="styleChoice"
            @pullingUp='LoadMore'
            :pull-up-load="true"
            id="scrollChoice">

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
      <div style="height: 24px"></div>
    </scroll>
    <div id="sure" @click="handelSure">确定</div>
  </div>
</template>

<script>
  import Scroll from "../../../../components/common/scroll/Scroll";

  export default {
    name: "styleChoice",
    components: {
      Scroll
    },
    props: {
      cart: {
        type: Object
      },
      styleChoiceKey: {
        type: String
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
        sizeShow: [],
        styleShow: [],
        Show: {},//已选（要传）
        num: 1,//购买数量（要传）
        // goodOrder:[]
      }
    },
    watch: {
      choiceShow() {
        this.Show = this.choiceShow
      },
    },
    updated() {
      this.$refs.styleChoice.refresh();
    },
    methods: {
      handelSure() {
        //点击确认（购买/加入购物车）
        if (this.styleChoiceKey === 'cart') {
          // 加入购物车
          this.$emit('addCart', this.num, this.Show,)
          this.num = 1
        } else {
          // 购买
          this.$emit('Buy', this.num, this.Show,)
        }
      },
      LoadMore() {
        //上拉重新计数可滑动高度
        this.$refs.styleChoice.refresh()
      },
      imageLoad() {
        setTimeout(() => {
          this.$refs.styleChoice.refresh()
        }, 50)
      },
      numSub() {
        //购买/加入购物车数量减一
        if (this.num > 1) {
          this.num--
        }
      },
      numAdd() {
        //购买/加入购物车数量加一
        this.num++
      },
      choiceSize(s, indexS) {
        // 尺寸选择
        this.sizeIndex = indexS;
        this.sizeId = s;
        this.getShow()
      },
      choiceColor(c, indexC) {
        // 颜色选择
        this.colorIndex = indexC
        this.styleId = c
        this.getShow()
      },
      getShow() {
        // this.Show = this.cart.show.find(function (i) {
        //   return (this.cart.show[i].sizeId === this.sizeId &&
        //     this.cart.show[i].styleId === this.styleId)
        // })
        for (let i = 0; i < this.cart.show.length - 1; i++) {
          if (this.cart.show[i].sizeId === this.sizeId &&
            this.cart.show[i].styleId === this.styleId) {
            this.Show = this.cart.show[i]
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
  #scrollChoice {
    overflow: hidden;
    width: 100%;
    position: absolute;
    height: calc(100% - 164px);
  }

  #styleChoice {
    overflow: hidden;
    width: 100%;
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

  #scrollChoice h5 {
    margin-top: 12px;
  }

  #num {
    margin: 12px 24px 0 0;
    padding: 12px 0 12px 0;
    border-bottom: #d4ccc6 1px solid;
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

  .num div {
    display: inline;
    margin: 0 2px 0 2px;
    background-color: #e0dad5;
    padding: 6px 12px 6px 12px;
  }

  .Selected {
    padding-bottom: 12px;
    height: 112px;
    font-size: 14px;
    display: flex;
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
    width: 80px;
    height: 100px;
  }

  .back {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  .back img {
  }
</style>
