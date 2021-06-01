<template>
</template>

<script>
import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  props: {
    title: {
      type: String,
      require: true,
      default: () => 'Title',
    },
    data: {
      type: Array,
      default: () => [],
    },
    amount: {
        type: Number,
        require: true,
        default: () => 0,
    },
    change: {
        type: Number,
        require: true,
        default: () => 0,
    },
    options: {
      type: Object,
      default: null,
    },
  },

}
</script>
