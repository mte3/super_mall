<template>
  <div class="titleList">
    <scroll class="scroll">
      <div v-for="(i,index) in titleList" class="titleItem"
           :class="{active:index===handelIndex}" @click="handelTitle(index)">
        {{i.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";

  export default {
    name: "TitleList",
    components: {Scroll},
    props: {
      titleList: {
        type: Array
      }
    },
    data() {
      return {
        handelIndex: 0,
        title:'',
        key:'',
        miniKey:'',

      }
    },
    methods: {
      handelTitle(index) {
        this.handelIndex = index
        this.title = this.titleList[index].title
        this.key =  this.titleList[index].maitKey
        this.miniKey = this.titleList[index].miniWallkey
        this.$emit('handelTitle',this.key,this.title,this.miniKey)
      }
    }
  }
</script>

<style scoped>
  .scroll {
    background-color: white;
    height: calc(100% - 93px);
    width: 30%;
    top: 44px;
    left: 0;
    overflow: hidden;
    position: absolute;
  }

  .titleList {
    background-color: red;
    text-align: center;
    width: 30%;
  }

  .active {
    color: white;
    background-color: #ff8198;
    font-weight: 600;
    border-radius: 4px;
  }

  .titleItem {
    width: 100%;
    padding: 12px 0;
  }
</style>
