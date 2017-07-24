<template>

    <li class="report-task">
        <span @click="toggleOpen()">
            <span class="icon" :class="{opened: opened}">
                <i class="fa fa-chevron-right"></i>
            </span>
            <span class="item-title">
                  <span class="icon"><i class="fa fa-check-circle"></i></span>
                {{ task.title }}
                <span class="icon"><i class="fa fa-code-fork"></i></span>
            </span>
        </span>
        <ul :class="{itemOpened: opened}">
            <li v-for="userAction in userActions" :userAction="userAction" :key="userAction.id">
                <span class="icon"><i class="fa fa-check-circle"></i></span> {{userAction.title}}<span class="icon"><i
                    class="fa fa-bolt"></i></span>
            </li>
        </ul>
    </li>
</template>

<script>

  export default {
    name: 'qfp-report-item',
    props: ['task'],

    data () {
      return {
        userActions: this.$store.state.app.userActions,
        opened: false
      }
    },

    computed: {
      hasChildren () {
//        return this.item.children && this.item.children.length > 0
        return true
      }
    },

    methods: {
      toggleOpen () {
        this.opened = !this.opened
      }
    }

  }
</script>

<style lang="scss">

    @import "./../../../../assets/sass/bulma-variables.sass";

    li.report-task {
        list-style: none;
        font-size: 18px;
        color: #000;
        padding: 15px 0 0 0;

        .item-title {
            cursor: pointer;
            font-weight: bold;

            &.active {
                color: $blue;
            }

            span.icon {

                padding: 0 15px;

                i {
                    font-size: 20px !important;

                    &.fa-check-circle {
                        color: #43A047;
                    }

                    &.fa-code-fork {
                        color: #FFA834;
                    }
                }
            }
        }

        .icon {
            transition: transform 0.2s;
            width: .8rem;
            height: .8rem;

            i {
                font-size: 14px;
                color: #646464;
            }

            &.opened {
                transform: rotate(90deg);
                transition: transform 0.2s;
            }
        }

        ul {
            box-shadow: 0 0 10px rgba(10, 10, 10, 0.5);
            margin: 0 0.5rem 0 25px;
            max-height: 0;
            padding: 0;

            transition: all 0.3s;
            overflow: hidden;
            padding: 0 20px;

            &.itemOpened {
                margin-top: 15px;
                max-height: 1000px;
                padding: 10px 20px;
                transition: all 0.6s;
            }

            li {
                color: #646464;
                font-size: 14px;
                padding: 12px 0;
                border-bottom: 1px solid #bbb;

                &:last-child {
                    border: none;
                }

                span.icon {

                    padding: 0 15px;

                    i {
                        &.fa-check-circle {
                            color: #43A047;
                            font-size: 20px !important;
                        }
                    }
                }
            }
        }

    }
</style>
