<template>
  <apex-bar-chart
    :title="title"
    :subtitle="subtitle"
    :data="data"
    :range-picker="rangePicker"
  />
</template>

<script>
import ApexBarChart from '@/views/charts-and-maps/charts/apex-chart/ApexBarChart.vue'

export default {
  components: {
    ApexBarChart,
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
    data: {
      type: Object,
      default: () => {},
    },
    rangePicker: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
