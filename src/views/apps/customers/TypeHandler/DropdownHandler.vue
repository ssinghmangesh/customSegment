<template>
  <div>
    <b-form-radio-group
      v-model="selected"
      :options="filterTypes"
      name="radio-validation"
      class="radio"
    />
    <v-select
      v-model="values"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
      multiple
      label="title"
      class="mb-10"
      :options="options"
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
import { BButton, BFormRadioGroup } from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    vSelect,
    BFormRadioGroup,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    appliedValues: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: '',
      filterTypes: {
        in: 'Is Any of',
        not_in: 'Is None of',
      },
      values: [],
    }
  },
  created() {
    if (this.appliedValues) {
      this.values = [...this.appliedValues.values]
      this.selected = this.appliedValues.filterType
    }
  },
  methods: {
    appliedFilter() {
      this.$emit('appliedFilter', {
        filterType: this.selected,
        values: this.values,
        options: this.options,
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
