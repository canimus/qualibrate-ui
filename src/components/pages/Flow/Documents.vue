<template>
    <div class="documents">
        <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
    </div>
</template>

<script>

  import moment from 'moment'

  export default {

    data () {
      return {
        columns: ['file_name', 'file_type', 'last_update', 'copy', 'download', 'delete'],
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
          templates: {
            copy: function (h, row) {
              return row.id
            },
            download: function (h, row) {
              return h('i', {
                attrs: {
                  class: 'fa fa-copy'
                }
              }, [''])
            },
            delete: function (h, row) {
              return '<a href=""><i class="fa fa-trash"></i></a>'
            }
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
