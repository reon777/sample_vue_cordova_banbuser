import Vue from 'vue'
import VueRouter from 'vue-router'
import Broadcast from '../views/Broadcast.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'broadcast',
    component: Broadcast
  },
  {
    path: '/player',
    component: () => import('../views/Player.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
