import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/home'
import error from '../views/error'
import Note from '../views/note'
import MovieList from '../views/movie-list'
import About from '../views/about'

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  // scrollBehavior: () => { y: 0 },
  routes: [
    { path: '/', component: Home },
    { path: '/error', component: error },
    { path: '/note', component: Note },
    { path: '/movie-list', component: MovieList },
    { path: '/about', component: About }
  ]
})
