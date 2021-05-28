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
        ok-only
        ok-title="Save"
      >
        <type-handler
          :selected-filter="searchQuery"
          @appliedFilter="applyFilter"
        />
      </b-modal>
      <!-- <b-form-input
        id="input-lg"
        size="lg"
        v-model="searchQuery"
        placeholder="Search"
      /> -->

    </b-card-text>
  </b-card>
</template>

<script>
import {
  BCard, BCardText, BFormGroup, BModal,
  // BFormInput,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store/index'
import TypeHandler from './TypeHandler/TypeHandler.vue'

export default {
  components: {
    BCard,
    BCardText,
    BFormGroup,
    // BFormInput,
    vSelect,
    BModal,
    TypeHandler,
  },
  data() {
    return {
      andOr: 'And',
      andOrOption: ['And', 'Or'],
      incEcl: 'Include',
      incEclOption: ['Include', 'Exclude'],
      searchQuery: '',
      searchOption: [{
        title: 'Total Spent',
        name: 'total_spent',
        type: 'number',
      },
      {
        title: 'Email',
        name: 'email',
        type: 'text',
      },
      {
        title: 'Accepts Marketing',
        name: 'accepts_marketing',
        type: 'boolean',
      },
      {
        title: 'Cancel Reason',
        name: 'cancel_reason',
        type: 'dropdown',
        options: ['', ''],
      },
      ],
      selectedFilters: [],
    }
  },
  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        Current      : 'light-primary',
        Professional : 'light-success',
        Rejected     : 'light-danger',
        Resigned     : 'light-warning',
        Applied      : 'light-info',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  watch: {
    searchQuery(val) {
      if (val !== '') {
        this.$refs['my-modal'].show()
      }
    },
    selectedFilters() {
      console.log(this.selectedFilters)
    },
  },
  created() {
    this.$http.get('/good-table/basic')
      .then(res => { this.rows = res.data })
  },
  methods: {
    applyFilter(filter) {
      const { searchQuery } = this
      const data = {
        columnName: searchQuery.name,
        dataType: searchQuery.type,
        ...filter,
      }
      this.selectedFilters = [...this.selectedFilters, data]
      this.searchQuery = ''
      this.$refs['my-modal'].hide()
    },
  },
}
</script>
<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
