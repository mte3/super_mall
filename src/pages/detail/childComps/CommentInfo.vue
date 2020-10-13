<template>
  <div id="commentInfo">
    <div class="comments">
      <div class="comment">宝贝评价({{rate.cRate}})</div>
      <div class="more">
        <img src="../../../assets/img/detail/right.png" alt="">
        <p>查看全部
        </p>
      </div>
    </div>
    <div class="mes" v-for="i in rate.list">
      <div class="user">
        <img :src="i.user.avatar" alt="">
        <div class="name">{{i.user.uname}}</div>
        <div class="timeS">
          <span class="getTime">{{getTime}} </span>
          <span>  |  </span>
          <span class="choice" v-for="s in i.style"> {{s}}</span>
        </div>
      </div>
      <p>{{i.content}}</p>

      <div class="contextImage">
        <img class="images" :class="{imageS :m=== 1 || m ===4 || m===7}" v-for="(p,m) in i.images" :src="p" alt="">
      </div>
    </div>
    <!--    {{rate}}-->
  </div>
</template>

<script>
  import {formatDate} from "../../../common/utils";

  export default {
    name: "CommentInfo",
    props: {
      rate: {
        type: Object
      },
      time: {}
    },
    computed: {
      getTime() {
        const date = new Date(this.time * 1000)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    methods: {},
    data() {
      return {
        a: 0
      }
    }
  }
</script>

<style scoped>
  #commentInfo {
    border-bottom: 6px solid #d4ccc6;
    padding: 12px;
    margin-bottom: 12px;
  }

  .comments {
    display: flex;
  }

  .comment {
    padding-top: 4px;
    color: black;
    flex: 1;
  }

  .more {
    font-size: 14px;
    color: #ff5777;
    flex: 1;
  }

  .more p {
    padding-top: 4px;
    float: right;
  }

  .more img {
    width: 24px;
    float: right;
  }

  /**/
  .user {
    margin-top: 12px;
  }

  .user img {
    float: left;
    margin-right: 12px;
  }

  .name {
    font-size: 16px;
  }

  .mes p {
    padding: 12px 0 12px 0;
    font-size: 14px;
  }

  .getTime {
    font-size: 12px;
  }

  .images {
    margin-top: 12px;
    width: 32%;
    height: 140px;
    overflow: hidden;
  }
  .imageS{
    padding: 0 2% 0 2%;
  }
  .choice {
    font-size: 11px;
    color: grey;
  }

  .user img {
    width: 10%;
  }
</style>
