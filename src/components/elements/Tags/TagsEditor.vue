<template>
    <div class="tags-editor" :class="{ opened: tagsEditorOpened }">
        <div class="content">
            <tabs animation="slide" :only-fade="false" size="small">

                <tab-pane label="Edit" icon="fa fa-graduation-cap">
                    <qfp-tags-group v-for="group in tagsGroups.groups" :key="group.title" :group="group" :selected-tags="tagsGroups.selected"></qfp-tags-group>
                </tab-pane>

                <tab-pane label="Customize" icon="fa fa-gears">
                    <h2>Customization</h2>
                </tab-pane>
            </tabs>
        </div>
    </div>
</template>

<script>

  import {Tabs, TabPane} from 'vue-bulma-tabs'
  import TagsGroup from './TagsGroup.vue'

  export default {

    components: {
      Tabs,
      TabPane,
      'qfp-tags-group': TagsGroup
    },

    computed: {

      tagsGroups () {
        return this.$store.state.app.tagsGroups
      },

      tagsEditorOpened () {
        return this.$store.state.app.taskEditorOpened
      }
    }
  }
</script>

<style lang="scss">

    @import "./../../../assets/sass/bulma-variables.sass";

    .tags-editor {
        position: absolute;
        top: 100%;
        right: 0;
        margin-right: -750px;
        width: 750px;
        height: auto;
        z-index: 100;
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
