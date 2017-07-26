<template>
    <div class="tests">
        <v-client-table :data="tableData" :columns="columns" :options="options" @row-click="rowClick">
            <template slot="status" scope="props">
                <div class="status">
                    <i class="fa fa-check-circle passed" v-if="props.row.status === 'passed'"></i>
                    <i class="fa fa-times-circle failed" v-if="props.row.status === 'failed'"></i>
                    {{ props.row.status }}
                </div>
            </template>
        </v-client-table>

        <div class="execution-report" v-if="showExecutionReport">
            <qfp-execution-report @close="closeReport"></qfp-execution-report>
        </div>

    </div>
</template>

<script>

  import moment from 'moment'
  import ExecutionReport from './Tests/ExecutionReport.vue'

  export default {

    components: {
      'qfp-execution-report': ExecutionReport
    },

    data () {
      return {
        options: {

          filterByColumn: true,
          filterable: ['executed_by'],
          sortable: ['executed_by', 'start_date', 'end_date'],
          dateColumns: ['start_date', 'end_date'],
          headings: {
            executed_by: 'Executed By',
            start_date: 'Start Date',
            end_date: 'End Date',
            status: 'Status'
          },
          rowClassCallback: (row) => {
            if (row.active) {
              return 'active'
            }
          }
        },
        columns: ['executed_by', 'start_date', 'end_date', 'status'],

        showExecutionReport: false,

        tableData: [{
          id: '1',
          executed_by: 'Martin Razus',
          start_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          end_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          status: 'passed'
        }, {
          id: '2',
          executed_by: 'Martin Razus',
          start_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          end_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          status: 'passed'
        }, {
          id: '3',
          executed_by: 'Martin Razus',
          start_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          end_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          status: 'failed'
        }, {
          id: '4',
          executed_by: 'Martin Razus',
          start_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          end_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          status: 'passed'
        }]
      }
    },

    methods: {

      closeReport () {
        this.showExecutionReport = false
      },

      rowClick (clickedRow) {
        if (clickedRow.row.active) {
          this.showExecutionReport = true
        } else {
          this.tableData = this.tableData.map(row => {
            if (row.id === clickedRow.row.id) {
              row.active = true
            } else {
              row.active = false
            }

            return row
          })
        }
      }
    }
  }

  function randomDate (start, end) {
    return moment(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }

</script>

<style lang="scss">

    @import "../../../assets/sass/bulma-variables.sass";

    .tests {
        input.form-control {
            font-size: 14px;
            padding: 3px 5px;
        }

        div.status {
            width: 120px;
            padding-left: 30px;
            padding: 1px 10px;
            border-radius: 3px;

            i {
                margin-right: 10px;

                &.passed {
                    color: #43A047;
                }

                &.failed {
                    color: red;
                }
            }
        }

        .table {

            tr.active {
                background-color: $primary !important;

                div.status {
                    background-color: #fff;
                }
            }

            .VueTables__sortable {
                cursor: pointer;
            }

            th {
                .icon {
                    padding-left: 15px;
                }
            }

            font-size: 14px;

            a.fa {
                font-size: 18px;
                padding-top: 3px;
            }
        }

        .execution-report {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0
        }
    }

</style>
