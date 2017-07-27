<template>
    <div class="tags-group">

        <h3 clas="title is-3 is-pulled-left">{{ group.title }}</h3>
        <qfp-tags-selector :group="group"></qfp-tags-selector>

        <hr/>
        <div class="tags-selector-holder">
            <qfp-tag v-for="tag in selectedTags" :key="tag.id" :tag="tag" :removable="true"></qfp-tag>
        </div>
    </div>
</template>

<script>

  import Tag from './Tag.vue'
  import TagsSelector from './TagsSelector.vue'

  export default {

    props: ['group'],

    components: {
      'qfp-tag': Tag,
      'qfp-tags-selector': TagsSelector
    },

    computed: {
      selectedTags () {
        let selectedTags = this.$store.getters.selectedTags.filter(tag => {
          if (tag.group === this.group.id) {
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

        position: relative;

        h3 {
            margin-bottom: 5px;
            font-size: 1rem;
        }

        hr {
            margin: 10px 0;
        }

        .tags-selector-holder {
            margin-bottom: 20px;
        }
    }

</style>
