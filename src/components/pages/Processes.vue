<template>
    <section class="section">
        <div><h1 class="title">Processes</h1>
            <h2 class="subtitle">Order to Cash / Business Processes</h2></div>
        <dummy-cards></dummy-cards>
    </section>
</template>

<script>

  import DummyCards from './../dummy/Cards.vue'

  export default {
    name: 'processes',
    components: {
      'dummy-cards': DummyCards
    },
    data () {
      return {}
    }
  }
</script>
