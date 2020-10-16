import {ADD_NUM,ADD_TO_CART} from "./mutation-types";

export default {
  //唯一修改state的途径，同步操作
  [ADD_NUM](state, payload) {
    payload.oldGood.num = payload.orderGoods.num + payload.oldGood.num
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  }
}
