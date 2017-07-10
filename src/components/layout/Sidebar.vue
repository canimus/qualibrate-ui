<template>
    <aside class="menu section">
        <qfp-submenu v-for="submenu in menus" :key="submenu.name" :submenu="submenu"></qfp-submenu>
    </aside>
</template>

<script>

  import Submenu from './Submenu.vue'

  export default {
    name: 'sidebar',
    components: {
      'qfp-submenu': Submenu
    },
    data () {
      return {

        menus: [
          {
            name: 'Design',
            items: [
              {path: '/', title: 'Dashboard', icon: 'fa-tachometer', color: 'is-info'},
              {path: 'processes', title: 'Processes', icon: 'fa-sitemap'},
              {path: 'roles', title: 'Roles', icon: 'fa-users'},
              {path: 'tags', title: 'Tags', icon: 'fa-tags'}
            ]
          },
          {
            name: 'Testing',
            items: [
              {path: '/flows', title: 'Flows', icon: 'fa-trello'},
              {path: '/tasks', title: 'Tasks', icon: 'fa-tasks'},
              {path: '/user-actions', title: 'User Actions', icon: 'fa-hand-o-up'},
              {path: '/user-functions', title: 'User Functions', icon: 'fa-superscript'},
              {path: '/data-sets', title: 'Data Sets', icon: 'fa-database'},
              {path: '/scenarios', title: 'Scenarios', icon: 'fa-gears'},
              {path: '/cycles', title: 'Cycles', icon: 'fa-refresh'}
            ]
          },
          {
            name: 'Planning',
            items: [
              {path: '/projects', title: 'Projects', icon: 'fa-briefcase'},
              {path: '/work-items', title: 'Work Items', icon: 'fa-check-square-o'},
              {path: '/schedules', title: 'Schedules', icon: 'fa-calendar-plus-o'},
              {path: '/analytics', title: 'Analytics', icon: 'fa-bar-chart-o'},
              {path: '/defects', title: 'Defects', icon: 'fa-bug'}
            ]
          },
          {
            name: 'Training',
            items: [
              {path: '/playbacks', title: 'Playbacks', icon: 'fa-film'},
              {path: '/handbooks', title: 'Handbooks', icon: 'fa-book'}
            ]
          },
          {
            name: 'Environment',
            items: [
              {path: '/adapters', title: 'Adapters', icon: 'fa-laptop'},
              {path: '/licenses', title: 'Licenses', icon: 'fa-unlock-alt'},
              {path: '/archive', title: 'Archive', icon: 'fa-archive'},
              {path: '/status', title: 'Status', icon: 'fa-heartbeat'}
            ]
          }
        ]
      }
    }
  }
</script>
