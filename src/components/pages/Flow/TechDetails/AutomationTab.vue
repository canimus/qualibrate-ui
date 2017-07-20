<template>
    <section class="section automation-tab">
        <h1 class="title is-5">{{ activeTask.title }}</h1>
        <div class="user-action-title title is-6">{{ activeUserAction.title }}</div>
        <div class="field">
            <div class="tree-wrapper">
                <div class="tree">
                    <ul>
                        <qfp-step v-for="step in activeUserAction.steps" :step="step" :key="step.id"></qfp-step>
                    </ul>
                </div>
            </div>
        </div>

        <div class="table-responsive">
            <div class="header-placeholder"></div>
            <div class="table-responsive-container">
                <table class="table is-striped is-narrow">
                    <thead class="is-small">
                    <tr>
                        <th>
                            <div></div>
                        </th>
                        <th>
                            <div>Name</div>
                        </th>
                        <th>
                            <div>Value</div>
                        </th>
                        <th>
                            <div class="mandatory">Mand</div>
                        </th>
                        <th>
                            <div class="regex">Regex</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="property in activeStep.properties" :property="property" :key="property.id">
                        <td><span class="icon is-small table-icon" @click="removeProperty(property.id)"><i
                                class="fa fa-trash"></i></span></td>
                        <td><input type="text" class="transparent" v-model="property.name"></td>
                        <td><input type="text" class="transparent" v-model="property.value"></td>
                        <td><input type="checkbox" v-model="property.mandatory"/></td>
                        <td><input type="checkbox" v-model="property.regex"/></td>
                    </tr>

                    <tr>
                        <td><span class="icon is-small table-icon" :class="{'is-disabled': newProperty.name === ''}"
                                  @click="addProperty()"><i
                                class="fa fa-plus"></i></span></td>
                        <td><input ype="text" v-model="newProperty.name"></td>
                        <td><input ype="text" v-model="newProperty.value"></td>
                        <td><input type="checkbox" v-model="newProperty.mandatory"/></td>
                        <td><input type="checkbox" v-model="newProperty.regex"/></td>
                    </tr>

                    </tbody>
                </table>
            </div>
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
        position: absolute;
        height: 100%;
        width: 100%;

        .user-action-title {
            margin-bottom: 20px;
        }

        .tree-wrapper {
            background: #fff;
            padding: 10px;

            .tree {
                width: 100%;
                height: 130px;
                overflow: scroll;

                > ul {
                    margin: 0;
                }
            }
        }

        .table-responsive {
            position: absolute;
            top: 255px;
            bottom: 0;
            left: 1.5rem;
            right: 1.5rem;
            background-color: #fff;

            .header-placeholder {
                width: 100%;
                height: 30px;
                background: $blue;
            }
            .table-responsive-container {
                height: 100%;
                overflow: scroll;
            }

            .table {

                margin-bottom: 3rem;

                thead {
                    th {
                        font-size: 13px;
                        font-weight: normal;
                        padding: 0;
                        &:first-child {
                            padding-right: 0;
                        }
                        div {
                            position: fixed;
                            background: $blue;
                            color: #fff;
                            font-weight: bold;
                            height: 30px;
                            width: inherit;
                            padding: 4px 8px;
                            margin-top: -30px;

                            &:last-child {
                                padding-right: 0;
                            }

                            &.mandatory {
                                margin-left: -28px;
                            }

                            &.regex {
                                margin-left: -17px;
                            }
                        }
                    }
                }

                tbody {

                    td:first-child {
                        padding-right: 0;
                    }

                    input[type='text'] {
                        padding: 4px 6px;
                        width: 100%;

                        &:focus {
                            outline: none;
                            outline: 1px solid $blue;
                        }
                    }

                    input.transparent {
                        border: none;
                        background: transparent;
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

    }

</style>
