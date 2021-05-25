<template>
  <apex-scatter-chart
    :title="title"
    :data="data"
  />
</template>

<script>
import ApexScatterChart from '@/views/charts-and-maps/charts/apex-chart/ApexScatterChart.vue'

export default {
  components: {
    ApexScatterChart,
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
