import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 定义组件, 也可以从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import Second from '../components/Test2.vue'

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: __dirname,
  routes: [
    { path: '/first', component: First },
    { path: '/second', component: Second }
  ]
})
