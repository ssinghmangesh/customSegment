<template>
  <b-card v-if="data">
    <b-row class="pb-50">

      <!-- text and button -->
      <b-col
        sm="6"
        order-sm="1"
        order="2"
        class="d-flex justify-content-between flex-column mt-1 mt-sm-0"
      >
        <div>
          <h2 class="font-weight-bolder mb-25">
            {{ data[0].value }}
          </h2>
          <b-card-text class="font-weight-bold mb-2">
            {{ data[0].key }}
          </b-card-text>

          <!-- <h5 class="font-medium-2">
            <span class="text-success mr-50">{{ data.growth }}</span>
            <span>vs last 7 days</span>
          </h5> -->
        </div>

        <!-- <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          class="shadow"
        >
          <span>View Details </span>
          <feather-icon icon="ChevronsRightIcon" />
        </b-button> -->
      </b-col>

      <!-- dropdown and chart -->
      <b-col
        sm="6"
        cols="12"
        order-sm="2"
        order="1"
        class="d-flex justify-content-between flex-column text-right"
      >
        <div>
          <b-dropdown
            text="Last 7 Days"
            variant="transparent"
            class="chart-dropdown"
            left
            no-caret
            size="sm"
          >
            <b-dropdown-item
              v-for="day in lastDays"
              :key="day"
            >
              {{ day }}
            </b-dropdown-item>
          </b-dropdown>
        </div>

        <!-- apex chart -->
        <vue-apex-charts
          type="bar"
          height="200"
          :options="salesBar.chartOptions"
          :series="series"
        />
      </b-col>
    </b-row>
    <hr>

    <!-- progress bar -->
    <b-row class="avg-sessions pt-50">
      <b-col
        cols="6"
        class="mb-2"
      >
        <b-card-text class="mb-50">
          {{ data[1].key }}: {{ data[1].value }}
        </b-card-text>
        <b-progress
          :value="series[0].data[0]"
          max="100"
          height="6px"
        />
      </b-col>
      <b-col
        cols="6"
        class="mb-2"
      >
        <b-card-text class="mb-50">
          {{ data[2].key }}: {{ data[2].value }}
        </b-card-text>
        <b-progress
          :value="series[0].data[1]"
          max="100"
          height="6px"
          variant="warning"
        />
      </b-col>
      <b-col cols="6">
        <b-card-text class="mb-50">
          {{ data[3].key }}: {{ data[3].value }}
        </b-card-text>
        <b-progress
          :value="series[0].data[2]"
          max="100"
          height="6px"
          variant="danger"
          class="mt-25"
        />
      </b-col>
      <b-col cols="6">
        <b-card-text class="mb-50">
          {{ data[4].key }}: {{ data[4].value }}
        </b-card-text>
        <b-progress
          :value="series[0].data[3]"
          max="100"
          variant="success"
          height="6px"
          class="mt-25"
        />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BDropdown, BDropdownItem, BProgress, BCardText,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Ripple from 'vue-ripple-directive'
import { $themeColors } from '@themeConfig'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    VueApexCharts,
    BCard,
    BRow,
    BCol,
    // BButton,
    BCardText,
    BDropdown,
    BDropdownItem,
    BProgress,
  },
  directives: {
    Ripple,
  },
  props: {
    data: {
      type: Object,
      default: () => [],
    },
    title: {
      type: String,
      default: () => 'Title',
    },
  },
  data() {
    return {
      salesBar: {
        chartOptions: {
          chart: {
            sparkline: { enabled: true },
            toolbar: { show: false },
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
            },
          },
          states: {
            hover: {
              filter: 'none',
            },
          },
          colors: [
            $themeColors.primary,
            $themeColors.warning,
            $themeColors.danger,
            $themeColors.success,
          ],
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
              endingShape: 'rounded',
            },
          },
          tooltip: {
            x: { show: false },
          },
          xaxis: {
            type: 'numeric',
          },
        },
      },
      series: [
        {
          name: ['Subtotal', 'taxes'],
          data: [0, 0, 0, 0],
        },
      ],
      lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    }
  },
  watch: {
    data() {
      this.series = [
        {
          data: this.data.slice(1).map(item => ((item.value / this.data[0].value) * 100).toFixed(1)),
        },
      ]
    },
  },
  methods: {
    kFormatter,
  },
}
</script>
