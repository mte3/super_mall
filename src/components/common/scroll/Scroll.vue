<template>

  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>

  </div>

</template>

<!--滑动组件-->
<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props:{
      probeType: {
        type:Number,
        default:0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    methods:{
      refresh(){
        // 重新计数滑动高度
        this.scroll && this.scroll.refresh()
      },
      scrollTo(x=0,y=0,time=500){
        //滑动位置
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp();
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    },
    mounted() {
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          // mouseWheel: true, //开启鼠标滚动
          click: true, //开启点击效果
          probeType:this.probeType, //是否监听滑动位置
          pullUpLoad:this.pullUpLoad, //是否监听上/下拉 /下拉刷新，上拉加载
        });

        //监听滑动位置，/是否显示返回顶部按钮
        if(this.probeType == 2 || this.probeType == 3){
          this.scroll.on('scroll',(position) => {
            this.$emit('scroll',position)
          });
        }

        //监听上拉 / 上拉加载更多
        if(this.pullUpLoad){
          this.scroll.on('pullingUp',() => {
            this.$emit('pullingUp')
          })
        }

      },200)
    },
  }
</script>

<style scoped>

</style>


