<template>
<!-- eslint-disable -->
  <b-modal
    id="tag-modal"
    title="Add Rule"
   :hide-footer="true"
  > 
  <b-form @submit="addTag" >
  <b-form-group
        label="Rule Name:"
        label-for="rule-name"
    >
        <b-form-input
          id="rule-name"
          required
          v-model="ruleName"
      ></b-form-input>
      </b-form-group>
    <b-form-group
        label="When:"
        label-for="when"
    >
        <v-select
          id="when"
          v-model="when"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="text"
          :reduce="option => option.value"
          multiple
          :options="whenOption"
          class="select-size-lg"
        />
      </b-form-group>
    <p  >If:</p>
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
          :options="pageDefination"
          class="select-size-lg"
        />
      </b-form-group>
      <selected-filters
        class="col-12"
        :selected-filters="filters"
        @editFilter="editFilter"
        @removeFilter="removeFilter"
      />
      <b-form-group
      label="Then:"
      label-for="then"
      class="mb-0 mt-2"
    >
      <b-form-input
        id="then"
        v-model="then"
        required
      ></b-form-input>
    </b-form-group>
    <!-- <b-form-group
      label="Else:"
      label-for="else"
      class="mb-0 mt-1"
    >
      <b-form-input
        id="else"
        v-model="Else"
      ></b-form-input>
    </b-form-group> -->
      
      <!-- <b-form-input
        id="input-lg"
        size="lg"
        v-model="searchQuery"
        placeholder="Search"
      /> -->
      
    <!-- </b-card-text> -->
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      type="submit"
      class="button mt-2"
    >
      ADD
    </b-button>
  </b-form>
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
  </b-modal>
</template>

<script>
/* eslint-disable */

import {
  BCard, BCardText, BFormGroup, BModal, BButton, BFormInput, BForm,
  // BFormInput,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Calendar from 'vue2-baremetrics-calendar'
// import store from '@/store/index'
import TypeHandler from '../segments/TypeHandler/TypeHandler.vue'
import SelectedFilters from '../segments/SelectedFilters/SelectedFilters.vue'
import { pageDefination } from '../segments/PageDefination/index'
import { when } from '@vueuse/shared'
import triggerPoints from './TriggerPoints'
// import AddTitle from './AddTitle.vue'

export default {
  components: {
    BCard,
    BCardText,
    BFormGroup,
    Calendar,
    BFormInput,
    vSelect,
    BModal,
    TypeHandler,
    SelectedFilters,
    BButton,
    BForm,
    // AddTitle,
  },
  props: {
    tag: {
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
      then: '',
      when: [],
      Else: '',
      ruleName: ''
    }
  },
  computed: {
    whenOption() {
      return triggerPoints[this.type]
    },
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
    tag() {
      this.selectedFilters = [...this.tag.filters.conditions]
      this.andOr = this.tag.filters.relation
      this.when = this.tag.trigger_points
      this.then = this.tag.then
      this.ruleName = this.tag.rule_name
      this.Else = this.tag.else
      this.$bvModal.show('tag-modal')
    },
  },
  methods: {
    add(val) {
      this.$refs['add-title'].hide()
      this.$store.commit('segment/addSegment', { title: val, filters: { relation: this.andOr, conditions: this.selectedFilters }, type: this.$route.params.type })
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
    async addTag(event) {
      event.preventDefault()
      const data = {
        tag_id: this.tag.tag_id || Date.now(),
        rule_name: this.ruleName,
        filters: {
          relation: this.andOr,
          conditions: this.selectedFilters
        },
        trigger_points: this.when,
        then: this.then,
        else: this.Else,
        created_at: this.tag.created_at || Date.now(),
        updated_at: Date.now(),
        type: this.type
      }
      await this.$http.post('/tag-manager/add', data)
      this.$emit('update')
      this.$bvModal.hide('tag-modal')

    }
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
