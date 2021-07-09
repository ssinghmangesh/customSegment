<template>
    <div>
      Product:
        <p
          v-for="(key, index) in transactions.data.data"
          :key="index"
        >
          {{ key }}:  {{ transactions.data.data[key] }}
        </p>
    </div>
</template>
<script>
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      transactions: [],
    }
  },
  watch: {
    order(val) {
      if (val && val.id) {
        this.update()
      }
    },
  },
  methods: {
    async update() {
      this.transactions = await this.$http.post('/order-manager/transactions', { orderId: this.order.id })
    },
  },
}
</script>
