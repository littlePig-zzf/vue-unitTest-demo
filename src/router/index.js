import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OperateNum from '@/components/OperateNum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/operateNum',
      name: 'OperateNum',
      component: OperateNum
    }
  ]
})
