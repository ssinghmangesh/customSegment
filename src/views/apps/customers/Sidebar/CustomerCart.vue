<template>
    <div>
      carts:
        <p
          v-for="(key, index) in carts.data.data"
          :key="index"
        >
          {{ key }}:  {{ carts.data.data[key] }}
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
      carts: [],
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
        this.carts = await this.$http.post('/customer-manager/cart', { customerId: this.customer.id })
      }
    },
  },
}
</script>
