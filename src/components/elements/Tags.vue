<template>
    <div class="tags-holder">
        <qfp-tag v-for="tag in tags" :key="tag.id" :tag="tag"></qfp-tag>

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
        let selectedTags = []

        let groups = this.$store.state.app.tagsGroups.groups

        this._.forEach(groups, (group) => {
          let selectedGroupTags = group.allTags.filter(tag => {
            if (this._.indexOf(groups.selected, tag.id)) {
              return tag
            }
          })

          selectedTags = this._.concat(selectedTags, selectedGroupTags)
        })

        return selectedTags
      }
    }
  }

</script>


<style lang="scss">
    .tags-holder {
       position: relative;
    }
</style>
