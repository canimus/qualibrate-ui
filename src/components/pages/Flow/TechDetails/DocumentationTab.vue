<template>
    <section class="section documentation-tab">
        <div class="field">
            <textarea class="textarea" placeholder="" v-model="newNote"></textarea>
        </div>
        <div class="field is-grouped is-pulled-right">
            <p class="control">
                <button class="button is-primary" :disabled="newNote === ''" @click="addNote">Post</button>
            </p>
        </div>

        <div class="notes">
            <qfp-note v-for="note in activeUserAction.notes" :key="note.id" :note="note"></qfp-note>
        </div>

    </section>

</template>

<script>

  import Note from './DocumentationTab/Note.vue'
  import {mapGetters} from 'vuex'
  import moment from 'moment'

  export default {

    props: ['notes'],

    data () {
      return {
        newNote: ''
      }
    },

    computed: mapGetters({
      activeUserAction: 'activeUserAction'
    }),

    components: {
      'qfp-note': Note
    },

    methods: {
      addNote () {
        this.activeUserAction.notes.unshift({
          id: 1,
          date: moment().format(),
          userName: 'Martin Razus',
          message: this.newNote
        })
        this.newNote = ''
      }

    }
  }
</script>

<style lang="scss">

    .documentation-tab {

        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .notes {
            padding: 1.5rem;
            overflow-y: scroll;
            overflow-x: hidden;
            position: absolute;
            min-height:0;
            top: 220px;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }

</style>
