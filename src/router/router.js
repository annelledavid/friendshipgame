import Vue from 'vue'
import Router from 'vue-router'
import Start from '../pages/Start.vue'
import Category from '../pages/Category.vue'
import QuizCreate from '../pages/QuizCreate.vue'
import QuizTake from '../pages/QuizTake.vue'
import QuizReplay from '../pages/QuizReplay.vue'
import End from '../pages/End.vue'
import Home from '../pages/Home.vue'
import QuizLeaderboard from '../pages/QuizLeaderboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
        path: '/quiz-create',
        name: 'quiz-create',
        component: QuizCreate
    },
    {
        path: '/quiz-take',
        name: 'quiz-take',
        component: QuizTake
    },
    {
      path: '/quiz-replay/:quiz_session',
      name: 'quiz-replay',
      component: QuizReplay
    },
    {
        path: '/end',
        name: 'end',
        component: End
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
      path: '/quiz-leaderboard/:id',
      name: 'quiz-leaderboard',
      component: QuizLeaderboard
    },
  ]
})