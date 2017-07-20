<template>
    <section>
        <div class="container">
            <prop-doc :component="App"></prop-doc>
        </div>
    </section>
</template>

<script>
  import propDoc from 'propdoc'
  import App from './../App.vue'

  export default {
    components: {propDoc},

    data () {
      return {
        App
      }
    }
  }
</script>
