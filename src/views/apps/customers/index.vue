<template>
  <div>
    <add
      :search-option="searchOption"
      @updateTable="updateTable"
    />
    <b-row>
      <b-col cols="12">
        <good-table-basic
          :pageLength="pageLength"
          :currentPage="currentPage"
          :columns="columns"
          :rows="rows"
          :status="status"
          :dir="dir"
          :total="total"
          :start="start"
          @changeInPageLength="changeInPageLength"
          @changeInCurrentPage="changeInCurrentPage"
          @onSortChange="onSortChange"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import GoodTableBasic from '@/views/table/vue-good-table/GoodTableBasic.vue'
import add from './add.vue'
import searchOption from './filters.json'
// import GoodTableRowGroup from './GoodTableRowGroup.vue'
// import GoodTableColumnSearch from './GoodTableColumnSearch.vue'
// import GoodTableAdvanceSearch from './GoodTableAdvanceSearch.vue'
// import GoodTableI18n from './GoodTableI18n.vue'
// import GoodTableSsr from './GoodTableSsr.vue'

export default {
  components: {
    BRow,
    BCol,
    add,

    GoodTableBasic,
    // GoodTableRowGroup,
    // GoodTableColumnSearch,
    // GoodTableAdvanceSearch,
    // GoodTableI18n,
    // GoodTableSsr,
  },
  data() {
    return {
      rows: [],
      pageLength: 10,
      currentPage: 1,
      start: 1,
      total: 100,
      orderBykey: 'email',
      orderByDirection: 'asc',
      searchOption,
      filters: {},
    }
  },
  computed: {
    columns() {
      return [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'Total Amount Spent',
          field: 'total_amount_spent',
        },
        // {
        //   label: 'CartId',
        //   field: 'cart_id',
        // },
        // {
        //   label: 'Status',
        //   field: 'status',
        // },
        // {
        //   label: 'Action',
        //   field: 'action',
        // },
      ]
    },
    status() {
      return [
        {
          1: 'Current',
          2: 'Professional',
          3: 'Rejected',
          4: 'Resigned',
          5: 'Applied',
        },
        {
          1: 'light-primary',
          2: 'light-success',
          3: 'light-danger',
          4: 'light-warning',
          5: 'light-info',
        },
      ]
    },
    dir() {
      return false
    },
  },
  watch: {
    async pageLength() {
      await this.update()
    },
    async currentPage() {
      await this.update()
    },
    async filters() {
      await this.update()
    },
  },
  async created() {
    await this.update()
  },
  methods: {
    async onSortChange(params) {
      this.orderBykey = params[0].field
      this.orderByDirection = params[0].type
      await this.update()
    },
    changeInCurrentPage(val) {
      console.log('changeInCurrentPage', val)
      this.currentPage = val
      this.start = ((this.currentPage - 1) * this.pageLength + 1)
    },
    changeInPageLength(length) {
      console.log('changeInPageLength', length)
      this.pageLength = length
    },
    async update() {
      const data = {
        orderBykey: this.orderBykey,
        orderByDirection: this.orderByDirection,
        limit: this.pageLength,
        skipRowby: ((this.currentPage - 1) * this.pageLength),
        table: 'customeraggregate',
        filters: this.filters,
      }
      const response = await this.$http.post('/analytics-manager/table', data)
      // console.log(response.data)
      this.rows = [...response.data.data]
      // console.log(this.rows)
      const countData = {
        table: 'customeraggregate',
        filters: this.filters,
      }
      const response2 = await this.$http.post('/analytics-manager/count', countData)
      // console.log(response2)
      this.total = response2.data.data.count
    },
    updateTable(data) {
      this.filters = { ...data }
    },
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
