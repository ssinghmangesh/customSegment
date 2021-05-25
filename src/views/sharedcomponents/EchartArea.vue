<template>
  <echart-area
    :title="title"
    :data="data"
  />
</template>

<script>
import EchartArea from '@/views/charts-and-maps/charts/echart/EchartArea.vue'

export default {
  components: {
    EchartArea,
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
