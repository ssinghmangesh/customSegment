<template>
  <b-col
    :cols="defaultcol"
    :md="mdCol"
  >
    <div>
      <!-- <ChartjsBarChart
        v-if="graphType === 'ChartjsBarChart'"
        title="Chartjs Bar Chart"
        :data="barChart"
        :range-picker="rangePicker"
        :options="options"
      />
      <ChartjsBubbleChart
        v-else-if="graphType === 'ChartjsBubbleChart'"
        title="Chartjs Bubble Chart"
        :data="bubbleChart"
        total="100"
        updown="5"
        :options="options"
      />
      <ChartjsDoughnutChart
        v-else-if="graphType === 'ChartjsDoughnutChart'"
        title="Chartjs Doughnut Chart"
        :data="doughnutChart"
        :options="options"
      />
      <ChartjsHorizontalBarChart
        v-else-if="graphType === 'ChartjsHorizontalBarChart'"
        title="Chartjs Horizontal Bar Chart"
        subtitle="SubTitle"
        :data="horizontalBarChart"
        :range-picker="rangePicker"
        :options="options"
      />
      <ChartjsLineAreaChart
        v-else-if="graphType === 'ChartjsLineAreaChart'"
        title="Chartjs Line Area Chart"
        :data="lineAreaChart"
        :range-picker="rangePicker"
        :options="options"
      />
      <ChartjsLineChart
        v-else-if="graphType === 'ChartjsLineChart'"
        title="Chartjs Line Chart"
        subtitle="SubTitle"
        :data="lineChart"
        :options="options"
      />
      <ChartjsPolarAreaChart
        v-else-if="graphType === 'ChartjsPolarAreaChart'"
        title="Chartjs Polar Area Chart"
        :data="polarAreaChart"
        :options="options"
      />
      <ChartjsRadarChart
        v-else-if="graphType === 'ChartjsRadarChart'"
        title="Chartjs Radar Chart"
        :data="radarChart"
        :options="options"
      />
      <ChartjsScatterChart
        v-else-if="graphType === 'ChartjsScatterChart'"
        title="Chartjs Scatter Chart"
        :data="scatterChart"
        :options="options"
      /> -->
      <StatisticCardWithAreaChart
        v-if="graphType === 'StatisticCardWithAreaChartOrders'"
        :icon="icon"
        :color="color"
        :statistic-title="title"
        :chart-data="count"
      />
      <StatisticCardWithAreaChart
        v-else-if="graphType === 'StatisticCardWithAreaChartSubscribers'"
        :icon="icon"
        :statistic="kFormatter(data.subscribersGained.analyticsData.subscribers)"
        :statistic-title="title"
        :chart-data="data.subscribersGained.series"
      />
      <!-- <AnalyticsAvgSessions
        v-else-if="graphType === 'AnalyticsAvgSessions'"
        :data="data.avgSessions"
        :title="title"
      />
      <AnalyticsSupportTracker
        v-else-if="graphType === 'AnalyticsSupportTracker'"
        :data="data.supportTracker"
      />
      <AnalyticsTimeline
        v-else-if="graphType === 'AnalyticsTimeline'"
        :data="data.timeline"
        :title="title"
      />
      <AnalyticsSalesRadarChart
        v-else-if="graphType === 'AnalyticsSalesRadarChart'"
        :data="data.salesChart"
        :title="title"
        :period="period"
      />
      <AnalyticsAppDesign
        v-else-if="graphType === 'AnalyticsAppDesign'"
        :data="data.appDesign"
      />
      <InvoiceList
        v-else-if="graphType === 'InvoiceList'"
      /> -->
    </div>
  </b-col>
</template>

<script>
import ChartjsBarChart from '@/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue'
import ChartjsBubbleChart from '@/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue'
import ChartjsDoughnutChart from '@/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from '@/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue'
import ChartjsLineAreaChart from '@/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue'
import ChartjsLineChart from '@/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue'
import ChartjsPolarAreaChart from '@/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue'
import ChartjsRadarChart from '@/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue'
import ChartjsScatterChart from '@/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue'
import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import { kFormatter } from '@core/utils/filter'
import { BCol } from 'bootstrap-vue'
import AnalyticsAvgSessions from '@/views/dashboard/analytics/AnalyticsAvgSessions.vue'
import AnalyticsSupportTracker from '@/views/dashboard/analytics/AnalyticsSupportTracker.vue'
import AnalyticsTimeline from '@/views/dashboard/analytics/AnalyticsTimeline.vue'
import AnalyticsSalesRadarChart from '@/views/dashboard/analytics/AnalyticsSalesRadarChart.vue'
import AnalyticsAppDesign from '@/views/dashboard/analytics/AnalyticsAppDesign.vue'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'

export default {
  components: {
    ChartjsBarChart,
    ChartjsBubbleChart,
    ChartjsDoughnutChart,
    ChartjsHorizontalBarChart,
    ChartjsLineAreaChart,
    ChartjsLineChart,
    ChartjsPolarAreaChart,
    ChartjsRadarChart,
    ChartjsScatterChart,
    StatisticCardWithAreaChart,
    AnalyticsAvgSessions,
    AnalyticsSupportTracker,
    AnalyticsTimeline,
    AnalyticsSalesRadarChart,
    AnalyticsAppDesign,
    InvoiceList,
    BCol,
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: null,
    },
    // icon: {
    //   type: String,
    //   required: true,
    //   default: 'PackageIcon',
    // },
    // color: {
    //   type: String,
    //   required: true,
    //   default: 'warning',
    // },
    // title: {
    //   type: String,
    //   required: true,
    //   default: 'Orders Received',
    // },
    // dataProp: {
    //   type: Object,
    //   required: true,
    //   default: this.data,
    // },
  },
  data() {
    return {
      data: {},
      count: 0,
    }
  },
  computed: {
    defaultcol() {
      return this.item.col.default
    },
    mdCol() {
      return this.item.col.md
    },
    graphType() {
      return this.item.type
    },
    icon() {
      return this.item.icon
    },
    color() {
      return this.item.color
    },
    title() {
      return this.item.title
    },
    period() {
      return this.item.period
    },
  },
  async created() {
    // data
    // this.$http.get('/analytics/data')
    //   .then(response => { this.data = response.data })
    await this.update()
  },
  methods: {
    async update() {
      if (this.graphType === 'StatisticCardWithAreaChartOrders') {
        const response = await this.$http.post('/analytics-manager/count', this.item.data)
        console.log('response : ', response.data)
        this.count = response.data.data.count
      }
    },
    kFormatter,
  },
}

</script>
