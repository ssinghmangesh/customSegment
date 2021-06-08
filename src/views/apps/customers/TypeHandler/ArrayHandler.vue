<template>
  <div>
    <b-form-input
      v-if="selected !== false"
      v-model="search"
      size="sm"
      class="radio"
    />
    <div
      v-for="(item, index) in options"
      :key="index"
    >
      <b-form-checkbox
        v-model="values"
        :value="item.id"
        unchecked-value=""
        class="mb-10"
      >{{ item.title }}
      </b-form-checkbox>
    </div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      class="button"
      @click="appliedFilter"
    >
      Add
    </b-button>
  </div>
</template>
<script>
import { BButton, BFormInput, BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BFormInput,
    BFormCheckbox,
  },
  props: {
    appliedValues: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      search: '',
      options: [],
      values: [],
    }
  },
  watch: {
    async search() {
      await this.update()
    },
  },
  async created() {
    if (this.appliedValues) {
      this.selected = this.appliedValues.filterType
      this.values = [...this.appliedValues.values]
    }
    await this.update()
  },
  methods: {
    appliedFilter() {
      const { values } = this
      this.$emit('appliedFilter', {
        filterType: 'in',
        values,
      })
    },
    async update() {
      const data = {
        table: 'variant',
        orderBykey: 'id',
      }
      if (this.search) {
        data.filters = {
          relation: 'AND',
          type: 'text',
          columnName: 'title',
          filterType: 'contains',
          dataType: 'varchar',
          values: [this.search],
        }
      }
      //   //  console.log(data)
      const res = await this.$http.post('analytics-manager/table', data)
      this.options = [...res.data.data]
    },
  },
}
</script>
<style>
.radio{
  margin-bottom: 10px;
}
.button{
  float: right;
}
</style>
