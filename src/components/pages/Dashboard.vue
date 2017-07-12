<template>
    <section class="section">
        <div><h1 class="title">Dashboard</h1>
            <h2 class="subtitle">Order to Cash / Business Processes</h2></div>
        <dummy-cards></dummy-cards>
    </section>
</template>

<script>
  import DummyCards from './../dummy/Cards.vue'

  export default {
    name: 'dashboard',
    components: {
      'dummy-cards': DummyCards
    },
    data () {
      return {
      }
    }
  }
</script>
