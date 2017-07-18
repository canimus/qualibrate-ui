<template>
    <div class="tech-details" :class="{ opened: !techDetailsOpened }">
        <div class="content">
            <tabs animation="slide" :only-fade="false" size="small">

                <tab-pane label="Documentation" icon="fa fa-graduation-cap">
                    <qfp-documentation-tab></qfp-documentation-tab>
                </tab-pane>

                <tab-pane label="User" icon="fa fa-user-md">
                    <qfp-user-tab></qfp-user-tab>
                </tab-pane>

                <tab-pane label="Automation" icon="fa fa-bolt">
                    <qfp-automation-tab></qfp-automation-tab>
                </tab-pane>
            </tabs>
        </div>
    </div>
</template>

<script>

  import {Tabs, TabPane} from 'vue-bulma-tabs'
  import {mapGetters} from 'vuex'
  import DocumentationTab from './TechDetails/DocumentationTab.vue'
  import UserTab from './TechDetails/UserTab.vue'
  import AutomationTab from './TechDetails/AutomationTab.vue'

  export default {

    components: {
      Tabs,
      TabPane,
      'qfp-documentation-tab': DocumentationTab,
      'qfp-user-tab': UserTab,
      'qfp-automation-tab': AutomationTab
    },

    computed: mapGetters({
      techDetailsOpened: 'techDetailsOpened',
      activeTask: 'activeTask',
      activeUserAction: 'activeUserAction'
    })
  }
</script>

<style lang="scss">

    @import "./../../../assets/sass/bulma-variables.sass";

    .tech-details {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: -550px;
        width: 550px;
        height: 100%;
        background-color: $background-grey;
        transition: margin-right 0.5s;

        > div {
            height: 100%;
        }

        .vue-bulma-tabs {
            height: 100%;
        }

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
