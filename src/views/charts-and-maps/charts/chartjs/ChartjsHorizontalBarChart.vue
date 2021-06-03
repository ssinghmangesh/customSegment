<template>
  <b-card no-body>
    <b-card-header>
      <div>
        <b-card-sub-title class="mb-25">
          {{ subtitle }}
        </b-card-sub-title>
        <b-card-title>{{ title }}</b-card-title>
      </div>
      <!-- datepicker -->
      <div class="d-flex align-items-center">
        <feather-icon
          icon="CalendarIcon"
          size="16"
        />
        <flat-pickr
          v-model="rangePicker"
          :config="{ mode: 'range'}"
          class="form-control flat-picker bg-transparent border-0 shadow-none"
          placeholder="YYYY-MM-DD"
        />
      </div>
      <!-- datepicker -->
    </b-card-header>

    <!-- chart -->
    <b-card-body>
      <chartjs-component-horizontal-bar-chart
        :height="400"
        :data="chartjsData.horizontalBarChart.data"
        :options="chartjsData.horizontalBarChart.options"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardHeader, BCardTitle, BCardSubTitle,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import ChartjsComponentHorizontalBarChart from './charts-components/ChartjsComponentHorizontalBarChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BCardSubTitle,
    flatPickr,
    ChartjsComponentHorizontalBarChart,
  },
  props: {
    title: {
      type: String,
      require: true,
      default: () => 'Title',
    },
    subtitle: {
      type: String,
      require: true,
      default: () => 'SubTitle',
    },
    chartjsData: {
      type: Object,
      default: () => chartjsData,
    },
    rangePicker: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
