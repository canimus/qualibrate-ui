<template>
    <section class="section flow fixed-height">
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

        <div>
            <h1 class="title">Flow</h1>

            <tabs animation="slide" :only-fade="false" size="small">

                <tab-pane label="Main Details">Main Details</tab-pane>

                <tab-pane label="Task Sequence">
                    <div class="tile is-parent is-paddingless task-sequence"
                         :class="{ 'right-margin': !techDetailsOpened }">
                        <draggable v-model="tasks" :options="{group:'tasks'}">
                            <qfp-task v-for="task in tasks" :key="task.title" :task="task"></qfp-task>
                        </draggable>
                        <qfp-tech-details></qfp-tech-details>
                    </div>
                </tab-pane>

                <tab-pane label="Documents">Document</tab-pane>
            </tabs>
        </div>
    </section>
</template>

<script>

  import {Tabs, TabPane} from 'vue-bulma-tabs'
  import Task from './Flow/Task.vue'
  import TechDetails from './Flow/TechDetails.vue'
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
      'qfp-tech-details': TechDetails
    },

    computed: {

      techDetailsOpened () {
        return this.$store.getters.techDetailsOpened
      },

      tasks () {
        return this.$store.state.app.tasks
      },

      showTechDetail: {
        get () {
          return this.$store.getters.techDetailsOpened
        },
        set (value) {
          this.$store.commit('toggleTechDetails')
        }
      }
    }
  }
</script>

<style lang="scss">

    @import "../../assets/sass/bulma-variables.sass";

    .fixed-height {
        height: 100%;
        overflow: hidden;
    }

    .top-buttons {
        margin-bottom: 20px;

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

    .task-sequence {
        overflow-y: hidden;
        overflow-x: scroll;
        white-space: nowrap;
        transition: margin-right 0.5s;

        &.right-margin {
            margin-right: 550px;
            transition: margin-right 0.5s;
        }
    }

    .flow .vue-bulma-tabs {

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


</style>
