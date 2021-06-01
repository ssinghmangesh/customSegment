<template>
  <b-card class="mb-4">
    <b-card-text>
      <b-form-group>
        <v-select
          v-model="andOr"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="andOrOption"
          class="select-size-lg"
        />
      </b-form-group>
      <b-form-group>
        <v-select
          v-model="incEcl"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="incEclOption"
          class="select-size-lg"
        />
      </b-form-group>
      <b-form-group>
        <v-select
          v-model="searchQuery"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="searchOption"
          class="select-size-lg"
        />
      </b-form-group>
      <b-modal
        id="modal-center"
        ref="my-modal"
        centered
        :title="searchQuery.title"
        :hide-footer="true"
        @hidden="hidden"
      >
        <type-handler
          :selected-filter="searchQuery"
          :applied-filters="selectedFilters"
          @appliedFilter="applyFilter"
        />
      </b-modal>
      <!-- <b-form-input
        id="input-lg"
        size="lg"
        v-model="searchQuery"
        placeholder="Search"
      /> -->
      <selected-filters
        :selected-filters="filters"
        @editFilter="editFilter"
        @removeFilter="removeFilter"
      />
    </b-card-text>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      class="button"
      @click="send"
    >
      Select
    </b-button>
  </b-card>
</template>

<script>
import {
  BCard, BCardText, BFormGroup, BModal, BButton,
  // BFormInput,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
// import store from '@/store/index'
import TypeHandler from './TypeHandler/TypeHandler.vue'
import SelectedFilters from './SelectedFilters/SelectedFilters.vue'

export default {
  components: {
    BCard,
    BCardText,
    BFormGroup,
    // BFormInput,
    vSelect,
    BModal,
    TypeHandler,
    SelectedFilters,
    BButton,
  },
  data() {
    return {
      andOr: 'AND',
      andOrOption: ['AND', 'OR'],
      incEcl: 'Include',
      incEclOption: ['Include', 'Exclude'],
      searchQuery: {},
      searchOption: [{
        title: 'Total Spent',
        name: 'total_spent',
        type: 'number',
        dataType: 'numeric',
      },
      {
        title: 'Email',
        name: 'email',
        type: 'text',
        dataType: 'varchar',
      },
      {
        title: 'Accepts Marketing',
        name: 'accepts_marketing',
        type: 'boolean',
        dataType: 'boolean',
      },
      {
        title: 'Payment Status',
        name: 'payment_status',
        type: 'dropdown',
        dataType: 'varchar[]',
        options: ['Paid', 'Pending', 'Refunded'],
      }],
      selectedFilters: [],
    }
  },
  computed: {
    filters() {
      return this.selectedFilters
    },
  },
  watch: {
    searchQuery(val) {
      if (val.title) {
        this.$refs['my-modal'].show()
      }
    },
    // selectedFilters() {
    //   this.send()
    // },
  },
  created() {
    this.$http.get('/good-table/basic')
      .then(res => { this.rows = res.data })
  },
  methods: {
    async send() {
      const data = {}
      if (this.selectedFilters.length) {
        data.relation = this.andOr
        data.conditions = this.selectedFilters
      }
      this.$emit('updateTable', data)
    },
    hidden() {
      this.searchQuery = {}
    },
    applyFilter(filter) {
      const { searchQuery } = this
      const data = {
        columnName: searchQuery.name,
        type: searchQuery.type,
        dataType: searchQuery.dataType,
        title: searchQuery.title,
        ...filter,
      }
      if (searchQuery.index + 1) {
        this.selectedFilters.splice(searchQuery.index, 1, data)
      } else {
        this.selectedFilters.push(data)
      }
      this.searchQuery = {}
      this.$refs['my-modal'].hide()
    },
    editFilter(data) {
      const query = {
        title: data.filter.title,
        name: data.filter.columnName,
        type: data.filter.type,
        dataType: data.filter.dataType,
        index: data.index,
        options: data.filter.options,
      }
      this.searchQuery = query
    },
    removeFilter(index) {
      this.selectedFilters = this.selectedFilters.filter((value, i) => i !== index)
    },
  },
}
</script>
<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
