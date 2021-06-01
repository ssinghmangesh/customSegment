<template>
  <div>
    <b-form-radio-group
      v-model="selected"
      :options="filterTypes"
      name="radio-validation"
      class="radio"
    />
    <b-form-input
      v-if="selected !== false"
      v-model="values[0]"
      size="sm"
      class="radio"
    />
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
  BFormRadioGroup,
  BFormInput,
  BButton,
// BCardText
} from 'bootstrap-vue'

export default {
  components: {
    BFormRadioGroup,
    BFormInput,
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
      selected: false,
      filterTypes: {
        contains: 'Contains',
        starts_with: 'Starts With',
      },
      values: [''],
    }
  },
  created() {
    if (this.appliedValues) {
      this.selected = this.appliedValues.filterType
      this.values = [...this.appliedValues.values]
    }
  },
  methods: {
    appliedFilter() {
      const { selected, values } = this
      this.$emit('appliedFilter', {
        filterType: selected,
        values,
      })
    },
  },
}
</script>
<style>
.radio{
  margin-bottom: 10px;
}
.button{
  float: right;
}
</style>
