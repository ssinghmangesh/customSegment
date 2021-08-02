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
    cart: {
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
    cart(val) {
      if (val && val.id) {
        this.update()
      }
    },
  },
  methods: {
    async update() {
      this.product = await this.$http.post('/cart-manager/product', { cartId: this.cart.id })
    },
  },
}
</script>
