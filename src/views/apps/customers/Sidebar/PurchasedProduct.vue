<template>
    <div>
        <b-card
          v-for="(product, index) in products.data.data"
          :key="index"
          border-variant="secondary"
          :title="product.name"
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
        this.products = await this.$http.post('/customer-manager/product-purchased', { customerId: this.customer.id })
      }
    },
  },
}
</script>
