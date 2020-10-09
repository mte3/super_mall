<template>
  <div>
    <div class="swipe" v-for="(i,index) in swipe">
      <a :href="i.link">
        <img :src="i.image" alt=""
             ref="swipe"
             style="width: 100%"
             v-show="showIndex ==index"
             :key="index"
             @onmouseover="clearGoSwipe"
             @mouseleave="goSwipe" @load="imageLoad">
      </a>
    </div>
    <div class="swipeIcon"
         v-show="isShowIcon" @onmouseover="clearGoSwipe"
         @mouseleave="goSwipe">
      <div @click="sub" class="iconLeft" :style="{top:-iconHeight1*2+'px'}">{{icon.left}}</div>
      <div @click="add" class="iconRight" :style="{top:-iconHeight1*2+'px'}">{{icon.right}}</div>
    </div>
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
      icon: {
        type: Object,
        default() {
          return {
            left: '👈',
            right: '👉',
          }
        }
      },
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
        iconHeight: 0,//轮播图指示器距离顶部高度
        iconHeight1: 0,//左右按钮距离顶部高度
        swipeHeight: 0, //轮播图高度
        showIndex: 0,
        swiper: '',
        isLoad: true
      }
    },
    methods: {
      imageLoad() {
        //监听图片是否加载完成
        if (this.isLoad) {
          this.$emit('swipeImageLoad')
          this.isLoad = false
        }
      },

      getIconHeight() {
        // 轮播图指示器距离顶部高度
        this.iconHeight = document.body.clientWidth * 195 / 375 - 16
      },
      getIconHeight1() {
        this.iconHeight1 = (document.body.clientWidth * 195 / 375)  / 2 - 32
      },
      goSwipe() {
        //轮播图计时器
        this.swiper = setInterval(() => {
          this.showIndex++;
          if (this.showIndex === this.swipe.length) {
            this.showIndex = 0
          }
        }, this.swipeTime);
        console.log(this.swiper);
      },
      clearGoSwipe() {
        //清楚计时器（鼠标在轮播图上）
        clearInterval(this.swiper)
      },

      add(){
        this.showIndex++;
        if (this.showIndex === this.swipe.length) {
          this.showIndex = 0
        }
      },
      sub(){
        if (this.showIndex === 0) {
          this.showIndex = this.swipe.length
        }
        this.showIndex--;
      }

    },
    mounted() {
      this.goSwipe()
      this.getIconHeight()
      this.getIconHeight1()
      console.log(this.iconHeight1)
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

  .swipeIcon {
    height: 64px;
    line-height: 64px;
    margin: auto;
    position: relative;
    text-align: center;
  }


  .iconLeft {
    position: absolute;
    left: 0;
    width: 36px;
  }

  .iconRight {
    position: absolute;
    float: left;
    right: 0;
    width: 36px;
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
