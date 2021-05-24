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
import apexChatData from './apexChartData'

export default {
  components: {
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
      apexChatData,
    }
  },
}
</script>
