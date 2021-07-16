<template>
  <div>
    <b-card
      v-for="(event, index) in timeline"
      :key="index"
      border-variant="secondary"
      bg-variant="transparent"
      class="shadow-none"
    >
      <b-card-text>
        <div class="d-flex justify-content-between">
          <span>Event</span>
          <span><strong>{{ event.event_name }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Os</span>
          <span><strong>{{ event.os }}</strong></span>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import {
  BCard, BCardText,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardText,
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
