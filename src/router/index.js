import VueRouter from "vue-router"
import Vue from "vue"
import { clearPending } from '@/utils/axiosCancel'
Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/index')
  },
  {
    path: '/form',
    component: () => import('@/views/form')
  },
  {
    path: '/model',
    component: () => import('@/views/model')
  },
  {
    path: '/slide',
    component: () => import('@/views/slide')
  }
]
const router = new VueRouter({
  routes: constantRoutes,
})

router.beforeEach((to, from, next) => {
  clearPending()
  // ...
  next()
})

export default router