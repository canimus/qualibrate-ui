<template>

    <li class="step">
        <span class="icon" @click="toggleOpen()" :class="{opened: opened}"><i
                v-if="hasChildren" class="fa fa-caret-right"></i></span>
        <span class="step-title" @click="setActiveStep" :class="{active: isActive}">
              <span class="icon"><i class="fa fa-code-fork"></i></span>
            {{ step.title }}
        </span>

        <ul v-if="hasChildren" :class="{stepOpened: opened}">
            <qfp-step v-for="childStep in step.children" :step="childStep" :key="childStep.id"></qfp-step>
        </ul>
    </li>
</template>

<script>

  export default {
    name: 'qfp-step',
    props: ['step'],

    data () {
      return {
        opened: true
      }
    },

    computed: {
      hasChildren () {
        return this.step.children && this.step.children.length > 0
      },

      isActive () {
        return this.step.id === this.$store.getters.activeStep.id
      }
    },

    methods: {
      toggleOpen () {
        this.opened = !this.opened
      },

      setActiveStep () {
        this.$store.commit('setActiveStep', this.step)
      }
    }

  }
</script>

<style lang="scss">

    @import "./../../../../../assets/sass/bulma-variables.sass";

    li.step {
        list-style: none;
        font-size: 12px;

        .step-title {
            cursor: pointer;
            font-weight: bold;

            &.active {
                color: $blue;
            }

            i {
                font-size: 12px !important;
            }
        }

        .icon {
            transition: transform 0.2s;
            width: .8rem;
            height: .8rem;

            i {
                font-size: 16px;
            }

            &.opened {
                transform: rotate(90deg);
                transition: transform 0.2s;
            }
        }

        ul {
            margin-top: 0;
            max-height: 0;
            margin-left: 16px;
            transition: max-height 0.2s;
            overflow: hidden;

            &.stepOpened {
                max-height: 100px;
                transition: max-height 0.2s;
            }
        }

    }
</style>
