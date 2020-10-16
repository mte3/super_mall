<template>
  <div>
    <div id="goodItem">
      <div class="image">
        <img :src="good.Show.img" alt="">
      </div>
      <div class="mes">
        <div class="title">
          {{good.title}}
        </div>
        <div class="style">
          {{good.Show.style +" "+'；'+ ' '+ good.Show.size+' '}}
          <span> > </span>
        </div>
        <div class="prices">
          ￥{{((good.Show.nowprice)/100).toFixed(2)}}
          <div class="nums">
            <div class="icon sub" @click="subCartItemNum(index)">-</div>
            <div class="num">{{good.num}}</div>
            <div class="icon add" @click="addCartItemNum(index)">+</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "CartListItem",
    props: {
      good: {
        type: Object,
        default() {
          return {}
        }
      },
      index:{
      }
    },
    methods: {
      addCartItemNum(index) {
        console.log('++++')
        this.$store.commit('addCartItemNum',index)
      },
      subCartItemNum(index) {
        console.log('-----')
        this.$store.commit('subCartItemNum',index)
      }
    }
  }
</script>

<style scoped>
  #goodItem {
    margin-top: 12px;
    padding: 6px;
    height: 120px;
    border-radius: 12px;
    background-color: white;
  }

  .title {
    padding-bottom: 8px;
    font-size: 14px;
    letter-spacing: 0.8px;
  }

  .style {
    border-radius: 4px;
    background-color: #e6e6e6;
    padding: 4px;
    display: inline;
    font-size: 13px;
  }

  .prices {
    padding-top: 12px;
    color: #ff5777;
  }

  .nums {
    border: grey 1px solid;
    border-radius: 4px;
    float: right;
  }

  .num {
    border-right: grey 1px solid;
    border-left: grey 1px solid;
    font-size: 14px;
    color: black;
    padding: 0 12px 0 12px;
    display: inline;
  }

  .icon {
    color: black;
    font-size: 16px;
    padding: 0 6px 1px 6px;
    display: inline;
  }

  .sub {
    padding: 0 8px 1px 8px;
  }

  .image {
    padding-right: 12px;
    float: left;
  }

  .image img {
    width: 80px;
    height: 108px;
  }

</style>
