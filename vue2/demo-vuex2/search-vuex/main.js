// main.js
import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

new Vue({
  el: '#app',
  store,  // 注入store到所有子组件
  components: { App }
})