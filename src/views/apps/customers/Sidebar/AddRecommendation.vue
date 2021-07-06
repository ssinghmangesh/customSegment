<template>
  <div>
    <b-toast
      id="segment-toast"
      @hidden="hiddenToast"
    >
      <span>{{ error }}</span>
    </b-toast>
    <b-modal
      id="recommendation-modal"
      centered
      title="Add"
      :cancel-disabled="loading"
      :ok-disabled="loading"
      :ok-title="okTitle"
      @ok="addRecommendations"
      @hidden="hidden"
      @show="update"
    >
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
          :value="{ variant_id: item.id, product_id: item.product_id }"
          :unchecked-value="null"
          class="mb-10"
        >{{ item.title }}
        </b-form-checkbox>
      </div>
    </b-modal>
  </div>
</template>
<script>
import {
  BFormInput, BFormCheckbox, BModal, BToast,
} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BFormCheckbox,
    BModal,
    BToast,
  },
  props: {
    customerId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      search: '',
      options: [],
      values: [],
      error: '',
      loading: false,
      okTitle: 'Add',
    }
  },
  watch: {
    async search() {
      await this.update()
    },
    error(val) {
      if (val) {
        this.$bvToast.show('segment-toast')
      }
    },
  },
  methods: {
    async addRecommendations(event) {
      event.preventDefault()
      const { values, customerId } = this
      this.loading = true
      this.okTitle = 'Adding'
      try {
        await this.$http.post('product-recommendations-manager/add', { recommendations: values, customerId })
      } catch {
        this.error = 'Cannot add Recommendations'
      }
      this.loading = false
      this.okTitle = 'Add'
      this.$bvModal.hide('recommendation-modal')
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
      const res = await this.$http.post('analytics-manager/table', data)
      this.options = [...res.data.data]
    },
    hidden() {
      this.values = []
      this.search = ''
    },
    hiddenToast() {
      this.error = ''
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
