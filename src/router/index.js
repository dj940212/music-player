import Vue from 'vue'
import Router from 'vue-router'
// import Tab from '@/components/tab/tab'
// import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  }]
})
