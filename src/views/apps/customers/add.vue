<template>
  <b-card class="mb-4">
    <b-card-text class="row">
      <b-form-group class="col-sm-3">
        <v-select
          v-model="andOr"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="andOrOption"
          class="select-size-lg"
        />
      </b-form-group>
      <b-form-group class="col-sm-3">
        <v-select
          v-model="incEcl"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="incEclOption"
          class="select-size-lg"
        />
      </b-form-group>
      <b-form-group class="col-sm-6">
        <v-select
          v-model="searchQuery"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="pageDefination"
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
        class="col-12"
        :selected-filters="filters"
        @editFilter="editFilter"
        @removeFilter="removeFilter"
      />
    </b-card-text>
    <b-button
      v-if="filters.length"
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      class="button"
      @click="openModal"
    >
      ADD
    </b-button>
    <b-modal
      id="modal-center"
      ref="add-title"
      centered
      title="Segment Title"
      :hide-footer="true"
    >
      <add-title @add="add" />
    </b-modal>
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
import { pageDefination } from './PageDefination/index'
import AddTitle from './AddTitle.vue'

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
    AddTitle,
  },
  props: {
    segment: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      andOr: 'AND',
      andOrOption: ['AND', 'OR'],
      incEcl: 'Include',
      incEclOption: ['Include', 'Exclude'],
      searchQuery: {},
      selectedFilters: [],
      pageDefination: pageDefination[this.$route.params.type].filters,
    }
  },
  computed: {
    filters() {
      return this.selectedFilters
    },
    type() {
      return this.$route.params.type
    },
  },
  watch: {
    type() {
      this.selectedFilters = []
      this.pageDefination = pageDefination[this.type].filters
    },
    searchQuery(val) {
      if (val.title) {
        this.$refs['my-modal'].show()
      }
    },
    selectedFilters() {
      this.send()
    },
    segment() {
      this.selectedFilters = [...this.segment.conditions]
      this.andOr = this.segment.relation
    },
  },
  methods: {
    add(val) {
      this.$refs['add-title'].hide()
      this.$store.commit('segment/addSegment', { title: val, filters: { relation: this.andOr, conditions: this.selectedFilters }, type: this.$route.params.type })
    },
    openModal() {
      this.$refs['add-title'].show()
    },
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
        tableName: searchQuery.entity,
        ...filter,
        tableName: searchQuery.entity,
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
        entity: data.filter.tableName,
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
// ,
//       {
//         title: 'Payment Status',
//         name: 'payment_status',
//         type: 'dropdown',
//         dataType: 'varchar[]',
//         options: ['Paid', 'Pending', 'Refunded'],
//       }
