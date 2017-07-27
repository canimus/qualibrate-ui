<template>
    <section class="section flow">

        <div>
            <div class="top-buttons">

                <div class="is-pulled-right tech-details-label">
                    <span v-show="showTechDetail">Show technical details</span>
                    <span v-show="!showTechDetail">Hide technical details</span>
                    <vb-switch type="success" checked v-model="showTechDetail"></vb-switch>

                    <div class="flow-actions navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Flow Actions
                        </a>

                        <div class="navbar-dropdown">

                            <a class="navbar-item">
                            <span class="icon">
                                <i class="fa fa-circle"></i>
                            </span>
                                <span>Record</span>
                            </a>

                            <a class="navbar-item">
                            <span class="icon">
                                <i class="fa fa-plus"></i>
                            </span>
                                <span>Create task</span>
                            </a>

                            <a class="navbar-item">
                            <span class="icon">
                                <i class="fa fa-refresh"></i>
                            </span>
                                <span>Refresh</span>
                            </a>

                            <a class="navbar-item">
                            <span class="icon">
                                <i class="fa fa-user-md"></i>
                            </span>
                                <span>QFP Applications</span>
                            </a>

                        </div>
                    </div>

                </div>
            </div>

            <h1 class="title">Flow</h1>
        </div>

        <div class="tags">
            <qfp-tags></qfp-tags>
        </div>

        <tabs animation="slide" :only-fade="false" size="small" class="main-tabs" @tab-selected="selectTab">

            <tab-pane label="Main Details" :selected="tabSelected === 'main-details'">
                <qfp-main-details></qfp-main-details>
            </tab-pane>

            <tab-pane label="Task Sequence" :selected="tabSelected === 'tasks'">

                <draggable v-model="tasks" :options="{group:'tasks', filter: '.navbar-dropdown'}" class="task-sequence"
                           :class="{ 'right-margin': !techDetailsOpened }">
                    <qfp-task v-for="task in tasks" :key="task.title" :task="task"></qfp-task>
                </draggable>
                <qfp-tech-details></qfp-tech-details>

            </tab-pane>

            <tab-pane label="Testing Logs" :selected="tabSelected === 'tests'">
                <qfp-tests></qfp-tests>
            </tab-pane>

            <tab-pane label="Documents" :selected="tabSelected === 'documents'">
                <qfp-documents></qfp-documents>
            </tab-pane>
        </tabs>


    </section>
</template>

<script>

  import {Tabs, TabPane} from 'vue-bulma-tabs'
  import Draggable from 'vuedraggable'
  import VbSwitch from 'vue-bulma-switch'

  import Task from './Flow/Task.vue'
  import TechDetails from './Flow/TechDetails.vue'
  import MainDetails from './Flow/MainDetails.vue'
  import Documents from './Flow/Documents.vue'
  import Tests from './Flow/Tests.vue'
  import Tags from './../elements/Tags.vue'

  export default {
    name: 'main',
    components: {
      Tabs,
      TabPane,
      Draggable,
      VbSwitch,
      'qfp-task': Task,
      'qfp-tech-details': TechDetails,
      'qfp-main-details': MainDetails,
      'qfp-tests': Tests,
      'qfp-documents': Documents,
      'qfp-tags': Tags
    },

    data () {
      return {
        tabSelected: '',
        tabs: {
          0: 'main-details',
          1: 'tasks',
          2: 'tests',
          3: 'documents'
        }
      }
    },

    created () {
      if (this.$route.params.tab) {
        this.tabSelected = this.$route.params.tab

        if (this.$route.params.tab === 'tasks' && this.$route.params.id) {
          const task = this.tasks.find(task => {
            return task.id + '' === this.$route.params.id
          })

          this.$store.commit('setActiveTask', task)
        }
      }
    },

    computed: {

      techDetailsOpened () {
        return this.$store.getters.techDetailsOpened
      },

      tasks: {
        get () {
          return this.$store.state.app.tasks
        },
        set (tasks) {
          this.$store.commit('updateTasks', tasks)
        }
      },

      showTechDetail: {
        get () {
          return this.$store.getters.techDetailsOpened
        },
        set (value) {
          this.$store.commit('toggleTechDetails')
        }
      }
    },

    methods: {
      selectTab (index) {
        this.$router.replace({name: 'FlowTab', params: {tab: this.tabs[index]}})
      }
    }
  }
</script>

<style lang="scss">

    @import "../../assets/sass/bulma-variables.sass";

    .flow {

        display: flex;
        flex-flow: column;
        height: 100%;

        .top-buttons {
            margin-bottom: 15px;

            .icon i.fa {
                font-size: 14px;
            }

            .flow-actions {
                margin-left: 30px;
                width: 180px;
                background-color: #40C293;

                .navbar-link {
                    width: 180px;
                    background-color: #40C293;
                    color: #fff;

                    &:after {
                        border: 1px solid #fff;
                        border-right: 0;
                        border-top: 0;
                    }
                }
            }

            .tech-details-label {
                display: flex;
                align-items: center;

                label.switch {
                    margin-left: 10px;
                }
            }

            .switch.is-success.checked {
                background-color: $blue;
                border-color: $blue;
            }
        }

        h1.title {
            margin-top: -10px;
            margin-bottom: 15px !important;
        }

        .tags {
            padding: 5px 10px 7px 10px;
            border: 1px solid #dbdbdb;
            background: #E1E7EC;
            margin-bottom: 5px;
        }

        .task-sequence {
            overflow-y: hidden;
            overflow-x: scroll;
            white-space: nowrap;
            transition: margin-right 0.5s;
            padding-bottom: 5px;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;

            &.right-margin {
                margin-right: 550px;
                transition: margin-right 0.5s;
            }
        }

        .vue-bulma-tabs.main-tabs {

            position: relative;
            flex: 0 1 100%;

            .tabs:not(:last-child) {
                margin: 0.3rem;
            }

            .tab-content {
                margin: 0;
            }
        }

        article.box {
            padding: 0.5rem;
        }
    }

</style>
