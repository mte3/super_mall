<template>
  <div id="swipe">
    <div class="swipe" v-for="(i,index) in swipe">
      <a :href="i.link">
        <img :src="i.image" alt=""
             ref="swipe"
             v-show="showIndex === index"
             :key="index"
             @touchstart="clearGoSwipe"
             @touchend="goSwipe" @load="imageLoad">
      </a>
    </div>
    <div class="spanList" ref="spanList">
      <div class="list" v-for="(o,i) in swipe" :key="i"
           :class="showIndex === i? 'active' : '' ">
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
    },
    data() {
      return {
        showIndex: 0,
        swiper: null,
        isLoad: true,
        startX: 0,//开始位置
        endX: 0,
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
      goSwipe(e) {
        if (e) {
          this.endX = e.changedTouches[0].pageX
          let X = this.startX - this.endX
          if (X > 50) {
            this.showIndex += 1
            if (this.showIndex === this.swipe.length) {
              this.showIndex = 0
            }
          } else if (X < -50) {
            if (this.showIndex === 0) {
              this.showIndex = this.swipe.length
            }
            this.showIndex -= 1
          }
        }


        //轮播图计时器
        this.swiper = setInterval(() => {
          this.showIndex++;
          if (this.showIndex === this.swipe.length) {
            this.showIndex = 0
          }
        }, this.swipeTime);
      },
      clearGoSwipe(e) {
        if (e) {
          this.startX = e.touches[0].pageX
        }
        //清楚计时器（鼠标在轮播图上）
        clearInterval(this.swiper)
      },
    },
    mounted() {
      this.goSwipe()
    },
  }
</script>

<style scoped>
  .swipe img {
    width: 100%;
  }

  #swipe {
    position: relative;
    overflow: hidden;
  }

  .swipe {
    display: flex;
  }

  .list {
    margin: 0 4px;
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
