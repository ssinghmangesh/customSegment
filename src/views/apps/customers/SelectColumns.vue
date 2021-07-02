<template>
  <div class="container">
    <b-tabs class="ml-1 mt-2">
      <b-tab
        title="Custom"
        class="mt-2"
      >
        <b-form-checkbox
          v-for="(column, index) in columns"
          :key="index"
          v-model="selectedColumns"
          class="mt-1"
          :value="column.field"
        >{{ column.label }}</b-form-checkbox>
      </b-tab>

      <b-tab
        title="Suggestions"
        class="mt-2"
      >
        <div
          v-for="(suggestion, index) in suggestions"
          :key="index"
          role="button"
          class="mt-1"
          @click="() => select(index)"
        >{{ suggestion.title }}</div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { BFormCheckbox, BTab, BTabs } from 'bootstrap-vue'
import { pageDefination } from './PageDefination/index'

export default {
  components: {
    BFormCheckbox,
    BTab,
    BTabs,
  },
  data() {
    return {
      selectedColumns: pageDefination[this.$route.params.type].columns.map(column => column.field),
    }
  },
  computed: {
    suggestions() {
      return pageDefination[this.$route.params.type].suggestions
    },
    columns() {
      return pageDefination[this.$route.params.type].columns
    },
    type() {
      return this.$route.params.type
    },
  },
  watch: {
    async type() {
      this.selectedColumns = pageDefination[this.type].columns.map(column => column.field)
    },
    selectedColumns() {
      this.$emit('selectedColumnsChanged', this.selectedColumns)
    },
  },
  methods: {
    select(index) {
      this.selectedColumns = this.suggestions[index].columns
    },
  },
}
</script>
