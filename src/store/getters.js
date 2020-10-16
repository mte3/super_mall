export default {
  //计数属性
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  Price(state) {
    return state.cartList.filter(c => {
      return c.checked
    }).reduce((preValue, c) => {
      return preValue + (c.Show.nowprice) / 100 * c.num
    }, 0).toFixed(2)
  },
  Settlement(state) {
    return state.cartList.filter(i => i.checked).length
  }
}
