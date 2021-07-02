<template>
    <div>
      Products in draft order:
        <p
          v-for="(key, index) in product.data.data"
          :key="index"
        >
          {{ key }}:  {{ product.data.data[key] }}
        </p>
    </div>
</template>
<script>
export default {
  props: {
    draftorder: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      product: [],
    }
  },
  watch: {
    draftorder(val) {
      if (val && val.id) {
        this.update()
      }
    },
  },
  methods: {
    async update() {
      this.product = await this.$http.post('/draft-order-manager/product', { orderId: this.draftorder.order_id })
    },
  },
}
</script>
