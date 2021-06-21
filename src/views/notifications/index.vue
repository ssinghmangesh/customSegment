<template>
  <b-card class="d-flex">
    <b-button
      :disabled="visible"
      variant="primary"
      class="mb-3"
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
import notifications from './notifications.json'

export default {
  components: {
    BCard,
    BFormCheckbox,
    BButton,
  },
  data() {
    return {
      notifications,
      selected: [],
      prev: [],
    }
  },
  computed: {
    type() {
      return this.$route.params.type
    },
    options() {
      return this.notifications[this.type].options
    },
    visible() {
      const flag = this.selected.length === this.prev.length && this.selected.every(el => this.prev.includes(el))
      return flag
    },
  },
  watch: {
    async type() {
      await this.update()
    },
  },
  async created() {
    await this.update()
  },
  methods: {
    async update() {
      const res = await this.$http.post(`/notifications/${this.type}/fetch`)
      this.selected = [...res.data.data]
      this.prev = [...res.data.data]
    },
    async send() {
      await this.$http.post(`/notifications/${this.type}/insert`, { selected: this.selected })
      this.prev = [...this.selected]
    },
  },
}
</script>

<style lang="scss" >
</style>
