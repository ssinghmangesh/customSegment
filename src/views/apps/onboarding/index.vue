<template>
  <b-card>
    <small class="text-danger">{{ error }}</small>
    <b-row>
      <b-col sm="6">
        <b-form-input
          id="input-live"
          v-model="store"
          type="text"
          placeholder="Store"
          aria-describedby="input-live-help input-live-feedback"
          :state="store.length > 0"
        />
      </b-col>
    </b-row>
    <b-button
      class="mt-2"
      variant="primary"
      :disabled="store.length === 0"
      @click="connect"
    >Connect</b-button>
  </b-card>
</template>

<script>
import {
  BCard, BButton, BFormInput, BRow, BCol,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BButton,
    BFormInput,
    BRow,
    BCol,
  },
  data() {
    return {
      store: '',
      error: '',
    }
  },
  methods: {
    async connect() {
      try {
        const res = await this.$http.post('/connect', { shop: this.store, userId: localStorage.getItem('userId') })
        const a = document.createElement('a')
        a.href = res.data
        a.click()
      } catch (err) {
        this.error = err.response.data
      }
    },
  },
}
</script>
