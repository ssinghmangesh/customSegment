<template>
    <div>
      Refunds:
        <p
          v-for="(key, index) in refunds.data.data"
          :key="index"
        >
          {{ key }}:  {{ refunds.data.data[key] }}
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
      refunds: [],
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
      this.refunds = await this.$http.post('/order-manager/refunds', { orderId: this.order.id })
    },
  },
}
</script>
