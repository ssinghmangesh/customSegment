<template>
  <div>
    <b-row>
      <Graph
        v-for="(item, index) in pageDefinition"
        :key="index"
        :item="item"
      />
    </b-row>
  </div>
</template>

<script>
import { BRow } from 'bootstrap-vue'
import Graph from './graphs.vue'

export default {

  components: {
    Graph,
    BRow,
  },
  computed: {
    pageDefinition() {
      return [
        {
          type: 'ChartjsBarChart',
          col: {
            md: 6,
            default: 12,
          },
        },
        {
          type: 'ChartjsHorizontalBarChart',
          col: {
            md: 6,
            default: 12,
          },
        },
        // {
        //   type: 'ChartjsLineChart',
        //   col: {
        //     md: 12,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'ChartjsRadarChart',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'ChartjsPolarAreaChart',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'ChartjsBubbleChart',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'ChartjsDoughnutChart',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'ChartjsScatterChart',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'ChartjsLineAreaChart',
        //   col: {
        //     md: 12,
        //     default: 12,
        //   },
        // },
        {
          type: 'StatisticCardWithAreaChartOrders',
          col: {
            md: 3,
            default: 12,
          },
        },
        {
          type: 'StatisticCardWithAreaChartSubscribers',
          col: {
            md: 3,
            default: 12,
          },
        },
        {
          type: 'AnalyticsAvgSessions',
          col: {
            md: 6,
            default: 12,
          },
        },
        {
          type: 'AnalyticsSupportTracker',
          col: {
            md: 6,
            default: 12,
          },
        },
        {
          type: 'AnalyticsTimeline',
          col: {
            md: 6,
            default: 12,
          },
        },
        {
          type: 'AnalyticsSalesRadarChart',
          col: {
            md: 6,
            default: 12,
          },
        },
        {
          type: 'AnalyticsAppDesign',
          col: {
            md: 6,
            default: 12,
          },
        },
        {
          type: 'InvoiceList',
          col: {
            md: 12,
            default: 12,
          },
        },
      ]
    },
  },
}

</script>
