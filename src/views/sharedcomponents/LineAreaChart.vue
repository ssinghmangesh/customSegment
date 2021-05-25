<template>
  <apex-line-area-chart
    :title="title"
    :data="data"
    :range-picker="rangePicker"
  />
</template>

<script>
import ApexLineAreaChart from '@/views/charts-and-maps/charts/apex-chart/ApexLineAreaChart.vue'

export default {
  components: {
    ApexLineAreaChart,
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
    rangePicker: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
