import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassView from '../views/ClassView.vue'
import LessonView from '../views/LessonView.vue'
import FlashcardView from '../views/FlashcardView.vue'
import SearchView from '../views/SearchView.vue'
import FlashView from '../views/FlashView.vue'
import LoginView from '../views/LoginView.vue'
import AddUserView from '../views/AddUserView.vue'

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
    path: '/study',
    name: 'study',
    component: FlashView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/add-user',
    name: 'add-user',
    component: AddUserView
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
