<template>
    <div class="user-action" :class="{active: isActive}" @click="setActive()">
        <span class="icon">
            <i class="is-pulled-left fa fa-small" :class="userAction.iconClass"></i>
        </span>

        {{userAction.title}}

        <qfp-context-menu :items="menuItems"></qfp-context-menu>

    </div>
</template>

<script>

  import ContextMenu from './../../layout/ContextMenu.vue'

  export default {

    props: ['userAction'],

    components: {
      'qfp-context-menu': ContextMenu
    },

    data () {
      return {
        menuItems: [
          {title: 'Record Step', iconClass: 'fa-dot-circle-o', link: '#asdf'},
          {title: 'Delete Step', iconClass: 'fa-trash', link: '#asdf'},
          {title: 'Duplicate Step', iconClass: 'fa-copy', link: '#asdf'}
        ]
      }
    },

    computed: {
      isActive () {
        return this.userAction.id === this.$store.getters.activeUserAction.id
      }
    },

    methods: {
      setActive () {
        this.$emit('setTaskActive')
        this.$store.commit('setActiveUserAction', this.userAction)
      }
    }
  }
</script>

<style lang="scss">

    @import "../../../assets/sass/bulma-variables.sass";

    .user-action {
        font-size: 12px;
        box-shadow: 0 1px 2px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
        margin: 5px 0;
        padding: 4px 7px 4px 3px;
        cursor: move;

        &.active {
            box-shadow: 0 1px 2px $blue, 0 0 0 1px $blue;
        }

        &.sortable-ghost {
            color: #ddd;
        }

        &.sortable-drag {
            opacity: 1;
            background: $blue;
            color: #fff;
            cursor: move;
        }

        i.fa-ellipsis-v {
            font-size: 16px;
            cursor: pointer;
            padding: 3px;
        }

        i.fa-small {
            font-size: 12px;
        }

    }
</style>
