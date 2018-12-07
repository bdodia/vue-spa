import Vue from 'vue'
import Router from 'vue-router'
import JavaQuestions from '@/components/JavaQuestions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JavaQuestions',
      component: JavaQuestions
    }
  ]
})
