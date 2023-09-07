import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/main/IndexViews.vue'),
  },
  {
    path: '/About',
    name: 'about',
    component: () => import('@/views/about/AboutViews.vue'),
  },
  {
    path: '/News',
    name: 'news',
    component: () => import('@/views/news/NewsViews.vue'),
  },
  {
    path: '/Events',
    name: 'events',
    component: () => import('@/views/events/EventsViews.vue'),
  },
  {
    path: '/Search',
    name: 'search',
    component: () => import('@/views/search/SearchViews.vue'),
  },
  {
    path: '/Member',
    name: 'member',
    component: () => import('@/views/member/MemberViews.vue'),
  },
  {
    path: '/Teach',
    name: 'teach',
    component: () => import('@/views/teach/TechViews.vue'),
  },
  {
    path: '/Related',
    name: 'related',
    component: () => import('@/views/related/RelatedViews.vue'),
  },
  {
    path: '/Meeting',
    name: 'meeting',
    component: () => import('@/views/meeting/MeetingViews.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
