<template>
<div class="recommend">
  <div class="recommend-item" v-for="item in recommends">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
    export default {
        name: "RecommendView",
      props:{
          recommends:{
            type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 12px 0 16px;
    border-bottom:8px solid #eee;
  }
  .recommend-item{
    flex: 1;
    font-size: 12px;
  }
  .recommend-item img{
    margin-bottom: 5px;
    width: 65px;
    height: 65px;
  }
</style>
