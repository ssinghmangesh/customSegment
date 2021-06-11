<template>
  <b-col lg="4">
    <analytics-timeline
      :data="data"
      title="User Timeline"
    />
  </b-col>
</template>

<script>
// import { BRow, BCol } from 'bootstrap-vue'

// import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
// import { kFormatter } from '@core/utils/filter'
// import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
// import AnalyticsCongratulation from './AnalyticsCongratulation.vue'
// import AnalyticsAvgSessions from './AnalyticsAvgSessions.vue'
// import AnalyticsSupportTracker from './AnalyticsSupportTracker.vue'
import AnalyticsTimeline from './AnalyticsTimeline.vue'
// import AnalyticsSalesRadarChart from './AnalyticsSalesRadarChart.vue'
// import AnalyticsAppDesign from './AnalyticsAppDesign.vue'

export default {
  components: {
    // BRow,
    // BCol,
    // AnalyticsCongratulation,
    // AnalyticsAvgSessions,
    // StatisticCardWithAreaChart,
    // AnalyticsSupportTracker,
    AnalyticsTimeline,
    // AnalyticsSalesRadarChart,
    // AnalyticsAppDesign,
    // InvoiceList,
  },
  data() {
    return {
      data: {},
    }
  },
  async created() {
    // data
    // this.$http.get('/analytics/data')
    //   .then(response => {
    //     this.data = response.data
    //     console.log(this.data)
    //   })
    await this.update()
  },
  methods: {
    // kFormatter,
    async update() {
      const data = {
        customerId: 0,
      }
      const response = await this.$http.post('/analytics-manager/timeline', data)
      this.data = response.data.data
      // console.log(this.data)
    },
  },
}
</script>
