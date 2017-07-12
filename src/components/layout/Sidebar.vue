<template>
    <aside class="menu section app-sidebar" :class="{ slideInLeft: !sidebarOpened }">
        <ul class="menu-list">
            <qfp-submenu v-for="submenu in menus" :key="submenu.name" :submenu="submenu"></qfp-submenu>
        </ul>
    </aside>
</template>

<script>

  import { mapGetters } from 'vuex'
  import Submenu from './Submenu.vue'

  export default {
    name: 'sidebar',
    components: {
      'qfp-submenu': Submenu
    },

    computed: mapGetters({
      sidebarOpened: 'sidebarOpened'
    }),

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
              {path: '/flow', title: 'Flows', icon: 'fa-trello'},
              {path: '/task', title: 'Tasks', icon: 'fa-tasks'},
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

<style lang="scss">
    @import '~bulma/sass/utilities/variables';
    @import '~bulma/sass/utilities/mixins';

    .app-sidebar {
        position: fixed;
        top: 50px;
        left: 0;
        bottom: 0;
        padding: 20px 0 50px;
        width: 250px;
        min-width: 45px;
        max-height: 100vh;
        height: calc(100% - 50px);
        z-index: 1024 -1;
        background: #FFF;
        box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
        overflow-y: auto;
        overflow-x: hidden;
        transition: margin-left 0.7s;

        @include mobile() {
            transform: translate3d(-180px, 0, 0);
        }

        &.slideInLeft {
            margin-left: -250px;
            transition: margin-left 0.7s;
        }

    }

    .menu-list i.fa {
        font-size: 14px;
    }
</style>
