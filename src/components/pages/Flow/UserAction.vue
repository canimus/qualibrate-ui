<template>
    <div class="user-action" :class="{active: isActive}" @click="setActive()" @blur="removeEditable">
        <span class="icon">
            <i class="is-pulled-left fa fa-small" :class="userAction.iconClass"></i>
        </span>

        <span class="user-action-title" @click="setEditable">
            {{ userAction.title | truncate(40) }}
        </span>

        <textarea v-if="editable" v-model="editableTitle" @blur="removeEditable" ref="textarea"></textarea>

        <div class="navbar-item context-action-menu"
             :class="{'is-active': isMenuOpened}">

            <a @click="toggleMenu">
                <i class="fa fa-ellipsis-v"></i>
            </a>

        </div>
    </div>
</template>

<script>

  import ContextMenu from './../../layout/ContextMenu.vue'
  import Vue from 'vue'

  export default {

    props: ['userAction'],

    components: {
      'qfp-context-menu': ContextMenu
    },

    data () {
      return {
        editableTitle: this.userAction.title,
        menuItems: [
          {title: 'Record Step', iconClass: 'fa-dot-circle-o', link: '#asdf'},
          {title: 'Delete Step', iconClass: 'fa-trash', link: '#asdf'},
          {title: 'Duplicate Step', iconClass: 'fa-copy', link: '#asdf'}
        ],
        editable: false,
        isMenuOpened: false
      }
    },

    computed: {
      isActive () {
        return this.userAction.id === this.$store.getters.activeUserAction.id
      }
    },

    methods: {
      removeEditable () {
        this.editable = false
        this.userAction.title = this.editableTitle
      },

      setEditable () {
        if (this.isActive) {
          this.editable = true
          Vue.nextTick(() => {
            this.$refs.textarea.focus()
          })
        }
      },

      setActive () {
        this.$emit('setTaskActive')
        this.$store.commit('setActiveUserAction', this.userAction)

        if (this.userAction.steps) {
          this.$store.commit('setActiveStep', this.userAction.steps[0])
        } else {
          this.$store.commit('setActiveStep', {})
        }
      },

      toggleMenu () {
        this.isMenuOpened = !this.isMenuOpened

        let top = this.$el.getBoundingClientRect().top
        this.$emit('toggleMenu', top)
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
        position: relative;

        &.active {
            box-shadow: 0 1px 2px $blue, 0 0 0 1px $blue;
        }

        &.sortable-chosen.sortable-ghost {
            background-color: $blue;
            opacity: 0.3;
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

        textarea {
            font-size: 12px;
            padding: 4px 7px 4px 4px;
            position: absolute;
            top: 3px;
            left: 26px;
            width: 230px;
            outline: none;
            border: none;
            background: $blue;
            color: #fff;
            opacity: 1;
        }

        i.fa-ellipsis-v {
            font-size: 16px;
            cursor: pointer;
            padding: 3px;
        }

        i.fa-small {
            font-size: 12px;
        }

        .context-action-menu {
            padding: 0;
            position: absolute;
            top: 5px;
            right: 10px;
        }

    }
</style>
