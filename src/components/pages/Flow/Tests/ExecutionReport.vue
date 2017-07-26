<template>
    <section class="section execution-report">
        <div class="report-data">
            <div class="columns">
                <div class="column is-4">
                    <label>Scenario</label>
                    <span>{{ report.scenario }}</span>
                </div>
                <div class="column is-2">
                    <label>Pass Rate (Trend)</label>
                    <span>
                                {{ report.rate }}
                                <i class="fa fa-check-circle" v-if="report.status === 'passed'"></i>
                                <i class="fa fa-times-circle" v-if="report.status === 'failed'"></i>
                            </span>
                </div>
                <div class="column is-2">
                    <label>Total Elapsed Time</label>
                    <span>{{ report.time }}<i class="fa fa-clock-o"></i></span>
                </div>

                <div class="column is-4">
                    <div class="is-pulled-right">

                        <a href="#">
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </a>

                        <a href="#">
                            <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                        </a>

                        <a href="#">
                            <i class="fa fa-print" aria-hidden="true"></i>
                        </a>

                        <a class="back button is-primary is-small" @click="close">
                            <span class="icon is-small">
                              <i class="fa fa-arrow-left"></i>
                            </span>
                            <span>BACK</span>
                        </a>

                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column is-4">
                    <label>Schedule</label>
                    <span>{{ report.schedule }}</span>
                </div>
                <div class="column is-2">
                    <label>Executed By</label>
                    <span>{{ report.executedBy }}</span>
                </div>
                <div class="column is-3">
                    <label>Started At</label>
                    <span>{{ report.startedAt | moment("D MMM YYYY HH:mm:ss") }}</span>
                </div>
            </div>

            <div class="columns">
                <div class="column is-4">
                    <label>Overall Status</label>
                    <div class="status" :class="report.status">
                        <i class="fa fa-check-circle" v-if="report.status === 'passed'"></i>
                        <i class="fa fa-times-circle" v-if="report.status === 'failed'"></i>
                        {{ report.status }}
                        <i class="fa fa-bolt" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="column is-4">
                    <label>Flow Status Summary:</label>
                    <span>
                                <div class="progress">
                                  <span class="value" :style="progress.valueStyle">{{ report.statusSummary }} %</span>
                                  <span class="complement"
                                        :style="progress.complementStyle">{{ progress.complementSummary }} %</span>
                                </div>
                            </span>
                </div>
            </div>
        </div>
        <hr/>

        <!--<table>-->
        <!--<thead>-->
        <!--<tr>-->
        <!--<th><span class="icon"><i class="fa fa-compress"></i></span>Flow / Action Summary</th>-->
        <!--<th><span class="icon"><i class="fa fa-clock-o"></i></span>time</th>-->
        <!--<th><span class="icon"><i class="fa fa-envelope-o"></i></span>Message</th>-->
        <!--<th><span class="icon"><i class="fa fa-database"></i></span>Data (I/O)</th>-->
        <!--<th><span class="icon"><i class="fa fa-share-square"></i></span></th>-->
        <!--<th><span class="icon"><i class="fa fa-check-circle"></i></span>Status</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--</table>-->

        <div class="tree-wrapper">
            <div class="tree">
                <ul>
                    <qfp-report-item v-for="task in tasks" :item="task" :key="task.id" :level="0"></qfp-report-item>
                </ul>
            </div>
        </div>

    </section>
</template>

<script>

  import ReportItem from './ReportItem.vue'

  export default {

    data () {
      return {
        modal: this.$store.state.app.executionReport,

        report: {
          scenario: 'Order to Cash w/MRP Run',
          rate: '86%',
          time: '7.01 min',
          schedule: 'September Regression 2017(REG-2)',
          executedBy: 'Alan Jumenez',
          startedAt: new Date(2016, 11, 10, 17, 1, 43),
          status: 'passed',
          statusSummary: 75
        },

        dataIterations: [
          {id: 0, title: 'Iteration 1'},
          {id: 1, title: 'Iteration 2'},
          {id: 2, title: 'Iteration 3'}
        ]
      }
    },

    components: {
      'qfp-report-item': ReportItem
    },

    computed: {

      progress () {
        return {
          valueStyle: {width: this.report.statusSummary + '%'},
          complementStyle: {width: 100 - this.report.statusSummary + '%'},
          complementSummary: 100 - this.report.statusSummary
        }
      },

      tasks () {
        let dataIterations = this.dataIterations.map((iteration) => {
          iteration.children = this.$store.state.app.userActions
          return iteration
        })

        let tasks = this.$store.state.app.tasks.map((task) => {
          task.children = dataIterations
          return task
        })

        return tasks
      }
    },

    methods: {
      close () {
        this.$emit('close')
      }
    },

    mounted () {
      document.addEventListener('keydown', (e) => {
        let keyCode = e.keyCode
        if (keyCode === 27) {
          this.close()
        }
      }, false)
    }
  }
</script>

<style lang="scss">


    .section.execution-report {
        height: 100%;

        .report-data {
            .column {

                padding: .2rem .75rem;

                label {
                    font-size: .8rem;
                    text-transform: uppercase;
                }
                span {
                    display: block;
                    font-weight: bold;
                    font-size: 1.2rem;
                    color: black;
                }

                i {
                    margin: 6px 10px 0 10px;
                    font-size: 16px;

                    &.fa-check-circle {
                        color: #43A047;
                    }
                }

                .back span {
                    color: #fff;
                    font-size: 1rem;

                    &.icon {

                        margin-right: 10px;
                        height: 1.6em;

                        i {
                            font-size: 14px;
                        }
                    }
                }

                div.status {

                    width: 140px;
                    color: white;
                    padding: 0 6px 3px 0;
                    border-radius: 3px;
                    margin-top: 5px;

                    &.passed {
                        background-color: #43A047;
                    }

                    i {
                        margin-top: 5px;
                        color: #fff;
                    }
                }

                .progress {
                    margin-top: 5px;
                    height: 1.2em;
                    width: 100%;
                    background-color: #FFA834;
                    position: relative;
                    border-radius: 3px;

                    span {
                        display: inline-block;
                        text-align: center;
                        height: 100%;
                        color: #fff;
                        font-size: .8rem;
                        position: absolute;
                        line-height: 1.5rem;
                        font-weight: bold;

                        &.value {
                            background-color: #43A047;
                        }

                        &.complement {
                            right: 0;
                            background-color: #FFA834;
                        }
                    }

                }
            }
        }

        /*table {*/
        /*margin-top: 30px;*/
        /*background-color: #606060;*/

        /*th {*/
        /*padding: 7px 10px;*/
        /*color: #fff;*/
        /*text-transform: uppercase;*/
        /*}*/

        /*.icon {*/
        /*margin: 0 10px;*/
        /*i {*/
        /*font-size: 16px;*/
        /*}*/
        /*}*/
        /*}*/

        .tree-wrapper {
            position: absolute;
            top: 280px;
            left: 2.2rem;
            right: 1.5rem;
            bottom: 20px;
            overflow: scroll;

        }

    }

</style>
