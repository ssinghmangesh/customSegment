<template>
  <div>
    <b-row>
      <graph
        v-for="(item, index) in pageDefination"
        :key="index"
        :item="item"
      />
    </b-row>
  </div>
</template>

<script>
import { BRow } from 'bootstrap-vue'
import Graph from './graph.vue'

export default {
  components: {
    Graph,
    BRow,
  },
  computed: {
    pageDefination() {
      return [
        {
          type: 'apex-line-area-chart',
          col: {
            default: 12,
            md: 6,
          },
        },
        {
          type: 'apex-scatter-chart',
          col: {
            default: 12,
            md: 6,
          },
        },
        {
          type: 'apex-line-chart',
          col: {
            default: 12,
            md: 6,
          },
        },
        {
          type: 'apex-bar-chart',
          col: {
            default: 12,
            md: 6,
          },
        },
        {
          type: 'apex-radial-bar-chart',
          col: {
            default: 12,
            md: 6,
          },
        },
        {
          type: 'apex-donut-chart',
          col: {
            default: 12,
            md: 6,
          },
        },
        {
          type: 'echart-line',
          col: {
            default: 12,
            md: 6,
          },
        },
        {
          type: 'echart-stacked-area',
          col: {
            default: 12,
            md: 6,
          },
        },
        {
          type: 'echart-area',
          col: {
            default: 12,
            md: 6,
          },
        },
        {
          type: 'echart-doughnut',
          col: {
            default: 12,
            md: 6,
          },
        },
        {
          type: 'echart-scatter',
          col: {
            default: 12,
            md: 6,
          },
        },
      ]
    },
  },
}
</script>
