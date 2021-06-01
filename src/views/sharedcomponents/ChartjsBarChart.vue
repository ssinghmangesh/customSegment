<template>
  <ChartjsBarChart :title="title" :rangePicker="rangePicker" :data="data" :options="options" />
</template>

<script>
import ChartjsBarChart from '@/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue'

export default {
  components: {
    ChartjsBarChart,
  },
  props: {
    title: {
      type: String,
      require: true,
      default: () => 'Title',
    },
    rangePicker: {
      type: Array,
      default: () => [],
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
