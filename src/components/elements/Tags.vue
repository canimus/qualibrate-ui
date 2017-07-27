<template>
    <div class="tags-holder">
        <qfp-tag v-for="tag in tags" :key="tag.id" :tag="tag" :removable="true"></qfp-tag>
        <a class="edit-labels" @click.stop="openEditor">Edit labels ...</a>
        <qfp-tags-editor></qfp-tags-editor>
    </div>
</template>

<script>

  import Tag from './Tags/Tag.vue'
  import TagsEditor from './Tags/TagsEditor.vue'

  export default {

    name: 'qfp-tags',

    components: {
      'qfp-tag': Tag,
      'qfp-tags-editor': TagsEditor
    },

    computed: {
      tags () {
        return this.$store.getters.selectedTags
      }
    },

    methods: {
      openEditor () {
        this.$store.commit('toggleTagsEditor')
      }
    }
  }

</script>


<style lang="scss">
    .tags-holder {
        position: relative;

        a.edit-labels {
            margin-left: 15px;
            color: #000;
            font-size: 12px;
            font-style: italic;
            text-decoration: underline;
        }
    }
</style>
