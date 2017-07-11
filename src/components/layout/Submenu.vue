<template>
    <li>
        <a class="menu-label" @click="toggle">{{submenu.name}}</a>
        <expanding>
            <ul class="menu-list" v-show="isOpened">
                <li v-for="item in submenu.items" :key="item.title">
                    <router-link :to="item.path">
                        <span class="icon"><i :class="['fa', item.icon]"></i></span>
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </expanding>
        <p></p>
    </li>
</template>

<script>

  import Expanding from 'vue-bulma-expanding'

  export default {
    components: {
      Expanding
    },

    props: ['submenu'],

    data () {
      return {
        isOpened: false
      }
    },

    methods: {
      toggle () {
        this.isOpened = !this.isOpened
      }
    }
  }
</script>
