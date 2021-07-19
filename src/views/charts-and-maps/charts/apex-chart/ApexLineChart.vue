<template>
  <b-card no-body>
    <b-card-header>
      <!-- title and subtitle -->
      <div>
        <b-card-title class="mb-1">
          {{ title }}
        </b-card-title>
        <b-card-sub-title>{{ subtitle }}</b-card-sub-title>
      </div>
      <!--/ title and subtitle -->

      <!-- badge -->
      <div class="d-flex align-items-center flex-wrap mt-sm-0 mt-1">
        <h5 class="font-weight-bolder mb-0 mr-1">
          $ {{ balance }}
        </h5>
        <b-badge variant="light-secondary">
          <feather-icon
            icon="ArrowDownIcon"
            size="16"
            class="text-danger mr-25"
          />
          <span class="align-middle">{{ change }}%</span>
        </b-badge>
      </div>
      <!--/ badge -->
    </b-card-header>

    <b-card-body>
      <v-select
        v-if="table === 'lineitems'"
        v-model="selected"
        class="bg-white"
        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
        multiple
        label="name"
        :options="options"
        @search="search"
      />
      <vue-apex-charts
        type="line"
        height="400"
        :options="data.chartOptions"
        :series="data.series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardHeader, BCardTitle, BCardSubTitle, BBadge,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import vSelect from 'vue-select'
import apexChatData from './apexChartData'

export default {
  components: {
    vSelect,
    VueApexCharts,
    BCardHeader,
    BCard,
    BBadge,
    BCardBody,
    BCardTitle,
    BCardSubTitle,
  },
  props: {
    title: {
      type: String,
      default: () => '',
    },
    table: {
      type: String,
      default: () => '',
    },
    subtitle: {
      type: String,
      default: () => '',
    },
    balance: {
      type: Number,
      default: () => 0,
    },
    change: {
      type: Number,
      default: () => 0,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      selected: [],
      apexChatData,
      options: [],
      timer: null,
    }
  },
  watch: {
    selected() {
      this.$emit('updateIdArray', this.selected)
    },
  },
  created() {
    this.update()
  },
  methods: {
    search(val) {
      const filters = {
        relation: 'AND',
        columnName: 'product_and_variant',
        filterType: 'contains',
        dataType: 'varchar',
        values: [val],
      }
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.timer = setTimeout(() => this.update(filters), 500)
    },
    async update(filters = {}) {
      const res = await this.$http.post('analytics-manager/table', { table: 'variantaggregate', filters, limit: '7' })
      this.options = res.data.data.map(variant => ({
        name: variant.product_and_variant,
        id: variant.id,
      }))
    },
  },
}
</script>
