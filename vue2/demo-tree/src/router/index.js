import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/tree'
        },
        {
          path: '/tree',
          name: '组织架构树',
          component: resolve => require(['../pages/index'], resolve)
        }
      ]
    }
  ]
})
