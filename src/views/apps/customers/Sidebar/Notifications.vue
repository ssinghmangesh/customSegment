<template>
    <div>
      Notifications:
        <p
          v-for="(key, index) in notifications.data.data"
          :key="index"
        >
          {{ key }}:  {{ notifications.data.data[key] }}
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
      notifications: [],
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
      this.notifications = await this.$http.post('/customer-manager/notifications', { customerEmail: this.customer.email })
    },
  },
}
</script>
