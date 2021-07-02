<template>
    <div>
      fulfillments:
        <p
          v-for="(key, index) in fulfillments.data.data"
          :key="index"
        >
          {{ key }}:  {{ fulfillments.data.data[key] }}
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
      fulfillments: [],
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
      this.fulfillments = await this.$http.post('/order-manager/fulfillments', { orderId: this.order.id })
    },
  },
}
</script>
