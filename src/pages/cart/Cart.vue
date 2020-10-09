<template>
  <div>
    <h2>购物车</h2>
    <swipe :swipe="swipe" :swipe-time="1500"/>
  </div>
</template>

<script>
  import Swipe from "../../components/common/swiper/Swipe";
  import {getImage} from "../../network/cart";
  import {getHomeMultidata} from "../../network/home";

  export default {
        name: "Cart",
      components:{
        Swipe
      },
    data(){
      return {
        swipe:[]
      }
    },
    created() {
          this.getImage();
    },
    methods:{
          getImage(){
            getImage().then(data => {
              this.swipe = data.data.banner.list;
            })
          },
    }
    }
</script>

<style scoped>

</style>
