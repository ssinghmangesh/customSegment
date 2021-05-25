<template>
  <echart-stacked-area
    :title="title"
    :data="data"
  />
</template>

<script>
import EchartStackedArea from '@/views/charts-and-maps/charts/echart/EchartStackedArea.vue'

export default {
  components: {
    EchartStackedArea,
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
