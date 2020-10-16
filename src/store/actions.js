import {ADD_NUM,ADD_TO_CART} from "./mutation-types";

export default {
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
      context.commit(ADD_NUM, {oldGood, orderGoods})
    } else {
      // context.state.cartList.push(orderGoods)
      context.commit(ADD_TO_CART, orderGoods)
    }
  }
}
