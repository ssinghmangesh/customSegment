<template>
  <div>
    <div
      v-for="(type, index) in filterTypes"
      :key="index"
    >
      <b-form-checkbox
        v-model="selected"
        :value="type"
      >{{ type }}
      </b-form-checkbox>
      <b-form-input
        v-if="selected === type"
        v-model="values[0]"
        size="sm"
      />
      <b-form-input
        v-if="selected === type && selected === 'Between'"
        v-model="values[1]"
        size="sm"
      />
    </div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="appliedFilter"
    >
      Add
    </b-button>
  </div>
</template>
<script>
import {
  BFormCheckbox,
  BFormInput,
  BButton,
// BCardText
} from 'bootstrap-vue'

export default {
  components: {
    BFormCheckbox,
    BFormInput,
    BButton,
    // BCardText,
  },
  data() {
    return {
      selected: '',
      filterTypes: ['Exactly', 'Greater Than', 'Less Than', 'Between'],
      values: ['', ''],
    }
  },
  watch: {
    selected() {
      console.log(this.selected)
    },
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
