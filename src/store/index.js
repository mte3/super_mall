import {createStore} from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";


const state = {
  cartList: [],//购物车列表s
  shopList:[]
}
export default createStore({
  state,
  mutations,//修改state的唯一途径，同步操作
  actions,//进行异步操作
  getters,//类似于计算属性
  modules: {
    //模块化开发
  }
})
