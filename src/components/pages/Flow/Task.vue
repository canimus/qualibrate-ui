<template>
    <div class="task" @click="setActive" :class="{active: isActive}">
        <article class="tile is-child box">
            <div class="content">
                <h2 class="is-pulled-left">{{task.title}}</h2>
                <qfp-context-menu :items="menuItems"></qfp-context-menu>
                <br/>
            </div>
            <div class="content">
                <figure class="image is-4by3" @click="openModal">
                    <img :src="activeTaskUserAction.imageSrc">
                </figure>

                <div class="user-action-wrapper">
                    <draggable class="user-actions" v-model="userActions" :options="{group:'userActions'}">
                        <qfp-user-action v-for="userAction in userActions" :key="userAction.title"
                                         :userAction="userAction" @setTaskActive="setActive()">
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
            id: this.task.id + '1',
            title: '1.1 Connect to SAP',
            iconClass: 'fa-connectdevelop',
            imageSrc: 'http://lorempixel.com/276/207/abstract/' + (Math.floor(Math.random() * 10) + 1),
            active: true,
            userActionId: 1,
            mandatory: true,
            parameterType: 'input',
            parameterName: 'parameter 1',
            notes: [
              {id: 1, date: '2016-02-01T00:00:00-06:00', userName: 'Martin Razus', message: 'This is test'},
              {id: 2, date: '2016-02-01T00:00:00-06:00', userName: 'Martin Razus', message: 'Lorem ipsum dolor sit ...'}
            ]
          },
          {
            id: this.task.id + '2',
            title: '1.2 Type P_PASSWORD in Password',
            iconClass: 'fa-terminal',
            imageSrc: 'http://lorempixel.com/276/207/abstract/2',
            active: false,
            userActionId: 2,
            mandatory: false,
            parameterType: 'output',
            parameterName: 'parameter 2',
            notes: [
              {id: 1, date: '2016-02-01T00:00:00-06:00', userName: 'Martin Razus', message: 'This is test 2'},
              {
                id: 2,
                date: '2016-02-01T00:00:00-06:00',
                userName: 'Martin Razus',
                message: 'Lorem ipsum dolor sit ...'
              },
              {id: 3, date: '2016-02-01T00:00:00-06:00', userName: 'Martin Razus', message: 'This is test 3'}
            ]
          },
          {
            id: this.task.id + '3',
            title: '1.3 Press ENTER on SAP Easy Access.',
            iconClass: 'fa-keyboard-o',
            imageSrc: 'http://lorempixel.com/276/207/abstract/3',
            active: false,
            userActionId: 3,
            mandatory: true,
            parameterType: 'input',
            parameterName: 'parameter 3'

          },
          {
            id: this.task.id + '4',
            title: '1.4 Type P_USER in User',
            iconClass: 'fa-terminal',
            imageSrc: 'http://lorempixel.com/276/207/abstract/4',
            active: false,
            userActionId: 4,
            mandatory: false,
            parameterType: 'none',
            parameterName: 'parameter 4'
          },
          {
            id: this.task.id + '5',
            title: '1.5 Press ENTER on SAP',
            iconClass: 'fa-keyboard-o',
            imageSrc: 'http://lorempixel.com/276/207/abstract/5',
            active: false,
            userActionId: 5,
            mandatory: false,
            parameterType: 'input',
            parameterName: 'parameter 5'
          },
          {
            id: this.task.id + '6',
            title: '1.1 Connect to SAP',
            iconClass: 'fa-connectdevelop',
            imageSrc: 'http://lorempixel.com/276/207/abstract/' + (Math.floor(Math.random() * 10) + 1),
            active: false,
            userActionId: 5,
            mandatory: true,
            parameterType: 'input',
            parameterName: 'parameter 6'
          },
          {
            id: this.task.id + '7',
            title: '1.2 Type P_PASSWORD in Password',
            iconClass: 'fa-terminal',
            imageSrc: 'http://lorempixel.com/276/207/abstract/2',
            active: false,
            userActionId: 5,
            mandatory: true,
            parameterType: 'input',
            parameterName: 'parameter 7'
          },
          {
            id: this.task.id + '8',
            title: '1.3 Press ENTER on SAP Easy Access.',
            iconClass: 'fa-keyboard-o',
            imageSrc: 'http://lorempixel.com/276/207/abstract/3',
            active: false,
            userActionId: 5,
            mandatory: true,
            parameterType: 'input',
            parameterName: 'parameter 8'
          },
          {
            id: this.task.id + '9',
            title: '1.4 Type P_USER in User',
            iconClass: 'fa-terminal',
            imageSrc: 'http://lorempixel.com/276/207/abstract/4',
            active: false,
            userActionId: 7,
            mandatory: true,
            parameterType: 'input',
            parameterName: 'parameter 9'
          },
          {
            id: this.task.id + '10',
            title: '1.5 Press ENTER on SAP',
            iconClass: 'fa-keyboard-o',
            imageSrc: 'http://lorempixel.com/276/207/abstract/5',
            active: false,
            userActionId: 6,
            mandatory: true,
            parameterType: 'input',
            parameterName: 'parameter 10'
          }
        ],

        activeListUserAction: false
      }
    },

    computed: {
      activeUserAction () {
        return this.$store.getters.activeUserAction
      },

      activeTaskUserAction () {
        if (!this.activeListUserAction) {
          this.activeListUserAction = this.userActions[0]
        }

        return this.activeListUserAction
      },

      isActive () {
        return this.task.id === this.$store.getters.activeTask.id
      }

    },

    methods: {
      setActive () {
        this.$store.commit('setActiveTask', this.task)
      },

      openModal () {
        this.$store.commit('openModal', this.activeTaskUserAction.imageSrc)
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
    },

    watch: {
      activeUserAction (userAction) {
        if (this.isActive) {
          this.activeListUserAction = userAction
        }
      }
    }
  }
</script>

<style lang="scss">

    @import "../../../assets/sass/bulma-variables.sass";

    .task {
        min-width: 300px;
        display: inline-block;
        padding: 0.25rem;
        vertical-align: top;
        height: 100%;

        &.active {
            article {
                box-shadow: 0 3px 3px $blue, 0 0 0 2px $blue;
            }
        }

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
