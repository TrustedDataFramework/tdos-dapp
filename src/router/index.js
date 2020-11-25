import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// 解决重复点击路由报错的BUG
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}



export default new Router({
  //mode:'history',
  routes: [
    {
      path: '/finance',//金融
      name: 'finance',
      component: resolve=>(require(["@/views/finance/index"],resolve))
    },
    {
      path: '/finance/onChain',//金融上链
      name: 'financeOnChain',
      component: resolve=>(require(["@/views/finance/onChain"],resolve))
    },
    {
      path: '/finance/success',//金融上链成功
      name: 'financeSuccess',
      component: resolve=>(require(["@/views/finance/success"],resolve))
    },
    {
      path: '/finance/confirmInfo',//金融上链信息确认
      name: 'financeConfirmInfo',
      component: resolve=>(require(["@/views/finance/confirm"],resolve))
    },
    {
      path: '/publicWelfare',//公益
      name: 'publicWelfare',
      component: resolve=>(require(["@/views/publicWelfare/index"],resolve))
    },
    {
      path: '/publicWelfare/onChain',//公益上链
      name: 'publicWelfareOnChain',
      component: resolve=>(require(["@/views/publicWelfare/onChain"],resolve))
    },
    {
      path: '/publicWelfare/search',//公益查询
      name: 'onChain',
      component: resolve=>(require(["@/views/publicWelfare/search"],resolve))
    },
    {
      path: '/publicWelfare/result',//公益查询
      name: 'publicWelfareResult',
      component: resolve=>(require(["@/views/publicWelfare/searchResult"],resolve))
    }
  ]
})
