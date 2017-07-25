<template>
    <div class="task" @click="setActive" :class="{active: isActive}">
        <article class="box">

            <h2 class="title is-4 is-pulled-left" @click="makeEditable">{{ task.title | truncate(25) }}</h2>
            <textarea v-if="editable" @blur="removeEditable" ref="textarea" v-model="editableTitle"></textarea>
            <div class="menu-wrapper">
                <qfp-context-menu :items="menuItems"></qfp-context-menu>
            </div>

            <figure class="image is-4by3" @click="openModal">
                <img :src="activeTaskUserAction.imageSrc">
            </figure>

            <draggable class="user-action-wrapper" v-model="userActions" :options="{group:'userActions'}">
                <qfp-user-action v-for="userAction in userActions" :key="userAction.title"
                                 :userAction="userAction" @setTaskActive="setActive()" @toggleMenu="toggleMenu">
                </qfp-user-action>
            </draggable>

            <div class="navbar-item child-context-menu" :class="{'is-active': showChildMenu}" :style="menuStyle" dragable="false">
                <div class="navbar-dropdown" ref="childMenu" @blur="showChildMenu = false" tabindex="0">
                    <a class="navbar-item" v-for="menuItem in childMenuItems" :key="menuItem.title"
                       v-on:click.stop="closeChildMenu">
                        <span class="icon"><i class="fa" :class="menuItem.iconClass"></i></span> {{menuItem.title}}
                    </a>
                </div>
            </div>

        </article>

    </div>
</template>

