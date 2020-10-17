export default {
  //计数属性
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  /**
   * @return {string}
   */
  Price(state) {
    return state.cartList.filter(c => {
      return c.checked
    }).reduce((preValue, c) => {
      return preValue + (c.Show.nowprice) / 100 * c.num
    }, 0).toFixed(2)
  },
  /**
   * @return {number}
   */
  Settlement(state) {
    return state.cartList.filter(i => i.checked).length
  },
  isSettlementAll(state){
    // return !(state.cartList.filter(i => !i.checked).length)
    return !state.cartList.find(i => !i.checked) //有一个不选中状态就会returnfalse
  }
}
