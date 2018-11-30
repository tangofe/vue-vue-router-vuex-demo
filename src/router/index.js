import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import First from '@/components/main/First'
import Second from '@/components/main/Second'
import homePage from '@/components/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/hh',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'first',
          component: First
        },
        {
          path: 'second',
          component: Second
        }
      ]
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePage
    }
  ]
})
