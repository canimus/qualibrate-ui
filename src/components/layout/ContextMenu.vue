<template>
    <div class="navbar-item context-menu is-pulled-right"
         :class="{'is-active': isMenuOpened}" :style="menuStyle">

        <a v-if="showTriggerIcon" @click="open">
            <i class="fa fa-ellipsis-v"></i>
        </a>

        <div class="navbar-dropdown" ref="menu" @blur="close" tabindex="0">

            <a class="navbar-item" v-for="item in items" :key="item.title" :src="item.link" @click="close">
                <span class="icon"><i class="fa" :class="item.iconClass"></i></span>
                {{item.title}}
            </a>

        </div>
    </div>

</template>

<script>

  import Vue from 'vue'

  export default {

    props: ['items', 'show-trigger-icon', 'menu-style', 'open-trigger'],

    data () {
      return {
        isMenuOpened: false
      }
    },

    methods: {

      open () {
        this.isMenuOpened = true
        Vue.nextTick(() => {
          this.$refs.menu.focus()
        })
      },

      close () {
        this.isMenuOpened = false
      }
    },

    watch: {
      openTrigger (value) {
        if (value === 0) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }

</script>

<style lang="scss">
    .context-menu {
        padding: 0;
        position: absolute;
        top: 5px;
        right: 10px;

        .navbar-dropdown {
            position: absolute;
            border-top: none;
            border-radius: 3px;
            box-shadow: 0 5px 10px rgba(10, 10, 10, 0.5);
            outline: none;
        }
    }
</style>
