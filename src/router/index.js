import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: require('@/components/Dashboard.vue')
    },
    {
      path: '/processes',
      name: 'Processes',
      component: require('@/components/Processes.vue')
    },
    {
      path: '/roles',
      name: 'Roles',
      component: require('@/components/Roles.vue')
    },
    {
      path: '/tags',
      name: 'Tags',
      component: require('@/components/Tags.vue')
    }
  ]
})
