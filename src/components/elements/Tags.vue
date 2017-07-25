<template>
    <div class="tags-holder">
        <qfp-tag v-for="tag in tags" :key="tag.id" :tag="tag"></qfp-tag>
    </div>
</template>

<script>

  import Tag from './Tags/Tag.vue'

  export default {

    name: 'qfp-tags',

    components: {
      'qfp-tag': Tag
    },

    computed: {
      tags () {
        return this.$store.state.app.tags
      }
    }

  }

</script>
