<template>
    <div class="task">
        <article class="tile is-child box">
            <div class="content">
                <h2>{{task.title}}</h2>

                <figure class="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/640x480.png">
                </figure>

                <div class="user-actions">
                    <draggable v-model="userActions" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                        <div class="user-action" v-for="userAction in userActions">
                            <span class="icon">
                                <i class="is-pulled-left fa fa-small" :class="userAction.iconClass"></i>
                            </span>
                            {{userAction.title}}
                            <i class="is-pulled-right fa fa-ellipsis-v"></i>
                        </div>
                    </draggable>
                </div>
            </div>
        </article>
    </div>
</template>

<script>

  import Draggable from 'vuedraggable'
  import UserAction from './UserAction.vue'

  export default {

    props: ['task'],

    components: {
      UserAction,
      Draggable
    },

    data () {
      return {
        userActions: [
          {title: '1.1 Connect to SAP', iconClass: 'fa fa-connectdevelop'},
          {title: '1.2 Type P_PASSWORD in Password', iconClass: 'fa fa-terminal'},
          {title: '1.3 Press ENTER on SAP Easy Access.', iconClass: 'fa fa-keyboard-o'},
          {title: '1.4 Type P_USER in User', iconClass: 'fa fa-terminal'},
          {title: '1.5 Press ENTER on SAP', iconClass: 'fa fa-keyboard-o'}
        ]
      }
    },

    methods: {
      initTasksHeight () {
        let top = this.$el.getBoundingClientRect().top
        this.$el.style.maxHeight = window.innerHeight - top - 20 + 'px'
        this.$el.style.minHeight = window.innerHeight - top - 20 + 'px'
      }
    },

    mounted () {
      window.addEventListener('resize', this.initTasksHeight)
      this.initTasksHeight()
    }
  }
</script>

<style lang="scss">

    @import "../../../assets/sass/bulma-variables.sass";

    .task {
        min-width: 300px;
        display: flex;
        padding: 0.25rem;
        cursor: move;

        i.fa-ellipsis-v {
            font-size: 16px;
            cursor: pointer;
            padding: 3px;
        }

        i.fa-small {
            font-size: 12px;
        }
    }

    .user-action {
        font-size: 12px;
        box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
        margin: 5px 0;
        padding: 4px 7px 4px 3px;

        &.sortable-ghost {
             color: #ddd;
         }

         &.sortable-drag {
            opacity: 1;
            background: $blue;
            color: #fff;
            cursor: move;
          }
    }
</style>
