<template>
  <div>
    <b-row class="match-height">
      <b-col cols="12">
        <statistics
          title="Customer counts"
          :data="statisticsItems"
        />
      </b-col>
      <b-col md="6">
        <ChartjsBarChart
          title="Chartjs Bar Chart"
          :data="barChart"
          :range-picker="rangePicker"
          :options="options"
        />
      </b-col>
      <b-col md="6">
        <ChartjsHorizontalBarChart
          title="Chartjs Horizontal Bar Chart"
          subtitle="SubTitle"
          :data="horizontalBarChart"
          :range-picker="rangePicker"
          :options="options"
        />
      </b-col>
      <b-col cols="12">
        <ChartjsLineAreaChart
          title="Chartjs Line Area Chart"
          :data="lineAreaChart"
          :range-picker="rangePicker"
          :options="options"
        />
      </b-col>
      <b-col md="6">
        <ChartjsPolarAreaChart
          title="Chartjs Polar Area Chart"
          :data="polarAreaChart"
          :options="options"
        />
      </b-col>
      <b-col md="6">
        <ChartjsRadarChart
          title="Chartjs Radar Chart"
          :data="radarChart"
          :options="options"
        />
      </b-col>
      <b-col lg="4">
        <ChartjsDoughnutChart
          title="Chartjs Doughnut Chart"
          :data="doughnutChart"
          :options="options"
        />
      </b-col>
      <b-col lg="8">
        <ChartjsScatterChart
          title="Chartjs Scatter Chart"
          :data="scatterChart"
          :options="options"
        />
      </b-col>
      <b-col cols="12">
        <ChartjsLineChart
          title="Chartjs Line Chart"
          subtitle="SubTitle"
          :data="lineChart"
          :options="options"
        />
      </b-col>
      <b-col cols="12">
        <ChartjsBubbleChart
          title="Chartjs Bubble Chart"
          :data="bubbleChart"
          total="100"
          updown="5"
          :options="options"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Statistics from '@/views/sharedcomponents/Statistics.vue'
import ChartjsBarChart from '@/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue'
import ChartjsBubbleChart from '@/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue'
import ChartjsDoughnutChart from '@/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from '@/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue'
import ChartjsLineAreaChart from '@/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue'
import ChartjsLineChart from '@/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue'
import ChartjsPolarAreaChart from '@/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue'
import ChartjsRadarChart from '@/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue'
import ChartjsScatterChart from '@/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue'
import { BRow, BCol } from 'bootstrap-vue'

export default {

  components: {
    BRow,
    BCol,

    Statistics,
    ChartjsBarChart,
    ChartjsBubbleChart,
    ChartjsDoughnutChart,
    ChartjsHorizontalBarChart,
    ChartjsLineAreaChart,
    ChartjsLineChart,
    ChartjsPolarAreaChart,
    ChartjsRadarChart,
    ChartjsScatterChart,
  },
  computed: {
    statisticsItems() {
      return [
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '2376670k',
        },
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '230k',
        },
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '230k',
        },
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '230k',
        },
      ]
    },
  },
}
</script>
