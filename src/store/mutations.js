import {ADD_NUM, ADD_TO_CART} from "./mutation-types";

export default {
  //唯一修改state的途径，同步操作
  [ADD_NUM](state, payload) {
    // 详情页 购物车有同样商品 数量就相加
    payload.oldGood.num = payload.orderGoods.num + payload.oldGood.num
  },
  [ADD_TO_CART](state, payload) {
    // 详情页添加到购物车
    payload.checked = true
    state.cartList.push(payload)
  },
  addCartItemNum(state, index) {
    // 购物车商品数量加一
    state.cartList[index].num++
  },
  subCartItemNum(state, index) {
    // 购物车商品数量减一
    if (state.cartList[index].num > 1) {
      state.cartList[index].num--
    }
  },
  handelCheck(state, index) {
    //购物车点击选中
    state.cartList[index].checked = !state.cartList[index].checked
  },
  handelAll(state, getters) {
    if (getters) {
      //点击->如果在全选状态就全不选
      state.cartList.forEach(i => i.checked = false)
    } else {
      //点击->如果在全不选或部分选中状态就全选
      state.cartList.forEach(i => i.checked = true)
    }
  }
}
