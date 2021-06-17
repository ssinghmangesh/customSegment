<template>
  <div>
    <add
      @updateTable="updateTable"
    />
    <b-row>
      <b-col cols="12">
        <good-table-basic
          :page-length="pageLength"
          :current-page="currentPage"
          :columns="columns"
          :rows="rows"
          :status="status"
          :dir="dir"
          :total="total"
          :start="start"
          :type="type"
          @changeInPageLength="changeInPageLength"
          @changeInCurrentPage="changeInCurrentPage"
          @onSortChange="onSortChange"
          @onRowClick="onRowClick"
          @download="download"
        />
      </b-col>
    </b-row>
    <b-modal
      id="send-email"
      title="Send Email"
      size="lg"
      centered
      :hide-footer="true"
    >
      <send-email
        :templates="templates"
        @sendEmail="sendEmail"
      />
    </b-modal>
    <b-sidebar
      :visible="visible"
      bg-variant="white"
      right
      backdrop
      shadow
      width="500px"
      @change="hide"
    >
      <sidebar-content
        :row="row"
      />
    </b-sidebar>
  </div>
</template>

<script>
import {
  BRow, BCol, BSidebar, BModal,
} from 'bootstrap-vue'
// import {
//   BButton, BSidebar, VBToggle, BCardText,
// } from 'bootstrap-vue'
import GoodTableBasic from '@/views/table/vue-good-table/GoodTableBasic.vue'
import add from './add.vue'
import searchOption from './filters.json'
import SidebarContent from './sidebar.vue'
import SendEmail from './SendEmail.vue'
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
    BSidebar,
    GoodTableBasic,
    SidebarContent,
    BModal,
    SendEmail,
  },
  data() {
    return {
      rows: [],
      pageLength: 10,
      currentPage: 1,
      start: 1,
      total: 100,
      orderBykey: searchOption[this.$route.params.type].columns[0].field,
      orderByDirection: 'asc',
      filters: {},
      visible: false,
      selectedRow: {},
      templates: [],
    }
  },
  computed: {
    row() {
      return this.selectedRow
    },
    table() {
      return searchOption[this.$route.params.type].table
    },
    columns() {
      return searchOption[this.$route.params.type].columns
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
    type() {
      return this.$route.params.type
    },
  },
  watch: {
    async type() {
      this.orderBykey = searchOption[this.$route.params.type].columns[0].field
      await this.update()
    },
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
    const res = await this.$http.post('/template/fetch-all')
    this.templates = [...res.data.data]
  },
  methods: {
    async hide(data) {
      this.visible = data
      if (!data) {
        this.selectedRow = {}
      }
    },
    async onRowClick(data) {
      this.visible = true
      this.selectedRow = data
    },
    async onSortChange(params) {
      this.orderBykey = params[0].field
      this.orderByDirection = params[0].type
      await this.update()
    },
    changeInCurrentPage(val) {
      this.currentPage = val
      this.start = ((this.currentPage - 1) * this.pageLength + 1)
    },
    changeInPageLength(length) {
      this.pageLength = length
    },
    async download() {
      const data = {
        table: this.table,
        filters: this.filters,
      }
      const res = await this.$http.post('/analytics-manager/download/csv', data)
      const blob = new Blob([res.data], { type: 'text/csv' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'data.csv'
      link.click()
    },
    async update() {
      const data = {
        orderBykey: this.orderBykey,
        orderByDirection: this.orderByDirection,
        limit: this.pageLength,
        skipRowby: ((this.currentPage - 1) * this.pageLength),
        table: this.table,
        filters: this.filters,
      }
      const response = await this.$http.post('/analytics-manager/table', data)
      this.rows = [...response.data.data]
      const countData = {
        table: this.table,
        filters: this.filters,
      }
      const response2 = await this.$http.post('/analytics-manager/count', countData)
      this.total = Number(response2.data.data.count)
    },
    updateTable(data) {
      this.filters = { ...data }
    },
    async sendEmail(val) {
      const data = {
        table: this.table,
        filters: this.filters,
        ...val,
      }
      this.$bvModal.hide('send-email')
      await this.$http.post('/export/email/template', data)
    },
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
