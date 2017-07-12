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
      component: require('@/components/pages/Dashboard.vue')
    },
    {
      path: '/processes',
      name: 'Processes',
      component: require('@/components/pages/Processes.vue')
    },
    {
      path: '/roles',
      name: 'Roles',
      component: require('@/components/pages/Roles.vue')
    },
    {
      path: '/tags',
      name: 'Tags',
      component: require('@/components/pages/Tags.vue')
    },
    {
      path: '/flow',
      name: 'Flow',
      component: require('@/components/pages/Flow.vue')
    }
  ]
})
