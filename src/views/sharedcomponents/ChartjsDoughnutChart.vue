<template>
  <div>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
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
