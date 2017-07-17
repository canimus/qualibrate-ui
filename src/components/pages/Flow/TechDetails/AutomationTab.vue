<template>
    <section class="section">
        <h1>SAP Logon</h1>
        <hr/>
        1.1 Connect to SAP <br/><br/>
        <div class="field">
            <textarea class="textarea"></textarea>
        </div>

        <table class="table is-small">
            <thead>
            <tr>
                <th><i class="fa fa-trash"></i></th>
                <th>Name</th>
                <th>Value</th>
                <th>Mandatory</th>
                <th>Regex</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><i class="fa fa-trash"></i></td>
                <td>Id</td>
                <td>/app/con[0]/ses[0]</td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
            </tr>

            </tbody>
        </table>

    </section>
</template>

<script>

  import {Tabs, TabPane} from 'vue-bulma-tabs'
  import {mapGetters} from 'vuex'

  export default {

    components: {
      Tabs,
      TabPane
    },

    computed: mapGetters({
      techDetailsOpened: 'techDetailsOpened',
      activeTask: 'activeTask',
      activeUserAction: 'activeUserAction'
    })
  }
</script>

<style lang="scss">

    @import "./../../../../assets/sass/bulma-variables.sass";

    .tech-details {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: -450px;
        width: 450px;
        height: 100%;
        background-color: $background-grey;
        transition: margin-right 0.5s;

        &.opened {
            margin-right: 0;
            transition: margin-right 0.5s;
            box-shadow: 0 5px 10px rgba(10, 10, 10, 0.5);
        }

        select {
            width: 100%;
        }
        label.label {
            font-size: 14px;
            color: grey;
        }

        h1 {
            color: grey;
        }

        .user-action-title {
            margin-bottom: 20px;
        }
    }

</style>
