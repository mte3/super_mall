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
          @mouseleave="goSwipe">
        </a>
      </div>
      <div class="spanList" ref="spanList">
        <div class="list" v-for="(o,i) in swipe" :key="i"
             :class="showIndex == i? 'active' : '' ">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Swipe",
      props:{
          swipe:{
            type:Array,
            default:[]
          },
        swipeTime:{
            type: Number,
          default: 3000
        }
      },
      data(){
          return {
            a:true,
            swipeHeight:0, //轮播图高度
            listWidth:0, //轮播图圆点总宽度
            showIndex:0,
            swiper:null
          }
      },
      methods:{
          goSwipe(){
            //轮播图计时器
            this.swiper = setInterval(() => {
              this.showIndex++;
              if (this.showIndex == this.swipe.length){
                this.showIndex = 0}
            },this.swipeTime)
          },
        clearGoSwipe(){
            //清楚计时器（鼠标在轮播图上）
            clearInterval(this.swiper)
        },
        getHeight(){
            //获取轮播图高度
              this.swipeHeight = this.$refs.swipe.offsetHeight
              console.log(this.swipeHeight)
        },

      },
      updated() {

      },
      mounted() {
          this.goSwipe()
        // this.getHeight()
      },
    }
</script>

<style scoped>
.list {
  margin:0 4px 0 4px;
  width: 8px;
  height: 8px;
  float: left;
  line-height: 40px;
  background-color: white;
  border-radius: 4px;
}
.swipe{
  position: relative;
}
.spanList{
  position: absolute;
  top:152px;
  left:calc(50% - 32px);
  justify-content: center;

}
  .active{
    background-color: blue;
  }
</style>
