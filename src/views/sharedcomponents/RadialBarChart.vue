<template>
  <apex-radial-bar-chart
    :title="title"
    :data="data"
  />
</template>

<script>
import ApexRadialBarChart from '@/views/charts-and-maps/charts/apex-chart/ApexRadialBarChart.vue'

export default {
  components: {
    ApexRadialBarChart,
  },
  props: {
    title: {
      type: String,
      default: () => '',
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
