<template>
    <section class="section flow">
        <div class="top-buttons">
            <a class="button is-primary is-small">
            <span class="icon">
                <i class="fa fa-circle"></i>
            </span>
                <span>Record</span>
            </a>

            <a class="button is-primary is-small">
            <span class="icon">
                <i class="fa fa-plus"></i>
            </span>
                <span>Create task</span>
            </a>

            <a class="button is-primary is-small">
            <span class="icon">
                <i class="fa fa-refresh"></i>
            </span>
                <span>Refresh</span>
            </a>

            <a class="button is-primary is-small">
            <span class="icon">
                <i class="fa fa-user-md"></i>
            </span>
                <span>QFP Applications</span>
            </a>
            <div class="is-pulled-right tech-details-label">
                <span v-show="showTechDetail">Show technical details</span>
                <span v-show="!showTechDetail">Hide technical details</span>
                <vb-switch type="success" checked v-model="showTechDetail"></vb-switch>
            </div>
        </div>
        <h1 class="title">Flow</h1>

        <tabs animation="slide" :only-fade="false" size="small" class="main-tabs" @tab-selected="selectTab">

            <tab-pane label="Main Details" :selected="tabSelected === 'main-details'">
                <qfp-main-details></qfp-main-details>
            </tab-pane>

            <tab-pane label="Task Sequence" :selected="tabSelected === 'tasks'">

                <draggable v-model="tasks" :options="{group:'tasks'}" class="task-sequence"
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
  import Task from './Flow/Task.vue'
  import TechDetails from './Flow/TechDetails.vue'
  import MainDetails from './Flow/MainDetails.vue'
  import Documents from './Flow/Documents.vue'
  import Tests from './Flow/Tests.vue'
  import Draggable from 'vuedraggable'
  import VbSwitch from 'vue-bulma-switch'

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
      'qfp-documents': Documents
    },

    data () {
      return {
        taskSequenceSelected: false,
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

        height: 100%;
        overflow: hidden;

        .top-buttons {
            margin-bottom: 15px;

            .icon i.fa {
                font-size: 14px;
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
            margin-bottom: 10px !important;
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

            position: absolute;
            top: 160px;
            bottom: 1.5rem;
            left: 1.5rem;
            right: 1.5rem;

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
