<template>
    <div class="modal" :class="{'is-active': modal.modalOpened}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="hero is-light">
                <nav class="navbar">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <i class="fa fa-cloud"></i>
                        </div>

                        <div class="navbar-item">
                            Scenario execution status report
                        </div>
                    </div>
                    <div class="navbar-end">

                        <a href="#" class="nav-item">
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </a>

                        <a href="#" class="nav-item">
                            <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                        </a>

                        <a href="#" class="nav-item">
                            <i class="fa fa-print" aria-hidden="true"></i>
                        </a>

                    </div>
                </nav>
            </div>
            <section class="section">

            </section>
        </div>
        <button class="modal-close is-large" @click="close"></button>
    </div>
</template>

<script>

  export default {

    data () {
      return {
        modal: this.$store.state.app.executionReport
      }
    },

    methods: {
      close () {
        this.$store.commit('closeExecutionReport')
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

<style lang="scss">
    .modal {
        z-index: 2000;
        align-items: flex-start;
        padding-top: 50px;

        .modal-content {
            width: calc(100% - 40px);
            max-width: 1440px;
            height: calc(100vh - 40px);

            .section {
                height: 100%;
            }
        }
    }
</style>
