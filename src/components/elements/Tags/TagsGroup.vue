<template>
    <div class="tags-group">
        <h3 clas="title is-3">{{ group.title }}</h3>
        <hr/>
        <div class="tags-selector-holder">
            <qfp-tag v-for="tag in selected" :key="tag.id" :tag="tag"></qfp-tag>
            <qfp-tags-selector :tags-group="group"></qfp-tags-selector>
        </div>
    </div>
</template>

<script>

  import Tag from './Tag.vue'
  import TagsSelector from './TagsSelector.vue'

  export default {

    props: ['group', 'selected-tags'],

    components: {
      'qfp-tag': Tag,
      'qfp-tags-selector': TagsSelector
    },

    computed: {
      selected () {
        let selectedTags = this.group.allTags.filter(tag => {
          if (this._.indexOf(this.selectedTags, tag.id)) {
            return tag
          }
        })

        return selectedTags
      }
    }
  }
</script>

<style lang="scss">

    .tags-group {

        h3 {
            margin-bottom: 5px;
            font-size: 1rem;
        }

        hr {
            margin: 12px 0;
        }

        .tags-selector-holder {
            margin-bottom: 20px;
        }
    }

</style>
