<template>
  <div id="imageSwipe">
    <div class="imageSwipe" v-for="(i,index) in imageSwipe">
      <img :src="i" alt=""
           ref="swipe"
           class="swipeImage"
           v-show="showIndex ===index"
           :key="index"
           @touchstart="clearGoSwipe"
           @touchend="goSwipe" @load="imageLoad">
    </div>
    <div class="spanList" ref="spanList">
      <div class="list" v-for="(o,i) in imageSwipe" :key="i"
           :class="showIndex === i? 'active' : '' ">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ImageSwiper",
    props: {
      imageSwipe: {
        type: Array,
        default: []
      },
      swipeTime: {
        type: Number,
        default: 3000
      },
    },
    data() {
      return {
        iconHeight: 0,//轮播图指示器距离顶部高度
        swipeHeight: 0, //轮播图高度
        showIndex: 0,
        imageSwiper: null,
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
      goSwipe() {
        //轮播图计时器
        this.imageSwiper = setInterval(() => {
          this.showIndex++;
          if (this.showIndex === this.imageSwipe.length) {
            this.showIndex = 0
          }
        }, this.swipeTime);
      },
      clearGoSwipe() {
        //清楚计时器（鼠标在轮播图上）
        clearInterval(this.imageSwiper)
      },
    },
    mounted() {
      this.goSwipe()
    },
  }
</script>

<style scoped>
  .swipeImage {
    width: 100%;
  }

  #imageSwipe{
    height: 300px;
    position: relative;
    overflow: hidden;
  }
  .imageSwipe{
    display: flex;
  }
  .list {
    margin: 0 4px 0 4px;
    width: 8px;
    height: 8px;
    float: left;
    line-height: 40px;
    background-color: white;
    border-radius: 4px;
  }
  .spanList {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .active {
    background-color: #ff5777;
  }
</style>
