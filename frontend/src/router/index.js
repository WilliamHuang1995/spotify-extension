import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AccessToken from '@/components/AccessToken'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/access/:accessToken',
      name: 'accesstoken',
      component: AccessToken
    }
  ],
  mode: 'history'
})
