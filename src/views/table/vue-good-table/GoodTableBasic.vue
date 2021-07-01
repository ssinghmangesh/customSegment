<template>
  <b-card :title="type">

    <!-- search input -->
    <div class="custom-search d-flex justify-content-end mb-1">
      <b-button
        v-if="type === 'customers'"
        v-b-modal.send-email
        variant="primary"
        class="mr-1"
      >
        Send Email
      </b-button>
      <b-button
        :disabled="total === 0"
        variant="primary"
        @click="download"
      >
        Download
      </b-button>
    </div>
    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :rtl="direction"
      :is-loading="loading"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm }"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true, // disable the select info panel on top
        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
      }"
      :pagination-options="{
        enabled: true,
        perPage:pageLength
      }"
      :sort-options="{
        enabled: true,
      }"
      @on-sort-change="onSortChange"
      @on-row-click="onRowClick"
    >
      <template
        slot="table-row"
        slot-scope="props"
      >

        <!-- Column: Name -->
        <span
          v-if="props.column.field === 'fullName'"
          class="text-nowrap"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span class="text-nowrap">{{ props.row.fullName }}</span>
        </span>

        <!-- Column: Status -->
        <span v-else-if="props.column.field === 'status'">
          <b-badge :variant="statusVariant(props.row.status)">
            {{ props.row.status }}
          </b-badge>
        </span>

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'">
          <span>
            <b-dropdown
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template v-slot:button-content>
                <feather-icon
                  icon="MoreVerticalIcon"
                  size="16"
                  class="text-body align-middle mr-25"
                />
              </template>
              <b-dropdown-item>
                <feather-icon
                  icon="Edit2Icon"
                  class="mr-50"
                />
                <span>Edit</span>
              </b-dropdown-item>
              <b-dropdown-item>
                <feather-icon
                  icon="TrashIcon"
                  class="mr-50"
                />
                <span>Delete</span>
              </b-dropdown-item>
            </b-dropdown>
          </span>
        </span>

        <!-- Column: Common -->
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <!-- pagination -->
      <template
        slot="pagination-bottom"
        slot-scope="props"
      >
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <b-form-select
              v-model="rowLength"
              :options="['3','5','10', '20', '50']"
              class="mx-1"
              @input="(value)=>props.perPageChanged({currentPerPage:value})"
            />
            <span class="text-nowrap ">
              Showing {{ start }} to {{ end }} of {{ total }} entries
            </span>
          </div>
          <div class="d-flex align-items-center mb-1 mt-1 mr-1">
            <b-pagination
              :value="currentpage"
              :total-rows="total"
              :per-page="pageLength"
              first-number
              last-number
              align="right"
              prev-class="prev-item"
              next-class="next-item"
              class="mt-1 mb-0"
              @change="(value)=>{$emit('changeInCurrentPage', value);}"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </div>
        </div>
      </template>
    </vue-good-table>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card>
</template>

<script>
import {
  BAvatar, BBadge, BPagination, BButton, BFormSelect, BDropdown, BDropdownItem, BCard, VBToggle,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import { codeBasic } from './code'

export default {
  components: {
    BCard,
    VueGoodTable,
    BAvatar,
    BBadge,
    BPagination,
    BButton,
    BFormSelect,
    BDropdown,
    BDropdownItem,
  },
  directives: {
    'b-toggle': VBToggle,
  },
  props: {
    loading: {
      type: Boolean,
      default: () => false,
    },
    type: {
      type: String,
      default: () => '',
    },
    pageLength: {
      type: Number,
      required: true,
      default: () => 0,
    },
    dir: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    columns: {
      type: Array,
      required: true,
      default: () => [],
    },
    rows: {
      type: Array,
      required: true,
      default: () => [],
    },
    status: {
      type: Array,
      required: true,
      default: () => [],
    },
    total: {
      type: Number,
      required: true,
      default: () => 0,
    },
    currentPage: {
      type: Number,
      required: true,
      default: () => 1,
    },
  },
  data() {
    return {
      rowLength: 0,
      // pageLength: 3,
      // dir: false,
      codeBasic,
      // columns: [
      //   {
      //     label: 'Name',
      //     field: 'fullName',
      //   },
      //   {
      //     label: 'Email',
      //     field: 'email',
      //   },
      //   {
      //     label: 'Date',
      //     field: 'startDate',
      //   },
      //   {
      //     label: 'Salary',
      //     field: 'salary',
      //   },
      //   {
      //     label: 'Status',
      //     field: 'status',
      //   },
      //   {
      //     label: 'Action',
      //     field: 'action',
      //   },
      // ],
      // rows: [],
      searchTerm: '',
      // status: [{
      //   1: 'Current',
      //   2: 'Professional',
      //   3: 'Rejected',
      //   4: 'Resigned',
      //   5: 'Applied',
      // },
      // {
      //   1: 'light-primary',
      //   2: 'light-success',
      //   3: 'light-danger',
      //   4: 'light-warning',
      //   5: 'light-info',
      // }],
    }
  },
  computed: {
    currentpage() {
      return this.currentPage
    },
    end() {
      if (this.rows.length === 0) {
        return 0
      }
      return this.start + this.rows.length - 1
    },
    start() {
      if (this.rows.length === 0) {
        return 0
      }
      return (this.currentpage - 1) * this.pageLength + 1
    },
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
    rowLength(val) {
      this.$emit('changeInPageLength', val)
    },
  },
  created() {
    this.rowLength = this.pageLength
  },
  methods: {
    download() {
      this.$emit('download')
    },
    onSortChange(params) {
      this.$emit('onSortChange', params)
    },
    onRowClick(params) {
      this.$emit('onRowClick', params.row)
    },
  },
}
</script>
<style>
.vgt-table thead th span {
    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    display: inline;
    font-size: 15px;
}

 .vgt-table td span {
    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    display: inline;
    font-size: 15px;
 }
</style>
