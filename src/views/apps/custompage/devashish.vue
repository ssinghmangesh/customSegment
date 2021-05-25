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
          type: 'apex-donut-chart',
          col: {
            default: 12,
            md: 4,
          },
          data: {
            table: 'order',
            workspaceId: 9,
            columnname: 'financial_status',
            startdate: '2000-01-01 11:49:40.765997+05:30',
            enddate: '2021-05-13 11:49:40.765997+05:30',
          },
        },
        {
          type: 'apex-line-chart',
          graphCatergory: 'line',
          col: {
            default: 12,
            md: 8,
          },
          data: {
            table: 'order',
            workspaceId: 9,
            columnname: 'fulfillment_status',
            startdate: '2000-01-01 11:49:40.765997+05:30',
            enddate: '2021-05-13 11:49:40.765997+05:30',
          },
        },
        {
          type: 'apex-donut-chart',
          col: {
            default: 12,
            md: 4,
          },
          data: {
            table: 'order',
            workspaceId: 9,
            columnname: 'fulfillment_status',
            startdate: '2000-01-01 11:49:40.765997+05:30',
            enddate: '2021-05-13 11:49:40.765997+05:30',
          },
        },
        {
          type: 'apex-line-chart',
          graphCatergory: 'column',
          col: {
            default: 12,
            md: 4,
          },
          data: {
            table: 'order',
            workspaceId: 9,
            columnname: 'fulfillment_status',
            startdate: '2000-01-01 11:49:40.765997+05:30',
            enddate: '2021-05-13 11:49:40.765997+05:30',
          },
        },
        {
          type: 'apex-line-chart',
          graphCatergory: 'area',
          col: {
            default: 12,
            md: 6,
          },
          data: {
            table: 'order',
            workspaceId: 9,
            columnname: 'fulfillment_status',
            startdate: '2000-01-01 11:49:40.765997+05:30',
            enddate: '2021-05-13 11:49:40.765997+05:30',
          },
        },
      ]
    },
  },
}
</script>
