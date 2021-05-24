<template>
  <apex-line-chart
    :title="title"
    :data="data"
    :subtitle="subtitle"
    :balance="balance"
    :change="change"
  />
</template>

<script>
import ApexLineChart from '@/views/charts-and-maps/charts/apex-chart/ApexLineChart.vue'

export default {
  components: {
    ApexLineChart,
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
