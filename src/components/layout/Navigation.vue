<template>
    <div class="hero is-light app-navbar">
        <nav class="navbar">
            <div class="navbar-start">
                <a class="nav-item" @click="toggleSidebar()">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Design
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-flask"></i></span> Design
                        </a>

                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-tasks"></i></span> Testing
                        </a>

                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-bug"></i></span> Defects
                        </a>

                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-tachometer"></i></span> Dashboard
                        </a>
                    </div>
                </div>


            </div>
            <div class="navbar-end">

                <a href="#" class="nav-item is-tab">
                    <i class="fa fa-home" aria-hidden="true"></i>
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-building-o"></i></span> Company Settings
                        </a>

                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-gears"></i></span> Project Settings
                        </a>

                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-pie-chart"></i></span> DV Settings
                        </a>


                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        PS-Holding
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            item 1
                        </a>

                        <a class="navbar-item">
                            item 2
                        </a>

                        <a class="navbar-item">
                            item 3
                        </a>
                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <span class="icon"><i class="fa fa-leaf"></i></span> Select Project
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-leaf"></i></span> project 1
                        </a>

                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-leaf"></i></span> project 2
                        </a>

                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-leaf"></i></span> project 3
                        </a>
                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <span class="icon"><i class="fa fa-user"></i></span> Martin Razus
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Maritn Razus<br/>
                            martin.razus@toptal.com
                        </a>

                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-plug"></i></span> Manage Adapters
                        </a>
                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-download"></i></span> Download Adapters
                        </a>
                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-envelope-o"></i></span> Send Feedback
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            <span class="icon"><i class="fa fa-power-off"></i></span> Logout
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

  import {mapMutations} from 'vuex'

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

    .navbar-end {
        .navbar-dropdown {
            right: 0;
            left: auto;
        }
    }

    .navbar-item .icon i.fa {
        font-size: 12px;
    }
</style>
