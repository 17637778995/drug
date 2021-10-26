import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Main',
    component: () => import('../views/Main'),
    children: [
      {
        path: '/home',
        component: () => import('../views/home')
      },
      {
        path: '/Medicine',
        component: () => import('../views/Medicine')
      },
      {
        path: '/DrugGod',
        component: () => import('../views/DrugGod')
      },
      {
        path: '/Shopping',
        component: () => import('../views/Shopping')
      },
      {
        path: '/My',
        component: () => import('../views/My')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
