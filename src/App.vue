<template>
    <div id="app">

        <qfp-navigation></qfp-navigation>
        <qfp-sidebar></qfp-sidebar>

        <section class="app-main" :class="{ sidebarClosed: !sidebarOpened }">
            <router-view></router-view>
        </section>

    </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  import Navigation from './components/layout/Navigation.vue'
  import Sidebar from './components/layout/Sidebar.vue'

  export default {
    name: 'app',
    components: {
      'qfp-navigation': Navigation,
      'qfp-sidebar': Sidebar
    },
    computed: mapGetters({
      sidebarOpened: 'sidebarOpened'
    })
  }
</script>


<style lang="scss">
    @import "~bulma/sass/utilities/initial-variables.sass";
    @import "assets/sass/bulma-variables.sass";
    @import '~bulma';
    @import "assets/sass/bulma-overrides.sass";

    .app-main {
        padding-top: 50px;
        margin-left: 252px;
        transform: translate3d(0, 0, 0);
        transition: margin-left 0.7s;

        @include mobile() {
            margin-left: 0;
        }

        &.sidebarClosed {
             margin-left: 0;
             transition: margin-left 0.7s;
         }

    }

</style>
