<template>
  <div>
    <nav-bar>

      <template v-slot:left>
        <div class="back" @click="handelBack">
          <img src="../../../assets/img/common/back.svg" alt="">
        </div>
      </template>

      <template v-slot:center>
        <div class="titles">
          <div v-for="(i,index) in titles"
               class="title"
               @click="handelTitle(index)" :class="{active : currentIndex === index}">{{i}}
          </div>
        </div>
      </template>

    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '评论',  '详情','推荐',],
        currentIndex: 0
      }
    },
    methods: {
      handelTitle(index) {
        this.currentIndex = index;
        this.$emit('titleClick',index)
      },
      handelBack(){
        //点击返回
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .titles {
    display: flex;
    font-size: 14px;
  }

  .title {
    flex: 1;
  }
  .back{
    padding-top: 6px;
  }

  .active {
    color: #ff5777;
  }
</style>
