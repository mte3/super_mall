<template>
  <div class="tab-control">
    <div  v-for="(item,index) in titles"
          @click="handel(index)"
          :class="{active:index===currentIndex}"
          class="tab-control-title">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods:{
      handel(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
   background-color: #fff;
  }

  .tab-control-title {
    flex: 1;
  }
  .tab-control-title span{
    padding: 8px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{

    border-bottom: var(--color-high-text) solid 2px;
  }
</style>
