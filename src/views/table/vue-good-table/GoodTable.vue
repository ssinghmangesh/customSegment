<template>
  <b-row>
    <b-col cols="12">
      <good-table-basic
        :pageLength="pageLength"
        :columns="columns"
        :rows="rows"
        :status="status"
        :dir="dir"
      />
      <!-- <good-table-row-group />
      <good-table-column-search />
      <good-table-advance-search />
      <good-table-i18n />
      <good-table-ssr /> -->
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import GoodTableBasic from './GoodTableBasic.vue'
// import GoodTableRowGroup from './GoodTableRowGroup.vue'
// import GoodTableColumnSearch from './GoodTableColumnSearch.vue'
// import GoodTableAdvanceSearch from './GoodTableAdvanceSearch.vue'
// import GoodTableI18n from './GoodTableI18n.vue'
// import GoodTableSsr from './GoodTableSsr.vue'

export default {
  components: {
    BRow,
    BCol,

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
    }
  },
  computed: {
    pageLength() {
      return 3
    },
    columns() {
      return [
        {
          label: 'Name',
          field: 'fullName',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'Date',
          field: 'startDate',
        },
        {
          label: 'Salary',
          field: 'salary',
        },
        {
          label: 'Status',
          field: 'status',
        },
        // {
        //   label: 'Action',
        //   field: 'action',
        // },
      ]
    },
    status() {
      return []
      // return [
      //   {
      //     1: 'Current',
      //     2: 'Professional',
      //     3: 'Rejected',
      //     4: 'Resigned',
      //     5: 'Applied',
      //   },
      //   {
      //     1: 'light-primary',
      //     2: 'light-success',
      //     3: 'light-danger',
      //     4: 'light-warning',
      //     5: 'light-info',
      //   },
      // ]
    },
    dir() {
      return false
    },
  },
  async created() {
    await this.update()
  },
  methods: {
    async update() {
      const data = {
        table: 'order',
        workspaceId: 333,
        orderBykey: 'created_at',
        limit: this.pageLength,
        skipRowby: 0,
      }
      const response = await this.$http.post('/analytics-manager/table', data)
      console.log(response.data)
      this.rows = [...response.data.data]
    },
  },
  watch: {
    async pageLength() {
      await this.update()
    },
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
