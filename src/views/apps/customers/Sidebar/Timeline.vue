<template>
    <div>
      timeline:
        <p
          v-for="(key, index) in timeline.data.data"
          :key="index"
        >
          {{ key }}:  {{ timeline.data.data[key] }}
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
      timeline: [],
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
        this.timeline = await this.$http.post('/customer-manager/page-viewed', { customerId: this.customer.id })
      }
    },
  },
}
</script>
