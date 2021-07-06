<template>
    <div>
      Product Recommendations:
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
    recommendations: {
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
    recommendations(val) {
      if (val && val.id) {
        this.update()
      }
    },
  },
  methods: {
    async update() {
      this.product = await this.$http.post('/product-recommendations-manager/recommendations', { customerId: this.recommendations.id })
    },
  },
}
</script>
