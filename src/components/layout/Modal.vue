<template>
    <div class="modal" :class="{'is-active': modal.opened}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <p class="image is-4by3">
                <img :src="modal.imageSrc">
            </p>
        </div>
        <button class="modal-close is-large" @click="close"></button>
    </div>
</template>

<script>

  export default {

    data () {
      return {
        modal: this.$store.state.app.modal
      }
    },

    methods: {
      close () {
        this.$store.commit('closeModal')
      }
    },

    mounted () {
      document.addEventListener('keydown', (e) => {
        let keyCode = e.keyCode
        if (keyCode === 27) {
          this.close()
        }
      }, false)
    }
  }
</script>

<style>
    .modal {
        z-index: 2000;
    }
</style>
