<template>
    <div class="navbar-item context-menu is-pulled-right"
         :class="{'is-active': isMenuOpened}">

        <a v-on-clickaway="away" @click="isMenuOpened = !isMenuOpened">
            <i class="fa fa-ellipsis-v"></i>
        </a>

        <div class="navbar-dropdown">
            <a class="navbar-item" v-for="item in items" :key="item.title" :src="item.link">
                <span class="icon"><i class="fa" :class="item.iconClass"></i></span> {{item.title}}
            </a>
        </div>
    </div>
</template>

<script>

  import {mixin as clickaway} from 'vue-clickaway'

  export default {

    mixins: [clickaway],
    props: ['items'],

    data () {
      return {
        isMenuOpened: false
      }
    },

    methods: {
      away () {
        this.isMenuOpened = false
      }

    }
  }
</script>

<style lang="scss">
    .context-menu {
        padding: 0;

        .navbar-dropdown  {
            border-top: none;
            border-radius: 3px;
            box-shadow: 0 5px 10px rgba(10, 10, 10, 0.5);
        }
    }
</style>
