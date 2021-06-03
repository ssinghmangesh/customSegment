<template>
  <div>
    <div>
      <b-form-checkbox
        v-model="values"
        value="Yes"
        unchecked-value=""
        class="mb-10"
      >Yes
      </b-form-checkbox>
      <b-form-checkbox
        v-model="values"
        value="No"
        unchecked-value=""
        class="mb-10"
      >No
      </b-form-checkbox>
    </div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      class="button"
      @click="appliedFilter"
    >
      Add
    </b-button>
  </div>
</template>
<script>
import {
  BFormCheckbox,
  BButton,
// BCardText
} from 'bootstrap-vue'

export default {
  components: {
    BFormCheckbox,
    BButton,
    // BCardText,
  },
  props: {
    appliedValues: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      values: [],
    }
  },
  created() {
    if (this.appliedValues) {
      this.values = [...this.appliedValues.values]
    }
  },
  methods: {
    appliedFilter() {
      this.$emit('appliedFilter', {
        values: this.values,
      })
    },
  },
}
</script>
<style>
.mb-10{
  margin-bottom: 10px;
}
.button{
  float: right;
}
</style>
