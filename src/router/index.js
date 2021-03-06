import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/Home'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'actClass',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
