<template>
  <div id="detailInfo">
    <div class="text">{{detailInfo}}</div>
    <h4>{{img.key}}</h4>
    <div v-for="i in img.list">
      <img :src="i" alt="" class="detailImage" style="width: 100%" @load="imgLoad">
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailInfo",
      props:{
          detailInfo:{
          },
        img:{
            type: Object
        }
      },
      data(){
         return{
           num: 0,
           imgLength:0
         }
      },
      methods:{
          //判断图片加载完进行一次回调
          imgLoad(){
            if(++this.num === this.imgLength){
              this.$emit('imageLoad')
            }
          },
      },
      watch:{
          detailInfo(){
            this.imgLength = this.img.list.length
          },
      }
    }
</script>

<style scoped>
#detailInfo{
  border-top: 6px solid #d4ccc6;
  width: 100%;
}
.detailImage{
  width: 100%;
}
  .text{
    font-size: 14px;
    padding: 24px 12px 12px 12px;
    letter-spacing: 1px;
  }
  #detailInfo h4{
    padding: 12px;
  }
</style>
