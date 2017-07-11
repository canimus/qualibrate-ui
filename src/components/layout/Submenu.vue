<template>
    <li>
        <a class="menu-label" @click="toggle">{{submenu.name}}
            <span class="icon is-small is-angle is-pulled-right" :class="{ 'is-opened': isOpened }">
                <i class="fa fa-angle-down"></i>
            </span>
        </a>
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

<style lang="scss">

    .is-angle {
        font-size: 14px;
        transition: transform .377s ease;

        &.is-opened {
            transition: transform .377s ease;
            transform: rotate(180deg);
        }
    }

</style>

