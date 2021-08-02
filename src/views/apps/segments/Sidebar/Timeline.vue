<template>
  <div>
    <AnalyticsTimeline
      :data="timeline"
    />
  </div>
</template>
<script>
// import {
//   BCard, BCardText,
// } from 'bootstrap-vue'
import AnalyticsTimeline from '@/views/dashboard/analytics/AnalyticsTimeline.vue'

export default {
  components: {
    // BCard,
    // BCardText,
    AnalyticsTimeline,
  },
  props: {
    customer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeline: [],
    }
  },
  watch: {
    customer(val) {
      if (val && val.id) {
        this.update()
      }
    },
  },
  methods: {
    async update() {
      if (this.customer) {
        const res = await this.$http.post('/customer-manager/timeline', { customerId: this.customer.id })
        this.timeline = res.data.data
      }
    },
  },
}
</script>
