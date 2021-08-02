<template>
  <div>
    <b-card
      v-for="(product, index) in products"
      :key="index"
      border-variant="secondary"
      :title="product.name"
      bg-variant="transparent"
      class="shadow-none"
    >
      <b-card-text>
        <div class="d-flex justify-content-between">
          <span>Order Name</span>
          <span><strong>{{ product.order_name }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Status</span>
          <span><strong>{{ product.fulfillment_status }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Price</span>
          <span><strong>{{ product.price }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Quantity</span>
          <span><strong>{{ product.quantity }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Discount</span>
          <span><strong>{{ product.total_discount }}</strong></span>
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
      products: [],
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
        const res = await this.$http.post('/customer-manager/product-purchased', { customerId: this.customer.id })
        this.products = res.data.data
      }
    },
  },
}
</script>
