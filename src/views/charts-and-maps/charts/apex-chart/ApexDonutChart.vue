<template>
  <b-card>
    <b-card-title class="mb-1">
      {{ title }}
    </b-card-title>
    <b-card-sub-title class="mb-2">
      {{ subtitle }}
    </b-card-sub-title>

    <vue-apex-charts
      type="donut"
      height="350"
      :options="data.chartOptions"
      :series="series"
    />
  </b-card>
</template>

<script>
import {
  BCard, BCardTitle, BCardSubTitle,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardTitle,
    BCardSubTitle,
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
    series: {
      type: [Array],
      default: () => [],
    },
  },
  data() {
    return {
      apexChatData,
    }
  },
}
</script>
