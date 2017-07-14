<template>
    <div class="tech-details" :class="{ opened: techDetailsOpened }">
        <div class="content">
            <tabs animation="slide" :only-fade="false" size="small">

                <tab-pane label="Documentation" icon="fa fa-graduation-cap">
                    <section class="section">
                        <div class="field">
                            <textarea class="textarea" placeholder="Textarea"></textarea>
                        </div>
                        <div class="field is-grouped is-pulled-right">
                            <p class="control">
                                <button class="button is-primary ">Post</button>
                            </p>
                        </div>
                    </section>
                </tab-pane>

                <tab-pane label="User" icon="fa fa-user-md">
                    <section class="section">
                        <h1>SAP Logon</h1>
                        <hr/>
                        1.1 Connect to SAP <br /><br />
                        <div class="field">
                            <label class="label">User Action</label>
                            <p class="control">
                                <span class="select">
                                  <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                  </select>
                                </span>
                            </p>
                        </div>

                        <div class="field">
                            <label class="label">Parameter Name</label>
                            <p class="control">
                                <input class="input" type="text">
                            </p>
                        </div>

                        <div class="field">
                            <label class="label">Parameter Type</label>
                            <p class="control">
                                <span class="select">
                                  <select>
                                    <option>Input</option>
                                    <option>Output</option>
                                    <option>None</option>
                                  </select>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <label class="radio">
                                    <input type="radio" name="question">
                                    Mandatory
                                </label>
                                <label class="radio">
                                    <input type="radio" name="question">
                                    Optional
                                </label>
                            </p>
                        </div>
                    </section>
                </tab-pane>

                <tab-pane label="Automation" icon="fa fa-bolt">
                    <section class="section">
                        <h1>SAP Logon</h1>
                        <hr/>
                        1.1 Connect to SAP <br /><br />
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
                                <td><input type="checkbox"/> </td>
                                <td><input type="checkbox"/> </td>
                            </tr>

                            </tbody>
                        </table>

                    </section>
                </tab-pane>
            </tabs>
        </div>
    </div>
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
      techDetailsOpened: 'techDetailsOpened'
    })
  }
</script>

<style lang="scss">

    @import "./../../../assets/sass/bulma-variables.sass";

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
    }

</style>
