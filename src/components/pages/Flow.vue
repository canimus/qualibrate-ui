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
                <i class="fa fa-circle"></i>
            </span>
                <span>Tech details</span>
            </a>

            <a class="button is-primary is-small">
            <span class="icon">
                <i class="fa fa-user-md"></i>
            </span>
                <span>QFP Applications</span>
            </a>
        </div>

        <div>
            <h1 class="title">Flow</h1>
            <tabs animation="slide" :only-fade="false" size="small">

                <tab-pane label="Main Details">Main Details</tab-pane>

                <tab-pane label="Task Sequence">
                    <div class="tile is-parent is-paddingless task-sequence">
                        <qfp-task v-for="task in tasks" :key="task.title" :task="task"></qfp-task>
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
  import Draggable from 'vuedraggable'

  export default {
    name: 'main',
    components: {
      Tabs,
      TabPane,
      Draggable,
      'qfp-task': Task
    },

    data () {
      return {
        tasks: [
          {
            title: 'SAP Logon'
          },
          {
            title: 'Create Quotation'
          },
          {
            title: 'Logoff'
          },
          {
            title: 'SAP Logon'
          },
          {
            title: 'Create Quotation'
          },
          {
            title: 'Logoff'
          },
          {
            title: 'SAP Logon'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">

    .fixed-height {
        height: 100%;
        overflow: hidden;
    }

    .top-buttons {
        margin-bottom: 20px;

        .icon i.fa {
            font-size: 14px;
        }
    }

    .task-sequence {
        overflow-y: hidden;
        overflow-x: scroll;
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
