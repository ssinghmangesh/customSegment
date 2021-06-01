<template>
</template>

<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
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
    rangePicker: {
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
