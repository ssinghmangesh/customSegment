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

    <app-collapse
      accordion
      type="border"
    >

      <app-collapse-item
        :title="optionsdetails[0]"
        :key="index"
        v-for="(optionsdetails, index) in optionsGroup"
      >
        <b-form-checkbox
          v-for="(option, index) in optionsdetails[1]"
          :key="index"
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
import { BCard, BFormCheckbox, BButton } from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import notifications from './notifications.json'

export default {
  components: {
    BCard,
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
      // const res = await this.$http.post(`/notifications/${this.type}/fetch`)
      this.selected = this.options.map(v => v.value)
      this.prev = this.options.map(v => v.value)
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
