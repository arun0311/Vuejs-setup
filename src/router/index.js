import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/loginPage'
import MainPage from '@/components/mainPage'
import VueForm from 'vueform'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
