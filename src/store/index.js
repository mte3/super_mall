import {createStore} from 'vuex'

export default createStore({
  state: {
    cartList: [],//购物车列表
  },
  mutations: {
    //唯一修改state的途径，同步操作
    addNum(state, payload) {
      payload.num++
    },
    addToCart(state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    //进行异步操作，要传context（上下文）
    addCart(context, orderGoods) {
      //查看之前商品是否有该商品
      let oldGood = context.state.cartList.find(function (i) {
        return (i.iid === orderGoods.iid &&
          i.Show === orderGoods.Show )
      })
      // 2.判断oldGood
      if (oldGood) {
        // oldGood.num = oldGood.num + orderGoods.num
        context.commit('addNum', oldGood)
      } else {
        // context.state.cartList.push(orderGoods)
        context.commit('addToCart', orderGoods)
      }
      // state.cartList.push(orderGoods)
    }
  },
  getter: {
    //计数属性
  },
  modules: {
    //模块化开发
  }
})
