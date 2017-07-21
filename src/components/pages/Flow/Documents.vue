<template>
    <div class="documents">
        <v-client-table :data="tableData" :columns="columns" :options="options">
            <template slot="copy" scope="props">
                <div class="table-icon"><a class="fa fa-link"></a></div>
            </template>

            <template slot="download" scope="props">
                <div class="table-icon"><a class="fa fa-download"></a></div>
            </template>

            <template slot="delete" scope="props">
                <div class="table-icon"><a class="fa fa-trash"></a></div>
            </template>
        </v-client-table>
    </div>
</template>

<script>

  import moment from 'moment'

  export default {

    data () {
      return {
        options: {

          filterByColumn: true,
          filterable: ['file_name', 'file_type'],
          sortable: ['file_name', 'file_type', 'last_update'],
          dateColumns: ['last_update'],

          headings: {
            icon: '',
            file_name: 'File Name',
            file_type: 'File Type',
            last_update: 'Last Update',
            copy: 'Copy',
            download: 'Download',
            delete: 'Delete'
          },

          listColumns: {
            file_type: [{
              id: 'docx',
              text: 'docx'
            }, {
              id: 'xlsx',
              text: 'xlsx'
            }, {
              id: 'pdf',
              text: 'pdf'
            }]
          }
        },

        columns: ['file_name', 'file_type', 'last_update', 'copy', 'download', 'delete'],

        tableData: [{
          id: '1',
          file_name: 'b Create Quotation Functional Spec',
          file_type: 'docx',
          last_update: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
        }, {
          id: '2',
          file_name: 'd Create Quotation Functional Spec',
          file_type: 'docx',
          last_update: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
        }, {
          id: '3',
          file_name: 'a Create Quotation Functional Spec',
          file_type: 'pdf',
          last_update: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
        }, {
          id: '4',
          file_name: 'c Create Quotation Functional Spec',
          file_type: 'xlsx',
          last_update: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
        }
        ]
      }
    }
  }

  function randomDate (start, end) {
    return moment(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }

</script>

<style lang="scss">

    .documents {
        input.form-control {
            font-size: 14px;
            padding: 3px 5px;
        }

        div.table-icon {
            width: 100%;
            padding-left: 30px;
        }

        .table {
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

        .select {
            font-size: 14px;
        }
    }

</style>
