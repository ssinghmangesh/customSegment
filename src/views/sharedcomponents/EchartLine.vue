<template>
  <echart-line
    :title="title"
    :data="data"
    :change="change"
    :balance="balance"
    :subtitle="subtitle"
  />
</template>

<script>
import EchartLine from '@/views/charts-and-maps/charts/echart/EchartLine.vue'

export default {
  components: {
    EchartLine,
  },
  props: {
    title: {
      type: String,
      default: () => '',
    },
    subtitle: {
      type: String,
      default: () => '',
    },
    balance: {
      type: Number,
      default: () => 0,
    },
    change: {
      type: Number,
      default: () => 0,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
