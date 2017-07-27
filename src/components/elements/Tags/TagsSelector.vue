<template>
    <div class="tags-selector">
        <a @click="open">Add {{ group.title }} ...</a>
        <div v-on-clickaway="close" class="tags-card" ref="card" v-if="isOpened">

            <div class="control has-icons-left">
                <input class="input is-small" type="email" placeholder="Search" v-model="term">
                <span class="icon is-small is-left">
                    <i class="fa fa-search"></i>
                </span>
            </div>
            <div class="tags-selector-wrapper">
                <qfp-tag v-for="tag in unselectedTags" :key="tag.id" :tag="tag" @onClick="selectTag"></qfp-tag>
            </div>
        </div>
    </div>
</template>


<script>

  import {mixin as clickaway} from 'vue-clickaway'
  import Tag from './Tag.vue'

  export default {
    mixins: [clickaway],
    props: ['group'],

    components: {
      'qfp-tag': Tag
    },

    data () {
      return {
        isOpened: false,
        term: ''
      }
    },

    methods: {

      open () {
        this.isOpened = true
      },

      close () {
        this.isOpened = false
        this.term = ''
      },

      selectTag (tagId) {
        this.$store.commit('selectTag', tagId)
      }
    },

    mounted () {
      document.addEventListener('keydown', (e) => {
        let keyCode = e.keyCode
        if (keyCode === 27) {
          this.close()
        }
      }, false)
    },

    computed: {
      unselectedTags () {
        let unselectedTags = this.$store.getters.unselectedTags.filter(tag => {
          if (tag.group === this.group.id) {
            if (this.term.length > 0) {
              if (tag.title.toLowerCase().search(this.term) >= 0) {
                return tag
              }
            } else {
              return tag
            }
          }
        })

        return unselectedTags
      }
    }
  }
</script>

<style lang="scss">

    .tags-selector {
        position: absolute;
        right: 10px;
        top: 0px;

        a {
            color: #000;
            font-size: 12px;
            font-style: italic;
            text-decoration: underline;
        }

        .tags-card {
            background-color: #fff;
            position: absolute;
            right: 0;
            top: 0;
            padding: 10px;
            width: 230px;
            height: 200px;
            box-shadow: 0 0 5px rgba(10, 10, 10, 0.5);
            z-index: 100;
            outline: none;

            .control {
                width: 210px;
            }

            .tags-selector-wrapper {

                position: absolute;
                top: 45px;
                left: 0;
                right: 0;
                bottom: 5px;
                padding: 0 10px;
                overflow: scroll;

                .tag {
                    display: flex;
                    justify-content: flex-end;
                    margin: 5px 0;
                    cursor: pointer;
                }
            }

        }
    }

</style>
