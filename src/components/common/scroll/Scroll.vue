<template>

  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    updated() {
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          mouseWheel: true,//开启鼠标滚动
          click: true,//开启点击效果
          probeType:3,//监听滑动位置
          pullUpLoad:true//下拉刷新，上拉加载
        });
      },200)
    },
  }
</script>

<style scoped>

</style>


