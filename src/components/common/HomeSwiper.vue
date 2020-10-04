<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" style="width: 100%"/>
      </a>
    </van-swipe-item>
  </van-swipe>

</template>

<script>
  import {Swipe, SwipeItem} from 'vant';
  import {Lazyload} from 'vant';

  export default {
    name: "HomeSwiper",
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,

    },
    methods: {},
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        res:[
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307511656,3386189028&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2578117723,120607577&fm=26&gp=0.jpg',
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=31074843,1939786301&fm=26&gp=0.jpg'
        ]
      }
    },
    created() {
      console.log('////')
    }
  }
</script>

<style scoped>

</style>
