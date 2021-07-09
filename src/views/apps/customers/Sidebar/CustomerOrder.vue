<template>
    <div>
        <b-card
          v-for="(order, index) in orders.data.data"
          :key="index"
          border-variant="secondary"
          :title="order.name"
          bg-variant="transparent"
          class="shadow-none"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up.
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
      this.orders = await this.$http.post('/customer-manager/orders', { customerId: this.customer.id })
    },
  },
}
</script>
