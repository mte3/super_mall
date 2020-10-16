import {createStore} from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";


const state = {
  cartList: [],//购物车列表
}
export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
    //模块化开发
  }
})
