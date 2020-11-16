<template>
  <div id="proMids">
    <div class="proMid">
      <div class="content">
        <div class="contentIcon">
          <van-icon name="credit-pay" size="32"/>
        </div>
        <div class="contentIcon">
          <van-icon name="send-gift-o" size="32"/>
        </div>
        <div class="contentIcon">
          <van-icon name="comment-circle-o" size="32"/>
        </div>
        <div class="contentIcon">
          <van-icon name="gold-coin-o" size="32"/>
        </div>
        <div class="contentIcon">
          <van-icon name="label-o" color="red" size="32"/>
        </div>
      </div>
      <div class="content">
        <div v-for="i in contentList" class="contentTitle">
          <div>{{i}}</div>
        </div>
      </div>
    </div>
    <div class="proMid">
      <div class="content">
        <div v-for="i in midList" class="contentTitle">
          <div class="num">{{i.num}}</div>
          <div>{{i.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProMid",
    data() {
      return {
        contentList: [
          '待付款',
          '待收货',
          '待评价',
          '退还/售后',
          '我的订单',
        ],
        midList: [
          {title: '金币', num: 2269},
          {title: '优惠卷', num: 12},
          {title: '贷款', num: 10000.00},
          {title: '小金库', num: 0.00},
          {title: '我的钱包', num: 0.00},
        ]

      }
    }
  }
</script>

<style scoped>
  #proMids {

  }

  .proMid {
    padding: 0 4px;
    margin: 16px;
    border-radius: 8px;
    background-color: white;
  }

  .num {
    font-size: 14px;
    color: black;
    padding: 12px 0 8px 0;
  }

  .content {
    display: flex;
  }

  .contentTitle {
    font-size: 12px;
    text-align: center;
    width: 20%;
    padding: 6px 0 12px 0;
  }

  .contentIcon {
    padding-top: 12px;
    text-align: center;
    width: 20%;
  }

</style>
