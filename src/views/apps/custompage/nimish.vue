<template>
  <div>
    <statistics
      title="Customer counts"
      :data="statisticsItems"
    />
    <ChartjsBarChart
      title="Chartjs Bar Chart"
      :data="barChart"
      :range-picker="rangePicker"
      :options="options"
    />
    <ChartjsBubbleChart
      title="Chartjs Bubble Chart"
      :data="bubbleChart"
      total="100"
      updown="5"
      :options="options"
    />
    <ChartjsDoughnutChart
      title="Chartjs Doughnut Chart"
      :data="doughnutChart"
      :options="options"
    />
    <ChartjsHorizontalBarChart
      title="Chartjs Horizontal Bar Chart"
      subtitle="SubTitle"
      :data="horizontalBarChart"
      :range-picker="rangePicker"
      :options="options"
    />
    <ChartjsLineAreaChart
      title="Chartjs Line Area Chart"
      :data="lineAreaChart"
      :range-picker="rangePicker"
      :options="options"
    />
    <ChartjsLineChart
      title="Chartjs Line Chart"
      subtitle="SubTitle"
      :data="lineChart"
      :options="options"
    />
    <ChartjsPolarAreaChart
      title="Chartjs Polar Area Chart"
      :data="polarAreaChart"
      :options="options"
    />
    <ChartjsRadarChart
      title="Chartjs Radar Chart"
      :data="radarChart"
      :options="options"
    />
    <ChartjsScatterChart
      title="Chartjs Scatter Chart"
      :data="scatterChart"
      :options="options"
    />
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

export default {

  components: {
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
