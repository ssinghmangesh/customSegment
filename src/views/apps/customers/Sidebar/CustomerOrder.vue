<template>
    <div>
      customer orders:
        <p
          v-for="(key, index) in orders.data.data"
          :key="index"
        >
          {{ key }}:  {{ orders.data.data[key] }}
        </p>
    </div>
</template>
<script>
export default {
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
