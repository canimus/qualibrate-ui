<template>
    <section class="section automation-tab">
        <h1>{{ activeTask.title }}</h1>
        <div class="user-action-title">{{ activeUserAction.title }}</div>
        <div class="field">
            <div class="tree-wrapper">
                <ul>
                    <qfp-step v-for="step in activeUserAction.steps" :step="step" :key="step.id"></qfp-step>
                </ul>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table is-striped is-narrow">
                <thead class="is-small">
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Mand</th>
                    <th>Regex</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="property in activeStep.properties" :property="property" :key="property.id">
                    <td><span class="icon is-small table-icon" @click="removeProperty(property.id)"><i
                            class="fa fa-trash"></i></span></td>
                    <td><input v-model="property.name"></td>
                    <td><input v-model="property.value"></td>
                    <td><input type="checkbox" v-model="property.mandatory"/></td>
                    <td><input type="checkbox" v-model="property.regex"/></td>
                </tr>

                <tr>
                    <td><span class="icon is-small table-icon" :class="{'is-disabled': newProperty.name === ''}"
                              @click="addProperty()"><i
                            class="fa fa-plus"></i></span></td>
                    <td><input v-model="newProperty.name"></td>
                    <td><input v-model="newProperty.value"></td>
                    <td><input type="checkbox" v-model="newProperty.mandatory"/></td>
                    <td><input type="checkbox" v-model="newProperty.regex"/></td>
                </tr>

                </tbody>
            </table>
        </div>
    </section>
</template>

<script>

  import {mapGetters} from 'vuex'
  import Step from './AutomationTab/Step.vue'

  export default {

    data () {
      return {
        newProperty: {
          id: '',
          name: '',
          value: '',
          mandatory: false,
          regex: false
        }
      }
    },

    components: {
      'qfp-step': Step
    },

    computed: mapGetters({
      activeTask: 'activeTask',
      activeUserAction: 'activeUserAction',
      userActionsOptions: 'userActionsOptions',
      activeStep: 'activeStep'
    }),

    methods: {
      removeProperty (propertyId) {
        this._.remove(this.activeStep.properties, (property) => {
          return property.id === propertyId
        })
      },

      addProperty () {
        if (this.newProperty.name === '') {
          return
        }

        let newProperty = this._.clone(this.newProperty)
        newProperty.id = this._.maxBy(this.activeStep.properties, 'id').id + 1

        this.activeStep.properties.push(newProperty)

        this.newProperty.id = ''
        this.newProperty.name = ''
        this.newProperty.value = ''
        this.newProperty.mandatory = false
        this.newProperty.regex = false
      }
    }
  }
</script>

<style lang="scss">

    @import "./../../../../assets/sass/bulma-variables.sass";

    .automation-tab {
        .user-action-title {
            margin-bottom: 20px;
        }

        .tree-wrapper {
            background: #fff;
            width: 100%;
            padding: 20px;

            > ul {
                margin: 0;
            }
        }

        .table {
            thead {
                th {
                    font-size: 14px;
                    font-weight: normal;
                }
            }

            .table-icon {
                cursor: pointer;
                transition: opacity .3s ease;

                &.is-disabled {
                    cursor: not-allowed;
                    opacity: .2;
                    transition: opacity .3s ease;
                }
            }
        }

    }

</style>
