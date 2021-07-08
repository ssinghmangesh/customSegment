<template>
  <b-card>
    <b-row>
      <b-col sm="4">
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
    }
  },
  methods: {
    connect() {
      const a = document.createElement('a')
      a.href = `https://custom-segment-service.herokuapp.com/install?shop=${this.store}`
      a.click()
    },
  },
}
</script>
