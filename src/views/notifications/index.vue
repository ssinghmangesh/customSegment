<template>
  <b-card class="d-flex">
    <b-button
      :disabled="visible"
      variant="primary"
      class="mb-3"
      @click="send"
    >
      <b-spinner
        v-if="loading"
        small
      />
      <span
        v-if="loading"
        class="ml-1"
      >Saving...</span>
      <span v-else>Save</span>
    </b-button>

    <app-collapse
      accordion
      type="border"
    >

      <app-collapse-item
        v-for="(optionsdetails, index) in optionsGroup"
        :key="index"
        :title="optionsdetails[0]"
      >
        <b-form-checkbox
          v-for="(option, index2) in optionsdetails[1]"
          :key="index2"
          v-model="selected"
          class="mb-1"
          :value="option.value"
          switch
        >
          <span class="h5 ml-1">{{ option.label }}</span>
        </b-form-checkbox>
      </app-collapse-item>
    </app-collapse>
  </b-card>
</template>

<script>
import {
  BCard,
  BFormCheckbox,
  BButton,
  BSpinner,
} from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import notifications from './notifications.json'

export default {
  components: {
    BCard,
    BSpinner,
    BFormCheckbox,
    BButton,
    AppCollapse,
    AppCollapseItem,
  },
  data() {
    return {
      notifications,
      selected: [],
      prev: [],
      loading: false,
    }
  },
  computed: {
    type() {
      return this.$route.params.type
    },
    options() {
      return this.notifications[this.type].options
    },
    optionsGroup() {
      const grouped = this.groupBy(this.options, o => o.type)
      return grouped
    },
    visible() {
      const flag = this.selected.length === this.prev.length && this.selected.every(el => this.prev.includes(el))
      return flag || this.loading
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
    groupBy(list, keyGetter) {
      const map = new Map()
      list.forEach(item => {
        const key = keyGetter(item)
        const collection = map.get(key)
        if (!collection) {
          map.set(key, [item])
        } else {
          collection.push(item)
        }
      })
      return map
    },
    async update() {
      const res = await this.$http.post(`/notifications/${this.type}/fetch`)
      this.selected = res.data.data
      this.prev = res.data.data
    },
    async send() {
      const data = this.options.map(option => ({
        notificationType: option.value,
        value: this.selected.includes(option.value),
      }))
      this.loading = true
      await this.$http.post(`/notifications/${this.type}/insert`, { selected: data })
      this.prev = [...this.selected]
      this.loading = false
    },
  },
}
</script>

<style lang="scss" >
</style>
