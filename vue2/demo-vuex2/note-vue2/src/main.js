import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuex from 'vuex'
import store from './store'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Vuex)

Vue.use(Element)

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

