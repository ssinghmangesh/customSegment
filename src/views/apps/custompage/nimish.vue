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
        // {
        //   type: 'ChartjsBarChart',
        //   col: {
        //     default: 12,
        //     md: 8,
        //   },
        //   data: {
        //     table: 'order',
        //     workspaceId: 333,
        //     columnname: 'total_price',
        //     startdate: '2000-01-01 11:49:40.765997+05:30',
        //     enddate: '2021-05-13 11:49:40.765997+05:30',
        //   },
        // },
        // {
        //   type: 'ChartjsBarChart',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'ChartjsHorizontalBarChart',
        //   col: {
        //     md: 4,
        //     default: 12,
        //   },
        // },
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
          icon: 'PackageIcon',
          color: 'warning',
          title: 'Orders Received',
          data: {
            table: 'order',
            workspaceId: 333,
            startdate: '2000-01-01 11:49:40.765997+05:30',
            enddate: '2021-05-13 11:49:40.765997+05:30',
          },
          col: {
            md: 3,
            default: 12,
          },
        },
        {
          type: 'StatisticCardWithAreaChartSubscribers',
          icon: 'UsersIcon',
          title: 'Subscribers Gained',
          col: {
            md: 3,
            default: 12,
          },
        },
        // {
        //   type: 'AnalyticsAvgSessions',
        //   title: 'Avg Sessions',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'AnalyticsSupportTracker',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'AnalyticsTimeline',
        //   title: 'User Timeline',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'AnalyticsSalesRadarChart',
        //   title: 'Sales',
        //   period: 'Last x months',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'AnalyticsAppDesign',
        //   col: {
        //     md: 6,
        //     default: 12,
        //   },
        // },
        // {
        //   type: 'InvoiceList',
        //   col: {
        //     md: 12,
        //     default: 12,
        //   },
        // },
      ]
    },
    // chartjsData() {
    //   return chartjsDataTest
    // },
  },
}

</script>
