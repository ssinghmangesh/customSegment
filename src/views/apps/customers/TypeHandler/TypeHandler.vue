<template>
  <number-handler
    v-if="type === 'number'"
    @appliedFilter="appliedFilter"
  />
  <text-handler
    v-else-if="type === 'text'"
    @appliedFilter="appliedFilter"
  />
  <boolean-handler
    v-else-if="type === 'boolean'"
    @appliedFilter="appliedFilter"
  />
  <!-- <number-handler v-else-if="type === 'number'" />
  <boolean-handler v-else-if="type === 'boolean'" />
  <dropdown-handler v-else-if="type === 'dropdown'" /> -->
</template>
<script>
import NumberHandler from './NumberHandler.vue'
import TextHandler from './TextHandler.vue'
import BooleanHandler from './BooleanHandler.vue'

export default {
  components: {
    NumberHandler,
    TextHandler,
    BooleanHandler,
  },
  props: {
    selectedFilter: {
      type: Object,
      required: true,
    },
  },
  computed: {
    type() {
      return this.selectedFilter.type
    },
  },
  methods: {
    appliedFilter(data) {
      this.$emit('appliedFilter', data)
    },
  },
}
</script>
