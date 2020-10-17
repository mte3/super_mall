<template>
  <div id="settlement">
    <div class="check"
         @click="handelAll">
      <CheckButton class="isAllCheck"
                   :class="{isSettlementAll:isSettlementAll}" />
      <span>全选</span>
    </div>
    <div class="price">
      <span>合计：</span>
      <span class="allPrice">￥{{Price}}</span>
    </div>
    <div class="settlement" @click="handelSettlement">
      结算({{Settlement}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'
  export default {
    name: "Settlement",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters({
        Price: 'Price',//选中的总价
        Settlement:'Settlement',//选中状态的个数
        isSettlementAll:'isSettlementAll' ,//是否全部选中状态
      })
    },
    methods:{
      handelSettlement(){
        if (this.Settlement===0){
          this.$toast({
            message:'购物车空空如也，快去逛逛把~~',
            icon:'smile-o'
          })
        }else {
          //结算
        }
      },
      handelAll(){
        this.$store.commit('handelAll',this.isSettlementAll)
        // if (this.isSettlementAll){
        // }
      }
    }
  }
</script>

<style scoped>
  #settlement {
    border-bottom: 1px solid #e6e6e6;
    padding: 0 12px 0 12px;
    height: 44px;
    width: 100%;
    /*background-color: red;*/
    position: absolute;
    bottom: 50px;
    display: flex;
  }

  .isAllCheck {
    margin-right: 8px;
    border-radius: 8px;
    border: 1px solid #ff8198;
    width: 16px;
    height: 16px;
  }
.isSettlementAll{
  background-color: red;
}
  .check {
    font-size: 14px;
    margin-top: 14px;
    display: flex;
  }

  .price {
    padding-right: 12px;
    float: right;
    padding-top: 14px;
    font-size: 14px;
    /*display: flex;*/
  }
  .allPrice{
    color: orangered;
  }
  .settlement {
    border-radius: 12px;
    margin: 5px 0 5px 0;
    background-color: orangered;
    color: white;
    letter-spacing: 1px;
    padding: 8px 16px 8px 16px;
    position: absolute;
    right: 12px;
  }
</style>
