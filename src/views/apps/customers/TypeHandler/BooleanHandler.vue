<template>
  <div>
    <div>
      <b-form-checkbox
        v-model="selected"
        :value="true"
      >Yes
      </b-form-checkbox>
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
  BButton,
// BCardText
} from 'bootstrap-vue'

export default {
  components: {
    BFormCheckbox,
    BButton,
    // BCardText,
  },
  data() {
    return {
      selected: false,
    }
  },
  watch: {
    selected() {
      console.log(this.selected)
    },
  },
  methods: {
    appliedFilter() {
      const { selected } = this
      this.$emit('appliedFilter', {
        filterType: selected ? 'equal_to' : 'not_equal_to',
      })
    },
  },
}
</script>
