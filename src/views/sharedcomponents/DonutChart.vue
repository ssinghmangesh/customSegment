<template>
  <apex-donut-chart
    :title="title"
    :data="data"
    :subtitle="subtitle"
  />
</template>

<script>
import ApexDonutChart from '@/views/charts-and-maps/charts/apex-chart/ApexDonutChart.vue'

export default {
  components: {
    ApexDonutChart,
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
    subtitle: {
      type: String,
      default: () => '',
    },
  },
}
</script>
