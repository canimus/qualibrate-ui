<template>
    <div class="task">
        <article class="tile is-child box">
            <div class="content">
                <h2 class="is-pulled-left">{{task.title}}</h2>
                <qfp-context-menu :items="menuItems"></qfp-context-menu>
                <br/>
            </div>
            <div class="content">
                <figure class="image is-4by3" @click="openModal">
                    <img :src="activeUserAction.imageSrc">
                </figure>

                <div class="user-action-wrapper">
                    <draggable class="user-actions" v-model="userActions" :options="{group:'userActions'}">
                        <qfp-user-action v-for="userAction in userActions" :key="userAction.title"
                                         :userAction="userAction" @setActive="setActive(userAction)">
                        </qfp-user-action>
                    </draggable>
                </div>

            </div>
        </article>

    </div>
</template>

<script>

  import Draggable from 'vuedraggable'
  import UserAction from './UserAction.vue'
  import ContextMenu from './../../layout/ContextMenu.vue'

  export default {

    props: ['task'],

    components: {
      'qfp-user-action': UserAction,
      'qfp-context-menu': ContextMenu,
      Draggable
    },

    data () {
      return {
        menuItems: [
          {title: 'Delete Task', iconClass: 'fa-trash', link: '#asdf'},
          {title: 'Insert User Action', iconClass: 'fa-plus', link: '#asdf'}
        ],

        userActions: [
          {
            title: '1.1 Connect to SAP',
            iconClass: 'fa-connectdevelop',
            imageSrc: 'http://lorempixel.com/276/207/abstract/' + (Math.floor(Math.random() * 10) + 1),
            active: true
          },
          {
            title: '1.2 Type P_PASSWORD in Password',
            iconClass: 'fa-terminal',
            imageSrc: 'http://lorempixel.com/276/207/abstract/2',
            active: false
          },
          {
            title: '1.3 Press ENTER on SAP Easy Access.',
            iconClass: 'fa-keyboard-o',
            imageSrc: 'http://lorempixel.com/276/207/abstract/3',
            active: false
          },
          {
            title: '1.4 Type P_USER in User',
            iconClass: 'fa-terminal',
            imageSrc: 'http://lorempixel.com/276/207/abstract/4',
            active: false
          },
          {
            title: '1.5 Press ENTER on SAP',
            iconClass: 'fa-keyboard-o',
            imageSrc: 'http://lorempixel.com/276/207/abstract/5',
            active: false
          },
          {
            title: '1.1 Connect to SAP',
            iconClass: 'fa-connectdevelop',
            imageSrc: 'http://lorempixel.com/276/207/abstract/' + (Math.floor(Math.random() * 10) + 1),
            active: false
          },
          {
            title: '1.2 Type P_PASSWORD in Password',
            iconClass: 'fa-terminal',
            imageSrc: 'http://lorempixel.com/276/207/abstract/2',
            active: false
          },
          {
            title: '1.3 Press ENTER on SAP Easy Access.',
            iconClass: 'fa-keyboard-o',
            imageSrc: 'http://lorempixel.com/276/207/abstract/3',
            active: false
          },
          {
            title: '1.4 Type P_USER in User',
            iconClass: 'fa-terminal',
            imageSrc: 'http://lorempixel.com/276/207/abstract/4',
            active: false
          },
          {
            title: '1.5 Press ENTER on SAP',
            iconClass: 'fa-keyboard-o',
            imageSrc: 'http://lorempixel.com/276/207/abstract/5',
            active: false
          }
        ]
      }
    },

    computed: {
      activeUserAction () {
        const userAction = this.userActions.find(userAction => {
          return userAction.active === true
        })

        return userAction
      }
    },

    methods: {
      setActive (userAction) {
        this.userActions.map((userAction) => {
          userAction.active = false
          return userAction
        })

        userAction.active = true

        const tmpArray = this.userActions
        this.userActions = []
        this.userActions = tmpArray
      },

      openModal () {
        this.$store.commit('openModal', this.activeUserAction.imageSrc)
      },

      initTasksHeight () {
        let top = this.$el.getBoundingClientRect().top

        this.$el.style.maxHeight = window.innerHeight - top - 20 + 'px'
        this.$el.style.minHeight = window.innerHeight - top - 20 + 'px'
      }
    },

    mounted () {
      window.addEventListener('resize', this.initTasksHeight)
      this.initTasksHeight()
    }
  }
</script>

<style lang="scss">

    .task {
        min-width: 300px;
        display: inline-block;
        padding: 0.25rem;
        vertical-align: top;
        height: 100%;

        article {
            min-height: 100%;
            max-height: 100%;

            h2 {
                cursor: move;
            }

            figure {
                cursor: pointer;
            }

            .user-action-wrapper {
                overflow: scroll;
                position: relative;
            }

        }

        &.sortable-ghost {
            opacity: 0.1;
        }

        &.sortable-drag {
            opacity: 1;
        }
    }


</style>
