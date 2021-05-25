<template>
  <div>
    <statistics
      :data="statisticsItems"
      title="Customer counts"
    />
    <!-- <line-area-chart :data="" :range="" /> -->
    <ChartjsBarChart
      title="test me"
      :rangePicker="rangePicker"
    />
    <ChartjsBubbleChart
      title="test me"
      :total="1000"
      percentage="10%"
    />
  </div>
</template>

<script>
import Statistics from '@/views/sharedcomponents/Statistics.vue'
import ChartjsBarChart from '@/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue'
import ChartjsBubbleChart from '@/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue'
import chartjsDataTest from './chartjsData'

export default {
  components: {
    Statistics,
    ChartjsBarChart,
    ChartjsBubbleChart,
  },
  data() {
    return {
      chartjsDataTest,
      rangePicker: ['2019-05-01', '2019-05-10'],
    }
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
    chartjsData() {
      return chartjsDataTest
    },
  },
}
</script>
