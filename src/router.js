import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import MemoryMethods from './views/MemoryMethods.vue'
import TimeManagement from './views/TimeManagement.vue'
import OnlineCourses from './views/OnlineCourses.vue'
import LanguageLearning from './views/LanguageLearning.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/memory-methods', component: MemoryMethods },
  { path: '/time-management', component: TimeManagement },
  { path: '/online-courses', component: OnlineCourses },
  { path: '/language-learning', component: LanguageLearning },
  { path: '/:catchAll(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router