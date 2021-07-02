<template>
    <div>
      Product:
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
    order: {
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
    order(val) {
      if (val && val.id) {
        this.update()
      }
    },
  },
  methods: {
    async update() {
      this.product = await this.$http.post('/order-manager/product-purchased', { orderId: this.order.id })
    },
  },
}
</script>
