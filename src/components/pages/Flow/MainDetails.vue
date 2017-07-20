<template>
    <div class="main-details">
        <div class="field">
            <label class="label">Status</label>
            <p class="control">
                <span class="select">
                  <select>
                    <option value="in-design">In Desing</option>
                    <option value="ready">Ready</option>
                    <option value="none"> -- </option>
                  </select>
                </span>
            </p>
        </div>

        <div class="field">
            <label class="label">Criticality</label>
            <p class="control">
                <span class="select">
                  <select>
                    <option value="critical">Critical</option>
                    <option value="important">Important</option>
                    <option value="nice">Nice to have</option>
                    <option value="none">--</option>
                  </select>
                </span>
            </p>
        </div>

        <div class="quil-wrapper">
            <quill :options="{ theme: 'snow' }">
            </quill>
        </div>
    </div>
</template>

<script>

  import Quill from 'vue-bulma-quill'

  export default {
    components: {
      Quill
    }

  }
</script>

<style lang="styl">
    @import "~quill/assets/snow"

    .main-details {
        padding-top: 20px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        .field {
            display: inline-block;
            margin-right: 20px;

            label {
                color: grey;
            }
        }

        .quil-wrapper {
            background-color: #fff;
            position: absolute;
            top: 100px;
            bottom: 1px;
            left: 0;
            right: 0;
            padding-bottom: 43px;

        }

    }


</style>
