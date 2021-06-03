<template>
</template>

<script>
import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
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
    options: {
      type: Object,
      default: null,
    },
  },

}
</script>
