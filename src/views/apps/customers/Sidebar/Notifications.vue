<template>
  <div>
    <b-card
      v-for="(notification, index) in notifications"
      :key="index"
      border-variant="secondary"
      :title="notification.email_type"
      bg-variant="transparent"
      class="shadow-none"
    >
      <b-card-text>
        <div class="d-flex justify-content-between">
          <span>Subject</span>
          <span><strong>{{ notification.subject }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Sender</span>
          <span><strong>{{ notification.sender }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Receiver</span>
          <span><strong>{{ notification.receiver }}</strong></span>
        </div>
        <div class="d-flex justify-content-between">
          <span>Status</span>
          <span><strong>{{ notification.status }}</strong></span>
        </div>
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
      const res = await this.$http.post('/customer-manager/notifications', { customerEmail: this.customer.email })
      this.notifications = res.data.data
    },
  },
}
</script>