<script>

  import Draggable from 'vuedraggable'
  import UserAction from './UserAction.vue'
  import ContextMenu from './../../layout/ContextMenu.vue'
  import Vue from 'vue'

  export default {
    props: ['task'],

    components: {
      'qfp-user-action': UserAction,
      'qfp-context-menu': ContextMenu,
      Draggable
    },

    data () {
      return {
        editable: false,
        editableTitle: this.task.title,
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
            ],
            steps: [
              {
                id: 1,
                title: 'SAPSession',
                properties: [
                  {
                    id: 1,
                    name: 'id 1',
                    value: '/app/con[0]/ses[0]/wnd[0]/tbar[0]/okcd',
                    mandatory: true,
                    regex: false
                  },
                  {
                    id: 2,
                    name: 'Type',
                    value: 'GuiOkCodeField',
                    mandatory: true,
                    regex: false
                  },
                  {
                    id: 3,
                    name: 'Name',
                    value: 'okcd',
                    mandatory: false,
                    regex: false
                  }
                ],
                children: [{

                  id: 2,
                  title: 'SAP Easy Access',
                  properties: [
                    {
                      id: 1,
                      name: 'id 2',
                      value: '/app/con[0]/ses[0]/wnd[0]/tbar[0]/okcd',
                      mandatory: true,
                      regex: true
                    },
                    {
                      id: 2,
                      name: 'Type',
                      value: 'GuiOkCodeField',
                      mandatory: true,
                      regex: false
                    },
                    {
                      id: 2,
                      name: 'Name',
                      value: 'okcd',
                      mandatory: false,
                      regex: false
                    }
                  ],
                  children: [{

                    id: 3,
                    title: 'okcd',
                    properties: [
                      {
                        id: 1,
                        name: 'id 3',
                        value: '/app/con[0]/ses[0]/wnd[0]/tbar[0]/okcd',
                        mandatory: false,
                        regex: true
                      },
                      {
                        id: 2,
                        name: 'Type',
                        value: 'GuiOkCodeField',
                        mandatory: true,
                        regex: false
                      },
                      {
                        id: 2,
                        name: 'Name',
                        value: 'okcd',
                        mandatory: false,
                        regex: false
                      }
                    ]
                  }]
                }]
              },
              {
                id: 11,
                title: 'SAPSession',
                properties: [
                  {
                    id: 1,
                    name: 'id 1',
                    value: '/app/con[0]/ses[0]/wnd[0]/tbar[0]/okcd',
                    mandatory: true,
                    regex: false
                  },
                  {
                    id: 2,
                    name: 'Type',
                    value: 'GuiOkCodeField',
                    mandatory: true,
                    regex: false
                  },
                  {
                    id: 3,
                    name: 'Name',
                    value: 'okcd',
                    mandatory: false,
                    regex: false
                  }
                ],
                children: [{

                  id: 12,
                  title: 'SAP Easy Access',
                  properties: [
                    {
                      id: 1,
                      name: 'id 2',
                      value: '/app/con[0]/ses[0]/wnd[0]/tbar[0]/okcd',
                      mandatory: true,
                      regex: true
                    },
                    {
                      id: 2,
                      name: 'Type',
                      value: 'GuiOkCodeField',
                      mandatory: true,
                      regex: false
                    },
                    {
                      id: 2,
                      name: 'Name',
                      value: 'okcd',
                      mandatory: false,
                      regex: false
                    }
                  ],
                  children: [{

                    id: 13,
                    title: 'okcd',
                    properties: [
                      {
                        id: 1,
                        name: 'id 3',
                        value: '/app/con[0]/ses[0]/wnd[0]/tbar[0]/okcd',
                        mandatory: false,
                        regex: true
                      },
                      {
                        id: 2,
                        name: 'Type',
                        value: 'GuiOkCodeField',
                        mandatory: true,
                        regex: false
                      },
                      {
                        id: 2,
                        name: 'Name',
                        value: 'okcd',
                        mandatory: false,
                        regex: false
                      }
                    ]
                  }]
                }]
              },
              {
                id: 21,
                title: 'SAPSession',
                properties: [
                  {
                    id: 1,
                    name: 'id 1',
                    value: '/app/con[0]/ses[0]/wnd[0]/tbar[0]/okcd',
                    mandatory: true,
                    regex: false
                  },
                  {
                    id: 2,
                    name: 'Type',
                    value: 'GuiOkCodeField',
                    mandatory: true,
                    regex: false
                  },
                  {
                    id: 3,
                    name: 'Name',
                    value: 'okcd',
                    mandatory: false,
                    regex: false
                  }
                ],
                children: [{

                  id: 22,
                  title: 'SAP Easy Access',
                  properties: [
                    {
                      id: 1,
                      name: 'id 2',
                      value: '/app/con[0]/ses[0]/wnd[0]/tbar[0]/okcd',
                      mandatory: true,
                      regex: true
                    },
                    {
                      id: 2,
                      name: 'Type',
                      value: 'GuiOkCodeField',
                      mandatory: true,
                      regex: false
                    },
                    {
                      id: 2,
                      name: 'Name',
                      value: 'okcd',
                      mandatory: false,
                      regex: false
                    }
                  ],
                  children: [{

                    id: 23,
                    title: 'okcd',
                    properties: [
                      {
                        id: 1,
                        name: 'id 3',
                        value: '/app/con[0]/ses[0]/wnd[0]/tbar[0]/okcd',
                        mandatory: false,
                        regex: true
                      },
                      {
                        id: 2,
                        name: 'Type',
                        value: 'GuiOkCodeField',
                        mandatory: true,
                        regex: false
                      },
                      {
                        id: 2,
                        name: 'Name',
                        value: 'okcd',
                        mandatory: false,
                        regex: false
                      }
                    ]
                  }]
                }]
              }
            ]
          },

          {
            id: this.task.id + '2',
            title: '1.2 Type P_PASSWORD in Password press ENTER on SAP Easy Access.',
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
            parameterName: 'parameter 3',
            notes: []
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
            parameterName: 'parameter 4',
            notes: []
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
            parameterName: 'parameter 5',
            notes: []
          },
          {
            id: this.task.id + '6',
            title: '1.1 Connect to SAP Press ENTER on SAP Easy Access.',
            iconClass: 'fa-connectdevelop',
            imageSrc: 'http://lorempixel.com/276/207/abstract/' + (Math.floor(Math.random() * 10) + 1),
            active: false,
            userActionId: 5,
            mandatory: true,
            parameterType: 'input',
            parameterName: 'parameter 6',
            notes: []
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
            parameterName: 'parameter 7',
            notes: []
          },
          {
            id: this.task.id + '8',
            title: '1.3 Press ENTER on SAP Easy Access Press ENTER on SAP Easy Access.',
            iconClass: 'fa-keyboard-o',
            imageSrc: 'http://lorempixel.com/276/207/abstract/3',
            active: false,
            userActionId: 5,
            mandatory: true,
            parameterType: 'input',
            parameterName: 'parameter 8',
            notes: []
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
            parameterName: 'parameter 9',
            notes: []
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
            parameterName: 'parameter 10',
            notes: []
          }
        ],

        activeListUserAction: false,

        showChildMenu: false,

        childMenuItems: [
          {title: 'Record Step', iconClass: 'fa-dot-circle-o', link: '#asdf'},
          {title: 'Delete Step', iconClass: 'fa-trash', link: '#asdf'},
          {title: 'Duplicate Step', iconClass: 'fa-copy', link: '#asdf'}
        ],

        menuStyle: {
          top: '100px'
        }
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
      makeEditable () {
        if (this.isActive) {
          this.editable = true
          Vue.nextTick(() => {
            this.$refs.textarea.focus()
          })
        }
      },

      removeEditable () {
        this.editable = false
        this.task.title = this.editableTitle
      },

      setActive () {
        this.$router.replace({name: 'FlowTabId', params: {tab: 'tasks', id: this.task.id}})
        this.$store.commit('setActiveTask', this.task)
      },

      openModal () {
        this.$store.commit('openModal', this.activeTaskUserAction.imageSrc)
      },

      toggleMenu (childTop) {
        let top = childTop - this.$el.getBoundingClientRect().top
        this.showChildMenu = true
        this.menuStyle.top = top + 'px'

        Vue.nextTick(() => {
          this.$refs.childMenu.focus()
        })
      },

      closeChildMenu () {
        this.showChildMenu = false
      }
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
        width: 300px;
        display: inline-block;
        margin: 0.25rem;
        vertical-align: top;
        height: 100%;
        position: relative;

        &.active {
            article {
                box-shadow: 0 3px 3px $blue, 0 0 0 2px $blue;
            }
        }

        textarea {
            font-size: 1.75em;
            padding: 4px 7px 4px .2rem;
            position: absolute;
            top: 3px;
            left: 0.3rem;
            width: 270px;
            outline: none;
            border: none;
            background: $blue;
            color: #fff;
            opacity: 1;
            z-index: 100;
        }

        .menu-wrapper {
            position: absolute;
            right: 0;
            top: 7px;

        }

        article {
            position: relative;
            display: flex;
            flex-flow: column;
            height: 100%;
            width: 100%;

            h2.title {
                cursor: move;
                margin-bottom: .5rem;
            }

            figure {
                cursor: pointer;
            }

            .user-action-wrapper {
                padding: .5rem 1px;
                flex: 0 1 100%;
                overflow: auto;
                overflow-x: visible;
                position: relative;
            }

            .child-context-menu {
                position: absolute;
                width: 180px;
                left: 275px;

                .navbar-dropdown {
                    outline: none;
                }
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
