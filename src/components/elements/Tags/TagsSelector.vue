<template>
    <div class="tags-selector">
        <a>Add {{ tagsGroup.title }} ...</a>
    </div>
</template>

<script>

  export default {
    props: ['tagsGroup']
  }

</script>

<style lang="scss">

    .tags-selector {
        margin-left: 20px;
        display: inline;
        white-space: nowrap;

        a {
            font-size: 14px;
            text-decoration: underline;
        }
    }

</style>
