
import BackTop from "/../components/content/backTop/BackTop";
export const backTop = {
  components: {
    BackTop,
  },
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    BackTop() {
      //点击回到顶部
      this.$refs.scroll.scrollTo()
    },
  }
}
