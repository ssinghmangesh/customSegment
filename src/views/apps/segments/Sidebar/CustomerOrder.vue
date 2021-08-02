<template>
  <div>
    <b-card
      v-for="(order, index) in orders"
      :key="index"
      border-variant="secondary"
      :title="order.name"
      bg-variant="transparent"
      class="shadow-none"
    >
      <b-card-text>
        <div class="d-flex justify-content-between">
          <span>Subtotal</span>
          <span><strong>{{ order.subtotal_price }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Tax</span>
          <span><strong>{{ order.total_tax }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Discount</span>
          <span><strong>{{ order.total_discounts }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Tip</span>
          <span><strong>{{ order.total_tip_received }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Total</span>
          <span><strong>{{ order.total_price }}</strong></span>
        </div>
        <div
          v-if="order.financial_status === 'paid' || order.financial_status === 'paid'"
          class="d-flex justify-content-between"
        >
          <span>Paid</span>
          <span><strong>{{ Number(order.total_price) - Number(order.total_outstanding) }}</strong></span>
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
      orders: [],
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
      const res = await this.$http.post('/customer-manager/orders', { customerId: this.customer.id })
      this.orders = res.data.data
    },
  },
}
</script>
