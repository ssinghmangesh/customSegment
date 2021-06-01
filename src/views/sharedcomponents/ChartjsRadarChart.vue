<template>
  <div></div>
</template>

<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
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
