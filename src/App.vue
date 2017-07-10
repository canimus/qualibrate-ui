<template>
    <div id="app">

        <qfp-navigation></qfp-navigation>

        <div class="columns">
            <div class="column is-2">
                <qfp-sidebar></qfp-sidebar>
            </div>
            <div class="column is-8">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script>

  import Navigation from './components/layout/Navigation.vue'
  import Sidebar from './components/layout/Sidebar.vue'

  export default {
    name: 'app',
    components: {
      'qfp-navigation': Navigation,
      'qfp-sidebar': Sidebar
    }
  }
</script>


<style lang="sass">
    @import "../node_modules/bulma/sass/utilities/initial-variables.sass";
    @import "assets/sass/bulma-variables.sass";
    @import "../node_modules/bulma/bulma.sass";
    @import "assets/sass/bulma-overrides.sass";
</style>
