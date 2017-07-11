<template>
    <div class="hero is-light app-navbar">
        <nav class="nav">
            <div class="nav-left">
                <a class="nav-item" @click="toggleSidebar()">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
            </div>
            <div class="nav-right"><a href="#" class="nav-item is-tab is-active">Home</a>
                <a href="#" class="nav-item is-tab">Company</a>
                <a href="#" class="nav-item is-tab">About Us</a>
                <a href="#" class="nav-item is-tab">Contact</a>
            </div>
        </nav>
    </div>
</template>

<script>

  import { mapMutations } from 'vuex'

  export default {
    name: 'navigation',
    data () {
      return {}
    },
    methods: {
      ...mapMutations([
        'toggleSidebar'
      ])
    }
  }
</script>

<style lang="scss">
    .app-navbar {
        position: fixed;
        width: 100%;
        z-index: 1024;
        box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
    }
</style>
