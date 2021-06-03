<template>
</template>

<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    title: {
      type: String,
      require: true,
      default: () => 'Title',
    },
    subtitle: {
      type: String,
      require: true,
      default: () => 'Title',
    },
    data: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: null,
    },
    plugins: {
      type: Array,
      default: null,
    },
    styles: {
      type: Object,
      default: null,
    },
  },

}
</script>
