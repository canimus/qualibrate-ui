<template>

    <section class="section user-tech-details-tab">
        <h1 class="title is-5">{{ activeTask.title }}</h1>
        <div class="user-action-title title is-6">{{ activeUserAction.title }}</div>
        <div class="field">
            <label class="label">User Action</label>
            <p class="control">
                <span class="select">
                  <select v-model="activeUserAction.userActionId">
                    <option v-for="userActionsOption in userActionsOptions"
                            :value="userActionsOption.value">{{ userActionsOption.label }}</option>
                  </select>
                </span>
            </p>
        </div>

        <div class="field">
            <label class="label">Parameter Name</label>
            <p class="control">
                <input class="input" type="text" v-model="activeUserAction.parameterName">
            </p>
        </div>

        <div class="field">
            <label class="label">Parameter Type</label>
            <p class="control">
                <span class="select">
                  <select v-model="activeUserAction.parameterType">
                    <option value="input">Input</option>
                    <option value="output">Output</option>
                    <option value="none">None</option>
                  </select>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <label class="radio">
                    <input type="radio" value="true" v-model="activeUserAction.mandatory">
                    Mandatory
                </label>
                <label class="radio">
                    <input type="radio" value="false" v-model="activeUserAction.mandatory">
                    Optional
                </label>
            </p>
        </div>
    </section>

</template>

<script>

  import {mapGetters} from 'vuex'

  export default {

    computed: mapGetters({
      activeTask: 'activeTask',
      activeUserAction: 'activeUserAction',
      userActionsOptions: 'userActionsOptions'
    })
  }
</script>

<style lang="scss">

    @import "./../../../../assets/sass/bulma-variables.sass";

    .user-tech-details-tab {

        select, input[type="text"] {
            width: 500px;
            font-size: 14px;
        }

        label.label {
            font-size: 12px;
            color: grey;
        }

        h1 {
            color: grey;
        }

        .user-action-title {
            margin-bottom: 20px;
        }
    }

</style>
