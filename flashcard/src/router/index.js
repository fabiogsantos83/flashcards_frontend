import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassView from '../views/ClassView.vue'
import LessonView from '../views/LessonView.vue'
import FlashcardView from '../views/FlashcardView.vue'
import SearchView from '../views/SearchView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/class',
    name: 'class',
    component: ClassView
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: LessonView
  },
  {
    path: '/flashcard',
    name: 'flashcard',
    component: FlashcardView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
