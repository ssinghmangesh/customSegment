<template>
  <b-card>
    <b-button
      v-if="visible"
      variant="primary"
      class="button mb-3"
      @click="send"
    >
      Save
    </b-button>
    <b-form-checkbox
      v-for="(option, index) in options"
      :key="index"
      v-model="selected"
      class="mb-1"
      :value="option"
      switch
    >
      <span class="h5 ml-1">{{ option }}</span>
    </b-form-checkbox>
  </b-card>
</template>

<script>
import { BCard, BFormCheckbox, BButton } from 'bootstrap-vue'
import options from './options.json'

export default {
  components: {
    BCard,
    BFormCheckbox,
    BButton,
  },
  data() {
    return {
      options,
      selected: [],
    }
  },
  computed: {
    visible() {
      return true
    },
  },
  methods: {
    async send() {
      await this.$http.post('/notifications/email/insert', { selected: this.selected })
    },
  },
}
</script>

<style lang="scss" >
</style>
