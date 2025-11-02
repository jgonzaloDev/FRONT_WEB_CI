import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/posts', name: 'posts', component: () => import('../views/PostsView.vue') },
  { path: '/profile', name: 'profile', component: () => import('../views/ProfileView.vue') },
  { path: '/menu', name: 'menu', component: () => import('../views/MenuView.vue') },
  { path: '/report', name: 'report', component: () => import('../views/ReportView.vue') },
  { path: '/chart', name: 'chart', component: () => import('../views/ChartView.vue') },


  { path: '/:pathMatch(.*)*', redirect: '/' }
]


export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 })
})
