<template>

<div ref="wrapper" class="all-wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>

</template>

<script>
  import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
      data(){
          return {
            scroll:null
          }
      },
      mounted() {
          this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:3,
            pullUpLoad:true,
            click:true,
          })

        this.scroll.on('scroll',(position) => {
          //监听滑动位置
          // console.log(position)
        })

        this.scroll.on('pullingUp',() =>{
          // console.log('上拉加载更多');
          setTimeout(() => {
            this.scroll.finishPullUp()
          },3000)
        })
      },

    }
</script>

<style scoped>

</style>
