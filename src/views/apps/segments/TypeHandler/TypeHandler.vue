<template>
  <number-handler
    v-if="type === 'number'"
    :applied-values="appliedValues"
    @appliedFilter="appliedFilter"
  />
  <text-handler
    v-else-if="type === 'text'"
    :applied-values="appliedValues"
    @appliedFilter="appliedFilter"
  />
  <boolean-handler
    v-else-if="type === 'boolean'"
    :applied-values="appliedValues"
    @appliedFilter="appliedFilter"
  />
  <dropdown-handler
    v-else-if="type === 'dropdown'"
    :options="options"
    :applied-values="appliedValues"
    @appliedFilter="appliedFilter"
  />
  <time-handler
    v-else-if="type === 'timestamptz'"
    :applied-values="appliedValues"
    @appliedFilter="appliedFilter"
  />
  <array-handler
    v-else-if="type === 'array'"
    :applied-values="appliedValues"
    @appliedFilter="appliedFilter"
    :selected-filter="selectedFilter"
  />
</template>
<script>
import NumberHandler from './NumberHandler.vue'
import TextHandler from './TextHandler.vue'
import BooleanHandler from './BooleanHandler.vue'
import DropdownHandler from './DropdownHandler.vue'
import TimeHandler from './TimeHandler.vue'
import ArrayHandler from './ArrayHandler.vue'

export default {
  components: {
    NumberHandler,
    TextHandler,
    BooleanHandler,
    DropdownHandler,
    TimeHandler,
    ArrayHandler,
  },
  props: {
    selectedFilter: {
      type: Object,
      required: true,
    },
    appliedFilters: {
      type: Array,
      required: true,
    },
  },
  computed: {
    options() {
      return this.selectedFilter.options
    },
    type() {
      return this.selectedFilter.type
    },
    appliedValues() {
      if (this.selectedFilter.index + 1) {
        return this.appliedFilters[this.selectedFilter.index]
      }
      return null
    },
  },
  methods: {
    appliedFilter(data) {
      this.$emit('appliedFilter', data)
    },
  },
}
</script>
