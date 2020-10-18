<template>
  <div class="proMes">
    <div class="handPro">
      <div class="hand">
        <van-image round width="80" height="80"
                   src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      </div>
      <div class="name">
        <h4>今晚早点睡</h4>
        <div class="fen">成长分 1200</div>
      </div>
      <div class="icon setting">
        <van-icon name="setting-o" size="24" color="white"/>
      </div>
      <div class="icon mess">
        <van-icon name="chat-o" size="24" color="white"/>
      </div>
    </div>
    <div class="handList">
      <div v-for="i in handList" class="handListItem">
        <div>{{i.num}}</div>
        <div style="margin-top: 6px">{{i.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProMes",
    data() {
      return {
        handList: [
          {title: '商品收藏', num: 226},
          {title: '店铺关注', num: 0},
          {title: '喜欢内容', num: 98},
          {title: '浏览记录', num: 556},
        ]
      }
    }
  }
</script>

<style scoped>
  .proMes {
    padding: 12px;
    width: 100%;
    background-color: #ff5777;
  }

  .hand {
    margin-right: 12px;
  }

  .icon {
    text-align: right;
    width: 36px;
    height: 36px;
  }

  .name {
    color: white;
    padding-top: 16px;
    width: calc(100% - 164px);
  }

  .name div {
    text-align: center;
    width: 102px;
    font-size: 12px;
    background-color: grey;
    line-height: 18px;
    margin-top: 8px;
    padding: 0 12px;
    border-radius: 8px;
  }
  .name h4{
    font-size: 16px;
  }

  .handPro {
    display: flex;
  }

  .handList {
    display: flex;
  }

  .handListItem {
    text-align: center;
    padding-top: 12px;
    font-size: 14px;
    color: white;
    flex: 1;
    width: 25%;
  }
</style>
