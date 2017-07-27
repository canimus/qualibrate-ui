<template>
     <span class="tag" :class="tagClass" @click.stop.prevent="click">
         <span class="tag-icon icon is-small">
             <i class="fa" :class="tag.icon"></i>
         </span>
         <span class="delete-icon icon is-small" @click="removeTag">
            <i class="fa fa-times-circle"></i>
         </span>
          {{ tag.title }}
    </span>
</template>

<script>

  export default {
    name: 'qfp-tag',
    props: ['tag', 'removable'],

    data () {
      return {
        cssClass: ''
      }
    },

    computed: {
      tagClass () {
        let tagClass = this.tag.class + ' ' + this.cssClass
        return tagClass
      }
    },

    created () {
      if (this.removable) {
        this.cssClass = 'removable'
      }
    },

    methods: {
      removeTag () {
        this.cssClass += ' removing'
        setTimeout(() => {
          this.$store.commit('removeTag', this.tag.id)
        }, 300)
      },

      click () {
        this.$emit('onClick', this.tag.id)
      }
    }
  }
</script>

<style lang="scss">

    .tag {
        text-transform: uppercase;
        transition: all 0.3s ease;
        font-size: 0.65rem;
        margin: 1px 2px;
        padding-left: 21px;
        height: 1.8em;
        position: relative;
        cursor: default;

        span.icon {
            position: absolute;
            left: 4px;
            top: 1px;
            transition: opacity 0.3s ease;

            &.tag-icon {
                opacity: 1;
            }

            &.delete-icon {
                display: none;
                opacity: 0;
                cursor: pointer;
            }

            i {
                font-size: .7rem !important;
            }
        }

        &.removing {
            opacity: 0;
        }

        &.removable {

            span.delete-icon {
                display: inline-flex;
            }

            &:hover {

                span.tag-icon {
                    opacity: 0;
                }

                span.delete-icon {
                    opacity: 1;
                }
            }
        }
    }
</style>
