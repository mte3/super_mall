<template>
  <div>
    <div class="swipe" v-for="(i,index) in swipe">
      <a :href="i.link">
        <img :src="i.image" alt=""
             ref="swipe"
             style="width: 100%"
             v-show="showIndex ==index"
             :key="index"
             @mouseenter="clearGoSwipe"
             @mouseleave="goSwipe" @load="imageLoad">
      </a>
    </div>
<!--    <div class="swipeIcon" v-show="isShowIcon">-->
<!--      <div>{{icon.left}}</div>-->
<!--      <div>{{icon.right}}</div>-->
<!--    </div>-->
    <div class="spanList" ref="spanList" :style="{top:iconHeight+'px'}">
      <div class="list" v-for="(o,i) in swipe" :key="i"
           :class="showIndex == i? 'active' : '' ">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swipe",
    props: {
      swipe: {
        type: Array,
        default: []
      },
      swipeTime: {
        type: Number,
        default: 3000
      },
      isShowIcon: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        iconHeight:0,//轮播图指示器距离顶部高度
        swipeHeight: 0, //轮播图高度
        showIndex: 0,
        swiper: null,
        isLoad:true
      }
    },
    methods: {
      imageLoad(){
        //监听图片是否加载完成
        if(this.isLoad){
          this.$emit('swipeImageLoad')
          this.isLoad = false
        }
      },

      getIconHeight(){
        this.iconHeight = document.body.clientWidth*195/375 - 16
      },
      goSwipe() {
        //轮播图计时器
        this.swiper = setInterval(() => {
          this.showIndex++;
          if (this.showIndex == this.swipe.length) {
            this.showIndex = 0
          }
        }, this.swipeTime)
      },
      clearGoSwipe() {
        //清楚计时器（鼠标在轮播图上）
        clearInterval(this.swiper)
      },
      getHeight() {
        //获取轮播图高度
        this.swipeHeight = this.$refs.swipe.offsetHeight
        console.log(this.swipeHeight)
      },

    },
    mounted() {
      this.goSwipe()
      this.getIconHeight()
      // this.getHeight()
    },
  }
</script>

<style scoped>
  .list {
    margin: 0 4px 0 4px;
    width: 8px;
    height: 8px;
    float: left;
    line-height: 40px;
    background-color: white;
    border-radius: 4px;
  }

  .swipe {
    position: relative;
  }

  .spanList {
    position: absolute;
    left: calc(50% - 32px);
    justify-content: center;
  }

  .active {
    background-color: #ff5777;
  }
</style>
