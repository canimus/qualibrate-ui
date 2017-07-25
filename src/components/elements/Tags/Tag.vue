<template>
     <span class="tag" :class="tag.class">
         <span class="icon">
             <i class="fa" :class="tag.icon"></i>
         </span>
          {{ tag.title }}
         <button class="delete is-small" @click="removeTag"></button>
    </span>
</template>

<script>

  export default {
    name: 'qfp-tag',
    props: ['tag'],

    methods: {
      removeTag () {
        this.tag.class += ' removing'
        setTimeout(() => {
          this.$store.commit('removeTag', this.tag.id)
        }, 300)
      }
    }
  }
</script>

<style lang="scss">

    .tag {
        margin: 3px;
        text-transform: uppercase;
        transition: all 0.3s ease;

        i {
            font-size: .8rem !important;
        }

        &.removing {
            opacity: 0;
        }
    }
</style>
