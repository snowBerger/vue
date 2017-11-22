import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
